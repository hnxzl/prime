// DOM Elements
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const backToTopButton = document.getElementById("backToTop");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Close mobile menu if open
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");

  // Animate hamburger bars
  const bars = hamburger.querySelectorAll(".bar");
  bars.forEach((bar, index) => {
    if (hamburger.classList.contains("active")) {
      if (index === 0)
        bar.style.transform = "rotate(-45deg) translate(-5px, 6px)";
      if (index === 1) bar.style.opacity = "0";
      if (index === 2)
        bar.style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
      bar.style.transform = "none";
      bar.style.opacity = "1";
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target)) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");

    const bars = hamburger.querySelectorAll(".bar");
    bars.forEach((bar) => {
      bar.style.transform = "none";
      bar.style.opacity = "1";
    });
  }
});

// Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Navbar background
  if (scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "#ffffff";
    navbar.style.backdropFilter = "none";
  }

  // Back to top button
  if (scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }

  // Update active navigation link
  updateActiveNavLink();

  // Trigger scroll animations
  triggerScrollAnimations();
});

// Back to Top Functionality
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Update Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Scroll Animations
function triggerScrollAnimations() {
  const cards = document.querySelectorAll(".card:not(.animate)");
  const windowHeight = window.innerHeight;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      card.classList.add("animate");
    }
  });
}

// Tab Functionality for Comparison Section
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to clicked button and corresponding content
    button.classList.add("active");
    document.getElementById(`${targetTab}-tab`).classList.add("active");
  });
});

// Intersection Observer for Better Animation Performance
const observerOptions = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");

      // Add stagger effect for multiple cards in the same section
      const cards = entry.target.parentElement.querySelectorAll(".card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("animate");
        }, index * 100);
      });
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});

// Enhanced Card Hover Effects
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.03)";
    this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
  });
});

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translate3d(0, ${rate}px, 0)`;
  }
});

// Dynamic Counter Animation for Numbers
function animateCounters() {
  const counters = document.querySelectorAll("[data-counter]");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-counter"));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current);
    }, 16);
  });
}

// PERT Formula Calculator (Interactive Feature)
function createPERTCalculator() {
  const pertFormula = document.querySelector(".pert-formula");
  if (pertFormula) {
    const calculatorHTML = `
            <div class="pert-calculator">
                <h5>PERT Calculator Interaktif</h5>
                <div class="calculator-inputs">
                    <div class="input-group">
                        <label for="optimistic">Optimistic (O):</label>
                        <input type="number" id="optimistic" min="0" placeholder="hari">
                    </div>
                    <div class="input-group">
                        <label for="mostLikely">Most Likely (M):</label>
                        <input type="number" id="mostLikely" min="0" placeholder="hari">
                    </div>
                    <div class="input-group">
                        <label for="pessimistic">Pessimistic (P):</label>
                        <input type="number" id="pessimistic" min="0" placeholder="hari">
                    </div>
                </div>
                <div class="calculator-result">
                    <strong>Estimasi Durasi: <span id="pertResult">0</span> hari</strong>
                </div>
            </div>
        `;

    pertFormula.insertAdjacentHTML("beforeend", calculatorHTML);

    // Add event listeners for real-time calculation
    ["optimistic", "mostLikely", "pessimistic"].forEach((id) => {
      document.getElementById(id).addEventListener("input", calculatePERT);
    });
  }
}

function calculatePERT() {
  const optimistic =
    parseFloat(document.getElementById("optimistic").value) || 0;
  const mostLikely =
    parseFloat(document.getElementById("mostLikely").value) || 0;
  const pessimistic =
    parseFloat(document.getElementById("pessimistic").value) || 0;

  const result = (optimistic + 4 * mostLikely + pessimistic) / 6;
  document.getElementById("pertResult").textContent = result.toFixed(2);
}

// Gantt Chart Animation
function animateGanttChart() {
  const ganttBars = document.querySelectorAll(".gantt-bar");
  ganttBars.forEach((bar, index) => {
    setTimeout(() => {
      bar.style.animation = "fillBar 1s ease-out forwards";
    }, index * 200);
  });
}

// Network Diagram Interactive Nodes
function enhanceNetworkDiagram() {
  const nodes = document.querySelectorAll(".node");
  nodes.forEach((node) => {
    node.addEventListener("click", function () {
      // Toggle node selection
      this.classList.toggle("selected");

      // Add pulse animation
      this.style.animation = "pulse 0.5s ease";
      setTimeout(() => {
        this.style.animation = "";
      }, 500);
    });
  });
}

// Add pulse animation to CSS dynamically
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    .node.selected {
        border-color: #F39C12;
        box-shadow: 0 0 15px rgba(243, 156, 18, 0.5);
    }
    
    .pert-calculator {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        margin-top: 1rem;
        border: 2px solid var(--secondary-blue);
    }
    
    .calculator-inputs {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin: 1rem 0;
    }
    
    .input-group {
        display: flex;
        flex-direction: column;
    }
    
    .input-group label {
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: var(--primary-blue);
    }
    
    .input-group input {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 1rem;
    }
    
    .input-group input:focus {
        outline: none;
        border-color: var(--secondary-blue);
        box-shadow: 0 0 5px rgba(28, 101, 140, 0.3);
    }
    
    .calculator-result {
        text-align: center;
        padding: 1rem;
        background: var(--light-bg);
        border-radius: 8px;
        font-size: 1.1rem;
        color: var(--primary-blue);
    }
    
    .nav-link.active {
        color: var(--secondary-blue);
        font-weight: 600;
    }
    
    .nav-link.active:after {
        width: 100%;
        left: 0;
    }
`;
document.head.appendChild(style);

