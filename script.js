// ===================================
//  PRIME PRESENTATION - SCRIPT.JS
//  Kelompok 4: Project Scheduling
// ===================================

// ===================================
// GLOBAL FUNCTIONS
// ===================================

// Toggle Slide Menu
function toggleMenu() {
  const menu = document.getElementById("slideMenu");
  if (menu) {
    menu.classList.toggle("active");
  }
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("slideMenu");
  const menuBtn = document.querySelector(".slide-menu-btn");
  const menuButton = document.querySelector(".menu-button");

  if (menu) {
    if (
      !menu.contains(event.target) &&
      (!menuBtn || !menuBtn.contains(event.target)) &&
      (!menuButton || !menuButton.contains(event.target))
    ) {
      menu.classList.remove("active");
    }
  }
});

// ===================================
// MATERI 1: PENGENALAN
// ===================================

// Toggle Factor Cards
function toggleFactor(card) {
  const content = card.querySelector(".factor-content");
  const icon = card.querySelector(".toggle-icon");

  card.classList.toggle("active");

  if (card.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px";
    if (icon) icon.style.transform = "rotate(180deg)";
  } else {
    content.style.maxHeight = "0";
    if (icon) icon.style.transform = "rotate(0deg)";
  }
}

// ===================================
// MATERI 2: LANGKAH AWAL
// ===================================

// Toggle Step Detail
function toggleStepDetail(stepNum) {
  const card = document.querySelector(`.step-card[data-step="${stepNum}"]`);
  if (card) {
    card.classList.toggle("active");

    const detail = card.querySelector(".step-detail");
    if (detail && card.classList.contains("active")) {
      detail.style.maxHeight = detail.scrollHeight + "px";
    } else if (detail) {
      detail.style.maxHeight = "0";
    }
  }
}

// Quiz Function
function checkAnswer(button, isCorrect) {
  const options = button.parentElement.querySelectorAll(".quiz-option");
  const feedback =
    button.parentElement.parentElement.querySelector(".quiz-feedback");

  // Disable all options
  options.forEach((opt) => {
    opt.disabled = true;
    opt.style.opacity = "0.6";
  });

  if (isCorrect) {
    button.classList.add("correct");
    feedback.innerHTML =
      '<i class="fas fa-check-circle"></i> Benar! Penjadwalan membantu kontrol biaya, efisiensi sumber daya, dan transparansi stakeholder.';
    feedback.className = "quiz-feedback correct";
  } else {
    button.classList.add("incorrect");
    feedback.innerHTML =
      '<i class="fas fa-times-circle"></i> Kurang tepat. Coba perhatikan manfaat utama yang sudah dijelaskan.';
    feedback.className = "quiz-feedback incorrect";
  }

  feedback.style.display = "block";
}

// ===================================
// MATERI 2: LANGKAH AWAL
// ===================================

// Toggle Step Detail
function toggleStepDetail(stepNumber) {
  const detail = document.getElementById("detail-" + stepNumber);
  const button = event.target.closest(".step-detail-btn");
  const icon = button.querySelector("i");

  if (detail.style.maxHeight && detail.style.maxHeight !== "0px") {
    detail.style.maxHeight = "0";
    icon.style.transform = "rotate(0deg)";
    button.classList.remove("active");
  } else {
    detail.style.maxHeight = detail.scrollHeight + "px";
    icon.style.transform = "rotate(180deg)";
    button.classList.add("active");
  }
}

// Animate Flow
function animateFlow() {
  const steps = document.querySelectorAll(".flow-step");

  steps.forEach((step, index) => {
    step.style.animation = "none";
    setTimeout(() => {
      step.style.animation = "pulse 0.5s ease";
    }, index * 300);
  });
}

// ===================================
// MATERI 3: WBS INTERAKTIF
// ===================================

// Toggle WBS Node
function toggleWBS(node) {
  const children = node.querySelector(".wbs-children");
  const icon = node.querySelector(".toggle-icon");

  if (children) {
    node.classList.toggle("collapsed");

    if (node.classList.contains("collapsed")) {
      children.style.display = "none";
      if (icon) icon.style.transform = "rotate(-90deg)";
    } else {
      children.style.display = "block";
      if (icon) icon.style.transform = "rotate(0deg)";
    }
  }
}

