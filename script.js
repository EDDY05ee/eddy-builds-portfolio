/* ============================================================
   EDDY BUILDS — INTERACTIVE PORTFOLIO ENGINE
   Vanilla JavaScript | Accessible | Responsive | No libraries
   ============================================================ */

"use strict";

/* ------------------------------------------------------------
   01. PROJECT CONTENT
   Keep every project description honest about its current stage.
   ------------------------------------------------------------ */

const PROJECTS = {
  "legacysense": {
    number: "01",
    name: "LegacySense AI",
    category: "INDUSTRIAL AI / ENERGY INTELLIGENCE",
    status: "Presentation + UI/dashboard mockup",
    statusType: "status-mockup",
    accent: "#65e5ff",
    accentRgb: "101, 229, 255",
    symbol: "LS",
    tagline: "Making Energy Use Make Sense.",
    description:
      "Production-aware energy intelligence for legacy SME manufacturing. The concept explores how energy consumption can be compared with production output to help engineers investigate unusual energy intensity.",
    problem:
      "Manufacturers may have energy readings and production records without an affordable, unified way to understand whether energy use is reasonable for the work completed.",
    approach:
      "The proposed workflow combines energy, production and machine-state data; establishes an expected energy baseline; flags deviations; and presents contextual explanations for an engineer to review.",
    technology:
      "Proposed stack: Python, Pandas, NumPy, machine-learning models, Streamlit, Plotly and SQLite. These are proposed technologies, not a claim that every component has been implemented.",
    impact:
      "The intended outcome is better visibility into energy performance and more informed investigations. Any energy savings must be measured against real production data; no real-world savings are claimed.",
    next:
      "Build a working data pipeline, validate the baseline against representative production data, test anomaly detection and document measurable evaluation results.",
    disclaimer:
      "Current stage: presentation and UI/dashboard mockup. The AI pipeline, industrial validation and energy savings have not been verified as implemented outcomes."
  },

  "arogyaedge": {
    number: "02",
    name: "ArogyaEdge",
    category: "HEALTHCARE AI / EDGE COMPUTING",
    status: "Concept",
    statusType: "status-concept",
    accent: "#62e5c3",
    accentRgb: "98, 229, 195",
    symbol: "AE",
    tagline: "Clinical assistance designed for constrained environments.",
    description:
      "An offline-first healthcare technology concept for resource-limited primary healthcare settings, where dependable local tools may be valuable when connectivity is limited.",
    problem:
      "Connectivity limitations, repetitive documentation and fragmented workflows can make digital assistance difficult to use consistently in under-resourced clinical environments.",
    approach:
      "The proposed direction explores local speech-to-text, structured clinical documentation, understandable guidance and privacy-conscious on-device processing, with clinicians retaining decision authority.",
    technology:
      "Potential directions include local language models, speech recognition, structured data processing and deterministic safety checks. The final implementation stack remains to be confirmed.",
    impact:
      "The goal is to explore practical digital assistance that remains useful when internet access is unreliable. Clinical safety, language accuracy and usability would require rigorous evaluation.",
    next:
      "Define the smallest safe workflow, create a test dataset, prototype offline operation and evaluate transcription accuracy with appropriate privacy safeguards.",
    disclaimer:
      "This is presented as a concept until a working implementation and its capabilities are verified. It is not a replacement for qualified clinical judgment."
  },

  "roadguard": {
    number: "03",
    name: "RoadGuard AI",
    category: "ROAD SAFETY / COMPUTER VISION",
    status: "Prototype development",
    statusType: "status-progress",
    accent: "#ffbd79",
    accentRgb: "255, 189, 121",
    symbol: "RG",
    tagline: "Exploring intelligent tools for safer roads.",
    description:
      "A road-safety project exploring how AI-assisted analysis could support the identification of road risks and help make safety information easier to interpret.",
    problem:
      "Road-safety monitoring can involve multiple observations and changing conditions. Turning those observations into useful, timely information is a practical engineering challenge.",
    approach:
      "The project direction explores a demonstrable software prototype for a defined road-safety use case. Its final supported detection features and evaluation results must be established through testing.",
    technology:
      "Python and a web-based prototype are the starting direction. Specific computer-vision models, datasets and dependencies should be documented only after they are confirmed in the actual code.",
    impact:
      "The intended impact is to explore how software could support road-safety awareness. A prototype alone does not demonstrate reduced accidents or proven real-world detection accuracy.",
    next:
      "Resolve current application errors, define one testable use case, validate the output on suitable sample data and document false positives and limitations.",
    disclaimer:
      "Prototype development is ongoing. Do not interpret the visual concept or project name as evidence of validated real-world road monitoring."
  },

  "fixtrack": {
    number: "04",
    name: "FixTrack",
    category: "FULL-STACK DEVELOPMENT / CAMPUS SERVICES",
    status: "Academic project in development",
    statusType: "status-progress",
    accent: "#b69aff",
    accentRgb: "182, 154, 255",
    symbol: "FT",
    tagline: "A clearer path from complaint to resolution.",
    description:
      "An academic complaint-tracking application concept designed to organise reported campus issues and make their status easier to follow.",
    problem:
      "When issue reports are spread across informal channels, keeping track of complaint details, priority and progress can become difficult.",
    approach:
      "The project explores structured complaint records, categories, priorities, status tracking and a database-backed interface for organising requests.",
    technology:
      "Java, XAMPP and a database-backed workflow have been explored during development. The exact working features should be confirmed against the current project files.",
    impact:
      "The objective is to make complaint handling more organised and traceable. Any claims about time saved or improved resolution rates require real measurements.",
    next:
      "Verify database persistence, fix record-ID and status-update issues, validate input handling and test the complete workflow from submission to resolution.",
    disclaimer:
      "This is an academic project in development. Only verified, working features should be described as implemented."
  },

  "ayurqc": {
    number: "05",
    name: "AyurQC AI",
    category: "AI FOR AYURVEDA / QUALITY SCREENING",
    status: "Idea stage",
    statusType: "status-idea",
    accent: "#a8d878",
    accentRgb: "168, 216, 120",
    symbol: "AQ",
    tagline: "Intelligent screening for Ayurvedic raw materials.",
    description:
      "An AI-assisted screening concept exploring how unusual patterns in Ayurvedic medicinal raw-material batches could help identify samples that may deserve additional laboratory investigation.",
    problem:
      "Raw-material quality assessment can involve laboratory work and multiple measurements. Exploring additional screening tools may help organise observations and prioritise further investigation.",
    approach:
      "Potential approaches include analysing images, reviewing available physical or laboratory measurements and flagging unusual patterns for qualified human review.",
    technology:
      "Possible future directions include computer vision, tabular-data analysis, anomaly detection and a review dashboard. No model, dataset or testing result is claimed as implemented.",
    impact:
      "The intended contribution is to explore whether AI-assisted screening can support quality-control workflows and laboratory prioritisation.",
    next:
      "Consult qualified Ayurveda and quality-control experts, identify a defensible dataset, establish laboratory reference methods and define a safe evaluation protocol.",
    disclaimer:
      "Idea stage only. An AI flag cannot prove adulteration, authenticity, purity or medicinal safety. Laboratory testing and qualified human assessment remain essential."
  },

  "unicampus": {
    number: "06",
    name: "UniCampus",
    category: "EDTECH / CAMPUS SOFTWARE",
    status: "Platform concept",
    statusType: "status-concept",
    accent: "#91a9ff",
    accentRgb: "145, 169, 255",
    symbol: "UC",
    tagline: "A more connected campus experience.",
    description:
      "A unified campus-platform concept exploring how students, faculty and administrators could access relevant academic information and campus workflows in one place.",
    problem:
      "Academic information, attendance, learning resources and campus communication can be distributed across different tools and processes.",
    approach:
      "The concept brings together role-based experiences for students, faculty and administrators, with attention to permissions, privacy and practical classroom workflows.",
    technology:
      "Potential components include a web application, role-based access controls, a database and personalised study support. Implementation details remain to be confirmed.",
    impact:
      "The goal is to investigate a more coherent campus experience without introducing unnecessary surveillance or replacing educator judgment.",
    next:
      "Choose one high-value workflow, validate its requirements with stakeholders, design a small prototype and define privacy and access-control tests.",
    disclaimer:
      "Platform concept. Do not assume integrations, authentication, attendance tracking or personalised AI features are operational."
  },

  "continuity": {
    number: "07",
    name: "Continuity AI",
    category: "HEALTHCARE / INFORMATION CONTINUITY",
    status: "Concept",
    statusType: "status-concept",
    accent: "#70c9ff",
    accentRgb: "112, 201, 255",
    symbol: "CA",
    tagline: "Helping care information stay connected.",
    description:
      "A healthcare continuity concept focused on exploring how patient-authorised information could remain organised and accessible across appointments, care transitions and follow-up.",
    problem:
      "When relevant medical information is scattered across records and providers, patients and authorised care teams may face difficulties maintaining continuity.",
    approach:
      "The proposed direction explores organised medical histories, patient-controlled sharing, follow-up information and clear access permissions.",
    technology:
      "Potential directions include structured health records, secure APIs, consent management and audit trails. A working implementation has not been confirmed.",
    impact:
      "The goal is to explore more consistent information sharing while respecting confidentiality, consent and professional responsibilities.",
    next:
      "Define a narrow patient-authorised sharing workflow, map the data permissions, develop a privacy-first prototype and review relevant health-data requirements.",
    disclaimer:
      "Concept stage. No live patient records, healthcare integrations or clinical outcomes are claimed."
  }
};