// Typing Effect for Hero Title
function typeEffect(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Progress Bar for Reading
function createReadingProgress() {
  const progressBar = document.createElement("div");
  progressBar.className = "reading-progress";
  progressBar.innerHTML = '<div class="progress-fill"></div>';
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrolled =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    document.querySelector(".progress-fill").style.width = scrolled + "%";
  });
}

// Add reading progress CSS
const progressStyle = document.createElement("style");
progressStyle.textContent = `
    .reading-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(0, 0, 0, 0.1);
        z-index: 1001;
    }
    
    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--primary-blue), var(--secondary-blue));
        width: 0%;
        transition: width 0.25s ease;
    }
`;
document.head.appendChild(progressStyle);

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code);
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
    showEasterEgg();
    konamiCode = [];
  }
});

function showEasterEgg() {
  const easterEgg = document.createElement("div");
  easterEgg.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                    background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue)); 
                    color: white; padding: 2rem; border-radius: 15px; z-index: 10000; 
                    text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
            <h3>🎉 Selamat! 🎉</h3>
            <p>Anda telah menemukan Easter Egg PRIME!</p>
            <p>Project Management Excellence Unlocked! 🚀</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="margin-top: 1rem; padding: 0.5rem 1rem; border: none; 
                           border-radius: 5px; background: white; color: var(--primary-blue); 
                           cursor: pointer; font-weight: 600;">Tutup</button>
        </div>
    `;
  document.body.appendChild(easterEgg);

  setTimeout(() => {
    if (easterEgg.parentElement) {
      easterEgg.remove();
    }
  }, 10000);
}

// Initialize all functions when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initial animations
  triggerScrollAnimations();

  // Create interactive elements
  createPERTCalculator();
  createReadingProgress();

  // Enhance existing elements
  enhanceNetworkDiagram();

  // Animate Gantt chart when it comes into view
  const ganttObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateGanttChart();
        ganttObserver.unobserve(entry.target);
      }
    });
  });

  const ganttChart = document.querySelector(".gantt-example");
  if (ganttChart) {
    ganttObserver.observe(ganttChart);
  }

  // Typing effect for hero title (optional)
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    // Uncomment the line below if you want typing effect
    // typeEffect(heroTitle, originalText, 80);
  }

  // Add loading animation
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll handler
const debouncedScrollHandler = debounce(() => {
  updateActiveNavLink();
  triggerScrollAnimations();
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);

// Service Worker for offline functionality (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // You can add a service worker here for offline functionality
    console.log(
      "PRIME - Project Management Learning Platform Loaded Successfully! 🚀"
    );
  });
}

// Add tooltips for interactive elements
function addTooltips() {
  const tooltipElements = [
    {
      selector: ".nav-brand",
      text: "Project Integration Methodology of Excellence",
    },
    { selector: ".back-to-top", text: "Kembali ke atas" },
    { selector: ".cta-button", text: "Mulai pembelajaran interaktif" },
  ];

  tooltipElements.forEach(({ selector, text }) => {
    const element = document.querySelector(selector);
    if (element) {
      element.title = text;
    }
  });
}

// Initialize tooltips
document.addEventListener("DOMContentLoaded", addTooltips);