// Expand All WBS
function expandAllWBS() {
  const nodes = document.querySelectorAll(".wbs-node");
  nodes.forEach((node) => {
    const children = node.querySelector(".wbs-children");
    const icon = node.querySelector(".toggle-icon");

    node.classList.remove("collapsed");
    if (children) children.style.display = "block";
    if (icon) icon.style.transform = "rotate(0deg)";
  });
}

// Collapse All WBS
function collapseAllWBS() {
  const nodes = document.querySelectorAll(".wbs-node");
  nodes.forEach((node) => {
    const children = node.querySelector(".wbs-children");
    const icon = node.querySelector(".toggle-icon");

    if (node.classList.contains("level-0")) {
      // Keep level-0 open
      return;
    }

    node.classList.add("collapsed");
    if (children) children.style.display = "none";
    if (icon) icon.style.transform = "rotate(-90deg)";
  });
}

// ===================================
// MATERI 4: METODE PENJADWALAN
// ===================================

// Calculate PERT
function calculatePERT() {
  const O = parseFloat(document.getElementById("optimistic").value);
  const M = parseFloat(document.getElementById("mostlikely").value);
  const P = parseFloat(document.getElementById("pessimistic").value);

  if (isNaN(O) || isNaN(M) || isNaN(P)) {
    alert("Mohon isi semua field dengan angka yang valid!");
    return;
  }

  if (O > M || M > P) {
    alert("Perhatikan: Optimistic ≤ Most Likely ≤ Pessimistic");
    return;
  }

  // Calculate Expected Time
  const TE = (O + 4 * M + P) / 6;

  // Calculate Standard Deviation
  const SD = (P - O) / 6;

  // Display results
  const resultContainer = document.getElementById("pertResult");
  const stepsContainer = document.getElementById("calculationSteps");
  const resultValue = document.getElementById("resultValue");
  const sdValue = document.getElementById("sdValue");

  // Show calculation steps
  stepsContainer.innerHTML = `
        <div class="calc-step">
            <strong>Formula:</strong> TE = (O + 4M + P) / 6
        </div>
        <div class="calc-step">
            <strong>Substitusi:</strong> TE = (${O} + 4×${M} + ${P}) / 6
        </div>
        <div class="calc-step">
            <strong>Perhitungan:</strong> TE = (${O} + ${4 * M} + ${P}) / 6
        </div>
        <div class="calc-step">
            <strong>Hasil:</strong> TE = ${O + 4 * M + P} / 6
        </div>
    `;

  resultValue.textContent = TE.toFixed(2);
  sdValue.textContent = SD.toFixed(2);

  resultContainer.style.display = "block";
  resultContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Load Example
function loadExample(o, m, p) {
  document.getElementById("optimistic").value = o;
  document.getElementById("mostlikely").value = m;
  document.getElementById("pessimistic").value = p;
  calculatePERT();
}

// ===================================
// MATERI 5: GANTT CHART
// ===================================

let ganttAnimationInterval;
let isCriticalPathVisible = false;

// Animate progress text in anatomy section
function animateProgressText() {
  const progressText = document.querySelector(".example-progress-text");
  if (progressText) {
    setInterval(() => {
      const fill = document.querySelector(".example-progress-fill");
      if (fill) {
        const width = parseFloat(getComputedStyle(fill).width);
        const containerWidth = parseFloat(
          getComputedStyle(fill.parentElement).width
        );
        const percentage = Math.round((width / containerWidth) * 100);
        progressText.textContent = percentage + "%";
      }
    }, 100);
  }
}

// Call on page load
document.addEventListener("DOMContentLoaded", function () {
  animateProgressText();
});

// Animate Gantt Progress
function animateGantt() {
  console.log("animateGantt called");
  const bars = document.querySelectorAll(".gantt-bar");
  console.log("Found bars:", bars.length);
  let progress = 0;

  // Clear previous animation
  if (ganttAnimationInterval) {
    clearInterval(ganttAnimationInterval);
  }

  // Reset first
  bars.forEach((bar) => {
    const progressBar = bar.querySelector(".bar-progress");
    if (progressBar) {
      progressBar.style.width = "0%";
      progressBar.classList.remove("animating");
    }
    bar.classList.remove("animating");
    bar.setAttribute("data-progress", "0");
    bar.classList.remove("completed");
  });

  // Start animation - same as test file
  ganttAnimationInterval = setInterval(() => {
    progress += 2;

    bars.forEach((bar) => {
      const progressBar = bar.querySelector(".bar-progress");
      if (progressBar) {
        const currentProgress = Math.min(progress, 100);

        // Add animating class when progress > 0
        if (currentProgress > 0) {
          bar.classList.add("animating");
          progressBar.classList.add("animating");
        }

        progressBar.style.width = currentProgress + "%";

        // Add completed class when done
        if (currentProgress >= 100) {
          bar.classList.add("completed");
        }
      }
      bar.setAttribute("data-progress", Math.min(progress, 100));
    });

    if (progress >= 100) {
      clearInterval(ganttAnimationInterval);
      console.log("Animation completed");
    }
  }, 80);
}

// Reset Gantt
function resetGantt() {
  console.log("resetGantt called");
  if (ganttAnimationInterval) {
    clearInterval(ganttAnimationInterval);
  }

  const bars = document.querySelectorAll(".gantt-bar");
  console.log("Resetting bars:", bars.length);
  bars.forEach((bar) => {
    const progressBar = bar.querySelector(".bar-progress");
    if (progressBar) {
      progressBar.style.width = "0%";
      progressBar.classList.remove("animating");
    }
    bar.classList.remove("animating");
    bar.setAttribute("data-progress", "0");
    bar.classList.remove("completed");
  });
}

// Toggle Critical Path
function toggleCriticalPath(event) {
  const rows = document.querySelectorAll(".gantt-row");
  const btn = event ? event.target.closest(".control-btn") : null;
  isCriticalPathVisible = !isCriticalPathVisible;

  rows.forEach((row) => {
    if (isCriticalPathVisible) {
      if (!row.classList.contains("critical")) {
        row.style.opacity = "0.3";
        row.style.filter = "grayscale(50%)";
      } else {
        row.style.opacity = "1";
        row.style.filter = "none";
      }
    } else {
      row.style.opacity = "1";
      row.style.filter = "none";
    }
  });

  // Update button text
  if (btn) {
    const icon = btn.querySelector("i");
    const text = isCriticalPathVisible
      ? " Hide Critical Path"
      : " Toggle Critical Path";
    btn.innerHTML = icon.outerHTML + text;
  }
}

// ===================================
// MATERI 6: NETWORK DIAGRAM
// ===================================

// Show Critical Path
function showCriticalPath() {
  const nodes = document.querySelectorAll(".network-node");
  const arrows = document.querySelectorAll(".dependency-arrow");

  // Highlight critical nodes
  nodes.forEach((node) => {
    const nodeId = node.getAttribute("data-node");
    if (["A", "C", "D", "E"].includes(nodeId)) {
      node.classList.add("critical-highlight");
    } else {
      node.classList.add("dimmed");
    }
  });

  // Highlight critical arrows
  arrows.forEach((arrow) => {
    if (arrow.classList.contains("critical-arrow")) {
      arrow.classList.add("highlighted");
    } else {
      arrow.classList.add("dimmed");
    }
  });
}

// Show All Paths
function showAllPaths() {
  const nodes = document.querySelectorAll(".network-node");
  const arrows = document.querySelectorAll(".dependency-arrow");
  const info = document.getElementById("pathInfo");

  nodes.forEach((node) => {
    node.classList.remove("critical-highlight", "dimmed");
  });

  arrows.forEach((arrow) => {
    arrow.classList.remove("highlighted", "dimmed");
  });

  // Show all paths information
  if (info) {
    info.innerHTML = `
      <h4>Informasi Jalur:</h4>
      <div class="paths-list">
        <div class="path-item">
          <strong>Path 1:</strong> A → B → D → E = 47 hari
        </div>
        <div class="path-item critical-path-item">
          <strong>Path 2 (CRITICAL):</strong> A → C → D → E = 52 hari
          <span class="path-badge">Jalur Terpanjang</span>
        </div>
      </div>
    `;
  }
}

// Calculate Float
function calculateFloat() {
  const info = document.getElementById("pathInfo");
  if (info) {
    info.innerHTML = `
            <h4>Float Calculation:</h4>
            <div class="float-info">
                <div class="float-item">
                    <strong>Node B (Frontend):</strong><br>
                    LS - ES = 17 - 12 = <span class="float-value">5 hari</span><br>
                    <small>Ada kelonggaran 5 hari</small>
                </div>
                <div class="float-item critical">
                    <strong>Nodes A, C, D, E (Critical):</strong><br>
                    LS - ES = 0 - 0 = <span class="float-value">0 hari</span><br>
                    <small>Tidak ada kelonggaran!</small>
                </div>
            </div>
        `;
  }
}

// ===================================
// MATERI 7: STUDI KASUS
// ===================================

// Show WBS Detail
function showWBSDetail() {
  showDetailSection("wbsDetail");
}

// Show PERT Detail
function showPERTDetail() {
  showDetailSection("pertDetail");
}

// Show Network Detail
function showNetworkDetail() {
  showDetailSection("networkDetail");
}

// Show Gantt Detail
function showGanttDetail() {
  showDetailSection("ganttDetail");
}

// Show Detail Section
function showDetailSection(sectionId) {
  // Hide all sections first
  const sections = document.querySelectorAll(".detail-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Show selected section
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Close Detail
function closeDetail(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "none";
  }
}

// ===================================
// ANIMATION ON SCROLL
// ===================================

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe animated elements
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-zoom-in"
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

// ===================================
// KEYBOARD NAVIGATION
// ===================================

document.addEventListener("keydown", (e) => {
  const prev = document.querySelector(".nav-arrow.prev");
  const next = document.querySelector(".nav-arrow.next");

  // Left arrow or Page Up
  if ((e.key === "ArrowLeft" || e.key === "PageUp") && prev && !prev.disabled) {
    prev.click();
  }

  // Right arrow or Page Down
  if (
    (e.key === "ArrowRight" || e.key === "PageDown") &&
    next &&
    !next.disabled
  ) {
    next.click();
  }

  // Home key
  if (e.key === "Home") {
    window.location.href = "index.html";
  }

  // End key
  if (e.key === "End") {
    window.location.href = "materi8.html";
  }

  // M key for menu
  if (e.key === "m" || e.key === "M") {
    toggleMenu();
  }
});

// ===================================
// PRINT FUNCTIONALITY
// ===================================

window.addEventListener("beforeprint", () => {
  // Expand all collapsible content for printing
  const allDetails = document.querySelectorAll(
    ".step-detail, .factor-content, .wbs-children"
  );
  allDetails.forEach((detail) => {
    detail.style.maxHeight = "none";
    detail.style.display = "block";
  });
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Smooth scroll to element
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Format number with thousand separator
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log(
  "%c🚀 PRIME Presentation System",
  "color: #667eea; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cKelompok 4 - Project Scheduling: Gantt Chart dan Network Diagram",
  "color: #764ba2; font-size: 14px;"
);
console.log(
  "%cKeyboard Shortcuts:",
  "color: #333; font-weight: bold; margin-top: 10px;"
);
console.log("  ← / → : Navigate slides");
console.log("  Home : Go to first slide");
console.log("  End : Go to last slide");
console.log("  M : Toggle menu");

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Lazy load images and heavy content
document.addEventListener("DOMContentLoaded", function () {
  // Remove will-change after animations complete
  const animatedElements = document.querySelectorAll(
    "[class*='animate-'], .comparison-box, .review-card, .reference-item"
  );

  animatedElements.forEach((el) => {
    el.addEventListener("animationend", function () {
      this.style.willChange = "auto";
    });

    el.addEventListener("transitionend", function () {
      this.style.willChange = "auto";
    });
  });

  // Optimize Gantt Chart rendering
  const ganttBars = document.querySelectorAll(".gantt-task-bar");
  let animationStarted = false;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animationStarted) {
        animationStarted = true;
        ganttBars.forEach((bar, index) => {
          setTimeout(() => {
            bar.style.animation = "taskBarSlide 2s ease forwards";
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  const ganttContainer = document.querySelector(".gantt-container");
  if (ganttContainer) {
    observer.observe(ganttContainer);
  }

  // Reduce animation complexity on low-end devices
  if (
    navigator.hardwareConcurrency &&
    navigator.hardwareConcurrency <= 4
  ) {
    document.body.classList.add("reduce-animations");
    
    // Disable heavy animations
    const style = document.createElement("style");
    style.textContent = `
      .reduce-animations * {
        animation-duration: 0.5s !important;
        transition-duration: 0.2s !important;
      }
      .reduce-animations @keyframes shimmer,
      .reduce-animations @keyframes rotate,
      .reduce-animations @keyframes completeGlow {
        animation: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Optimize scroll performance
  let ticking = false;
  window.addEventListener(
    "scroll",
    debounce(() => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Add scroll-based optimizations here
          ticking = false;
        });
        ticking = true;
      }
    }, 100)
  );
});
