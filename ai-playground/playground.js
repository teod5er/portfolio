// The "Some Images I took" window shows the same images as backgrounds/ (see backgrounds.js).
const photos = window.playgroundBackgrounds || [];

const desktop = document.querySelector(".desktop");
const windows = [...document.querySelectorAll(".window")];
const stackedLayout = window.matchMedia("(max-width: 760px)");
let topZ = windows.length;

/* Clock */

function startClock() {
  const clock = document.querySelector(".desktop-clock");
  if (!clock) return;

  const update = () => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString("hr-HR", { hour: "2-digit", minute: "2-digit" });
    clock.dateTime = now.toISOString();
  };

  update();
  window.setInterval(update, 10_000);
}

/* Window placement and dragging */

const clampToDesktop = (win, x, y) => {
  const bounds = desktop.getBoundingClientRect();
  const maxX = Math.max(0, bounds.width - win.offsetWidth);
  const maxY = Math.max(TOP_BAR, bounds.height - win.offsetHeight);
  return [Math.min(Math.max(x, 0), maxX), Math.min(Math.max(y, TOP_BAR), maxY)];
};

const TOP_BAR = 36;
const GAP = 16;
let layoutReady = false;

// Scatter windows at random spots, avoiding overlaps where the screen allows it.
// Positions are stored as fractions so they scale when the browser is resized.
function randomizeLayout(bounds) {
  const placed = [];
  const bySize = [...windows].sort(
    (a, b) => b.offsetWidth * b.offsetHeight - a.offsetWidth * a.offsetHeight,
  );

  const overlapArea = (r, o) =>
    Math.max(0, Math.min(r.x + r.w, o.x + o.w) - Math.max(r.x, o.x)) *
    Math.max(0, Math.min(r.y + r.h, o.y + o.h) - Math.max(r.y, o.y));

  bySize.forEach((win) => {
    const w = win.offsetWidth + GAP;
    const h = win.offsetHeight + GAP;
    const spanX = Math.max(0, bounds.width - GAP - w);
    const spanY = Math.max(0, bounds.height - TOP_BAR - GAP - h);
    let best = null;

    for (let attempt = 0; attempt < 300; attempt += 1) {
      const rect = {
        x: GAP + Math.random() * spanX,
        y: TOP_BAR + Math.random() * spanY,
        w,
        h,
      };
      const overlap = placed.reduce((sum, other) => sum + overlapArea(rect, other), 0);
      if (!best || overlap < best.overlap) best = { rect, overlap };
      if (overlap === 0) break;
    }

    placed.push(best.rect);
    win.dataset.x = String(best.rect.x / bounds.width);
    win.dataset.y = String(best.rect.y / bounds.height);
  });
}

function placeWindows() {
  if (stackedLayout.matches) return;
  const bounds = desktop.getBoundingClientRect();
  if (!layoutReady) {
    randomizeLayout(bounds);
    layoutReady = true;
  }

  windows.forEach((win) => {
    if (win.dataset.moved) {
      const [x, y] = clampToDesktop(win, win.offsetLeft, win.offsetTop);
      win.style.left = `${x}px`;
      win.style.top = `${y}px`;
      return;
    }
    const [x, y] = clampToDesktop(
      win,
      bounds.width * Number(win.dataset.x),
      bounds.height * Number(win.dataset.y),
    );
    win.style.left = `${x}px`;
    win.style.top = `${y}px`;
  });
}

function addCollapseButton(win) {
  const title = win.querySelector(".window-title");
  if (!title) return;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "window-collapse";
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-label", `Minimize ${title.textContent.trim()}`);
  button.addEventListener("click", () => {
    const collapsed = win.classList.toggle("is-collapsed");
    button.setAttribute("aria-expanded", String(!collapsed));
    button.setAttribute(
      "aria-label",
      `${collapsed ? "Expand" : "Minimize"} ${title.textContent.trim()}`,
    );
  });
  title.prepend(button);
}

function bringToFront(win) {
  topZ += 1;
  win.style.zIndex = String(topZ);
}

function enableDragging(win) {
  // Windows without a title bar (e.g. photos) are dragged by their whole surface.
  const handle = win.querySelector(".window-title") || win;
  let drag = null;

  win.addEventListener("pointerdown", () => bringToFront(win));

  handle.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || stackedLayout.matches) return;
    if (event.target.closest("button, a")) return;
    drag = {
      id: event.pointerId,
      offsetX: event.clientX - win.offsetLeft,
      offsetY: event.clientY - win.offsetTop,
    };
    win.classList.add("is-dragging");
    handle.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  handle.addEventListener("pointermove", (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const [x, y] = clampToDesktop(win, event.clientX - drag.offsetX, event.clientY - drag.offsetY);
    win.style.left = `${x}px`;
    win.style.top = `${y}px`;
    win.dataset.moved = "true";
  });

  const stop = (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    drag = null;
    win.classList.remove("is-dragging");
  };
  handle.addEventListener("pointerup", stop);
  handle.addEventListener("pointercancel", stop);
}

/* Photo carousel */

