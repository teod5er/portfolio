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
      clients: ["Nexa", "Studio North"],
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
    title: "Website for Croatian artist Vlado Marek",
    // comingSoon: prikazuje se samo na popisu radova, bez stranice projekta i bez linka
    comingSoon: true,
    client: "Vlado Marek",
    year: "2026",
    category: "Web",
    services: ["Coming soon"],
    images: ["web_vlado-marek/hero_0.png"],
  },
  {
    slug: "skola-grada",
    title: "Škola grada",
    description: "Škola Grada (School of the City) is a months-long program about Zagreb, run by the Tomislav Gotovac Institute. Its identity is playful and made to work online.",
    note: [
      "The program runs for months, and every lecture and event needs its own announcement.",
      "Bold letters and bright colours move around in animation. Playful, but always easy to recognise.",
    ],
    challenge: [
      {
        title: "The brief",
        text: "A program that runs for months needs a steady stream of announcements, one for every lecture and event.",
      },
      {
        title: "Constraints",
        text: "The identity lives mostly online, so it had to work in small formats and in motion, and stay quick to adapt.",
      },
    ],
    result: [
      {
        title: "Outcome",
        text: "A flexible system of bold letters and bright colours that turns each new announcement into a quick variation.",
      },
      {
        title: "Impact",
        text: "Every post feels fresh, yet the program is recognisable at first glance.",
      },
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
      "A printed journal where social science and humanities students publish their research.",
      "The cover, a roll of toilet paper on black, points to 2020 and the pandemic panic buying.",
    ],
    challenge: [
      {
        title: "The brief",
        text: "Give student research in the social sciences and humanities a printed home that reads well and looks confident.",
      },
      {
        title: "Constraints",
        text: "Long academic texts, many authors and a student budget all had to fit into one consistent layout.",
      },
    ],
    result: [
      {
        title: "Outcome",
        text: "A calm, readable layout inside, and a cover that comments on 2020 with a single object.",
      },
      {
        title: "Impact",
        text: "The journal was printed and launched in front of 100+ students and collaborators, with positive reactions.",
      },
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
    description: "A poster for Marko Tadić's temporary memorial in Rakov Potok park.",
    note: [
      "Marko Tadić built a room in the middle of the park, a space you could stumble upon and walk into.",
      "The text follows the room's floor plan. To read it, you tilt your head, just like the surprise of finding the room.",
    ],
    challenge: [
      {
        title: "The brief",
        text: "Announce a temporary memorial that is less a monument and more a room you discover by chance.",
      },
      {
        title: "Constraints",
        text: "The poster had to carry the feeling of surprise from the park, without showing the room itself.",
      },
    ],
    result: [
      {
        title: "Outcome",
        text: "Typography that follows the room's floor plan, so reading the poster becomes a small physical act.",
      },
      {
        title: "Impact",
        text: "The exhibition took place and received positive reviews, including on <a href='https://vizkultura.hr/svjetlo-u-mraku-zaborava/' target='_blank' rel='noopener noreferrer' class='preview-link'>Vizkultura</a>, the Croatian portal for design and visual culture.",
      },
    ],
    testimonials: [
      {
        quote: "This sense of discovery is also suggested by the excellent poster for the event, designed by Teo Peter.",
        author: "Ljubica Anđelković Džambić",
        role: "Vizkultura",
        image: "publishing_look-the-doors-are-open/ljubica.png",
      },
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
    description: "A checkout that lets buyers pay for one order with more than one payment method.",
    note: [
      "Buyers wanted to split one order between payment methods. The old checkout allowed only one.",
      "The new flow fits into the existing website, so paying two ways feels like a normal step.",
    ],
    challenge: [
      {
        title: "The problem",
        text: "Buyers wanted to pay for one order with more than one method, but the checkout allowed only one.",
      },
      {
        title: "Constraints",
        text: "The new option had to fit into the existing checkout without confusing buyers who pay the usual way.",
      },
    ],
    result: [
      {
        title: "Outcome",
        text: "A checkout flow where splitting a payment is just one more clear step.",
      },
      {
        title: "Impact",
        text: "Successfully integrated into the website of the largest retail chain in Greece.",
      },
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
    description: "An exhibition built from fragments of Otti Berger's life and work.",
    note: [
      "Otti Berger was a Bauhaus textile artist. Only fragments of her life and work survive.",
      "The design sets these pieces side by side and lets visitors put her story together.",
    ],
    challenge: [
      {
        title: "The brief",
        text: "Tell the story of Otti Berger, a Bauhaus textile artist whose life survives only in fragments.",
      },
      {
        title: "Constraints",
        text: "With so much missing, the design could not pretend to show a complete biography.",
      },
    ],
    result: [
      {
        title: "Outcome",
        text: "An exhibition that places the fragments side by side and leaves the gaps visible.",
      },
      {
        title: "Impact",
        text: "Visitors piece her story together themselves, which makes her absence part of the experience.",
      },
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
    challenge: [
      {
        title: "The brief",
        text: "Propose a new concept for Jadrolinija's digital experience as part of a student UX/UI course.",
      },
      {
        title: "Constraints",
        text: "The app serves locals, commuters and tourists, often on the move and in a hurry.",
      },
    ],
    result: [
      {
        title: "Outcome",
        text: "A concept for a clearer digital experience, shaped by research and early prototypes.",
      },
      {
        title: "Impact",
        text: "A proposal for how island hopping could feel easier, from finding a line to buying a ticket.",
      },
    ],
    client: "Jadrolinija",
    description: "Island hopping imagined easier than ever before.",
    note: [
      "Jadrolinija connects Croatia's mainland and islands. Most trips now start on a phone: find a line, buy a ticket, check a departure.",
      "Research and prototypes tested ideas early, so island hopping feels easy.",
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
    title: "Loyalty app for Croatia's biggest retailer",
    description: "Swipe through weekly coupons and deals. Saving made quick and fun.",
    note: [
      "The app turns weekly coupons into a small game: swipe through offers and keep the ones you like.",
      "The flow is quick enough to use in a store aisle and simple enough for every customer.",
    ],
    challenge: [
      {
        title: "The problem",
        text: "Weekly coupons and deals were easy to miss and slow to browse.",
      },
      {
        title: "Constraints",
        text: "The app had to work for every customer and be quick enough to use in a store aisle.",
      },
    ],
    result: [
      {
        title: "Outcome",
        text: "A swipe-based flow that turns browsing coupons into a small game.",
      },
      {
        title: "Impact",
        text: "The concept was successfully pitched, and a second phase of the project followed, starting with a new website.",
      },
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

// Privremeni dummy sadržaj za Challenge i Result; projekt ga može pregaziti vlastitim
// poljima challenge i result. Testimonijali se prikazuju samo ako ih projekt ima
const defaultProjectSections = {
  challenge: [
    {
      title: "The brief",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The client needed a clear, recognisable system that works across every touchpoint, from the first announcement to the final screen.",
    },
    {
      title: "Constraints",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A tight timeline, a small team and content that changes weekly meant the solution had to stay flexible and easy to maintain.",
    },
  ],
  result: [
    {
      title: "Outcome",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. The new system launched on time and gave the team a consistent way to communicate without starting from scratch.",
    },
    {
      title: "Impact",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Engagement grew steadily after launch, and the system is still in everyday use.",
    },
  ],
};

const projectSections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "deliverable", label: "Deliverable" },
  { id: "result", label: "Result" },
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

  const isVisible = Boolean(activeButton);
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
  if (sectionNav && !sectionNav.classList.contains("is-hidden")) {
    moveNavIndicator(sectionNav, sectionNav.querySelector(".is-active"));
  }
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
  });

  categoryButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === state.category);
  });

  // Na stranici projekta glavnu navigaciju zamjenjuje traka sa sekcijama
  if (bottomSwitch) {
    bottomSwitch.classList.toggle("is-hidden", isProjectDetail);
  }

  if (sectionNav) {
    sectionNav.classList.toggle("is-hidden", !isProjectDetail);
    if (isProjectDetail) setActiveSection(projectSections[0].id);
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

  updateNavIndicators();
}

function createSectionNav() {
  if (!navigationStack) return null;
  const nav = document.createElement("nav");
  nav.className = "category-bar section-nav is-hidden";
  nav.setAttribute("aria-label", "Sekcije projekta");
  nav.innerHTML = projectSections
    .map(
      (section) =>
        `<button type="button" data-section="${section.id}">${section.label}</button>`
    )
    .join("");
  navigationStack.append(nav);
  createNavIndicator(nav);

  nav.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest("[data-section]");
    const target = button && document.getElementById(button.dataset.section);
    if (!target) return;

    // Dok traje animirani scroll, indikator ostaje na kliknutoj sekciji
    lockedSection = button.dataset.section;
    clearTimeout(sectionLockTimer);
    sectionLockTimer = setTimeout(releaseSectionLock, 1200);
    setActiveSection(lockedSection);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });

  return nav;
}

