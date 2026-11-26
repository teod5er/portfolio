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
    "Hey, I am Teo Peter. Creative graphic engineer moving between screens, paper, code, and socials.",
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
    // externalUrl: na listi radova stranica se otvara u overlayu (iframe), drugdje u novoj kartici
    externalUrl: "https://vladomartek.com/",
    client: "Vlado Marek",
    year: "2026",
    category: "Web",
    services: ["Web"],
    images: ["web_vlado-marek/hero_0.png"],
  },
  {
    slug: "frankie",
    title: "Frankie AI assistant",
    externalUrl: "https://frankie.frankfurt-school.de/",
    client: "Frankfurt School",
    year: "2026",
    category: "Web",
    services: ["Web", "UX/UI flows"],
    images: ["web_frankie/0_hero.jpg"],
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
  updateNavOverBento();
}

// Na naslovnici je navigacija skrivena dok je bento u prozoru (bento ima svoje linkove)
function updateNavOverBento() {
  const bento = state.view === "cv" ? app.querySelector(".bento") : null;
  const isOver = Boolean(bento) && bento.getBoundingClientRect().bottom > window.innerHeight * 0.6;
  navigationStack?.classList.toggle("is-over-bento", isOver);
  if (navigationStack) navigationStack.inert = isOver;
}

window.addEventListener("scroll", updateNavOverBento, { passive: true });
window.addEventListener("resize", updateNavOverBento);

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
  const scroller = overlayScroller();
  const atBottom = scroller
    ? scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 2
    : window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) activeId = projectSections[projectSections.length - 1].id;

  setActiveSection(activeId);
  trackProjectSection(activeId);
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
const publishedWorks = works.filter((work) => !work.comingSoon && !work.externalUrl);

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
        <a class="work-card" href="${work.externalUrl || projectHref(work.slug)}"${work.externalUrl ? ` target="_blank" rel="noopener noreferrer" data-site="${work.slug}"` : ""} aria-label="${work.title}, ${work.client}${work.externalUrl ? " (opens in a new tab)" : ""}">
          ${mediaHtml}
          <div class="work-card-copy">
            <div class="work-title-row">
              <h2>${work.title}${work.externalUrl ? '<span class="external-icon" aria-hidden="true">↗</span>' : ""}</h2>
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
      <section class="bento${quickProject.enabled ? " has-quick" : ""}" aria-label="Overview">
      <div class="bento-tile bento-hero" style="--i:0">
        <h1 id="cv-title">
          <span class="hero-intro-line">Hey, I am Teo Peter.</span>
          <span class="hero-main-line">
            Creative graphic <span class="hero-typed" data-typed-words="engineer,designer"><span class="hero-typed-text">engineer</span></span> moving between
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
        <p class="bento-hero-meta"><span class="sk">Currently at <a class="bento-ink" href="https://www.sawraft.com" target="_blank" rel="noopener noreferrer">Sawraft Studio</a></span><span class="bento-meta-sep" aria-hidden="true">·</span><span class="sk">Zagreb, Croatia &amp; Remote</span></p>
      </div>
      ${renderBentoTiles()}
      </section>
      ${renderQuickProjectModal()}

      <div class="rest-of-content content-reveal" id="about-more">
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
      </div>
    </article>
  `;

  animateHeroTitle();
  initScrollHint();
  initBentoProjects();
  initBentoFacts();
  initBentoClients();
  initQuickProject();
  renderBentoNote();
}

// Radovi za rotirajuću kućicu: svi koji imaju thumbnail, bez onih koji tek dolaze
const bentoWorks = works.filter((work) => !work.comingSoon).slice(0, 5);

// Alati u kućici "Tools I use"
// Alati u traci "Tools I use" (ikone iz Simple Icons, mapa tools/)
const bentoTools = [
  { name: "Figma", icon: "figma" },
  { name: "Photoshop", icon: "adobephotoshop" },
  { name: "Illustrator", icon: "adobeillustrator" },
  { name: "InDesign", icon: "adobeindesign" },
  { name: "Claude", icon: "claude" },
  { name: "Notion", icon: "notion" },
  { name: "Jira", icon: "jira" },
  { name: "Google Workspace", icon: "google" },
  { name: "Slack", icon: "slack" },
];

// Izmjenjive rečenice u About kućici
const bentoFacts = [
  "M.A. in Graphic Product Design &amp; Engineering, University of Zagreb.",
  "Designing interfaces, brands and design systems at <span class=\"bento-ink\">Sawraft Studio</span>.",
  "Published research on brutalist web design in <span class=\"bento-ink\">Acta Graphica</span>.",
  "Prototyping with AI and finishing the Google AI Professional Certificate.",
  "Volunteer designer for 1postozagrad and Sindikat biciklista.",
];

// Logotipi klijenata (mapa logos/); project: slug rada koji se otvara klikom u novoj kartici
const bentoClients = [
  { name: "Frankfurt School", file: "frankfurt school.svg", project: "frankie" },
  { name: "Kotsovolos", file: "kotsovolos.svg", project: "split-payments" },
  { name: "INmusic festival", file: "inmusic festival.svg" },
  { name: "LeaseUp", file: "leaseup.svg" },
  { name: "Sindikat biciklista", file: "sindikat-biciklista 1.svg" },
];

// Logo vodi na projekt klijenta u novoj kartici (vanjski link ili stranica projekta)
function renderClientLogo(client) {
  const img = `<img src="logos/${encodeURIComponent(client.file)}?v=2" alt="${client.name}" />`;
  const work = client.project && works.find((item) => item.slug === client.project);
  if (!work) return img;
  const href = work.externalUrl || projectHref(work.slug);
  return `<a class="bento-client-link" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${work.title} (opens in a new tab)">${img}</a>`;
}

// Isti link kao "Get a summary" u footeru
// Ista ikona za "+" u Notes listi i "×" za zatvaranje overlaya (× je ovaj + zakrenut za 45°)
const PLUS_ICON =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5v11M2.5 8h11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

