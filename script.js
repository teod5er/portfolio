function makeProjectImage(label, primary, secondary) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200">
      <rect width="900" height="1200" fill="#f8f5ef" />
      <rect x="70" y="70" width="760" height="1060" rx="44" fill="${primary}" opacity="0.12" />
      <rect x="120" y="220" width="520" height="340" rx="30" fill="${primary}" opacity="0.92" />
      <rect x="120" y="620" width="660" height="160" rx="24" fill="#ffffff" opacity="0.92" />
      <rect x="120" y="840" width="420" height="120" rx="24" fill="${secondary}" opacity="0.88" />
      <text x="120" y="1030" font-family="Moderat Medium, Arial, sans-serif" font-size="56" font-weight="400" fill="${secondary}">${label}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function colorPair(category) {
  switch (category) {
    case "App":
      return ["#5f4b2e", "#111111"];
    case "Branding":
      return ["#1f1f1f", "#1f513a"];
    case "Publishing":
      return ["#7c2a25", "#111111"];
    default:
      return ["#1f513a", "#111111"];
  }
}

function makeLogoPlaceholder(label, background = "#f3efe9", accent = "#111111") {
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 420">
      <rect width="600" height="420" rx="18" fill="${background}"/>
      <rect x="18" y="18" width="564" height="384" rx="12" fill="${accent}" opacity="0.04"/>
      <circle cx="300" cy="165" r="72" fill="${accent}" opacity="0.12"/>
      <text x="300" y="185" text-anchor="middle" font-size="72" font-family="Moderat Medium, Arial, sans-serif" font-weight="700" fill="${accent}">${initials}</text>
      <text x="300" y="255" text-anchor="middle" font-size="22" font-family="Moderat Medium, Arial, sans-serif" letter-spacing="3" fill="${accent}" opacity="0.72">${label.toUpperCase().slice(0, 18)}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const portfolio = {
  name: "Teo Peter",
  intro:
    "Hey, I am Teo Peter. Graphic engineer moving between screens, paper, code, and socials.",
  introSecond:
    "",
  // Logotipi u hero sekciji; logo je SVG u mapi logos/, url vodi na web stranicu projekta
  clientLogos: [
    { name: "INmusic festival", url: "https://www.inmusicfestival.com", logo: "logos/inmusic festival.svg" },
    { name: "Kotsovolos", url: "https://www.kotsovolos.gr", logo: "logos/kotsovolos.svg" },
    { name: "LeaseUp", url: "https://leaseup.co", logo: "logos/leaseup.svg" },
    { name: "Sindikat biciklista", url: "https://www.sindikatbiciklista.hr", logo: "logos/sindikat-biciklista 1.svg" },
    { name: "Studenac", url: "https://www.studenac.hr", logo: "logos/studenac 1.svg" },
  ],
  email: "teo_peter@outlook.com",
  links: {
    linkedin: "https://www.linkedin.com/in/teo-peter-4516621a3/",
  },
  experience: [
    {
      period: "April 2025 — Now",
      title: "Sawraft Studio",
      url: "https://www.sawraft.com",
      image: "sawraft.png",
      clients: ["Frankie", "Nexa", "Studio North"],
      items: [
        "&nbsp; ",
        "User interfaces — from research to prototyping",
        "Brand designs and design systems",
        "Product presentation",
      ],
    },
    {
      period: "October 2022 — April 2024",
      title: "Social Wizard",
      image: "social-wizard.png",
      clients: ["Tomislav Gotovac Institute", "Studenac", "Cultural brands"],
      items: [
        "&nbsp; ",
        "Offline and online advertising campaigns",
        "Social media posts",
        "Brand identities",
        "Landing pages and websites",
      ],
    },
    {
      period: "",
      title: "Freelance",
      image: "freelance.png",
      clients: ["Local businesses", "Cultural projects", "Independent brands"],
      items: [
        "&nbsp; ",
        "Brand identities, landing pages, posters, and publishing work",
        "Projects in culture, music, and local businesses",
      ],
    },
  ],
  skillGroups: [
    {
      title: "Skills",
      items: [
        "&nbsp; ",
        "UX/UI design (web & mobile)",
        "Research and prototyping",
        "AI prototyping with Claude",
        "Branding & creative direction",
        "Layout & publishing",
        "Presentation",
        "Video editing",
      ],
    },
    {
      title: "Tools",
      items: [
        "&nbsp; ",
        "Adobe CC",
        "Figma Design + Motion + Make",
        "Google Workspace",
        "Slack / Teams",
        "Notion / Jira",
      ],
    },
  ],
  languages: [
    {
      language: "Croatian",
      level: "Native",
    },
    {
      language: "English",
      level: "Professional",
    },
    {
      language: "German",
      level: "A1 — In progress",
    },
  ],
  education: [
    {
      period: "In progress, expected November 2026",
      title: "<br> Google AI Professional Certificate",
      items: [
        `<a href='https://www.coursera.org/professional-certificates/google-ai?action=enroll' target='_blank' class='preview-link'>
           Coursera — Google AI Professional Certificate
         </a>`,
      ],
    },
    {
      period: "Research paper, 2026",
      title: "<br> The impact of the brutalist approach to web design on user experience in terms of usability and satisfaction",
      items: [
        `<a href='https://doi.org/10.25027/ag.34.1.1' target='_blank' class='preview-link'>
           https://doi.org/10.25027/ag.34.1.1
         </a>`
      ],
    },
    {
      period: "2019 - 2024",
      title: "<br> B.A. + M.A. of Graphic Product Design & Engineering",
      items: [
        "Faculty of Graphic Arts, University of Zagreb",
        "On Dean’s list",
      ],
    },
  ],
  volunteering: [
    {
      period: "2022 — 2024",
      title: "1postozagrad — Zagreb civic engagement",
      image: "1posto.png",
      clients: ["Zagreb", "Culture", "Public initiatives"],
      items: [
        "Posters and digital campaigns",
      ],
    },
    {
      period: "2023 — 2024",
      title: "Sindikat biciklista — Croatian cyclist advocacy",
      image: "sindikat.png",
      clients: ["Cycling community", "Advocacy", "Urban mobility"],
      items: [
        "Design support",
      ],
    },
  ],
};

const works = [
  {
    slug: "vlado-marek",
    title: "Website for the biggest Croatian artist Vlado Marek",
    // comingSoon: prikazuje se samo na popisu radova, bez stranice projekta i bez linka
    comingSoon: true,
    client: "Vlado Marek",
    year: "2026",
    category: "Web",
    services: ["Coming soon"],
    images: ["web_vlado-marek/hero_0.png"],
  },
  {
    slug: "frankie",
    title: "Frankie",
    description: "UX/UI design and visual direction for an AI-powered student app.",
    note: [
      "Frankie gathers a student's day into a single feed: lectures, messages, events and campus life, surfaced by AI at the moment they matter.",
      "The visual direction keeps it calm. Soft greys, generous spacing and a clear hierarchy let the assistant feel helpful rather than loud.",
    ],
    client: "AI powered student app",
    year: "2026",
    category: "App",
    services: ["UX/UI design", "Visual direction"],
    galleryLayout: [2, 2, 1, 1, 2],
    images: [
      "app_frankie/0_hero.jpg",
      "app_frankie/1a.jpg",
      "app_frankie/1b.jpg",
      "app_frankie/2a.jpg",
      "app_frankie/2b.jpg",
      "app_frankie/3a.jpg",
      "app_frankie/3b.jpg",
      "app_frankie/4a.jpg",
      "app_frankie/4b.jpg",
    ],
  },
  {
    slug: "skola-grada",
    title: "Škola grada",
    description: "Škola Grada (School of the City) is a multi-month interdisciplinary educational program organized by the Tomislav Gotovac Institute. Its visual identity is playful and dynamic, easily adaptable for online communication and promotion.",
    note: [
      "The identity had to carry a programme that unfolds over months, with every lecture and event about Zagreb's architecture and urbanism needing its own announcement.",
      "Bold letterforms and bright colour fields shift and rearrange in animation, keeping the system playful while staying instantly recognisable online.",
    ],
    client: "Tomislav Gotovac Institute",
    year: "2026",
    category: "Publishing",
    services: ["Graphic design, Animation"],
    images: [
      "publishing_skola-grada/skola-grada-hero.jpg",
      "publishing_skola-grada/1a.jpg",
      "publishing_skola-grada/1b.mp4",
      "publishing_skola-grada/2a.jpg",
      "publishing_skola-grada/2b.mp4",
      "publishing_skola-grada/3.jpg",
    ],
  },
  
  {
    slug: "diskrepancija-journal",
    title: "Diskrepancija Journal",
    description: "Student Journal for Social Sciences and Humanities",
    note: [
      "Diskrepancija gives students of the social sciences and humanities a place to publish their research, in print and with the care of a real journal.",
      "The cover, a grainy roll of toilet paper on black, nods to 2020 and the pandemic rush on paper, a symbol of that strange time.",
    ],
    client: "Sociology Students Association",
    year: "2022",
    category: "Publishing",
    services: ["Visual direction", "Layout"],
    images: [
      "publishing_diskrepancija/0_hero.jpg",
      "publishing_diskrepancija/1a.jpg",
      "publishing_diskrepancija/1b.jpg",
      "publishing_diskrepancija/2a.jpg",
      "publishing_diskrepancija/2b.jpg",
      "publishing_diskrepancija/3.jpg",
      "publishing_diskrepancija/4.jpg",
      "publishing_diskrepancija/5.jpg",
    ],
  },

  {
    slug: "look-the-doors-are-open",
    title: "Look, the doors are open",
    description: "The poster promotes Marko Tadić's temporary memorial art intervention at the Rakov Potok park. The scattered layout of the text is designed to resemble the floor plan of a room which he constructed in the park. The rotated words purposely make viewers tilt their heads, mimicking the surprise of discovering a hidden space. ",
    note: [
      "Marko Tadić's temporary memorial intervention placed a room in the middle of Rakov Potok park, a space you could stumble upon and step into.",
      "The poster borrows that room's floor plan. Words are scattered and rotated along its walls, so reading it means tilting your head, the same small surprise as discovering the room itself.",
    ],
    client: "Documenta",
    year: "2026",
    category: "Publishing",
    services: ["Graphic design"],
   images: [
      "publishing_look-the-doors-are-open/0_hero.jpg",
      "publishing_look-the-doors-are-open/1a.jpg",
      "publishing_look-the-doors-are-open/1b.jpg",
      "publishing_look-the-doors-are-open/2a.jpg",
      "publishing_look-the-doors-are-open/2b.jpg",
      "publishing_look-the-doors-are-open/3.jpg",
    ],
  },

  {
    slug: "split-payments",
    title: "Split payments integration",
    description: "The goal was to build a checkout process that allows buyers to combine different payment methods for one order without disrupting the existing website.",
    note: [
      "Buyers wanted to pay for a single order with more than one payment method, but the checkout only let them choose one.",
      "Research and product design shaped a flow that slots into the existing website, so combining methods feels like a natural step rather than a new checkout.",
    ],
    client: "E-commerce Retailer",
    year: "2022",
    category: "Web",
    services: ["Research", "Product design"],
   images: [
      "web_split-payments/0_hero.jpg",
      "web_split-payments/1a.jpg",
      "web_split-payments/1b.jpg",
      "web_split-payments/2a.mp4",
      "web_split-payments/2b.mp4",
      "web_split-payments/3.jpg",
      "web_split-payments/4.jpg",
      "web_split-payments/5.jpg",
    ],
  },

  {
    slug: "who-is-otti-berger",
    title: "Who is Otti Berger?",
    description: "An exhibition shaped through fragments of life and work of Otti Berger",
    note: [
      "Otti Berger, a textile artist trained at the Bauhaus, left behind a life and a body of work that survive only in fragments.",
      "The art direction follows the same logic. Pieces are set side by side, leaving visitors to assemble her story for themselves.",
    ],
    client: "Tomislav Gotovac Institute",
    year: "2022",
    category: "Publishing",
    services: ["Art direction", "Graphic design"],
   images: [
      "publishing_otti-berger/0_hero.jpg",
      "publishing_otti-berger/1a.jpg",
      "publishing_otti-berger/1b.jpg",
      "publishing_otti-berger/2a.jpg",
      "publishing_otti-berger/2b.jpg",
      "publishing_otti-berger/3.mp4",
      "publishing_otti-berger/4.jpg",
      "publishing_otti-berger/5.jpg",
    ],
  },
  

  
  {
    slug: "jadrolinija",
    title: "Jadrolinija's new digital experience",
    client: "Jadrolinija",
    description: "Island hopping easier than ever before.",
    note: [
      "Jadrolinija connects the Croatian mainland with its islands, and for most travellers the journey now starts on a phone: finding a line, buying a ticket, checking a departure.",
      "UX research guided the new experience, and prototyping let ideas be tried before they were built, all to make island hopping feel effortless.",
    ],
    year: "2026",
    category: "App",
    services: ["UX research", "UI design", "Prototyping"],
    images: [
      "app_jadrolinija/0_hero.mp4",
      "app_jadrolinija/1a.jpg",
      "app_jadrolinija/1b.jpg",
      "app_jadrolinija/2a.jpg",
      "app_jadrolinija/2b.jpg",
       "app_jadrolinija/3.mp4",
      "app_jadrolinija/4.jpg",
    ],
  },
  {
    slug: "studenac",
    title: "Loyalty app for the biggest Croatian retailer",
    description: "Swipe the way to weekly coupons and deals: finding savings has never been easier or more fun.",
    note: [
      "Studenac's loyalty app turns weekly coupons and deals into something closer to a game: swipe through the offers and keep the ones you want.",
      "Research and prototyping shaped a flow quick enough for a store aisle and simple enough for every customer of the biggest Croatian retailer.",
    ],
    client: "Studenac",
    year: "2022",
    category: "App",
    services: ["Research, Product design, Prototyping"],
    images: [
      "app_studenac/0_hero.mp4",
      "app_studenac/1a.mp4",
      "app_studenac/1b.mp4",
      "app_studenac/2a.jpg",
      "app_studenac/2b.jpg",
      "app_studenac/3.mp4",
      "app_studenac/4.jpg",
      "app_studenac/5.jpg",
    ],
  },
];

const state = {
  view: "cv",
  category: "All",
};

let hasAnimatedIntro = false;

const app = document.querySelector("#app");
const navigationStack = document.querySelector(".navigation-stack");
const bottomSwitch = document.querySelector(".bottom-switch");
const switchButtons = [...document.querySelectorAll(".switch-button")];
const categoryButtons = [...document.querySelectorAll(".category-bar button")];
const projectsButton = document.querySelector('[data-view="projects"]');
const categoryBar = document.querySelector(".category-bar");

function projectHref(slug) {
  return `project.html?slug=${encodeURIComponent(slug)}`;
}

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function setProfileLinks() {
  const linkedin = document.querySelector('[data-profile="linkedin"]');
  const threads = document.querySelector('[data-profile="threads"]');
  if (linkedin) linkedin.href = portfolio.links.linkedin;
  if (threads) threads.href = portfolio.links.threads;
}

function createNavIndicator(container) {
  if (!container) return;
  const indicator = document.createElement("span");
  indicator.className = "nav-indicator";
  indicator.setAttribute("aria-hidden", "true");
  container.prepend(indicator);
}

function moveNavIndicator(container, activeButton) {
  const indicator = container?.querySelector(".nav-indicator");
  if (!indicator) return;

  const isVisible = Boolean(activeButton) && !activeButton.classList.contains("is-back");
  indicator.classList.toggle("is-visible", isVisible);
  if (!isVisible) return;

  indicator.style.width = `${activeButton.offsetWidth}px`;
  indicator.style.height = `${activeButton.offsetHeight}px`;
  indicator.style.transform = `translate(${activeButton.offsetLeft}px, ${activeButton.offsetTop}px)`;

  // Place the indicator instantly on first render, then let later changes slide.
  if (!indicator.classList.contains("is-ready")) {
    requestAnimationFrame(() => indicator.classList.add("is-ready"));
  }
}

function updateNavIndicators() {
  moveNavIndicator(bottomSwitch, switchButtons.find((button) => button.classList.contains("is-active")));
  moveNavIndicator(categoryBar, categoryButtons.find((button) => button.classList.contains("is-active")));
}

function updateSwitch() {
  const isProjectDetail = state.view === "project";
  const activeView =
    isProjectDetail ? "projects" : state.view === "ai-playground" ? "cv" : state.view;

  switchButtons.forEach((button) => {
    const isProjectsButton = button.dataset.view === "projects";
    const isSelected = isProjectDetail ? isProjectsButton : button.dataset.view === activeView;
    if (isSelected) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
    button.classList.toggle("is-active", isSelected);
    button.classList.toggle("is-hidden", isProjectDetail && !isProjectsButton);
    button.classList.toggle("is-back", isProjectDetail && isProjectsButton);
  });

  categoryButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === state.category);
  });

  if (bottomSwitch) {
    bottomSwitch.classList.remove("is-hidden");
  }

  if (navigationStack) {
    navigationStack.classList.add("is-loaded");
  }

  if (categoryBar) {
    const filtersHidden = state.view !== "projects";
    categoryBar.classList.toggle("is-visible", !filtersHidden);
    categoryBar.inert = filtersHidden;
    categoryBar.setAttribute("aria-hidden", String(filtersHidden));
  }

  if (projectsButton) {
    projectsButton.textContent = isProjectDetail ? "Back to Works" : "Work";
  }

  updateNavIndicators();
}