const sectionNav = createSectionNav();
let lockedSection = null;
let sectionLockTimer = 0;

function releaseSectionLock() {
  lockedSection = null;
  clearTimeout(sectionLockTimer);
}

function setActiveSection(id) {
  if (!sectionNav) return;
  const buttons = [...sectionNav.querySelectorAll("[data-section]")];
  buttons.forEach((button) => {
    const isActive = button.dataset.section === id;
    button.classList.toggle("is-active", isActive);
    if (isActive) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  });
  moveNavIndicator(sectionNav, buttons.find((button) => button.classList.contains("is-active")));
}

// Aktivna je zadnja sekcija čiji je vrh prešao gornju trećinu ekrana
function updateActiveSection() {
  if (state.view !== "project" || lockedSection) return;
  const threshold = window.innerHeight * 0.35;
  let activeId = projectSections[0].id;

  projectSections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element && element.getBoundingClientRect().top <= threshold) activeId = section.id;
  });

  // Na dnu stranice zadnja sekcija je uvijek aktivna
  const atBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) activeId = projectSections[projectSections.length - 1].id;

  setActiveSection(activeId);
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
  hasAnimatedIntro = true;

  // Svaka riječ dobiva hero-word span (za hover), a svako slovo hero-char span koji se otkriva tipkanjem
  const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const chars = [];
  textNodes.forEach((textNode) => {
    const parent = textNode.parentElement;
    const group = parent.closest("[data-title-group]")?.dataset.titleGroup;
    // "engineer" već ima svoj span (.hero-typed) koji služi kao riječ
    const typed = parent.closest(".hero-typed");
    if (typed) typed.classList.add("hero-word");

    const fragment = document.createDocumentFragment();
    textNode.textContent.split(/(\s+)/).forEach((part) => {
      if (!part.trim()) {
        fragment.append(part);
        return;
      }

      let word = fragment;
      if (!typed) {
        word = document.createElement("span");
        word.className = "hero-word";
        if (group) word.dataset.titleGroup = group;
        fragment.append(word);
      }

      [...part].forEach((letter) => {
        const char = document.createElement("span");
        char.className = "hero-char is-pending";
        char.textContent = letter;
        word.append(char);
        chars.push({ el: char, group, main: Boolean(parent.closest(".hero-main-line")) });
      });
    });
    textNode.replaceWith(fragment);
  });

  title.querySelectorAll(".cv-title-thumb").forEach((thumb) => thumb.classList.add("is-pending"));

  startHeroTyping(title, chars, initialDelay);
}