// Strelice istog crteža kao "+" (linija 1,5 px, zaobljeni krajevi)
const ARROW_ICON_RIGHT =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
// "Otvori u novoj kartici": dijagonalna strelica istog crteža
const EXPAND_ICON =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ARROW_ICON_LEFT =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const SUMMARY_URL =
  "https://chatgpt.com/?q=Give+me+a+concise%2C+well-sourced+summary+of+Teo+Peter%2C+a+graphic+designer+from+Zagreb.+Cover+his+projects%2C+put+focus+on+UX%2FUI+solution+and+branding+work%2C+previous+experience%2C+education%2C+and+notable+design+projects+as+well+as+published+research+articles+in+Acta+Graphica.+Make+it+short+and+helpful.&utm_source=chatgpt.com";

// OpenAI/ChatGPT ikona (Simple Icons)
const OPENAI_ICON_PATH =
  "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z";

// Quick project: mala kućica koja otvara jednostavnu prezentaciju zadnjeg projekta preko cijelog ekrana.
// Slajdovi: "cover" (naslov i slika), "story" (priča o projektu), "site" (živi web), "phone" (živi web na mobitelu).
// label je oznaka slajda u gornjoj traci.
const quickProject = {
  // enabled: false sakriva kućicu i prezentaciju s naslovnice
  enabled: false,
  name: "Vlado Martek",
  meta: "Website · 2026",
  url: "https://vladomartek.com",
  thumb: "web_vlado-marek/hero_0.png",
  slides: [
    { type: "cover", label: "Project", title: "Vlado Martek", text: "Bilingual portfolio website for a Croatian conceptual artist and poet.", image: "web_vlado-marek/hero_0.png" },
    {
      type: "story",
      label: "Story",
      title: "A gallery, not a catalogue",
      image: "web_vlado-marek/hero_B.png",
      paragraphs: [
        "Vlado Martek writes, paints and stages actions, and much of it is done by hand. The site had to hold poems, books, paintings, actions, texts and photography without flattening them into a catalogue.",
        "So the works hang in an endless gallery instead of a grid. They drift past one by one, stop on hover and can be dragged, swiped or scrolled. Grid and list views are there for anyone who wants an overview, and every click answers with a small sound.",
      ],
      facts: "Croatian and English · Vite and vanilla JS · No backend",
    },
    { type: "site", label: "Live site" },
    { type: "phone", label: "On mobile" },
  ],
};

function renderQuickSlide(slide) {
  // Web se prikazuje u stvarnoj veličini (1440 × 900 ili 390 × 844) i skalira da stane
  const site = `<iframe class="qp-site" data-src="${quickProject.url}" title="${quickProject.name} website" loading="lazy"></iframe>`;
  switch (slide.type) {
    case "cover":
      return `
        <div class="qp-cover-copy">
          <h2 class="qp-title">${slide.title}</h2>
          <p class="qp-text">${slide.text}</p>
        </div>
        <img class="qp-cover-img" src="${slide.image}" alt="" />`;
    case "story":
      return `
        <img class="qp-story-img" src="${slide.image}" alt="${quickProject.name}" />
        <div class="qp-story-copy">
          <h2 class="qp-heading">${slide.title}</h2>
          ${slide.paragraphs.map((text) => `<p class="qp-text">${text}</p>`).join("")}
          <p class="qp-facts">${slide.facts}</p>
        </div>`;
    case "site":
      return `<div class="qp-fit"><div class="qp-screen" data-w="1440" data-h="900">${site}</div></div>`;
    case "phone":
      return `<div class="qp-fit"><div class="qp-screen qp-screen--phone" data-w="390" data-h="844">${site}</div></div>`;
    default:
      return "";
  }
}

function renderQuickProjectTile() {
  if (!quickProject.enabled) return "";
  return `
    <button class="bento-tile bento-quick" type="button" data-quick-open aria-haspopup="dialog" aria-label="Quick project: ${quickProject.name}, open presentation">
      <img class="bento-quick-bg" src="${quickProject.thumb}" alt="" aria-hidden="true" />
      <span class="bento-label"><span class="sk">Quick project</span></span>
      <span class="bento-quick-body">
        <span class="bento-quick-title">${quickProject.name}</span>
        <span class="bento-quick-meta">${quickProject.meta}</span>
      </span>
      <span class="bento-quick-play" aria-hidden="true">
        <svg viewBox="0 0 16 16"><path d="M5 3.5v9l7.5-4.5z" fill="currentColor"/></svg>
      </span>
    </button>
  `;
}

function renderQuickProjectModal() {
  if (!quickProject.enabled) return "";
  const total = quickProject.slides.length;
  const slides = quickProject.slides
    .map(
      (slide, index) => `
        <section class="qp-slide qp-slide--${slide.type}${index === 0 ? " is-active" : ""}" aria-roledescription="slide" aria-label="${index + 1} of ${total}"${index === 0 ? "" : " aria-hidden=\"true\""}>
          ${renderQuickSlide(slide)}
        </section>`
    )
    .join("");

  return `
    <dialog class="qp-modal" aria-label="Quick project: ${quickProject.name}">
      <div class="qp-shell">
        <header class="qp-bar">
          <nav class="qp-tabs" aria-label="Slides">
            ${quickProject.slides.map((slide, index) => `<button class="qp-tab${index === 0 ? " is-active" : ""}" type="button" data-qp-go="${index}"${index === 0 ? ' aria-current="true"' : ""}>${slide.label}</button>`).join("")}
          </nav>
          <span class="qp-bar-end">
            <a class="qp-link" href="${quickProject.url}" target="_blank" rel="noopener noreferrer">${quickProject.url.replace("https://", "")} ↗</a>
            <button class="qp-btn" type="button" data-qp-close aria-label="Close">×</button>
          </span>
        </header>
        <div class="qp-stage" tabindex="-1" aria-roledescription="carousel">${slides}</div>
        <footer class="qp-nav">
          <button class="qp-btn" type="button" data-qp-step="-1" aria-label="Previous slide">←</button>
          <button class="qp-btn" type="button" data-qp-step="1" aria-label="Next slide">→</button>
        </footer>
      </div>
    </dialog>
  `;
}