function renderWorkThumb(src, className, alt) {
  if (!src) return "";
  if (src.endsWith(".mp4")) {
    return `
      <video class="${className}" autoplay loop muted playsinline preload="metadata">
        <source src="${src}" type="video/mp4">
        Vaš pretraživač ne podržava video.
      </video>
    `;
  }
  return `<img class="${className}" src="${src}" alt="${alt}" aria-hidden="true">`;
}

// Radovi koji imaju svoju stranicu (bez onih koji tek dolaze)
const publishedWorks = works.filter((work) => !work.comingSoon);

function renderWorkCards(items) {
  return items
    .map((work) => {
      if (work.comingSoon) {
        // Ako thumbnail nedostaje, ostaje prazna ploha s natpisom; hero_B se prikazuje na hover kao kod ostalih
        const folder = work.images[0].slice(0, work.images[0].lastIndexOf("/"));
        return `
          <div class="work-card is-coming-soon">
            <div class="work-thumbs">
              <span class="coming-soon-label">Coming soon</span>
              <img class="thumb" src="${work.images[0]}" alt="" aria-hidden="true" onerror="this.remove()">
              <img class="thumb thumb-hover" src="${folder}/hero_B.png" alt="" aria-hidden="true" onerror="this.remove()">
            </div>
            <div class="work-card-copy">
              <div class="work-title-row">
                <h2>${work.title}</h2>
                <span class="project-year">${work.year}</span>
              </div>
              <p class="services-line">${work.services.join(", ")}</p>
            </div>
          </div>
        `;
      }

      // Hover thumbnail je hero_B.png iz mape projekta; ako ga još nema, img se sam ukloni
      const folder = work.images[0].slice(0, work.images[0].lastIndexOf("/"));
      const mediaHtml = `
        <div class="work-thumbs">
          ${renderWorkThumb(work.images[0], "thumb", work.title)}
          <img class="thumb thumb-hover" src="${folder}/hero_B.png" alt="" aria-hidden="true" onerror="this.remove()">
        </div>
      `;

      return `
        <a class="work-card" href="${projectHref(work.slug)}" aria-label="${work.title}, ${work.client}">
          ${mediaHtml}
          <div class="work-card-copy">
            <div class="work-title-row">
              <h2>${work.title}</h2>
              <span class="project-year">${work.year}</span>
            </div>
            <p class="services-line">${work.services.join(", ")}</p>
          </div>
        </a>
      `;
    })
    .join("");
}