function setupCarousel() {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return;

  const image = carousel.querySelector(".carousel-image");
  const prev = carousel.querySelector(".carousel-prev");
  const next = carousel.querySelector(".carousel-next");
  let index = 0;

  const caption = carousel.querySelector(".carousel-caption");
  // "backgrounds/bliss-night.png" -> "bliss-night"
  const photoName = (path) => decodeURIComponent(path.split("/").pop().replace(/\.[^.]+$/, ""));

  const setBackground = carousel.querySelector(".carousel-set-bg");

  const updateSetBackground = () => {
    const isCurrent = photos[index] === window.playgroundWallpaper;
    setBackground.disabled = isCurrent;
    setBackground.textContent = isCurrent ? "Current background" : "Set as background";
  };

  const show = () => {
    const name = photoName(photos[index]);
    image.src = photos[index];
    image.alt = name;
    caption.textContent = name;
    updateSetBackground();
  };

  setBackground.addEventListener("click", () => {
    window.playgroundWallpaper = photos[index];
    document.documentElement.style.setProperty("--wallpaper", `url("${photos[index]}")`);
    updateSetBackground();
  });

  if (!photos.length) {
    prev.disabled = true;
    next.disabled = true;
    return;
  }

  carousel.classList.add("has-images");
  setBackground.hidden = false;
  prev.disabled = photos.length < 2;
  next.disabled = photos.length < 2;
  prev.addEventListener("click", () => {
    index = (index - 1 + photos.length) % photos.length;
    show();
  });
  next.addEventListener("click", () => {
    index = (index + 1) % photos.length;
    show();
  });
  show();
}

/* 3D model */

function setupModel() {
  const canvas = document.querySelector(".window-model canvas");
  if (!canvas) return;
  if (!window.THREE?.STLLoader) {
    console.error("Could not load the 3D model: Three.js or STLLoader is unavailable.");
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.z = 3.6;
  scene.add(new THREE.AmbientLight(0xffffff, 0.45));

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
  keyLight.position.set(2, 3, 4);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x9bb8ff, 0.35);
  fillLight.position.set(-3, -1, 2);
  scene.add(fillLight);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (error) {
    console.error("Could not create the 3D model renderer.", error);
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const resize = () => {
    const { clientWidth: width, clientHeight: height } = canvas;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(canvas);
  resize();

  let mesh = null;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let previous = 0;
  const loop = (time) => {
    const delta = previous ? Math.min((time - previous) / 1000, 0.05) : 0;
    previous = time;
    if (mesh && !reduceMotion) mesh.rotation.y += delta * 0.8;
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  };

  const compressedModel = window.playgroundModelData;
  if (!compressedModel) {
    console.error("Could not load the 3D model: bundled model data is unavailable.");
    return;
  }

  const bytes = Uint8Array.from(atob(compressedModel), (c) => c.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  new Response(stream)
    .arrayBuffer()
    .then((buffer) => new THREE.STLLoader().parse(buffer))
    .then((geometry) => {
      geometry.computeBoundingBox();
      geometry.center();
      geometry.computeBoundingSphere();
      const radius = geometry.boundingSphere.radius;
      if (!Number.isFinite(radius) || radius <= 0) {
        console.error("Could not render the 3D model: the STL has invalid geometry bounds.");
        return;
      }

      const scale = 0.9 / radius;
      geometry.scale(scale, scale, scale);
      geometry.computeVertexNormals();
      mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({ color: 0x2f35bb, metalness: 0.18, roughness: 0.36 }),
      );
      scene.add(mesh);
      requestAnimationFrame(loop);
    })
    .catch((error) => console.error("Could not load the bundled 3D model with STLLoader.", error));
}

if (desktop) {
  windows.forEach(addCollapseButton);
  windows.forEach(enableDragging);
  placeWindows();
  window.addEventListener("resize", placeWindows);
  stackedLayout.addEventListener("change", placeWindows);
}

/* Note: typewriter animation */

function animateNote() {
  const note = document.querySelector(".note-text");
  if (!note || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const text = note.textContent.replace(/\s+/g, " ").trim();
  note.setAttribute("aria-label", text);

  // Every character is laid out from the start (just invisible), so the window
  // keeps its final size and the text never reflows while typing.
  const characters = [...text].map((character) => {
    const span = document.createElement("span");
    span.className = "note-char";
    span.setAttribute("aria-hidden", "true");
    span.textContent = character;
    return span;
  });
  const caret = document.createElement("span");
  caret.className = "note-caret";
  caret.setAttribute("aria-hidden", "true");
  note.replaceChildren(caret, ...characters);

  let index = 0;
  const typeNext = () => {
    if (index >= characters.length) {
      window.setTimeout(() => caret.classList.add("is-done"), 2400);
      return;
    }
    const character = characters[index];
    character.classList.add("is-visible");
    character.after(caret);
    index += 1;
    // Small pauses after punctuation make it feel like someone is typing.
    const pause = /[.,!?]/.test(character.textContent) ? 260 : 22 + Math.random() * 38;
    window.setTimeout(typeNext, pause);
  };

  window.setTimeout(typeNext, 500);
}

startClock();
animateNote();
setupCarousel();
setupModel();