function renderBentoTiles() {
  const slides = bentoWorks
    .map((work, index) => {
      const href = work.externalUrl || projectHref(work.slug);
      const target = work.externalUrl ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `
        <a class="bento-slide${index === 0 ? " is-active" : ""}" href="${href}"${target} aria-label="${work.title}, ${work.client}" ${index === 0 ? "" : 'tabindex="-1" aria-hidden="true"'}>
          ${renderWorkThumb(work.images[0], "bento-slide-media", "")}
          <span class="bento-slide-copy">
            <span class="bento-slide-title"><span class="sk">${work.title}</span></span>
            <span class="bento-slide-meta"><span class="sk">${work.services.join(", ")} · ${work.year}</span></span>
          </span>
        </a>
      `;
    })
    .join("");

  const dots = bentoWorks
    .map((_, index) => `<button type="button" class="bento-dot${index === 0 ? " is-active" : ""}" data-slide="${index}" aria-label="Show project ${index + 1}"></button>`)
    .join("");

  const toolItems = (hidden) =>
    bentoTools
      .map(
        (tool) => `
          <li${hidden ? ' aria-hidden="true"' : ""} title="${tool.name}">
            <img src="tools/${tool.icon}.svg" alt="${hidden ? "" : tool.name}" />
          </li>`
      )
      .join("");

  return `
    <div class="bento-tile bento-work" style="--i:1" aria-roledescription="carousel" aria-label="Latest work">
      <div class="bento-slides">${slides}</div>
      <button class="bento-next" type="button" aria-label="Next project"></button>
      <div class="bento-story-head">
        <div class="bento-dots">${dots}</div>
        <div class="bento-story-meta">
          <img class="bento-story-avatar" src="avatar.png" alt="" />
          <span>Latest work</span>
          <a class="bento-more" href="#projects">All work</a>
        </div>
      </div>
    </div>

    <div class="bento-tile bento-about" style="--i:2" aria-label="About me" role="group">
      <div class="bento-about-top">
        <span class="bento-avatar"><img src="avatar.png" alt="" /></span>
        <div class="bento-about-actions">
          <button class="bento-pill" type="button" data-scroll-about>More</button>
          <a class="bento-pill bento-pill--icon" href="${SUMMARY_URL}" target="_blank" rel="noopener noreferrer" aria-label="Get a summary from ChatGPT (opens in a new tab)" title="Get a summary">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="${OPENAI_ICON_PATH}"/></svg>
          </a>
        </div>
      </div>
      <div class="bento-about-facts" aria-live="polite">
        ${bentoFacts.map((fact, index) => `<p class="bento-fact${index === 0 ? " is-active" : ""}"><span class="sk">${fact}</span></p>`).join("")}
      </div>
    </div>

    <div class="bento-tile bento-tools" style="--i:3">
      <span class="bento-label"><span class="sk">Tools I use</span></span>
      <div class="bento-marquee">
        <ul class="bento-marquee-track">${toolItems(false)}${toolItems(true)}</ul>
      </div>
    </div>

    ${renderQuickProjectTile()}

    <a class="bento-tile bento-note" href="#blog" style="--i:4" aria-label="Latest note">
      <span class="bento-label"><span class="sk">Notes</span></span>
      <span class="bento-note-body">
        <span class="bento-note-date"><span class="sk">25 Oct 2026</span></span>
        <span class="bento-note-title"><span class="sk">Reading the latest note…</span></span>
      </span>
    </a>

    <a class="bento-tile bento-playground" href="./ai-playground/index.html" target="_blank" rel="noopener noreferrer" style="--i:5" aria-label="AI Playground (opens in a new tab)">
      <span class="bento-playground-bg" aria-hidden="true"></span>
      <span class="bento-label"><span class="sk">AI Playground</span></span>
      <span class="bento-apps" aria-hidden="true">
        <span class="bento-app"><img src="ai-playground/2dto3d.png" alt="" /><span>2D to 3D</span></span>
        <span class="bento-app"><img src="ai-playground/posta.png" alt="" /><span>Posta</span></span>
      </span>
    </a>

    <div class="bento-tile bento-clients" style="--i:6">
      <span class="bento-label"><span class="sk">Clients</span></span>
      <ul class="bento-client-list" aria-live="polite">
        ${bentoClients.map((client, index) => `<li class="bento-client${index === 0 ? " is-active" : ""}">${renderClientLogo(client)}</li>`).join("")}
      </ul>
      <div class="bento-client-nav">
        <button class="bento-client-arrow" type="button" data-client-step="-1" aria-label="Previous client">${ARROW_ICON_LEFT}</button>
        <button class="bento-client-arrow" type="button" data-client-step="1" aria-label="Next client">${ARROW_ICON_RIGHT}</button>
      </div>
    </div>
  `;
}

let bentoTimer = 0;

// Širina scrollbara, da bento od ruba do ruba ne gura stranicu u stranu
function updateScrollbarWidth() {
  const width = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty("--scrollbar-width", `${width}px`);
}
updateScrollbarWidth();
window.addEventListener("resize", updateScrollbarWidth);

// Rotirajući projekti: izmjena svakih 6,5 s (isto trajanje kao traka u CSS-u), pauza na hover/focus
const BENTO_STORY_MS = 6500;