function removeProjectDescription() {
  document.querySelector(".project-description")?.remove();
}

function initCopyButtons() {
  document.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy]");
    if (!button) return;

    const value = button.dataset.copy;
    const label = button.querySelector("span");
    const originalLabel = label?.textContent || button.textContent;

    try {
      await navigator.clipboard.writeText(value);
      if (label) label.textContent = "Copied";
      setTimeout(() => {
        if (label) label.textContent = originalLabel;
      }, 1600);
    } catch {
      window.prompt("Copy e-mail:", value);
    }
  });
}

function initBlogPostModalHandlers() {
  app.addEventListener("click", (event) => {
    const blogPostLink = event.target.closest("[data-blog-post]");
    if (blogPostLink) {
      event.preventDefault();
      const project = works.find((work) => work.slug === blogPostLink.dataset.blogPost);
      const dialog = document.querySelector("#blog-post-modal");
      if (project && dialog) {
        dialog.innerHTML = renderBlogPostModal(project);
        dialog.showModal();
      }
      return;
    }

    const closeButton = event.target.closest("[data-close-project-info]");
    if (closeButton) {
      closeButton.closest("dialog")?.close();
      return;
    }

    if (event.target instanceof HTMLDialogElement && event.target.open) {
      event.target.close();
    }
  });
}

