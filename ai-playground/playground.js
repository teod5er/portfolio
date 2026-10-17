const stage = document.querySelector(".playground-stage");
const items = [...document.querySelectorAll(".playground-item")];
const folderColors = ["#064dff", "#d7263d", "#6c2bd9", "#00875a", "#f05a28", "#111111"];
const positions = items.map((item) => ({
  item,
  x: Number(item.dataset.x),
  y: Number(item.dataset.y),
  vx: Number(item.dataset.vx),
  vy: Number(item.dataset.vy),
  changeColor: item.dataset.changeColor !== "false",
  paused: false,
  dragging: false,
  dragged: false,
  suppressClick: false,
  render: null,
}));

function createModelRenderer(item) {
  if (!window.THREE?.STLLoader) {
    console.error("Could not load the 3D model: Three.js or STLLoader is unavailable.");
    return null;
  }

  const canvas = item.querySelector("canvas");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.z = 4.2;
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
    return null;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(item.clientWidth, item.clientHeight, false);

  let mesh = null;
  const render = (delta = 0, paused = false) => {
    if (mesh && !paused) mesh.rotation.y += delta * 0.8;
    renderer.render(scene, camera);
  };

  const compressedModel = window.playgroundModelData;
  if (!compressedModel) {
    console.error("Could not load the 3D model: bundled model data is unavailable.");
    return render;
  }

  const compressedBytes = Uint8Array.from(atob(compressedModel), (character) =>
    character.charCodeAt(0),
  );
  const decompressedStream = new Blob([compressedBytes])
    .stream()
    .pipeThrough(new DecompressionStream("gzip"));
  new Response(decompressedStream)
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
        new THREE.MeshStandardMaterial({
          color: 0x2f35bb,
          metalness: 0.18,
          roughness: 0.36,
        }),
      );
      scene.add(mesh);
      render();
    })
    .catch((error) => console.error("Could not load the bundled 3D model with STLLoader.", error));

  return render;
}

function animateTitle() {
  const title = document.querySelector("#playground-title");
  if (!title) return;

  const text = title.textContent.trim();
  title.setAttribute("aria-label", text);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$%&*+-";
  const characters = [];
  title.replaceChildren();

  for (const word of text.match(/\s+|[^\s]+/g) || []) {
    if (/^\s+$/.test(word)) {
      title.append(document.createTextNode(word));
      continue;
    }

    const wordWrapper = document.createElement("span");
    wordWrapper.className = "scramble-word";
    wordWrapper.setAttribute("aria-hidden", "true");

    for (const character of word) {
      const wrapper = document.createElement("span");
      wrapper.className = "scramble-char";

      const finalCharacter = document.createElement("span");
      finalCharacter.className = "scramble-final";
      finalCharacter.textContent = character;

      const changingGlyph = document.createElement("span");
      changingGlyph.className = "scramble-glyph";
      changingGlyph.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];

      wrapper.append(finalCharacter, changingGlyph);
      wordWrapper.append(wrapper);
      characters.push({ wrapper, changingGlyph });
    }

    title.append(wordWrapper);
  }

  const stagger = 24;
  const scrambleDuration = 180;
  const startedAt = performance.now();
  const timer = window.setInterval(() => {
    const elapsed = performance.now() - startedAt;
    let finished = true;

    characters.forEach(({ wrapper, changingGlyph }, index) => {
      const characterTime = elapsed - index * stagger;
      if (characterTime < 0) {
        finished = false;
      } else if (characterTime >= scrambleDuration) {
        wrapper.classList.add("is-revealed");
      } else {
        wrapper.classList.add("is-scrambling");
        changingGlyph.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
        finished = false;
      }
    });

    if (finished) window.clearInterval(timer);
  }, 32);
}

