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
}));

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
    const maxX = Math.max(0, stageBounds.width - item.offsetWidth);
    const maxY = Math.max(19, stageBounds.height - item.offsetHeight);
    position.x = Math.min(Math.max(stageBounds.width * position.x, 0), maxX);
    position.y = Math.min(Math.max(stageBounds.height * position.y, 19), maxY);
    item.style.left = `${position.x}px`;
    item.style.top = `${position.y}px`;
    if (position.changeColor) item.dataset.currentColor = folderColors[0];

    item.addEventListener("pointerenter", () => {
      position.paused = true;
    });
    item.addEventListener("pointerleave", () => {
      position.paused = false;
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
        if (position.paused) return;
        position.x += position.vx * delta;
        position.y += position.vy * delta;
        bounceOffWall(position, bounds);
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