/* ------------------------------------------------------------
   02. SELECTORS AND SMALL UTILITIES
   ------------------------------------------------------------ */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

function safeText(value) {
  return String(value ?? "");
}

function escapeHTML(value) {
  return safeText(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function normaliseProjectId(value) {
  return safeText(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "");
}

/* ------------------------------------------------------------
   03. YEAR
   ------------------------------------------------------------ */

function initialiseYear() {
  const yearElement = $("#current-year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

/* ------------------------------------------------------------
   04. HEADER AND SCROLL PROGRESS
   ------------------------------------------------------------ */

function initialiseScrollEffects() {
  const header = $(".site-header");
  let progressBar = $("#scroll-progress");

  if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.id = "scroll-progress";
    progressBar.setAttribute("aria-hidden", "true");

    Object.assign(progressBar.style, {
      position: "fixed",
      zIndex: "2000",
      top: "0",
      left: "0",
      width: "0%",
      height: "2px",
      pointerEvents: "none",
      background: "linear-gradient(90deg, #65e5ff, #6686ff, #b69aff)",
      boxShadow: "0 0 12px rgba(101, 229, 255, .3)"
    });

    document.body.appendChild(progressBar);
  }

  let ticking = false;

  function updateScrollState() {
    const scrollTop =
      window.scrollY || document.documentElement.scrollTop;

    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollableHeight > 0
      ? Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100))
      : 0;

    progressBar.style.width = `${progress}%`;

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 20);
    }

    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateScrollState);
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });

  updateScrollState();
}