// Tipka naslov slovo po slovo, a zatim cursor prelazi na "engineer" i izmjenjuje engineer ↔ designer
function startHeroTyping(title, chars, startDelay) {
  const typed = title.querySelector(".hero-typed");
  const textEl = typed?.querySelector(".hero-typed-text");
  if (!chars.length) return;

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const setTyping = (isTyping) => title.classList.toggle("is-typing", isTyping);

  const cursor = document.createElement("span");
  cursor.className = "hero-cursor";
  cursor.setAttribute("aria-hidden", "true");
  chars[0].el.before(cursor);

  const typeTitle = async () => {
    await wait(startDelay + 400);
    setTyping(true);

    let wasMain = false;
    for (const { el, group, main } of chars) {
      if (!title.isConnected) return false;
      // Kratka pauza između "Hey, I am Teo Peter." i ostatka
      if (main && !wasMain) {
        setTyping(false);
        await wait(600);
        setTyping(true);
      }
      wasMain = main;

      if (group) title.querySelector(`.cv-title-thumb[data-title-group="${group}"]`)?.classList.remove("is-pending");
      el.classList.remove("is-pending");
      el.after(cursor);
      await wait(/[.,]/.test(el.textContent) ? 220 : 35 + Math.random() * 45);
    }

    setTyping(false);
    return true;
  };

  const cycleWord = async () => {
    if (!typed || !textEl) return;
    await wait(1400);
    textEl.after(cursor);

    const words = typed.dataset.typedWords.split(",");
    let wordIndex = 0;
    let text = words[0];

    while (title.isConnected) {
      await wait(1200);
      setTyping(true);
      while (text.length && title.isConnected) {
        text = text.slice(0, -1);
        textEl.textContent = text;
        await wait(70);
      }
      await wait(300);
      wordIndex = (wordIndex + 1) % words.length;
      const next = words[wordIndex];
      while (text.length < next.length && title.isConnected) {
        text = next.slice(0, text.length + 1);
        textEl.textContent = text;
        await wait(110);
      }
      setTyping(false);
      await wait(1400);
    }
  };

  typeTitle().then((finished) => finished && cycleWord());
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
            Graphic <span class="hero-typed" data-typed-words="engineer,designer"><span class="hero-typed-text">engineer</span></span> moving between
            <span class="hero-inline-group" data-title-group="screens">
              <a class="cv-title-thumb" data-title-group="screens" href="${projectHref("jadrolinija")}" aria-label="View Jadrolinija project">
                <video autoplay loop muted playsinline preload="metadata" aria-hidden="true">
                  <source src="./cv-digital-products.mp4" type="video/mp4" />
                </video>
              </a>
              <a class="title-hover-group" data-title-group="screens" href="${projectHref("jadrolinija")}">screens,</a>
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
  // See more: dva najnovija rada iz iste kategorije; ako ih nema dovoljno,
  // dopunjuje se najnovijim radovima iz ostalih kategorija
  const newestFirst = publishedWorks
    .filter((work) => work.slug !== project.slug)
    .sort((a, b) => Number(b.year) - Number(a.year));
  const moreProjects = [
    ...newestFirst.filter((work) => work.category === project.category),
    ...newestFirst.filter((work) => work.category !== project.category),
  ].slice(0, 2);
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

  const challenge = project.challenge || defaultProjectSections.challenge;
  const result = project.result || defaultProjectSections.result;
  const testimonials = project.testimonials;

  app.innerHTML = `
    <article class="view project-view fade-in-section" aria-labelledby="project-title">
      <section class="project-hero project-section" id="overview">
        <p class="project-section-title content-reveal">Overview</p>
        <header class="project-heading">
          <h1 id="project-title">${project.title}</h1>
          ${project.description ? `<p class="project-lede content-reveal">${project.description}</p>` : ""}
        </header>

        <dl class="project-meta-row content-reveal" aria-label="Project details">
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

        <div class="project-gallery content-reveal">
          ${renderMedia(img[0], "gallery-main", `${project.title} hero 1`)}
          ${firstStory ? renderProjectStory(firstStory) : ""}
        </div>
      </section>

      <section class="project-section content-reveal" id="challenge" aria-labelledby="challenge-title">
        <h2 class="project-section-title" id="challenge-title">Challenge</h2>
        ${renderProjectColumns(challenge)}
      </section>

      <section class="project-section content-reveal" id="deliverable" aria-labelledby="deliverable-title">
        <h2 class="project-section-title" id="deliverable-title">Deliverable</h2>
        <div class="project-gallery">
          ${galleryGroups.join("")}
        </div>
      </section>

      <section class="project-section content-reveal" id="result" aria-labelledby="result-title">
        <h2 class="project-section-title" id="result-title">Result</h2>
        ${renderProjectColumns(result)}
        ${renderTestimonials(testimonials)}
      </section>

      <section class="project-more content-reveal" aria-labelledby="project-more-title">
        <h2 id="project-more-title">See more</h2>
        <div class="works-grid works-grid--two">
          ${renderWorkCards(moreProjects)}
        </div>
      </section>
    </article>
  `;

  updateProjectStories();
  animateProjectTitle(document.querySelector("#project-title"));
}