function initBentoProjects() {
  clearInterval(bentoTimer);
  const tile = app.querySelector(".bento-work");
  if (!tile) return;
  const slides = [...tile.querySelectorAll(".bento-slide")];
  const dots = [...tile.querySelectorAll(".bento-dot")];
  if (slides.length < 2) return;
  tile.style.setProperty("--story-duration", `${BENTO_STORY_MS}ms`);

  let current = 0;
  let paused = false;

  const show = (index) => {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle("is-active", active);
      slide.toggleAttribute("aria-hidden", !active);
      if (active) slide.removeAttribute("tabindex");
      else slide.setAttribute("tabindex", "-1");
    });
    dots.forEach((dot, i) => {
      // Kao u storyju: prijašnje trake su pune, aktivna se puni
      dot.classList.remove("is-active");
      dot.classList.toggle("is-done", i < current);
    });
    // Reflow da se animacija trake pokrene ispočetka
    void dots[current].offsetWidth;
    dots[current].classList.add("is-active");
  };

  const restart = () => {
    clearInterval(bentoTimer);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    bentoTimer = setInterval(() => {
      if (!tile.isConnected) return clearInterval(bentoTimer);
      if (!paused) show(current + 1);
    }, BENTO_STORY_MS);
  };

  tile.addEventListener("pointerenter", () => { paused = true; tile.classList.add("is-paused"); });
  tile.addEventListener("pointerleave", () => { paused = false; tile.classList.remove("is-paused"); });
  tile.addEventListener("focusin", () => { paused = true; });
  tile.addEventListener("focusout", () => { paused = false; });
  tile.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    // Klik na desnu stranu vodi na idući projekt, kao u storyju
    if (event.target.closest(".bento-next")) {
      show(current + 1);
      restart();
      return;
    }
    const dot = event.target.closest("[data-slide]");
    if (!dot) return;
    show(Number(dot.dataset.slide));
    restart();
  });

  restart();
}

// Quick project prezentacija: <dialog> preko cijelog ekrana; oznake gore i strelice listaju, Esc zatvara.
// Web se u iframe učitava tek kad se prezentacija otvori.
function initQuickProject() {
  document.documentElement.classList.remove("qp-open");
  const tile = app.querySelector("[data-quick-open]");
  const modal = app.querySelector(".qp-modal");
  if (!tile || !modal) return;
  const slides = [...modal.querySelectorAll(".qp-slide")];
  const tabs = [...modal.querySelectorAll(".qp-tab")];
  const prev = modal.querySelector("[data-qp-step='-1']");
  const next = modal.querySelector("[data-qp-step='1']");
  let current = 0;

  // Ekran zadržava omjer weba (16:10 ili mobitel) i staje u slobodan prostor; iframe se skalira
  const fitScreens = () => {
    modal.querySelectorAll(".qp-screen").forEach((screen) => {
      const box = screen.parentElement;
      const w = Number(screen.dataset.w);
      const h = Number(screen.dataset.h);
      const scale = Math.min(box.clientWidth / w, box.clientHeight / h) || 1;
      screen.style.width = `${w * scale}px`;
      screen.style.height = `${h * scale}px`;
      screen.style.setProperty("--qp-scale", scale);
    });
  };

  const show = (index) => {
    const target = Math.max(0, Math.min(slides.length - 1, index));
    if (target === current) return;
    slides[current].classList.remove("is-active");
    slides[current].setAttribute("aria-hidden", "true");
    current = target;
    slides[current].classList.add("is-active");
    slides[current].removeAttribute("aria-hidden");
    tabs.forEach((tab, i) => {
      tab.classList.toggle("is-active", i === current);
      tab.toggleAttribute("aria-current", i === current);
    });
    prev.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    fitScreens();
  };

  tile.addEventListener("click", () => {
    modal.querySelectorAll("iframe[data-src]").forEach((frame) => {
      frame.src = frame.dataset.src;
      frame.removeAttribute("data-src");
    });
    document.documentElement.classList.add("qp-open");
    modal.showModal();
    fitScreens();
    modal.querySelector(".qp-stage").focus({ preventScroll: true });
  });
  modal.addEventListener("close", () => document.documentElement.classList.remove("qp-open"));
  modal.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    if (event.target.closest("[data-qp-close]")) return modal.close();
    const arrow = event.target.closest("[data-qp-step]");
    if (arrow) return show(current + Number(arrow.dataset.qpStep));
    const tab = event.target.closest("[data-qp-go]");
    if (tab) show(Number(tab.dataset.qpGo));
  });
  modal.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    show(current + (event.key === "ArrowRight" ? 1 : -1));
  });
  window.addEventListener("resize", () => modal.open && fitScreens());

  prev.disabled = true;
}

let clientsTimer = 0;

// Klijenti: jedan logotip za drugim svakih 3,5 s, strelice listaju ručno
function initBentoClients() {
  clearInterval(clientsTimer);
  const tile = app.querySelector(".bento-clients");
  const items = [...app.querySelectorAll(".bento-client")];
  if (!tile || items.length < 2) return;
  let current = 0;

  const show = (index, step) => {
    // Naprijed: stari ide gore, novi dolazi odozdo; unatrag obrnuto
    const leaving = items[current];
    leaving.classList.remove("is-active", "from-prev");
    leaving.classList.add(step < 0 ? "is-leaving-down" : "is-leaving");
    setTimeout(() => leaving.classList.remove("is-leaving", "is-leaving-down"), 600);

    current = (index + items.length) % items.length;
    const incoming = items[current];
    incoming.classList.remove("is-leaving", "is-leaving-down");
    incoming.classList.toggle("from-prev", step < 0);
    void incoming.offsetWidth;
    incoming.classList.add("is-active");
  };

  const restart = () => {
    clearInterval(clientsTimer);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clientsTimer = setInterval(() => {
      if (!tile.isConnected) return clearInterval(clientsTimer);
      show(current + 1, 1);
    }, 3500);
  };

  tile.addEventListener("click", (event) => {
    const arrow = event.target instanceof Element && event.target.closest("[data-client-step]");
    if (!arrow) return;
    const step = Number(arrow.dataset.clientStep);
    show(current + step, step);
    restart();
  });

  restart();
}