/* ------------------------------------------------------------
   05. MOBILE NAVIGATION
   Supports buttons with .menu-toggle and links in .nav-links.
   ------------------------------------------------------------ */

function initialiseNavigation() {
  const menuButton = $(".menu-toggle");
  const navLinks = $(".nav-links");

  if (!menuButton || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  }

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Toggle navigation");

  menuButton.addEventListener("click", toggleMenu);

  $$("a", navLinks).forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", event => {
    if (
      navLinks.classList.contains("is-open") &&
      !navLinks.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  const sections = $$("main section[id]");

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const sectionId = entry.target.id;

        $$(".nav-links a[href^='#']").forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, {
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0
    });

    sections.forEach(section => observer.observe(section));
  }
}

/* ------------------------------------------------------------
   06. SCROLL REVEALS
   ------------------------------------------------------------ */

function initialiseRevealAnimations() {
  const elements = $$(".reveal");

  if (!elements.length) return;

  if (prefersReducedMotion.matches ||
      !("IntersectionObserver" in window)) {
    elements.forEach(element => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      activeObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -35px 0px"
  });

  elements.forEach((element, index) => {
    if (!element.hasAttribute("data-reveal-delay")) {
      const delay = Math.min(index % 4, 3) * 70;
      element.style.transitionDelay = `${delay}ms`;
    }

    observer.observe(element);
  });
}

/* ------------------------------------------------------------
   07. PROJECT DIALOG
   Creates the case-study dialog using safe, escaped text.
   ------------------------------------------------------------ */

let projectDialog = null;
let lastFocusedElement = null;