if (stage) {
  const stageBounds = stage.getBoundingClientRect();

  positions.forEach((position) => {
    const { item } = position;
    if (item.classList.contains("playground-model")) {
      position.render = createModelRenderer(item);
    }

    const maxX = Math.max(0, stageBounds.width - item.offsetWidth);
    const maxY = Math.max(19, stageBounds.height - item.offsetHeight);
    position.x = Math.min(Math.max(stageBounds.width * position.x, 0), maxX);
    position.y = Math.min(Math.max(stageBounds.height * position.y, 19), maxY);
    item.style.left = `${position.x}px`;
    item.style.top = `${position.y}px`;
    if (position.changeColor) item.dataset.currentColor = folderColors[0];

    item.addEventListener("pointerenter", () => {
      if (!position.dragging) position.paused = true;
    });
    item.addEventListener("pointerleave", () => {
      if (!position.dragging) position.paused = false;
    });
    item.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;

      const bounds = stage.getBoundingClientRect();
      position.suppressClick = false;
      position.dragging = true;
      position.dragged = false;
      position.paused = true;
      position.pointerId = event.pointerId;
      position.pointerStartX = event.clientX;
      position.pointerStartY = event.clientY;
      position.dragOffsetX = event.clientX - bounds.left - position.x;
      position.dragOffsetY = event.clientY - bounds.top - position.y;
      item.style.zIndex = "2";
      item.style.cursor = "grabbing";
      item.setPointerCapture(event.pointerId);
    });
    item.addEventListener("pointermove", (event) => {
      if (!position.dragging || event.pointerId !== position.pointerId) return;

      const deltaX = event.clientX - position.pointerStartX;
      const deltaY = event.clientY - position.pointerStartY;
      if (!position.dragged && Math.hypot(deltaX, deltaY) < 4) return;
      position.dragged = true;

      const bounds = stage.getBoundingClientRect();
      const maxX = Math.max(0, bounds.width - item.offsetWidth);
      const maxY = Math.max(19, bounds.height - item.offsetHeight);
      position.x = Math.min(Math.max(event.clientX - bounds.left - position.dragOffsetX, 0), maxX);
      position.y = Math.min(
        Math.max(event.clientY - bounds.top - position.dragOffsetY, 19),
        maxY,
      );
      item.style.left = `${position.x}px`;
      item.style.top = `${position.y}px`;
    });

    const finishDrag = (event) => {
      if (!position.dragging || event.pointerId !== position.pointerId) return;

      if (position.dragged) {
        position.suppressClick = true;
      }
      position.dragging = false;
      position.paused = false;
      item.style.zIndex = "";
      item.style.cursor = "";
    };

    item.addEventListener("pointerup", finishDrag);
    item.addEventListener("pointercancel", finishDrag);
    item.addEventListener("click", (event) => {
      if (!position.suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
      position.suppressClick = false;
    });
  });

  const bounceOffWall = (position, bounds) => {
    const { item } = position;
    const maxX = Math.max(0, bounds.width - item.offsetWidth);
    const maxY = Math.max(19, bounds.height - item.offsetHeight);
    let hitWall = false;

    if ((position.x <= 0 && position.vx < 0) || (position.x >= maxX && position.vx > 0)) {
      position.vx *= -1;
      hitWall = true;
    }
    if ((position.y <= 19 && position.vy < 0) || (position.y >= maxY && position.vy > 0)) {
      position.vy *= -1;
      hitWall = true;
    }

    position.x = Math.min(Math.max(position.x, 0), maxX);
    position.y = Math.min(Math.max(position.y, 19), maxY);

    if (hitWall && position.changeColor) {
      const availableColors = folderColors.filter((color) => color !== item.dataset.currentColor);
      const color = availableColors[Math.floor(Math.random() * availableColors.length)];
      item.dataset.currentColor = color;
      item.style.backgroundColor = color;
    }
  };

  const resolveCollisions = (bounds) => {
    for (let firstIndex = 0; firstIndex < positions.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < positions.length; secondIndex += 1) {
        const first = positions[firstIndex];
        const second = positions[secondIndex];
        const overlapX =
          Math.min(first.x + first.item.offsetWidth, second.x + second.item.offsetWidth) -
          Math.max(first.x, second.x);
        const overlapY =
          Math.min(first.y + first.item.offsetHeight, second.y + second.item.offsetHeight) -
          Math.max(first.y, second.y);

        if (overlapX <= 0 || overlapY <= 0) continue;

        const horizontal = overlapX < overlapY;
        const overlap = horizontal ? overlapX : overlapY;
        const firstCenter = horizontal
          ? first.x + first.item.offsetWidth / 2
          : first.y + first.item.offsetHeight / 2;
        const secondCenter = horizontal
          ? second.x + second.item.offsetWidth / 2
          : second.y + second.item.offsetHeight / 2;
        const direction = firstCenter <= secondCenter ? -1 : 1;
        const firstMoving = !first.paused;
        const secondMoving = !second.paused;

        if (firstMoving && secondMoving) {
          if (horizontal) {
            first.x += direction * overlap / 2;
            second.x -= direction * overlap / 2;
            [first.vx, second.vx] = [second.vx, first.vx];
          } else {
            first.y += direction * overlap / 2;
            second.y -= direction * overlap / 2;
            [first.vy, second.vy] = [second.vy, first.vy];
          }
        } else if (firstMoving || secondMoving) {
          const moving = firstMoving ? first : second;
          const movingFirst = moving === first;
          const moveDirection = movingFirst ? direction : -direction;

          if (horizontal) {
            moving.x += moveDirection * overlap;
            moving.vx = moveDirection * Math.abs(moving.vx);
          } else {
            moving.y += moveDirection * overlap;
            moving.vy = moveDirection * Math.abs(moving.vy);
          }
        }

        bounceOffWall(first, bounds);
        bounceOffWall(second, bounds);
      }
    }
  };

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let previousTime = 0;

    const animate = (time) => {
      const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.04) : 0;
      previousTime = time;
      const bounds = stage.getBoundingClientRect();

      positions.forEach((position) => {
        if (!position.paused) {
          position.x += position.vx * delta;
          position.y += position.vy * delta;
          bounceOffWall(position, bounds);
        }
        position.render?.(delta, position.paused);
      });

      resolveCollisions(bounds);

      positions.forEach((position) => {
        position.item.style.left = `${position.x}px`;
        position.item.style.top = `${position.y}px`;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}

animateTitle();