let scrollHintTimer = 0;

// Ako korisnik dugo stoji na vrhu naslovnice, bento se lagano pomakne gore i vrati
// da pokaže da ispod ima još sadržaja. Prestaje čim korisnik skrola.
function initScrollHint() {
  clearTimeout(scrollHintTimer);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const bento = app.querySelector(".bento");
  if (!bento) return;

  const delays = [7000, 12000, 12000];
  let count = 0;

  const stop = () => {
    clearTimeout(scrollHintTimer);
    window.removeEventListener("scroll", onScroll);
  };
  const onScroll = () => {
    if (window.scrollY > 10) stop();
  };

  const schedule = () => {
    if (count >= delays.length) return stop();
    scrollHintTimer = setTimeout(() => {
      if (!bento.isConnected) return stop();
      if (window.scrollY > 10) return stop();
      bento.classList.remove("is-nudging");
      void bento.offsetWidth;
      bento.classList.add("is-nudging");
      count += 1;
      schedule();
    }, delays[count]);
  };

  bento.addEventListener("animationend", (event) => {
    if (event.animationName === "bentoNudge") bento.classList.remove("is-nudging");
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  schedule();
}

let factsTimer = 0;

// About: rečenice se izmjenjuju svakih 3,5 s
function initBentoFacts() {
  clearInterval(factsTimer);
  const facts = [...app.querySelectorAll(".bento-fact")];
  if (facts.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let current = 0;
  factsTimer = setInterval(() => {
    if (!facts[0].isConnected) return clearInterval(factsTimer);
    facts[current].classList.remove("is-active");
    current = (current + 1) % facts.length;
    facts[current].classList.add("is-active");
  }, 3500);
}

// About kućica skrola do detalja ispod bento mreže (bez promjene hasha)
app.addEventListener("click", (event) => {
  const trigger = event.target instanceof Element && event.target.closest("[data-scroll-about]");
  if (!trigger) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("about-more")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
});

async function renderBentoNote() {
  const notes = await loadNotes();
  const tile = app.querySelector(".bento-note");
  if (!tile) return;
  const latest = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  if (!latest) {
    tile.querySelector(".bento-note-title .sk").textContent = "Notes coming soon";
    return;
  }
  tile.querySelector(".bento-note-date .sk").textContent = formatNoteDate(latest.date);
  tile.querySelector(".bento-note-title .sk").textContent = latest.title;
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
        <article class="note">
          <a class="note-summary" href="index.html?note=${encodeURIComponent(noteId(note))}#blog" data-note="${noteId(note)}">
            <span class="note-heading">
              <span class="blog-card-meta">${formatNoteDate(note.date)}</span>
              <h2>${note.title}</h2>
              ${note.subtitle ? `<span class="note-subtitle">${note.subtitle}</span>` : ""}
            </span>
            <span class="note-toggle icon-button" aria-hidden="true">${PLUS_ICON}</span>
          </a>
        </article>
      `
    )
    .join("");
}

function renderProject(slug) {
  const project = publishedWorks.find((work) => work.slug === slug);
  if (!project) {
    window.location.replace("index.html#projects");
    return;
  }
  state.view = "project";
  document.title = `${project.title} · Teo Peter`;
  removeProjectDescription();

  app.innerHTML = projectMarkup(project);

  updateProjectStories();
  animateProjectTitle(document.querySelector("#project-title"));
}

// Sadržaj stranice projekta; isti markup koristi i samostalna stranica i overlay nad listom radova
function projectMarkup(project) {
  // See more: dva najnovija rada iz iste kategorije; ako ih nema dovoljno,
  // dopunjuje se najnovijim radovima iz ostalih kategorija
  const newestFirst = publishedWorks
    .filter((work) => work.slug !== project.slug)
    .sort((a, b) => Number(b.year) - Number(a.year));
  const moreProjects = [
    ...newestFirst.filter((work) => work.category === project.category),
    ...newestFirst.filter((work) => work.category !== project.category),
  ].slice(0, 2);

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

  return `
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
}

// ───────── Overlay: projekt nad listom radova, bilješka nad Notes ─────────
// Klik na rad u listi (ili u See more unutar overlaya) ili na bilješku u Notes otvara sadržaj preko
// stranice: pozadina se zamuti, sadržaj izroni iz kliknutog elementa, × u kutu zatvara.
// URL se mijenja (project.html?slug=… ili ?note=…#blog), pa Back zatvara overlay, a link se može podijeliti.
const siteShell = document.querySelector(".site-shell");
let activeOverlay = null; // { el, kind, returnView, returnTitle, returnFocus }
let ignoreNextHashchange = false;
const OVERLAY_CLOSE_MS = 420;

function overlayScroller() {
  return activeOverlay?.el.querySelector(".project-overlay-scroll") || null;
}

function createOverlayElement() {
  const overlay = document.createElement("div");
  overlay.className = "project-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.innerHTML = `
    <div class="project-overlay-scroll" tabindex="-1">
      <div class="project-overlay-body"></div>
    </div>
    <div class="project-overlay-actions">
      <a class="project-overlay-expand icon-button" href="#" target="_blank" rel="noopener noreferrer" aria-label="Open in a new tab" hidden>${EXPAND_ICON}</a>
      <button class="project-overlay-close icon-button" type="button" aria-label="Close">${PLUS_ICON}</button>
    </div>
  `;

  const scroller = overlay.querySelector(".project-overlay-scroll");
  scroller.addEventListener("scroll", () => {
    updateNavOnScroll(scroller.scrollTop);
    updateProjectStories();
    updateActiveSection();
  }, { passive: true });
  scroller.addEventListener("scrollend", () => {
    releaseSectionLock();
    updateActiveSection();
  });
  // Klik na zamućenu pozadinu (izvan sadržaja) zatvara overlay
  scroller.addEventListener("click", (event) => {
    if (event.target === scroller || event.target.classList.contains("project-overlay-body")) {
      requestCloseOverlay();
    }
  });
  overlay.querySelector(".project-overlay-close").addEventListener("click", requestCloseOverlay);

  document.body.append(overlay);
  return overlay;
}

// Sadržaj izranja iz kliknutog elementa: točka iz koje raste je njegova sredina
function setOverlayOrigin(body, source) {
  const rect = source?.getBoundingClientRect();
  if (!rect) {
    body.style.removeProperty("--overlay-origin");
    return;
  }
  const bodyRect = body.getBoundingClientRect();
  const x = rect.left + rect.width / 2 - bodyRect.left;
  const y = rect.top + rect.height / 2 - bodyRect.top;
  body.style.setProperty("--overlay-origin", `${x}px ${y}px`);
}

// content: { kind, html, label, view, title, url, historyState, afterFill }
function openOverlay(content, { source = null, push = true } = {}) {
  const isSwap = Boolean(activeOverlay);
  if (!activeOverlay) {
    activeOverlay = {
      el: createOverlayElement(),
      returnView: state.view,
      returnTitle: document.title,
      returnFocus: source || document.activeElement,
    };
    updateScrollbarWidth();
    document.documentElement.classList.add("has-project-overlay");
    if (siteShell) siteShell.inert = true;
  }
  activeOverlay.kind = content.kind;
  // Uz bilješku nema navigacije (ne treba joj, a prekrivala bi tekst); uz projekt ostaje traka sekcija
  document.documentElement.classList.toggle("has-note-overlay", content.kind === "note");
  // Isto uz vanjsku stranicu: traka bi prekrila dno iframea
  document.documentElement.classList.toggle("has-site-overlay", content.kind === "site");

  const overlay = activeOverlay.el;
  const scroller = overlayScroller();
  const body = overlay.querySelector(".project-overlay-body");

  const fill = () => {
    body.innerHTML = content.html;
    overlay.setAttribute("aria-label", content.label);
    overlay.dataset.kind = content.kind;
    // Expand (nova kartica) postoji samo uz vanjsku stranicu
    const expand = overlay.querySelector(".project-overlay-expand");
    expand.hidden = !content.externalUrl;
    if (content.externalUrl) expand.href = content.externalUrl;
    scroller.scrollTop = 0;
    resetNavOnScroll(0);
    state.view = content.view;
    document.title = content.title;
    updateSwitch();
    content.afterFill?.(body);
  };

  if (push) history.pushState(content.historyState, "", content.url);

  if (isSwap) {
    // Drugi sadržaj (npr. projekt iz See more): stari se spusti i nestane, novi izroni
    body.classList.add("is-swapping");
    setTimeout(() => {
      fill();
      body.style.removeProperty("--overlay-origin");
      body.classList.remove("is-swapping");
    }, OVERLAY_CLOSE_MS);
  } else {
    fill();
    setOverlayOrigin(body, source);
    // Dva framea da preglednik prvo nacrta početno stanje, pa tek onda animira
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add("is-open")));
  }

  scroller.focus({ preventScroll: true });
  return true;
}

function closeOverlay() {
  const current = activeOverlay;
  if (!current) return;
  activeOverlay = null;

  const overlay = current.el;
  overlay.classList.remove("is-open");
  overlay.classList.add("is-closing");
  state.view = current.returnView;
  document.title = current.returnTitle;
  resetNavOnScroll(window.scrollY);
  updateSwitch();
  trackPageView();

  setTimeout(() => {
    overlay.remove();
    document.documentElement.classList.remove("has-project-overlay", "has-note-overlay", "has-site-overlay");
    if (siteShell) siteShell.inert = false;
    current.returnFocus?.focus?.({ preventScroll: true });
  }, OVERLAY_CLOSE_MS);
}

// Zatvaranje ide kroz povijest, da Back i × rade isto
function requestCloseOverlay() {
  if (!activeOverlay) return;
  if (history.state?.projectOverlay || history.state?.noteOverlay || history.state?.siteOverlay) {
    history.back();
  } else {
    history.replaceState(null, "", activeOverlay.kind === "note" ? "index.html#blog" : "index.html#projects");
    closeOverlay();
  }
}

function openProjectOverlay(slug, options = {}) {
  const project = publishedWorks.find((work) => work.slug === slug);
  if (!project) return false;
  openOverlay(
    {
      kind: "project",
      html: projectMarkup(project),
      label: project.title,
      view: "project",
      title: `${project.title} · Teo Peter`,
      url: projectHref(slug),
      historyState: { projectOverlay: slug },
      afterFill: (body) => {
        updateProjectStories();
        animateProjectTitle(body.querySelector("#project-title"));
      },
    },
    options
  );
  trackPageView(slug);
  return true;
}

// Vanjska stranica (Frankie, Vlado Martek) u iframeu, s × i expand u kutu
function openSiteOverlay(slug, options = {}) {
  const work = works.find((item) => item.slug === slug && item.externalUrl);
  if (!work) return false;
  const domain = new URL(work.externalUrl).hostname.replace(/^www\./, "");
  openOverlay(
    {
      kind: "site",
      html: `
        <div class="site-view">
          <div class="site-view-bar">
            <span class="site-view-title">${work.title}</span>
            <span class="site-view-domain">${domain}</span>
          </div>
          <div class="site-view-frame">
            <iframe src="${work.externalUrl}" title="${work.title}" loading="eager" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      `,
      label: work.title,
      view: "projects",
      title: `${work.title} · Teo Peter`,
      url: `index.html?site=${encodeURIComponent(slug)}#projects`,
      historyState: { siteOverlay: slug },
      externalUrl: work.externalUrl,
    },
    options
  );
  trackPageView(slug);
  return true;
}

// Bilješka se prepoznaje po zadnjem dijelu Substack adrese
function noteId(note) {
  try {
    return new URL(note.url).pathname.split("/").filter(Boolean).pop() || "";
  } catch {
    return "";
  }
}

// Vrijeme čitanja: oko 220 riječi u minuti
function noteReadingTime(html) {
  const text = new DOMParser().parseFromString(html, "text/html").body.textContent || "";
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function noteMarkup(note) {
  return `
    <article class="note-view" aria-labelledby="note-view-title">
      <header class="note-view-header">
        <p class="note-view-meta">
          <span>${formatNoteDate(note.date)}</span>
          <span aria-hidden="true">·</span>
          <span>${noteReadingTime(note.html)} min read</span>
        </p>
        <h1 id="note-view-title">${note.title}</h1>
        ${note.subtitle ? `<p class="note-view-subtitle">${note.subtitle}</p>` : ""}
      </header>
      <div class="note-body note-view-body">
        ${note.html}
      </div>
      ${note.url ? `
        <footer class="note-view-footer">
          <span>Originally published on Substack</span>
          <a class="bento-pill note-view-source" href="${note.url}" target="_blank" rel="noopener noreferrer">Read on Substack ↗</a>
        </footer>` : ""}
    </article>
  `;
}

async function openNoteOverlay(id, options = {}) {
  const notes = await loadNotes();
  const note = notes.find((item) => noteId(item) === id);
  if (!note) return false;
  openOverlay(
    {
      kind: "note",
      html: noteMarkup(note),
      label: note.title,
      view: "blog",
      title: `${note.title} · Teo Peter`,
      url: `index.html?note=${encodeURIComponent(id)}#blog`,
      historyState: { noteOverlay: id },
    },
    options
  );
  track("note_open", { note_title: note.title, click_location: options.source ? "notes_page" : "direct" });
  return true;
}

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Bilješka u Notes
  const noteLink = event.target.closest("a[data-note]");
  if (noteLink) {
    event.preventDefault();
    openNoteOverlay(noteLink.dataset.note, { source: reduceMotion ? null : noteLink });
    return;
  }

  // Rad u listi radova ili u See more unutar overlaya
  const card = event.target.closest("a.work-card");
  if (!card) return;
  if (state.view !== "projects" && !card.closest(".project-overlay")) return;
  if (card.dataset.site) {
    if (openSiteOverlay(card.dataset.site, { source: reduceMotion ? null : card.querySelector(".work-thumbs") || card })) {
      event.preventDefault();
    }
    return;
  }
  if (card.target === "_blank") return;
  const slug = new URL(card.href, window.location.href).searchParams.get("slug");
  if (!slug) return;
  if (openProjectOverlay(slug, { source: reduceMotion ? null : card.querySelector(".work-thumbs") || card })) {
    event.preventDefault();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activeOverlay) {
    event.preventDefault();
    requestCloseOverlay();
  }
});