// Naslov projekta tipka se slovo po slovo, kao naslov na početnoj stranici
function animateProjectTitle(title) {
  if (!title || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const chars = [];
  const fragment = document.createDocumentFragment();
  title.textContent.split(/(\s+)/).forEach((part) => {
    if (!part.trim()) {
      fragment.append(part);
      return;
    }
    // Riječ je u jednom spanu da se ne lomi usred tipkanja
    const word = document.createElement("span");
    word.className = "typed-word";
    [...part].forEach((letter) => {
      const char = document.createElement("span");
      char.className = "hero-char is-pending";
      char.textContent = letter;
      word.append(char);
      chars.push(char);
    });
    fragment.append(word);
  });
  title.replaceChildren(fragment);
  if (!chars.length) return;

  // Ostatak stranice čeka dok se naslov ne ispiše
  const view = title.closest(".project-view");
  view?.classList.add("is-typing-title");

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const cursor = document.createElement("span");
  cursor.className = "hero-cursor";
  cursor.setAttribute("aria-hidden", "true");
  chars[0].before(cursor);

  (async () => {
    await wait(400);
    title.classList.add("is-typing");
    for (const char of chars) {
      if (!title.isConnected) return;
      char.classList.remove("is-pending");
      char.after(cursor);
      await wait(/[.,?]/.test(char.textContent) ? 220 : 35 + Math.random() * 45);
    }
    title.classList.remove("is-typing");
    view?.classList.remove("is-typing-title");
  })();
}

// Dvije kolone s podnaslovom i tekstom (Challenge, Result)
function renderProjectColumns(items) {
  return `
    <div class="project-columns">
      ${items
        .map(
          (item) => `
            <div class="project-column">
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTestimonials(items) {
  if (!items?.length) return "";
  return `
    <div class="project-testimonials" aria-label="Testimonials">
      ${items
        .map(
          (item) => `
            <figure class="project-testimonial">
              <blockquote>“${item.quote}”</blockquote>
              <figcaption>
                ${renderTestimonialAvatar(item)}
                <span class="testimonial-person">
                  <span>${item.author}</span>
                  <span class="testimonial-role">${item.role}</span>
                </span>
              </figcaption>
            </figure>
          `
        )
        .join("")}
    </div>
  `;
}

// Profilna slika iz polja image; bez nje se prikazuju inicijali
function renderTestimonialAvatar(item) {
  if (item.image) {
    return `<img class="testimonial-avatar" src="${item.image}" alt="" loading="lazy" />`;
  }
  const initials = item.author
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  return `<span class="testimonial-avatar" aria-hidden="true">${initials}</span>`;
}

function renderProjectStory(text) {
  const words = text
    .trim()
    .split(/\s+/)
    .map((word) => `<span class="story-word">${word}</span>`)
    .join(" ");

  return `
    <section class="project-story">
      <p class="project-story-text">${words}</p>
    </section>
  `;
}

// Riječi se redom pune crnom bojom dok tekst putuje od dna prema gornjem dijelu ekrana
function updateProjectStories() {
  const viewportHeight = window.innerHeight;
  const start = viewportHeight * 0.9;
  const end = viewportHeight * 0.35;

  document.querySelectorAll(".project-story-text").forEach((text) => {
    const words = text.querySelectorAll(".story-word");
    const rect = text.getBoundingClientRect();
    // Napredak prati sredinu teksta, pa i dulji odlomci završe dok su još na ekranu
    const center = rect.top + rect.height / 2;
    const progress = Math.min(Math.max((start - center) / (start - end), 0), 1);
    const filledCount = Math.round(progress * words.length);

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

function routeWithTransition() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduceMotion) {
    route();
    return;
  }

  document.startViewTransition(route);
}

window.addEventListener("hashchange", routeWithTransition);
window.addEventListener("resize", updateNavIndicators);
window.addEventListener("resize", updateProjectStories);
window.addEventListener("scroll", updateProjectStories, { passive: true });
window.addEventListener("scroll", updateActiveSection, { passive: true });
window.addEventListener("scrollend", () => {
  releaseSectionLock();
  updateActiveSection();
});
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