// ===== SHARED FUNCTIONS =====
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const hamburgerBtn = document.getElementById("hamburgerBtn");

function toggleMenu() {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  const isOpen = sidebar.classList.contains("active");
  document.body.style.overflow = isOpen ? "hidden" : "";
  hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && sidebar.classList.contains('active')) toggleMenu();
});

function setTheme(mode) {
  document.body.classList.remove("light", "dark");
  if (mode === 'dark') document.body.classList.add("dark");
  localStorage.setItem("theme", mode);
  document.getElementById('btn-light').classList.toggle('active-theme', mode === 'light');
  document.getElementById('btn-dark').classList.toggle('active-theme', mode === 'dark');
  showToast(mode === 'dark' ? '🌙 Dark mode' : '☀️ Light mode', 1500);
}

function showToast(message, duration = 2000) {
  let t = document.querySelector('.toast');
  if (t) t.remove();
  t = document.createElement('div');
  t.className = 'toast';
  t.textContent = message;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), duration);
}

function copyEmail() {
  navigator.clipboard.writeText('kesupdatess@gmail.com').then(() => showToast('📋 Email copied!', 2000));
}

// Scroll progress bar + back to top
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById('scrollProgress').style.width = progress + '%';
  const btn = document.getElementById('backToTop');
  if (btn) {
    if (scrollTop > 300) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }
});

window.onload = () => {
  const saved = localStorage.getItem("theme") || "light";
  setTheme(saved);
};

// Card scroll-in reveal animation
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card.reveal').forEach(card => revealObserver.observe(card));

// GA4 click tracking for every link
document.addEventListener('click', function(e) {
  const link = e.target.closest('a');
  if (!link) return;
  const linkText = link.innerText.trim().substring(0, 50) || link.getAttribute('href');
  const linkUrl = link.getAttribute('href');
  if (typeof gtag === 'function') {
    gtag('event', 'link_click', {
      link_text: linkText,
      link_url: linkUrl,
      page_location: window.location.href
    });
  }
});

// Highlight current page in sidebar
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
    link.classList.add('nav-active');
  }
});