function createProjectDialog() {
  if (projectDialog) return projectDialog;

  projectDialog = document.createElement("dialog");
  projectDialog.className = "project-dialog";
  projectDialog.setAttribute("aria-label", "Project case study");

  projectDialog.innerHTML = `
    <div class="dialog-inner">
      <div class="dialog-topbar">
        <div class="dialog-brand">
          EDDY BUILDS <span>/ PROJECT FILE</span>
        </div>
        <button
          class="dialog-close"
          type="button"
          aria-label="Close project details"
        >&#10005;</button>
      </div>

      <div class="dialog-art" aria-hidden="true">
        <span class="dialog-symbol">EB</span>
      </div>

      <div class="dialog-content">
        <div class="dialog-meta">
          <span class="dialog-number">PROJECT 01</span>
          <span class="project-status dialog-status">PROJECT STATUS</span>
        </div>

        <h2 class="dialog-title">Project title</h2>
        <p class="dialog-tagline"></p>
        <p class="dialog-description"></p>

        <div class="dialog-section">
          <span class="detail-label">THE PROBLEM</span>
          <p class="dialog-problem"></p>
        </div>

        <div class="dialog-section">
          <span class="detail-label">PROPOSED APPROACH</span>
          <p class="dialog-approach"></p>
        </div>

        <div class="dialog-section">
          <span class="detail-label">TECHNOLOGY / DIRECTION</span>
          <p class="dialog-technology"></p>
        </div>

        <div class="dialog-section">
          <span class="detail-label">INTENDED IMPACT</span>
          <p class="dialog-impact"></p>
        </div>

        <div class="dialog-section">
          <span class="detail-label">NEXT MILESTONE</span>
          <p class="dialog-next"></p>
        </div>

        <p class="dialog-disclaimer"></p>

        <div class="dialog-actions">
          <button class="button button-primary dialog-done" type="button">
            Back to portfolio <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(projectDialog);

  $(".dialog-close", projectDialog).addEventListener("click", closeProjectDialog);
  $(".dialog-done", projectDialog).addEventListener("click", closeProjectDialog);

  projectDialog.addEventListener("click", event => {
    if (event.target === projectDialog) {
      closeProjectDialog();
    }
  });

  projectDialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");

    if (lastFocusedElement && document.contains(lastFocusedElement)) {
      lastFocusedElement.focus({ preventScroll: true });
    }
  });

  projectDialog.addEventListener("cancel", () => {
    document.body.classList.remove("dialog-open");
  });

  return projectDialog;
}

function openProjectDialog(projectId, triggerElement) {
  const id = normaliseProjectId(projectId);
  const project = PROJECTS[id];

  if (!project) {
    console.warn(`EDDY BUILDS: Unknown project "${projectId}".`);
    return;
  }

  const dialog = createProjectDialog();

  lastFocusedElement = triggerElement || document.activeElement;

  dialog.style.setProperty("--dialog-accent", project.accent);
  dialog.style.setProperty("--dialog-accent-rgb", project.accentRgb);

  const art = $(".dialog-art", dialog);
  art.style.setProperty("--dialog-accent", project.accent);
  art.style.setProperty("--dialog-accent-rgb", project.accentRgb);

  $(".dialog-symbol", dialog).textContent = project.symbol;
  $(".dialog-number", dialog).textContent = `PROJECT ${project.number}`;
  $(".dialog-title", dialog).textContent = project.name;
  $(".dialog-tagline", dialog).textContent = project.tagline;
  $(".dialog-description", dialog).textContent = project.description;

  $(".dialog-problem", dialog).textContent = project.problem;
  $(".dialog-approach", dialog).textContent = project.approach;
  $(".dialog-technology", dialog).textContent = project.technology;
  $(".dialog-impact", dialog).textContent = project.impact;
  $(".dialog-next", dialog).textContent = project.next;
  $(".dialog-disclaimer", dialog).textContent = project.disclaimer;

  const status = $(".dialog-status", dialog);
  status.textContent = project.status;
  status.className = `project-status dialog-status ${project.statusType}`;

  if (typeof dialog.showModal === "function") {
    if (!dialog.open) dialog.showModal();
  } else {
    // Basic fallback for browsers without native dialog support.
    dialog.setAttribute("open", "");
  }

  document.body.classList.add("dialog-open");

  const closeButton = $(".dialog-close", dialog);
  if (closeButton) closeButton.focus({ preventScroll: true });
}

function closeProjectDialog() {
  if (!projectDialog) return;

  if (typeof projectDialog.close === "function" && projectDialog.open) {
    projectDialog.close();
  } else {
    projectDialog.removeAttribute("open");
    document.body.classList.remove("dialog-open");

    if (lastFocusedElement && document.contains(lastFocusedElement)) {
      lastFocusedElement.focus({ preventScroll: true });
    }
  }
}

/* ------------------------------------------------------------
   08. MAKE PROJECT CARDS INTERACTIVE
   Supported identifiers include:
   data-project="legacysense"
   data-project="ayurqc"
   or recognised project-card class names.
   ------------------------------------------------------------ */

function getProjectIdFromElement(element) {
  if (!element) return null;

  const directId = element.dataset.project;

  if (directId && PROJECTS[normaliseProjectId(directId)]) {
    return normaliseProjectId(directId);
  }

  const classMappings = {
    "project-legacy": "legacysense",
    "project-arogya": "arogyaedge",
    "project-roadguard": "roadguard",
    "project-fixtrack": "fixtrack",
    "exploration-ayurqc": "ayurqc",
    "exploration-unicampus": "unicampus",
    "exploration-continuity": "continuity"
  };

  for (const [className, projectId] of Object.entries(classMappings)) {
    if (element.classList.contains(className)) return projectId;
  }

  return null;
}

function initialiseProjectCards() {
  const possibleCards = $$(".project-card, .exploration-card, [data-project]");

  possibleCards.forEach(card => {
    const projectId = getProjectIdFromElement(card);
    if (!projectId) return;

    card.dataset.project = projectId;

    // Preserve ordinary links and buttons inside a project card.
    card.addEventListener("click", event => {
      if (event.target.closest("a, button")) return;
      openProjectDialog(projectId, card);
    });

    // Allow a whole card to be opened by keyboard.
    if (!card.matches("a, button, [tabindex]")) {
      card.setAttribute("tabindex", "0");
    }

    if (!card.hasAttribute("role")) {
      card.setAttribute("role", "button");
    }

    if (!card.hasAttribute("aria-label")) {
      const project = PROJECTS[projectId];
      card.setAttribute("aria-label", `View ${project.name} case study`);
    }

    card.addEventListener("keydown", event => {
      if (event.target !== card) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectDialog(projectId, card);
      }
    });
  });

  // Explicit buttons or links can use data-open-project="ayurqc".
  $$("[data-open-project]").forEach(control => {
    control.addEventListener("click", event => {
      const projectId = normaliseProjectId(control.dataset.openProject);
      if (!PROJECTS[projectId]) return;

      // Avoid following a placeholder link when opening a case study.
      if (control.tagName === "A" &&
          (!control.getAttribute("href") ||
           control.getAttribute("href") === "#")) {
        event.preventDefault();
      }

      openProjectDialog(projectId, control);
    });
  });
}

/* ------------------------------------------------------------
   09. SUBTLE POINTER EFFECT
   Desktop only. Avoids moving elements on touch screens.
   ------------------------------------------------------------ */

function initialisePointerEffects() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

  if (!canHover.matches || prefersReducedMotion.matches) return;

  $$(".project-card").forEach(card => {
    const art = $(".project-art", card);
    if (!art) return;

    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      art.style.setProperty("--pointer-x", `${x * 12}px`);
      art.style.setProperty("--pointer-y", `${y * 8}px`);
    });

    card.addEventListener("pointerleave", () => {
      art.style.removeProperty("--pointer-x");
      art.style.removeProperty("--pointer-y");
    });
  });
}

/* ------------------------------------------------------------
   10. SMOOTH IN-PAGE NAVIGATION
   Respects the operating system's reduced-motion setting.
   ------------------------------------------------------------ */

function initialiseSmoothNavigation() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      let target;

      try {
        target = document.querySelector(href);
      } catch {
        return;
      }

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start"
      });

      if (window.location.hash !== href) {
        history.replaceState(null, "", href);
      }
    });
  });
}

/* ------------------------------------------------------------
   11. GLOBAL KEYBOARD SUPPORT
   ------------------------------------------------------------ */

function initialiseKeyboardSupport() {
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && projectDialog?.open) {
      closeProjectDialog();
    }
  });
}

/* ------------------------------------------------------------
   12. START APPLICATION
   ------------------------------------------------------------ */

function initialisePortfolio() {
  initialiseYear();
  initialiseScrollEffects();
  initialiseNavigation();
  initialiseRevealAnimations();
  initialiseProjectCards();
  initialisePointerEffects();
  initialiseSmoothNavigation();
  initialiseKeyboardSupport();

  console.info(
    "EDDY BUILDS portfolio engine initialised.",
    `${Object.keys(PROJECTS).length} project case studies available.`
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialisePortfolio, {
    once: true
  });
} else {
  initialisePortfolio();
}