window.addEventListener("popstate", (event) => {
  const { projectOverlay: slug, noteOverlay: note, siteOverlay: site } = event.state || {};
  if (slug) {
    openProjectOverlay(slug, { push: false });
  } else if (site) {
    openSiteOverlay(site, { push: false });
  } else if (note) {
    openNoteOverlay(note, { push: false });
  } else if (activeOverlay) {
    // Povratak na listu: hashchange koji uz to stigne ne smije ponovno iscrtati stranicu
    ignoreNextHashchange = true;
    setTimeout(() => { ignoreNextHashchange = false; }, 100);
    closeOverlay();
  }
});

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

// ───────── Analitika: Umami + Google Analytics (oboje bez kolačića) ─────────

// Umami se učitava s defer, pa pozivi prije učitavanja čekaju u redu
const umamiQueue = [];

function withUmami(callback) {
  if (window.umami) callback(window.umami);
  else umamiQueue.push(callback);
}

function flushUmami() {
  if (!window.umami) return;
  umamiQueue.splice(0).forEach((callback) => callback(window.umami));
}

document.addEventListener("DOMContentLoaded", flushUmami);
window.addEventListener("load", flushUmami);

function track(name, params = {}) {
  if (typeof window.gtag === "function") window.gtag("event", name, params);
  // Umami ne prima prazne vrijednosti, pa se šalju samo popunjeni parametri
  const data = Object.fromEntries(Object.entries(params).filter(([, value]) => value != null && value !== ""));
  withUmami((umami) => umami.track(name, data));
}