function animateHeroTitle() {
  const title = document.querySelector("#cv-title");
  if (!title) return;

  const setActiveGroup = (target) => {
    const group = target instanceof Element
      ? target.closest("[data-title-group]")?.dataset.titleGroup
      : undefined;
    if (group) title.dataset.activeTitleGroup = group;
    else delete title.dataset.activeTitleGroup;
  };

  title.addEventListener("pointerover", (event) => setActiveGroup(event.target));
  title.addEventListener("pointerout", (event) => {
    if (event.relatedTarget instanceof Element && title.contains(event.relatedTarget)) {
      setActiveGroup(event.relatedTarget);
    } else {
      setActiveGroup(null);
    }
  });
  title.addEventListener("focusin", (event) => setActiveGroup(event.target));
  title.addEventListener("focusout", (event) => {
    if (event.relatedTarget instanceof Element && title.contains(event.relatedTarget)) {
      setActiveGroup(event.relatedTarget);
    } else {
      setActiveGroup(null);
    }
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const splashScreen = document.querySelector(".splash-screen");
  const initialDelay =
    !hasAnimatedIntro && splashScreen && getComputedStyle(splashScreen).visibility !== "hidden"
      ? 700
      : 0;
  title.style.setProperty("--hero-initial-delay", `${initialDelay}ms`);
  hasAnimatedIntro = true;

  const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  let wordIndex = 0;
  textNodes.forEach((textNode) => {
    const group = textNode.parentElement.closest("[data-title-group]")?.dataset.titleGroup;
    const fragment = document.createDocumentFragment();
    textNode.textContent.split(/(\s+)/).forEach((part) => {
      if (!part.trim()) {
        fragment.append(part);
        return;
      }

      const word = document.createElement("span");
      word.className = "hero-word";
      if (group) word.dataset.titleGroup = group;
      word.style.setProperty("--word-index", wordIndex++);
      word.textContent = part;
      fragment.append(word);
    });
    textNode.replaceWith(fragment);
  });
}

function renderBlogPostModal(project) {
  const gallery = project.images?.length
    ? `
      <div class="project-info-gallery" aria-label="${project.title} project images">
        ${project.images
          .map((src, index) =>
            src.endsWith(".mp4")
              ? `<video src="${src}" muted autoplay loop playsinline preload="metadata" aria-label="${project.title} video ${index + 1}"></video>`
              : `<img src="${src}" alt="${project.title} project image ${index + 1}" loading="lazy" />`
          )
          .join("")}
      </div>
    `
    : "";

  return `
    <div class="project-info-toolbar">
      <button class="project-info-close" type="button" aria-label="Close note" data-close-project-info>×</button>
    </div>
    <div class="project-info-content">
      <header class="project-info-header">
        <p class="eyebrow">Note · ${project.category} · ${project.year}</p>
        <h2 id="blog-post-title">${project.title}</h2>
        <div class="project-info-overview blog-post-copy">
          ${(project.note || [project.description || "No post text has been added."])
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join("")}
        </div>
      </header>
      ${gallery}
      <div class="project-info-grid">
        <section>
          <h3>Client</h3>
          <p>${project.client || "Not specified"}</p>
        </section>
        <section>
          <h3>Services</h3>
          <p>${project.services?.join(", ") || "Not specified"}</p>
        </section>
      </div>
      <a class="blog-modal-project-link" href="${projectHref(project.slug)}">
        View full project <span aria-hidden="true">→</span>
      </a>
    </div>
  `;
}

function renderCv() {
  removeProjectDescription();
  state.view = "cv";
  document.title = "Teo Peter · Work";

  app.innerHTML = `
    <article class="view cv-view fade-in-section" aria-labelledby="cv-title">
      <section class="cv-hero">
        <h1 id="cv-title">
          <span class="hero-intro-line">Hey, I am Teo Peter.</span>
          <span class="hero-main-line">
            Graphic engineer moving between
            <span class="hero-inline-group" data-title-group="screens">
              <a class="cv-title-thumb" data-title-group="screens" href="${projectHref("frankie")}" aria-label="View Frankie project">
                <video autoplay loop muted playsinline preload="metadata" aria-hidden="true">
                  <source src="./cv-digital-products.mp4" type="video/mp4" />
                </video>
              </a>
              <a class="title-hover-group" data-title-group="screens" href="${projectHref("frankie")}">screens,</a>
            </span>
            <span class="hero-inline-group" data-title-group="paper">
              <a class="cv-title-thumb" data-title-group="paper" href="${projectHref("diskrepancija-journal")}" aria-label="View Diskrepancija Journal project">
                <img src="publishing_diskrepancija/0_hero.jpg" alt="" />
              </a>
              <a class="title-hover-group" data-title-group="paper" href="${projectHref("diskrepancija-journal")}">paper,</a>
            </span>
            <span class="hero-inline-group" data-title-group="code">
              <a class="cv-title-thumb" data-title-group="code" href="${projectHref("split-payments")}" aria-label="View Split payments integration project">
                <img src="web_split-payments/0_hero.jpg" alt="" />
              </a>
              <a class="title-hover-group" data-title-group="code" href="${projectHref("split-payments")}">code,</a>
            </span>
            <span class="hero-nowrap">and socials.</span>
          </span>
        </h1>
        <p class="hero-clients">
          I worked on projects for clients like
          <span class="client-logo-slot">
            ${portfolio.clientLogos
              .map(
                (client, index) => `
                  <a class="client-logo${index === 0 ? " is-active" : ""}" ${client.url ? `href="${client.url}" target="_blank" rel="noopener noreferrer"` : ""}>
                    <img src="${encodeURI(client.logo)}" alt="${client.name}" />
                  </a>
                `
              )
              .join("")}
          </span>
        </p>
      </section>

      <div class="rest-of-content content-reveal">
        <section class="cv-section" aria-labelledby="skills-title">
          <h2 id="skills-title">Skills and tools</h2>
          <div class="skill-columns">
            ${portfolio.skillGroups
              .map(
                (group) => `
                  <div>
                    <h3>${group.title}</h3>
                    <ul class="plain-list">
                      ${group.items.map((skill) => `<li>${skill}</li>`).join("")}
                    </ul>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="cv-section" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <div class="cv-list">
            ${portfolio.experience
              .map(
                (item) => `
                  <article class="cv-item experience-item">
                    <div class="experience-visual">
                      <img src="${item.image}" alt="${item.title}" loading="lazy" />
                    </div>
                    <div class="experience-copy">
                      <div class="experience-title-row">
                        <h3>${item.title}</h3>
                        ${item.url ? `<a class="organization-link" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${item.title} website">↗</a>` : ""}
                      </div>
                      <span class="cv-period">${item.period}</span>
                      <ul>
                        ${item.items.map((line) => `<li>${line}</li>`).join("")}
                      </ul>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="cv-section" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <div class="cv-list">
            ${portfolio.education
              .map(
                (item) => `
                  <article class="cv-item">
                    <span class="cv-period">${item.period}</span>
                    <div>
                      <h3>${item.title}</h3>
                      <ul>
                        ${item.items.map((line) => `<li>${line}</li>`).join("")}
                      </ul>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="cv-section" aria-labelledby="languages-title">
          <h2 id="languages-title">Languages</h2>
          <div class="cv-list">
            ${portfolio.languages
              .map(
                (item) => `
                  <article class="cv-item">
                    <div>
                      <h3>${item.language}</h3>
                      <span class="cv-period">${item.level}</span>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="cv-section" aria-labelledby="volunteering-title">
          <h2 id="volunteering-title">Volunteering</h2>
          <div class="cv-list">
            ${portfolio.volunteering
              .map(
                (item) => `
                  <article class="cv-item experience-item">
                    <div class="experience-visual">
                      <img src="${item.image}" alt="${item.title}" loading="lazy" />
                    </div>
                    <div class="experience-copy">
                      <div class="experience-title-row">
                        <h3>${item.title}</h3>
                        ${item.url ? `<a class="organization-link" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${item.title} website">↗</a>` : ""}
                      </div>
                      <span class="cv-period">${item.period}</span>
                      <ul>
                        ${item.items.map((line) => `<li>${line}</li>`).join("")}
                      </ul>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="cv-section" aria-labelledby="latest-projects-title">
          <h2 id="latest-projects-title">Latest work</h2>
          <div class="works-grid">
            ${renderWorkCards(publishedWorks.slice(0, 2))}
          </div>
        </section>
      </div>
    </article>
  `;

  animateHeroTitle();
  startClientLogoRotation();
}

let clientLogoTimer = 0;

function startClientLogoRotation() {
  window.clearInterval(clientLogoTimer);
  const logos = [...document.querySelectorAll(".client-logo")];
  if (logos.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let current = 0;
  clientLogoTimer = window.setInterval(() => {
    if (!logos[0].isConnected) {
      window.clearInterval(clientLogoTimer);
      return;
    }
    logos[current].classList.remove("is-active");
    current = (current + 1) % logos.length;
    logos[current].classList.add("is-active");
  }, 2400);
}

function renderProjects() {
  removeProjectDescription();
  state.view = "projects";
  document.title = "Teo Peter · Work";

  if (!state.category || !["All", "Web", "App", "Publishing"].includes(state.category)) {
    state.category = "All";
  }

  const filtered = works.filter((work) => {
    if (state.category === "All") return true;
    return work.category === state.category;
  });

  app.innerHTML = `
    <section class="view" aria-labelledby="projects-title">
      <div class="works-grid works-grid--two">
        ${renderWorkCards(filtered)}
      </div>
    </section>
  `;

  updateSwitch();
}

function renderBlog() {
  removeProjectDescription();
  state.view = "blog";
  document.title = "Notes · Teo Peter";

  app.innerHTML = `
    <section class="view blog-view fade-in-section" aria-labelledby="blog-title">
      <header class="blog-header">
        <h1 id="blog-title">Notes</h1>
      </header>
      <div class="blog-list">
        <div class="notes-list" aria-live="polite"></div>
      </div>
    </section>
  `;

  updateSwitch();
  renderNotes();
}

let notesRequest;

function loadNotes() {
  notesRequest ??= fetch("notes.json")
    .then((response) => (response.ok ? response.json() : []))
    .catch(() => []);
  return notesRequest;
}

function formatNoteDate(value) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

async function renderNotes() {
  const notes = await loadNotes();
  const list = app.querySelector(".notes-list");
  if (state.view !== "blog" || !list) return;

  list.innerHTML = notes
    .map(
      (note) => `
        <details class="note">
          <summary class="note-summary">
            <span class="note-heading">
              <span class="blog-card-meta">${formatNoteDate(note.date)}</span>
              <h2>${note.title}</h2>
              ${note.subtitle ? `<span class="note-subtitle">${note.subtitle}</span>` : ""}
            </span>
            <span class="note-toggle" aria-hidden="true">+</span>
          </summary>
          <div class="note-body">
            ${note.html}
          </div>
        </details>
      `
    )
    .join("");
}

function renderProject(slug) {
  const projectIndex = publishedWorks.findIndex((work) => work.slug === slug);
  const project = publishedWorks[projectIndex];
  if (!project) {
    window.location.replace("index.html#projects");
    return;
  }
  // See more: sljedeća tri projekta po redu, kružno
  const moreProjects = [1, 2, 3].map(
    (offset) => publishedWorks[(projectIndex + offset) % publishedWorks.length]
  );
  state.view = "project";
  document.title = `${project.title} · Teo Peter`;
  removeProjectDescription();

  function renderMedia(src, altClass, altText) {
    if (!src) return "";
    if (src.endsWith(".mp4")) {
      return `
        <video class="${altClass}" autoplay loop muted playsinline preload="metadata">
          <source src="${src}" type="video/mp4">
          Vaš pretraživač ne podržava video.
        </video>
      `;
    }
    return `<img class="${altClass}" src="${src}" alt="${altText}" />`;
  }

  const img = project.images || [];
  const galleryLayout = project.galleryLayout || [2, 2, 1, 1, 1, 2, 1];
  let nextImageIndex = 1;
  const galleryGroups = galleryLayout
    .map((groupSize) => {
    const startIndex = nextImageIndex;
    const group = img.slice(startIndex, startIndex + groupSize);
    nextImageIndex += groupSize;

    const media = group
      .map((src, index) =>
        renderMedia(
          src,
          groupSize === 1 ? "gallery-main" : "",
          `${project.title} detail ${startIndex + index}`
        )
      )
      .join("");

      if (!media) return "";
      return groupSize === 1 ? media : `<div class="gallery-row">${media}</div>`;
    })
    .filter(Boolean);

  // Tekstualne sekcije: prva ide odmah ispod hero slike, druga prije zadnje grupe galerije
  const [firstStory, secondStory] = project.note || [];
  if (secondStory && galleryGroups.length > 1) {
    galleryGroups.splice(galleryGroups.length - 1, 0, renderProjectStory(secondStory));
  }

  app.innerHTML = `
    <article class="view project-view fade-in-section" aria-labelledby="project-title">
      <section class="project-hero">
        <header class="project-heading">
          <h1 id="project-title">${project.title}</h1>
          ${project.description ? `<p class="project-lede">${project.description}</p>` : ""}
        </header>

        <dl class="project-meta-row" aria-label="Project details">
          <div>
            <dt>Client</dt>
            <dd>${project.client}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>${project.year}</dd>
          </div>
          <div>
            <dt>Services</dt>
            <dd>${project.services.join(", ")}</dd>
          </div>
        </dl>

        <div class="project-gallery">
          ${renderMedia(img[0], "gallery-main", `${project.title} hero 1`)}
          ${firstStory ? renderProjectStory(firstStory) : ""}
          ${galleryGroups.join("")}
        </div>
      </section>

      <section class="project-more" aria-labelledby="project-more-title">
        <h2 id="project-more-title">See more</h2>
        <div class="works-grid">
          ${renderWorkCards(moreProjects)}
        </div>
      </section>
    </article>
  `;

  updateProjectStories();
}

function renderProjectStory(text) {
  const words = text
    .trim()
    .split(/\s+/)
    .map((word) => `<span class="story-word">${word}</span>`)
    .join(" ");

  return `
    <section class="project-story">
      <div class="project-story-pin">
        <p class="project-story-text">${words}</p>
      </div>
    </section>
  `;
}

// Dok je sekcija zakačena, riječi se redom pune crnom bojom prema napretku scrolla
function updateProjectStories() {
  const viewportHeight = window.innerHeight;

  document.querySelectorAll(".project-story").forEach((story) => {
    const words = story.querySelectorAll(".story-word");
    const scrollable = story.offsetHeight - viewportHeight;
    const progress =
      scrollable > 0 ? Math.min(Math.max(-story.getBoundingClientRect().top / scrollable, 0), 1) : 1;
    // Ispuna završava malo prije kraja da tekst ostane potpuno crn prije odlaska
    const filledCount = Math.round(Math.min(progress / 0.8, 1) * words.length);

    words.forEach((word, index) => {
      word.classList.toggle("is-filled", index < filledCount);
    });
  });
}

function route() {
  const hash = window.location.hash.replace("#", "");
  const projectSlug = new URLSearchParams(window.location.search).get("slug");
  if (hash.startsWith("work/")) {
    renderProject(hash.split("/")[1]);
  } else if (hash === "projects") {
    renderProjects();
  } else if (hash === "blog") {
    renderBlog();
  } else if (hash === "cv") {
    renderCv();
  } else if (projectSlug) {
    renderProject(projectSlug);
  } else {
    renderCv();
  }

  updateSwitch();
  window.scrollTo({ top: 0, behavior: "instant" });
  app.focus({ preventScroll: true });
}

bottomSwitch?.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const viewButton = event.target.closest("[data-view]");
  if (!(viewButton instanceof HTMLButtonElement)) return;

  const nextView = viewButton.dataset.view;
  if (nextView === "projects") {
    if (state.view === "project") {
      window.location.href = "index.html#projects";
      return;
    }

    state.category = "All";
    if (window.location.hash === "#projects") {
      renderProjects();
      updateSwitch();
      return;
    }
    window.location.hash = "projects";
  } else if (nextView === "cv") {
    window.location.hash = "cv";
  } else if (nextView === "blog") {
    window.location.hash = "blog";
  }
});

categoryBar?.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;


  const categoryButton = event.target.closest("[data-category]");
  if (!(categoryButton instanceof HTMLButtonElement)) return;

  state.category = categoryButton.dataset.category || "All";
  renderProjects();
  updateSwitch();
});

window.addEventListener("hashchange", route);
window.addEventListener("resize", updateNavIndicators);
window.addEventListener("resize", updateProjectStories);
window.addEventListener("scroll", updateProjectStories, { passive: true });
document.fonts?.ready.then(updateNavIndicators);
createNavIndicator(bottomSwitch);
createNavIndicator(categoryBar);
let lastSwitchScrollY = window.scrollY;
let scrollFrame = 0;

window.addEventListener(
  "scroll",
  () => {
    if (scrollFrame) return;

    scrollFrame = window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastSwitchScrollY;

      if (currentScrollY <= 0) {
        navigationStack?.classList.remove("is-scrolling-down");
        lastSwitchScrollY = currentScrollY;
        scrollFrame = 0;
        return;
      }

      if (Math.abs(scrollDifference) >= 8) {
        const scrollingDown = scrollDifference > 0;
        navigationStack?.classList.toggle("is-scrolling-down", scrollingDown);
        lastSwitchScrollY = currentScrollY;
      }

      scrollFrame = 0;
    });
  },
  { passive: true }
);

setProfileLinks();
initCopyButtons();
initBlogPostModalHandlers();
route();
initMultilingualGreeting();

function initMultilingualGreeting() {
  const wordmark = document.querySelector('.wordmark');
  if (!wordmark) return;

  const greetings = [
    "Bok!",       
    "Hello!",     
    "Hola!",      
    "Bonjour!",   
    "Guten Tag!", 
    "Ciao!",      
    "Konnichiwa!",
    "Namaste!",   
    "Olá!"        
  ];

  let currentIndex = 0;

  setInterval(() => {
    if (state.view === "cv") {
      currentIndex = (currentIndex + 1) % greetings.length;
      wordmark.textContent = greetings[currentIndex];
    }
  }, 5000);
}