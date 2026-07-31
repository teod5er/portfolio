function makeProjectImage(label, primary, secondary) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200">
      <rect width="900" height="1200" fill="#f8f5ef" />
      <rect x="70" y="70" width="760" height="1060" rx="44" fill="${primary}" opacity="0.12" />
      <rect x="120" y="220" width="520" height="340" rx="30" fill="${primary}" opacity="0.92" />
      <rect x="120" y="620" width="660" height="160" rx="24" fill="#ffffff" opacity="0.92" />
      <rect x="120" y="840" width="420" height="120" rx="24" fill="${secondary}" opacity="0.88" />
      <text x="120" y="1030" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="500" fill="${secondary}">${label}</text>
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

const portfolio = {
  name: "Teo Peter",
  intro:
    "Teo Peter is a multidisciplinary designer with experience in digital products, branding & publishing. ",
  introSecond:
    "",
  email: "teo_peter@outlook.com",
  links: {
    linkedin: "https://www.linkedin.com/in/teo-peter-4516621a3/",
  },
  experience: [
    {
      period: "April 2025 — Now",
      title:
      "Designer @ Sawraft Studio",
      items: [
        "&nbsp; ",
        "User interfaces — from research to prototyping",
        "Brand designs and design systems",
        "Product presentation",
      ],
    },
    {
      period: "October 2022 — April 2024",
      title: "Student designer @ Social Wizard",
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
      title: "Freelance designer",
      items: [
        "&nbsp; ",
        "Brand identities, landing pages, posters, and publishing work",
        "Projects in culture, music, and local businesses",
      ],
    },
  ],
  skillGroups: [
    {
      title: "Design",
      items: [
        "&nbsp; ",
        "UX/UI design (web & mobile)",
        "Research and prototyping",
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
  education: [
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
      period: "2022 - 2024",
      title: "<br> Master of Arts in Graphic Product Design",
      items: [
        `Faculty of Graphic Arts, University of Zagreb`,
      ],
    },
     {
      period: "2019 - 2022",
      title: "<br> Bachelor of Arts in Graphic Design and Engineering",
      items: [
        "Faculty of Graphic Arts, University of Zagreb",
        "On Dean’s list",
      ],
    },
  ],
};

const works = [
  
  {
    slug: "diskrepancija-journal",
    title: "Diskrepancija Journal",
    description: "Student Journal for Social Sciences and Humanities",
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
const bottomSwitchMain = document.querySelector(".bottom-switch"); 
const switchButtons = [...document.querySelectorAll(".switch-button")];
const categoryButtons = [...document.querySelectorAll(".category-bar button")];
const projectsButton = document.querySelector('[data-view="projects"]');

function setProfileLinks() {
  const linkedin = document.querySelector('[data-profile="linkedin"]');
  const threads = document.querySelector('[data-profile="threads"]');
  if (linkedin) linkedin.href = portfolio.links.linkedin;
  if (threads) threads.href = portfolio.links.threads;
}

function updateCategoryCounts() {
  categoryButtons.forEach((button) => {
    const category = button.dataset.category;
    let count = 0;

    if (category === "All") {
      count = works.length;
    } else {
      count = works.filter((work) => work.category === category).length;
    }

    button.innerHTML = `${category} <sup>(${count})</sup>`;
  });
}

function updateSwitch(projectTitle = null) {
  const isProjectDetail = state.view === "project";
  const activeView = isProjectDetail ? "projects" : state.view;
  const wordmark = document.querySelector('.wordmark');

  if (wordmark) {
    if (isProjectDetail && projectTitle) {
      wordmark.textContent = projectTitle; 
    } else if (state.view === "projects") {
      wordmark.textContent = "Teo Peter";
    } else {
      wordmark.textContent = "Teo Peter";
    }
  }

  switchButtons.forEach((button) => {
    const isSelected = button.dataset.view === activeView;
    button.setAttribute("aria-selected", String(isSelected));
    button.classList.toggle("is-active", isSelected);
    button.classList.toggle("is-hidden", false);
    button.classList.toggle("is-back", isProjectDetail && button.dataset.view === "projects");
  });

  categoryButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === state.category);
  });

  if (bottomSwitchMain) {
    bottomSwitchMain.classList.toggle("is-projects", state.view === "projects");
    bottomSwitchMain.classList.toggle("is-hidden", isProjectDetail); 
  }

  if (projectsButton) {
    projectsButton.textContent = isProjectDetail ? "Back to work" : "Work";
  }
}

function renderWorkCards(items) {
  return items
    .map((work) => {
      const firstMedia = work.images[0];
      let mediaHtml = "";

      if (firstMedia && firstMedia.endsWith(".mp4")) {
        mediaHtml = `
          <video class="thumb" autoplay loop muted playsinline preload="metadata">
            <source src="${firstMedia}" type="video/mp4">
            Vaš pretraživač ne podržava video.
          </video>
        `;
      } else {
        mediaHtml = `<img class="thumb" src="${firstMedia}" alt="${work.title}" aria-hidden="true">`;
      }

      return `
        <a class="work-card" href="#work/${work.slug}" aria-label="${work.title}, ${work.client}">
          ${mediaHtml}
          <div>
            <div class="work-title-row">
              <h2>${work.title}</h2>
              <span class="project-year">${work.year}</span>
            </div>
            <p class="client-line">${work.client}</p>
          </div>
        </a>
      `;
    })
    .join("");
}

function removeProjectDescription() {
  document.querySelector(".project-description")?.remove();
}

function runTypingEffect(element, text, speed = 30, callback) {
  let i = 0;
  element.textContent = "";
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

function renderCv() {
  removeProjectDescription();
  state.view = "cv";

  const shouldAnimate = !hasAnimatedIntro;

  app.innerHTML = `
    <article class="view cv-view fade-in-section" aria-labelledby="cv-title">
      <section class="cv-hero">
        <h1 id="cv-title"><span id="typed-intro"></span><span class="typing-cursor" style="${shouldAnimate ? '' : 'display: none;'}"></span></h1>
        <p class="lead">${portfolio.introSecond}</p>
      </section>

      <div class="rest-of-content" style="opacity: ${shouldAnimate ? '0' : '1'}; transition: opacity 0.8s ease;">
        <section class="cv-section" aria-labelledby="skills-title">
          <h2 id="skills-title">Skills</h2>
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
                  <article class="cv-item">
                    <div>
                      <h3>${item.title}</h3>
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

        <section class="cv-section" aria-labelledby="latest-projects-title">
          <h2 id="latest-projects-title">Latest work</h2>
          <div class="works-grid">
            ${renderWorkCards(works.slice(0, 2))}
          </div>
        </section>
      </div>
    </article>
  `;

  const typedTarget = document.getElementById("typed-intro");
  const cursorTarget = document.querySelector(".typing-cursor");
  const restContent = document.querySelector(".rest-of-content");
  const bottomSwitch = document.querySelector(".bottom-switch");

  if (shouldAnimate) {
    hasAnimatedIntro = true;
    
    if (typedTarget && restContent) {
      runTypingEffect(typedTarget, portfolio.intro, 15, () => {
        setTimeout(() => {
          if (cursorTarget) cursorTarget.style.display = "none";
          restContent.style.opacity = "1";
          if (bottomSwitch) {
            bottomSwitch.classList.add("is-loaded");
          }
        }, 100); 
      });
    }

    if (bottomSwitch) {
      bottomSwitch.classList.add("is-loaded");
    }
  } else {
    if (typedTarget) typedTarget.textContent = portfolio.intro;
    if (bottomSwitch) {
      bottomSwitch.classList.add("is-loaded");
    }
  }
}

function renderProjects() {
  removeProjectDescription();
  state.view = "projects";

  if (!state.category || !["All", "Web", "App", "Publishing"].includes(state.category)) {
    state.category = "All";
  }

  const filtered = works.filter((work) => {
    if (state.category === "All") return true;
    return work.category === state.category;
  });

  app.innerHTML = `
    <section class="view fade-in-section" aria-labelledby="projects-title">
      <div class="works-grid">
        ${renderWorkCards(filtered)}
      </div>
    </section>
  `;

  updateSwitch();
}

function renderProject(slug) {
  const projectIndex = works.findIndex((work) => work.slug === slug);
  const project = works[projectIndex] || works[0];
  const nextProject = works[(projectIndex + 1 + works.length) % works.length];
  state.view = "project";
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

  app.innerHTML = `
    <article class="view project-view fade-in-section" aria-labelledby="project-title">
      <section class="project-hero">
        <h1 id="project-title">${project.title}</h1>
        
        <div class="project-gallery">
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

          <!-- 1. HERO -->
          ${renderMedia(img[0], "gallery-main", `${project.title} hero 1`)}

          <!-- Sivi kontejner s opisom točno ispod hero sekcije -->
          <div class="project-description-box">
            <p>${project.description || ""}</p>
          </div>

          <!-- RED S 2 FOTKE (2. i 3.) -->
          <div class="gallery-row">
            ${renderMedia(img[1], "", `${project.title} detail 1`)}
            ${renderMedia(img[2], "", `${project.title} detail 2`)}
          </div>

          <!-- RED S 2 FOTKE (4. i 5.) -->
          <div class="gallery-row">
            ${renderMedia(img[3], "", `${project.title} detail 3`)}
            ${renderMedia(img[4], "", `${project.title} detail 4`)}
          </div>

          <!-- 2. HERO -->
          ${renderMedia(img[5], "gallery-main", `${project.title} detail 5`)}

          <!-- 2. HERO -->
          ${renderMedia(img[6], "gallery-main", `${project.title} detail 6`)}

          <!-- 2. HERO -->
          ${renderMedia(img[7], "gallery-main", `${project.title} detail 7`)}

          <!-- RED S 2 FOTKE -->
          <div class="gallery-row">
            ${renderMedia(img[8], "", `${project.title} detail 8`)}
            ${renderMedia(img[9], "", `${project.title} detail 9`)}
          </div>

          <!-- 2. HERO -->
          ${renderMedia(img[10], "gallery-main", `${project.title} detail 10`)}
        </div>
      </section>

      <a class="next-project" href="#work/${nextProject.slug}">
        <span>
          <span class="next-kicker">Next project</span>
          <strong id="next-project-title">${nextProject.title}</strong>
        </span>
        <span class="arrow" aria-hidden="true">→</span>
      </a>
    </article>
  `;
}

function route() {
  const hash = window.location.hash.replace("#", "");

  if (hash.startsWith("work/")) {
    renderProject(hash.split("/")[1]);
  } else if (hash === "projects") {
    renderProjects();
  } else {
    renderCv();
  }

  updateSwitch();
  setInitialSwitchWidth(); 
  window.scrollTo({ top: 0, behavior: "instant" });
  app.focus({ preventScroll: true });
}

switchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextView = button.dataset.view;

    if (nextView === "projects") {
      state.view = "projects";
      state.category = "All";
      window.location.hash = "projects";
      return;
    }

    if (nextView === "cv") {
      state.view = "cv";
      window.location.hash = "cv";
    }
  });
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    updateSwitch();

    if (state.view === "projects") {
      renderProjects();
    }
  });
});

window.addEventListener("hashchange", route);
setProfileLinks();
updateCategoryCounts();
route();
initMultilingualGreeting();

function setInitialSwitchWidth() {
  const bottomSwitch = document.querySelector('.bottom-switch');
  const switchCore = document.querySelector('.switch-core');

  if (!bottomSwitch || !switchCore) return;

  document.fonts.ready.then(() => {
    const coreWidth = switchCore.getBoundingClientRect().width;
    const styles = window.getComputedStyle(bottomSwitch);
    const padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
    const totalWidth = Math.ceil(coreWidth + padding) + 2;

    bottomSwitch.style.setProperty('--initial-width', `${totalWidth}px`);
  });
}

setInitialSwitchWidth();

window.addEventListener("load", () => {
  window.setTimeout(() => {
    const bottomSwitch = document.querySelector(".bottom-switch");
    if (bottomSwitch) {
      bottomSwitch.classList.add("is-loaded");
    }
  }, 100); 
});

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