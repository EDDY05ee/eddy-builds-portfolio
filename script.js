(() => {
  "use strict";

  // EDDY BUILDS — interactive portfolio
  // Project status and limitations are described honestly.

  const PROJECTS = {
    legacysense: {
      title: "LegacySense AI",
      category: "Industrial AI & energy intelligence",
      stage: "Presentation and UI/dashboard mockup",
      accent: "#58e6ff",
      subtitle: "Energy intelligence designed for legacy manufacturing environments.",
      problem: "Smaller and legacy manufacturing environments may have limited visibility into how equipment and operating patterns contribute to energy use. The concept explores how understandable data views could help teams investigate opportunities.",
      affected: ["Small and medium-sized manufacturers", "Plant and maintenance teams", "Energy and operations managers"],
      causes: ["Older equipment may not expose modern telemetry by default.", "Energy data can be fragmented across meters, logs and manual readings.", "Specialist analytics tools may be costly or difficult to adopt."],
      existing: ["Manual readings and spreadsheets are accessible but time-consuming.", "Industrial monitoring platforms vary in cost and integration.", "A dashboard alone does not guarantee accurate recommendations."],
      why: "Energy efficiency can affect operating costs and environmental impact. A useful tool must fit the data quality, budget and workflow of the site.",
      idea: "A proposed energy-intelligence workspace for organising readings, displaying trends and helping people investigate possible inefficiencies.",
      outcomes: ["Clearer energy-data visualisation", "Earlier visibility of unusual patterns for human review", "A starting point for site-specific efficiency investigations"],
      advantages: ["Designed around legacy-site constraints", "Understandable visual summaries", "Potential to work with existing data sources"],
      implementation: "Presentation and dashboard/UI mockup",
      workflow: [["Collect", "Import readings or sample data"], ["Organise", "Clean and structure data"], ["Explore", "Visualise trends and anomalies"], ["Review", "A person investigates possible causes"]],
      tech: ["Python (proposed)", "Pandas / NumPy (proposed)", "Streamlit (proposed)", "Plotly (proposed)", "SQLite (proposed)"],
      next: "Build a clearly labelled demo using synthetic or openly available sample data, document assumptions and validate findings with domain experts.",
      limitation: "No real factory deployment, validated AI model, measured energy savings or industrial validation is claimed. Any savings examples must be labelled illustrative."
    },

    arogyaedge: {
      title: "ArogyaEdge",
      category: "Offline-first healthcare assistance",
      stage: "Concept",
      accent: "#5af0cf",
      subtitle: "A concept for practical clinical assistance in resource-limited care settings.",
      problem: "Healthcare workers may face time pressure, unreliable connectivity and repetitive documentation. Digital assistance must fit clinical workflows without replacing professional judgement.",
      affected: ["Primary healthcare workers", "Patients in connectivity-constrained settings", "Clinic administrators"],
      causes: ["Connectivity can vary by location.", "Documentation may take time away from patient-facing work.", "Information can be fragmented across tools."],
      existing: ["Paper workflows work offline but can be hard to search.", "Cloud tools can depend on connectivity and privacy controls.", "General AI assistants are not automatically clinically safe."],
      why: "Useful clinical technology must prioritise privacy, human oversight, safety and local validation.",
      idea: "An offline-first workspace concept for assisting with clinical documentation and local information access. Qualified healthcare professionals would review generated notes or suggestions before use.",
      outcomes: ["A clearer local workflow concept", "A basis for usability testing", "A way to explore privacy and safety requirements"],
      advantages: ["Offline-first design goal", "Privacy-conscious local processing direction", "Human review remains central"],
      implementation: "Healthcare technology concept",
      workflow: [["Capture", "Enter or dictate information"], ["Organise", "Prepare a structured draft locally"], ["Review", "A clinician checks the content"], ["Use safely", "Save or share approved information"]],
      tech: ["Local processing (proposed)", "Speech-to-text (proposed)", "Structured templates (proposed)", "Safety rules (proposed)"],
      next: "Define one narrow, non-diagnostic workflow, use fictional data and review safety and privacy requirements with qualified healthcare professionals.",
      limitation: "No clinical deployment, medical validation, autonomous diagnosis or improved patient outcomes are claimed."
    },

    roadguard: {
      title: "RoadGuard AI",
      category: "Road safety / computer vision",
      stage: "Prototype development",
      accent: "#ffca7a",
      subtitle: "A road-safety prototype exploring earlier awareness of possible risks.",
      problem: "Road users and safety teams can benefit from timely hazard awareness, but detecting risk reliably from visual input is technically difficult and context-dependent.",
      affected: ["Drivers and other road users", "Road-safety teams", "Communities affected by unsafe road conditions"],
      causes: ["Hazards appear quickly and visibility changes with weather and lighting.", "Video detection can miss objects or produce false alerts.", "A prototype may not represent real-world conditions."],
      existing: ["Road signs and safe road design remain fundamental.", "Vehicle assistance systems vary by vehicle and context.", "Manual reporting may not be immediate."],
      why: "Road safety directly affects people. Missed detections and false alarms both need careful evaluation.",
      idea: "A computer-vision-assisted road-safety interface exploring whether selected visual events can be flagged for human attention.",
      outcomes: ["A limited demonstrable interface", "Documented supported and unsupported cases", "A path toward measured evaluation"],
      advantages: ["Focused road-safety problem", "Prototype-friendly scope", "Clear evaluation criteria can be documented"],
      implementation: "Software prototype / innovation project",
      workflow: [["Input", "Use a permitted test image or clip"], ["Analyse", "Run a selected model or rule"], ["Flag", "Display candidate events"], ["Evaluate", "Compare against labelled examples"]],
      tech: ["Python (prototype direction)", "Computer vision (exploratory)", "Streamlit (possible UI)", "Test clips and labelled data"],
      next: "Stabilise the demo, document its exact detection scope and measure false positives and false negatives on suitable samples.",
      limitation: "This is not a certified safety system. It must not replace attentive driving, official road-safety procedures or validated equipment."
    },

    fixtrack: {
      title: "FixTrack",
      category: "Campus workflow software",
      stage: "Academic project in development",
      accent: "#b18cff",
      subtitle: "A complaint-tracking system for more visible campus issue handling.",
      problem: "When campus issues are reported informally, students may not know whether a concern was received, assigned or resolved.",
      affected: ["Students reporting issues", "Staff handling complaints", "Administrators monitoring recurring problems"],
      causes: ["Reports can be spread across messages and conversations.", "Ownership and status may not be visible.", "Duplicate reports can complicate follow-up."],
      existing: ["Verbal reporting leaves limited shared history.", "Messaging groups can bury updates.", "Generic ticketing tools may need campus-specific adaptation."],
      why: "A transparent reporting process can improve accountability and make the next step easier to understand.",
      idea: "An academic complaint-tracking system being developed around a Java/XAMPP-style workflow to record complaint IDs, categories, priorities, status and dates.",
      outcomes: ["A central complaint record", "More visible status changes", "Practice with database-backed workflows"],
      advantages: ["Clear complaint fields", "Prioritisation and follow-up", "Useful CRUD and database learning"],
      implementation: "Academic software project in development",
      workflow: [["Report", "Submit an issue"], ["Record", "Store complaint details"], ["Track", "Update status"], ["Review", "Follow up on the issue"]],
      tech: ["Java", "XAMPP (development environment)", "Database integration", "HTML / CSS / JavaScript as applicable"],
      next: "Finish and test database operations, resolve complaint-ID and status-update bugs, and validate input handling.",
      limitation: "The project is still in development. Full functionality, security, deployment and successful resolution of all reported issues are not claimed."
    },

    ayurqc: {
      title: "AyurQC AI",
      category: "AI-assisted quality screening",
      stage: "Idea stage",
      accent: "#5af0cf",
      subtitle: "Exploring ways to flag unusual Ayurvedic raw-material batches for further review.",
      problem: "Raw materials may vary in appearance and quality. Identifying suspicious variation can require suitable testing, documented procedures and qualified assessment.",
      affected: ["Raw-material quality teams", "Researchers and laboratories", "Suppliers and manufacturers"],
      causes: ["Natural materials vary between batches.", "Visual differences do not establish chemical composition.", "Reference data and reliable labels may be limited."],
      existing: ["Visual inspection can identify obvious differences but has limitations.", "Laboratory methods can measure specific properties.", "Supplier records support traceability but do not independently prove quality."],
      why: "Quality assessment matters, but screening tools must not overstate what an image or model can determine.",
      idea: "An exploratory AI-assisted screening concept to flag unusual batches for qualified human review and appropriate laboratory testing.",
      outcomes: ["A defined screening workflow", "A way to explore labelled reference data", "A documented process for human review"],
      advantages: ["Focused screening use case", "Can highlight uncertainty", "Laboratory testing remains essential"],
      implementation: "Early-stage concept",
      workflow: [["Collect", "Obtain authorised sample data"], ["Compare", "Explore documented features"], ["Flag", "Identify unusual examples"], ["Verify", "Refer for qualified assessment"]],
      tech: ["Image analysis (exploratory)", "Reference datasets (needed)", "Model evaluation (future work)", "Laboratory verification"],
      next: "Define one material and one measurable screening task, obtain suitable verified data and consult qualified quality and laboratory experts.",
      limitation: "The concept cannot prove authenticity, purity, adulteration or medicinal safety. Laboratory testing and qualified human assessment remain essential."
    },

    unicampus: {
      title: "UniCampus",
      category: "Education technology / campus systems",
      stage: "Platform concept",
      accent: "#8ca5ff",
      subtitle: "A unified campus platform concept connecting academic workflows and student support.",
      problem: "Academic information, attendance, resources and student support can be distributed across different tools, making it difficult to find the right information in one place.",
      affected: ["Students", "Faculty members", "College administrators"],
      causes: ["Different workflows may use separate systems.", "Updates can be difficult to discover.", "Access rights and privacy requirements vary by role."],
      existing: ["Learning-management systems support selected academic tasks.", "Spreadsheets can be flexible but require manual maintenance.", "Separate tools may create fragmented experiences."],
      why: "A well-designed campus platform could improve access to information while respecting privacy and institutional responsibilities.",
      idea: "A platform concept bringing together academic resources, attendance records, performance views, notifications and student-support workflows with role-based access.",
      outcomes: ["A clearer campus information architecture", "Role-specific views", "A foundation for testing student and faculty workflows"],
      advantages: ["Unified experience concept", "Role-based design direction", "Privacy and consent can be considered from the beginning"],
      implementation: "Platform concept; implementation status not verified",
      workflow: [["Sign in", "Access an authorised account"], ["Find", "View relevant campus information"], ["Act", "Use the appropriate workflow"], ["Review", "Receive permitted updates"]],
      tech: ["Web application (proposed)", "Role-based access (proposed)", "Database (proposed)", "Audit and consent controls (proposed)"],
      next: "Choose one initial workflow, define user roles and permissions, build a small prototype and test it with appropriate permission.",
      limitation: "A complete operational campus platform, institutional integration and verified security are not claimed."
    },

    continuity: {
      title: "Continuity AI",
      category: "Healthcare continuity",
      stage: "Concept",
      accent: "#58e6ff",
      subtitle: "A concept for helping authorised care teams and patients maintain care context.",
      problem: "When care moves between appointments, providers or locations, relevant history and follow-up information can be difficult to organise and share appropriately.",
      affected: ["Patients and caregivers", "Healthcare professionals", "Care teams involved in handovers"],
      causes: ["Records may be stored in separate systems.", "Patients may need to repeat their history.", "Sharing health information requires consent and appropriate access controls."],
      existing: ["Patient-held documents can help but may be incomplete.", "Electronic records vary between providers.", "Messaging alone may lack reliable structure and access governance."],
      why: "Continuity of care requires understandable information, appropriate access and clear responsibility for clinical decisions.",
      idea: "A healthcare continuity concept for organising patient-approved information and follow-up context for authorised people.",
      outcomes: ["A clearer handover workflow", "Structured summaries with source labels", "A basis for exploring consent-aware sharing"],
      advantages: ["Patient-centred information flow", "Consent-aware design direction", "Can highlight missing context instead of inventing it"],
      implementation: "Healthcare product concept",
      workflow: [["Choose", "Select information to share"], ["Organise", "Structure records with source labels"], ["Authorise", "Limit access to approved people"], ["Review", "Care teams verify context"]],
      tech: ["Consent-aware sharing (proposed)", "Structured summaries", "Access controls (proposed)", "Audit history (proposed)"],
      next: "Map a single handover scenario, define consent and revocation requirements, use fictional data and seek expert feedback.",
      limitation: "No live patient-record integration, clinical validation or healthcare-provider deployment is claimed. Real use would require strong security, consent, governance and clinical review."
    }
  };

  const dialog = document.getElementById("project-dialog");
  const dialogContent = document.getElementById("dialog-content");
  const closeButton = dialog?.querySelector(".dialog-close");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  let previousFocus = null;

  const escapeHTML = value =>
    String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);

  function sectionHTML(title, content, icon) {
    const body = Array.isArray(content)
      ? `<ul>${content.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`
      : `<p>${escapeHTML(content)}</p>`;

    return `
      <section class="case-section">
        <h3><span aria-hidden="true">${icon}</span>${escapeHTML(title)}</h3>
        ${body}
      </section>`;
  }

  function renderWorkflow(project) {
    return `
      <section class="case-workflow">
        <p class="workflow-label">HOW THE IDEA COULD WORK</p>
        <div class="workflow-grid">
          ${project.workflow.map((step, index) => `
            <div class="workflow-step">
              <div class="workflow-icon" aria-hidden="true">${["◉", "⌁", "◇", "↗"][index]}</div>
              <strong>${String(index + 1).padStart(2, "0")} · ${escapeHTML(step[0])}</strong>
              <span>${escapeHTML(step[1])}</span>
            </div>
          `).join("")}
        </div>
        <p class="workflow-footnote">
          ILLUSTRATIVE WORKFLOW · NOT A CLAIM OF LIVE SYSTEM PERFORMANCE
        </p>
      </section>`;
  }

  function renderCaseStudy(project) {
    const sections = [
      sectionHTML("The problem", project.problem, "⌁"),
      sectionHTML("Who is affected", project.affected, "◎"),
      sectionHTML("Root causes", project.causes, "⌘"),
      sectionHTML("Existing approaches & limitations", project.existing, "⇄"),
      sectionHTML("Why it matters", project.why, "✳"),
      sectionHTML("The proposed idea", project.idea, "◇"),
      sectionHTML("Expected outcomes", project.outcomes, "↗"),
      sectionHTML("Potential advantages", project.advantages, "＋")
    ].join("");

    return `
      <article class="case-study"
        style="--case-accent:${project.accent};--case-glow:${project.accent}22">
        <header class="case-hero">
          <span class="case-kicker">${escapeHTML(project.category)}</span>
          <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
          <p class="case-subtitle">${escapeHTML(project.subtitle)}</p>
          <span class="case-stage">${escapeHTML(project.stage)}</span>
        </header>

        <div class="case-body">
          <p class="case-disclaimer">
            Portfolio transparency: this case study separates the problem being
            explored from the current development stage. Workflow graphics are
            illustrative and do not represent verified outcomes or live integrations.
          </p>

          ${renderWorkflow(project)}

          <div class="case-section-grid">${sections}</div>

          <button class="case-full-toggle" type="button" aria-expanded="false">
            <span>Implementation, technology & next steps</span>
            <span aria-hidden="true">＋</span>
          </button>

          <div class="case-full-details">
            ${sectionHTML("Implementation type", project.implementation, "▣")}

            <section class="case-section">
              <h3><span aria-hidden="true">⌘</span>Technology direction</h3>
              <p>Tools and approaches to consider, subject to implementation needs:</p>
              <div class="case-tags">
                ${project.tech.map(tag => `<span class="case-tag">${escapeHTML(tag)}</span>`).join("")}
              </div>
            </section>

            ${sectionHTML("Next steps", project.next, "↗")}
            ${sectionHTML("Current limitations", project.limitation, "!")}
          </div>

          <div class="case-next">
            <h3>What comes next</h3>
            <p>${escapeHTML(project.next)}</p>
          </div>

          <p class="case-limit">
            <strong>Important limitation:</strong> ${escapeHTML(project.limitation)}
          </p>

          <div class="case-footer">
            <span>EDDY BUILDS · PROJECT NOTE</span>
            <span>IDEA → PROTOTYPE → EVALUATION</span>
          </div>
        </div>
      </article>`;
  }

  function normaliseProjectId(value) {
    const id = String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    const aliases = {
      legacysenseai: "legacysense",
      ayurqcai: "ayurqc",
      continuityai: "continuity",
      roadguardai: "roadguard"
    };
    return aliases[id] || id;
  }

  function openProject(id) {
    const project = PROJECTS[normaliseProjectId(id)];
    if (!project || !dialog || !dialogContent) return;

    previousFocus = document.activeElement;
    dialogContent.innerHTML = renderCaseStudy(project);

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }

    document.body.classList.add("modal-open");
    closeButton?.focus({ preventScroll: true });
  }

  function closeProject() {
    if (!dialog) return;

    if (typeof dialog.close === "function" && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }

    document.body.classList.remove("modal-open");

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus({ preventScroll: true });
    }
  }

  // Project cards: mouse, keyboard and touch-friendly click behaviour.
  document.querySelectorAll(
    ".project-card, .exploration-card, [data-open-project]"
  ).forEach(card => {
    const id = normaliseProjectId(
      card.dataset.project || card.dataset.openProject
    );

    if (!PROJECTS[id]) return;

    card.addEventListener("click", event => {
      if (event.target.closest("a, button")) return;
      openProject(id);
    });

    card.addEventListener("keydown", event => {
      if (
        (event.key === "Enter" || event.key === " ") &&
        event.target === card
      ) {
        event.preventDefault();
        openProject(id);
      }
    });
  });

  closeButton?.addEventListener("click", closeProject);

  dialog?.addEventListener("click", event => {
    if (event.target === dialog) {
      closeProject();
      return;
    }

    const toggle = event.target.closest(".case-full-toggle");
    if (!toggle) return;

    const details = toggle.nextElementSibling;
    const expanded = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.firstElementChild.textContent = expanded
      ? "Implementation, technology & next steps"
      : "Hide implementation details";
    toggle.lastElementChild.textContent = expanded ? "＋" : "−";
    details?.classList.toggle("is-open", !expanded);
  });

  dialog?.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && dialog?.open) {
      closeProject();
    }
  });

  // Mobile navigation.
  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute(
      "aria-label",
      expanded ? "Open navigation" : "Close navigation"
    );
    navLinks?.classList.toggle("is-open", !expanded);
  });

  navLinks?.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
      menuToggle?.setAttribute("aria-label", "Open navigation");
    });
  });

  // Automatically update the footer year.
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  // Lightweight scroll progress indicator.
  const progress = document.getElementById("scroll-progress");
  let scrollQueued = false;

  function updateProgress() {
    if (!progress) return;

    const total = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = total > 0 ? (window.scrollY / total) * 100 : 0;

    progress.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
    scrollQueued = false;
  }

  window.addEventListener("scroll", () => {
    if (scrollQueued) return;
    scrollQueued = true;
    window.requestAnimationFrame(updateProgress);
  }, { passive: true });

  updateProgress();

  // Reveal content as it enters the viewport.
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  console.info(
    `EDDY BUILDS ready — ${Object.keys(PROJECTS).length} project case studies registered.`
  );
})();