// Svaki prikaz dobiva svoju putanju, da se About, Work, Notes i projekti vide odvojeno
const viewPaths = { cv: "/", projects: "/work", blog: "/notes" };
let lastTrackedPath = "";

function trackPageView(slug) {
  const path = state.view === "project" ? `/project/${slug}` : viewPaths[state.view];
  if (!path || path === lastTrackedPath) return;
  lastTrackedPath = path;
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: `${window.location.origin}${path}`,
      page_referrer: document.referrer,
    });
  }
  const title = document.title;
  withUmami((umami) => umami.track((props) => ({ ...props, url: path, title })));
}

// Koliko daleko je posjetitelj došao kroz projekt; svaka sekcija se šalje jednom po posjetu
const trackedSections = new Set();

function trackProjectSection(id) {
  const key = `${window.location.search}|${id}`;
  if (trackedSections.has(key)) return;
  trackedSections.add(key);
  const slug = new URLSearchParams(window.location.search).get("slug");
  track("project_section", { project_name: slug, section: id });
}

// Gdje je kliknuto, da se zna radi li bento, Work grid, footer...
function clickLocation(element) {
  const places = [
    [".bento-work", "home_story"],
    [".bento-about", "home_about"],
    [".bento-clients", "home_clients"],
    [".bento-playground", "home_playground"],
    [".bento-note", "home_notes"],
    ["#cv-title", "home_hero"],
    [".bento", "home_bento"],
    [".project-more", "see_more"],
    [".works-grid", "work_grid"],
    [".blog-modal-project-link", "note_modal"],
    [".site-footer", "footer"],
  ];
  const match = places.find(([selector]) => element.closest(selector));
  return match ? match[1] : "other";
}

function projectFromLink(link) {
  const href = link.getAttribute("href") || "";
  const slug = new URL(href, window.location.href).searchParams.get("slug");
  if (slug) return slug;
  return works.find((work) => work.externalUrl && href.startsWith(work.externalUrl))?.slug;
}

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const target = event.target;
  const location = clickLocation(target);

  if (target.closest(".bento-next")) return track("story_next");
  const dot = target.closest(".bento-dot");
  if (dot) return track("story_dot", { slide: Number(dot.dataset.slide) + 1 });
  const clientArrow = target.closest("[data-client-step]");
  if (clientArrow) return track("client_nav", { direction: clientArrow.dataset.clientStep === "1" ? "next" : "prev" });
  if (target.closest("[data-scroll-about]")) return track("about_more_click");

  const link = target.closest("a[href]");
  if (!link) return;
  const href = link.getAttribute("href");

  const clientLink = link.closest(".bento-client-link");
  if (clientLink) {
    return track("client_click", {
      client_name: clientLink.querySelector("img")?.alt,
      project_name: projectFromLink(link),
    });
  }
  if (href.startsWith("https://chatgpt.com")) return track("ai_summary_click", { click_location: location });
  if (href.endsWith(".pdf")) return track("cv_download", { click_location: location });
  if (href.startsWith("mailto:")) return track("contact_click", { method: "email", click_location: location });
  if (href.includes("linkedin.com")) return track("contact_click", { method: "linkedin", click_location: location });
  if (href.includes("ai-playground")) return track("playground_open", { click_location: location });
  if (link.closest(".bento-note")) return track("note_open", { click_location: location });

  const project = projectFromLink(link);
  if (project) track("select_project", { project_name: project, click_location: location });
});

// Otvaranje bilješke na stranici Notes prati se u openNoteOverlay()

function route() {
  const hash = window.location.hash.replace("#", "");
  const projectSlug = new URLSearchParams(window.location.search).get("slug");
  if (hash.startsWith("work/")) {
    renderProject(hash.split("/")[1]);
  } else if (hash === "projects") {
    renderProjects();
    const siteParam = new URLSearchParams(window.location.search).get("site");
    if (siteParam) {
      history.replaceState(null, "", "index.html#projects");
      openSiteOverlay(siteParam);
    }
  } else if (hash === "blog") {
    renderBlog();
    const noteParam = new URLSearchParams(window.location.search).get("note");
    if (noteParam) {
      // Ispod overlaya ostaje čista lista Notes, da × i Back vode na nju, a ne izvan stranice
      history.replaceState(null, "", "index.html#blog");
      openNoteOverlay(noteParam);
    }
  } else if (hash === "cv") {
    renderCv();
  } else if (projectSlug) {
    renderProject(projectSlug);
  } else {
    renderCv();
  }

  updateSwitch();
  window.scrollTo({ top: 0, behavior: "instant" });
  resetNavOnScroll(0);
  app.focus({ preventScroll: true });
  trackPageView(projectSlug || hash.split("/")[1]);
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
  track("filter_work", { category: state.category });
  renderProjects();
  updateSwitch();
});

// Prijelaz između About, Work i Notes animira samo sadržaj (.site-shell), ne navigaciju.
// View Transition API bi traku snimio kao sliku bez blura, pa bi se blur pojavio tek na kraju.
const PAGE_LEAVE_MS = 220;
let pageTransitionId = 0;

function routeWithTransition() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !siteShell) {
    route();
    return;
  }

  const id = ++pageTransitionId;
  siteShell.classList.remove("is-page-entering");
  siteShell.classList.add("is-page-leaving");
  setTimeout(() => {
    if (id !== pageTransitionId) return;
    route();
    siteShell.classList.remove("is-page-leaving");
    siteShell.classList.add("is-page-entering");
    // Dva framea da se početno stanje nacrta prije animacije ulaska
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (id === pageTransitionId) siteShell.classList.remove("is-page-entering");
    }));
  }, PAGE_LEAVE_MS);
}

window.addEventListener("hashchange", () => {
  if (ignoreNextHashchange) {
    ignoreNextHashchange = false;
    return;
  }
  // Promjena prikaza (npr. About ili Notes) dok je projekt otvoren najprije zatvori overlay
  if (activeOverlay) closeOverlay();
  routeWithTransition();
});
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
// Na radovima i Notes (i u overlayu projekta) navigacija se skriva pri scrollu prema dolje
// i vraća pri scrollu prema gore ili na vrhu. Na naslovnici ostaje stalno vidljiva.
let lastSwitchScrollY = window.scrollY;
let scrollFrame = 0;

function updateNavOnScroll(currentScrollY) {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(() => {
    scrollFrame = 0;
    const scrollDifference = currentScrollY - lastSwitchScrollY;

    if (currentScrollY <= 0 || (state.view === "cv" && !activeOverlay)) {
      navigationStack?.classList.remove("is-scrolling-down");
      lastSwitchScrollY = currentScrollY;
      return;
    }

    if (Math.abs(scrollDifference) >= 8) {
      navigationStack?.classList.toggle("is-scrolling-down", scrollDifference > 0);
      lastSwitchScrollY = currentScrollY;
    }
  });
}

// Nakon otvaranja ili zatvaranja overlaya traka se ponovno prikaže
function resetNavOnScroll(currentScrollY = 0) {
  lastSwitchScrollY = currentScrollY;
  navigationStack?.classList.remove("is-scrolling-down");
}

window.addEventListener(
  "scroll",
  () => {
    if (activeOverlay) return;
    updateNavOnScroll(window.scrollY);
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