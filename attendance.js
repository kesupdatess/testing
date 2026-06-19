*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
scroll-behavior:smooth;
}

/* LIGHT MODE */
body {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #dbeafe 50%, #e0f2fe 75%, #f0f9ff 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  color: #1e293b;
  min-height: 100vh;
  transition: background 0.3s, color 0.3s;
  position: relative;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

body::before {
  content: '';
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background:
    radial-gradient(ellipse 85% 55% at 50% -10%, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0.04) 45%, transparent 80%),
    radial-gradient(ellipse 65% 45% at 50% 110%, rgba(14,165,233,0.1) 0%, rgba(14,165,233,0.03) 45%, transparent 80%),
    radial-gradient(ellipse 50% 35% at 80% 50%, rgba(99,102,241,0.06) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* DARK MODE */
body.dark {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 30%, #1e293b 50%, #1e1b4b 70%, #0f172a 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  color: #f8fafc;
}

body.dark::before {
  background:
    radial-gradient(ellipse 85% 55% at 50% -10%, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.06) 45%, transparent 80%),
    radial-gradient(ellipse 65% 45% at 50% 110%, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0.04) 45%, transparent 80%),
    radial-gradient(ellipse 50% 35% at 20% 50%, rgba(139,92,246,0.08) 0%, transparent 70%);
}

body.dark .card {
  background: rgba(30,41,59,0.85);
  border: 1px solid rgba(99,102,241,0.15);
  color: #f8fafc;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.15);
  backdrop-filter: blur(10px);
}
body.dark .card h2 { color: #93c5fd; }
body.dark .card p { color: #cbd5e1; }
body.dark input { background: #1e293b; border: 1px solid #475569; color: white; }
body.dark header p { color: #94a3b8; }
body.dark h1 { background: linear-gradient(135deg, #fff, #93c5fd, #a5f3fc); -webkit-background-clip: text; background-clip: text; color: transparent; }
body.dark nav { background: rgba(30,41,59,0.95); border-right: 1px solid rgba(99,102,241,0.15); backdrop-filter: blur(12px); }
body.dark nav a { color: #f1f5f9; }
body.dark .hamburger { background: rgba(30,41,59,0.9); color: white; border-color: rgba(99,102,241,0.2); }
body.dark footer { color: #94a3b8; }
body.dark .email-box { background: rgba(30,41,59,0.6); border: 1px solid rgba(99,102,241,0.15); }
body.dark .email-box span { color: #93c5fd; }
body.dark .erp-features li { color: #cbd5e1; border-bottom: 1px solid rgba(255,255,255,0.07); }
body.dark .ticker-wrap { background: rgba(30,41,59,0.8); border-color: rgba(99,102,241,0.15); backdrop-filter: blur(8px); }
body.dark .ticker-label { background: #3b82f6; }
body.dark .ticker-text { color: #e2e8f0; }
body.dark .theme-toggle { background: rgba(30,41,59,0.9); border-color: rgba(99,102,241,0.2); }
body.dark .scroll-progress { background: rgba(30,41,59,0.5); }
body.dark .attendance-result { background: rgba(30,41,59,0.6); border: 1px solid rgba(99,102,241,0.15); color: #f8fafc; }

/* Header */
header {
  text-align: center;
  padding: 70px 20px 30px;
  position: relative;
  z-index: 1;
}

.logo {
  font-size: 60px;
  animation: float 3s ease-in-out infinite;
  display: inline-block;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

h1 {
  font-size: 2.5rem;
  margin-top: 10px;
  font-weight: 800;
  background: linear-gradient(135deg, #1e3a8a, #2563eb, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

header p {
  opacity: 0.85;
  margin-top: 8px;
  color: #334155;
  font-weight: 500;
}

/* Buttons */
.btn-red    { background: linear-gradient(135deg, #ef4444, #dc2626) !important; color: #fff !important; box-shadow: 0 4px 15px rgba(239,68,68,0.3); }
.btn-blue   { background: linear-gradient(135deg, #3b82f6, #2563eb) !important; color: #fff !important; box-shadow: 0 4px 15px rgba(37,99,235,0.3); }
.btn-green  { background: linear-gradient(135deg, #10b981, #059669) !important; color: #fff !important; box-shadow: 0 4px 15px rgba(16,185,129,0.3); }
.btn-purple { background: linear-gradient(135deg, #8b5cf6, #7c3aed) !important; color: #fff !important; box-shadow: 0 4px 15px rgba(124,58,237,0.3); }
.btn-orange { background: linear-gradient(135deg, #f97316, #ea580c) !important; color: #fff !important; box-shadow: 0 4px 15px rgba(249,115,22,0.3); }
.btn-cyan   { background: linear-gradient(135deg, #06b6d4, #0891b2) !important; color: #fff !important; box-shadow: 0 4px 15px rgba(6,182,212,0.3); }

.btn, .link, nav button {
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border: none;
  margin: 4px 0;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.btn:hover, .link:hover, nav button:hover {
  transform: translateY(-3px);
  filter: brightness(1.05);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

/* Container */
.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  position: relative;
  z-index: 1;
}

/* Cards */
.card {
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(59,130,246,0.15);
  border-radius: 28px;
  padding: 24px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px rgba(30,58,138,0.06), 0 1px 3px rgba(30,58,138,0.04);
  backdrop-filter: blur(10px);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(30,58,138,0.1), 0 4px 12px rgba(30,58,138,0.06);
  border-color: rgba(59,130,246,0.25);
}

.card h2 {
  margin-bottom: 16px;
  font-size: 1.5rem;
  color: #1e40af;
  font-weight: 700;
}

.card p { color: #334155; line-height: 1.5; }

.link {
  display: block;
  padding: 12px;
  margin-top: 12px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  color: white !important;
}

/* Ticker / Marquee */
.ticker-wrap {
  background: rgba(255,255,255,0.85);
  border: 1px solid rgba(59,130,246,0.15);
  border-radius: 60px;
  padding: 10px 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(30,58,138,0.06);
  position: relative;
  z-index: 1;
  backdrop-filter: blur(8px);
}

.ticker-label {
  background: #ef4444;
  color: white;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 50px;
  white-space: nowrap;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.ticker-inner {
  overflow: hidden;
  flex: 1;
}

.ticker-text {
  display: inline-block;
  white-space: nowrap;
  animation: ticker 30s linear infinite;
  animation-delay: -8s;
  font-size: 0.88rem;
  color: #334155;
  font-weight: 500;
}

@keyframes ticker {
  0%   { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* Sidebar */
nav {
  position: fixed;
  top: 0;
  left: -300px;
  width: 280px;
  height: 100%;
  background: rgba(255,255,255,0.95);
  padding: 80px 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.3s cubic-bezier(0.4,0,0.2,1);
  z-index: 1002;
  overflow-y: auto;
  border-right: 1px solid rgba(59,130,246,0.1);
  box-shadow: 4px 0 30px rgba(30,58,138,0.08);
  backdrop-filter: blur(12px);
}

nav.active { left: 0; }

nav a {
  color: #1e293b;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 50px;
  transition: 0.2s;
  font-weight: 500;
}

nav a:hover {
  transform: translateX(5px);
  background: rgba(37,99,235,0.1);
}

nav a.nav-active {
  box-shadow: 0 0 0 2px rgba(59,130,246,0.5) inset;
  transform: translateX(3px);
}

/* Overlay */
#overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  display: none;
  z-index: 1001;
}

#overlay.active { display: block; }

/* Hamburger */
.hamburger {
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 28px;
  cursor: pointer;
  z-index: 1003;
  background: rgba(255,255,255,0.9);
  box-shadow: 0 2px 12px rgba(30,58,138,0.08);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 0.2s;
  color: #1e40af;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(59,130,246,0.15);
}

/* Floating Theme Toggle */
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255,255,255,0.9);
  border-radius: 50px;
  padding: 6px 12px;
  box-shadow: 0 2px 12px rgba(30,58,138,0.08);
  border: 1px solid rgba(59,130,246,0.15);
  backdrop-filter: blur(8px);
}

.theme-toggle button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 4px 8px;
  border-radius: 50px;
  transition: all 0.2s;
}

.theme-toggle button:hover { background: rgba(59,130,246,0.1); transform: scale(1.15); }
.theme-toggle button.active-theme { background: rgba(59,130,246,0.15); }

/* Scroll Progress Bar */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6);
  z-index: 9999;
  width: 0%;
  transition: width 0.1s;
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 10px rgba(59,130,246,0.3);
}

/* Back to Top */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 46px;
  height: 46px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(37,99,235,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 998;
}

.back-to-top.visible {
  opacity: 1;
  pointer-events: all;
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(37,99,235,0.4);
}

/* Footer */
footer {
  text-align: center;
  padding: 30px;
  font-size: 13px;
  opacity: 0.7;
  position: relative;
  z-index: 1;
  color: #475569;
}

/* Search Input */
input {
  width: 100%;
  padding: 16px 24px;
  border: 1px solid #cbd5e1;
  border-radius: 60px;
  font-size: 16px;
  background: rgba(255,255,255,0.9);
  color: #1e293b;
  transition: 0.2s;
  box-shadow: 0 2px 12px rgba(30,58,138,0.06), inset 0 1px 2px rgba(255,255,255,0.8);
}

input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59,130,246,0.15), 0 4px 16px rgba(59,130,246,0.08);
}

input::placeholder { color: #94a3b8; }

/* Toast */
.toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #1e293b;
  color: white;
  padding: 12px 28px;
  border-radius: 60px;
  font-weight: 500;
  z-index: 2000;
  animation: fadeInUp 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  white-space: nowrap;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateX(-50%) translateY(20px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/* Email Box */
.email-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(240,249,255,0.8);
  border: 1px solid rgba(59,130,246,0.15);
  border-radius: 16px;
  padding: 14px 18px;
  margin-top: 14px;
  flex-wrap: wrap;
  gap: 10px;
  backdrop-filter: blur(8px);
}

.email-box span {
  font-weight: 600;
  color: #1e40af;
  font-size: 0.95rem;
  word-break: break-all;
}

.email-actions { display: flex; gap: 8px; flex-wrap: wrap; }

.email-actions a,
.email-actions button {
  padding: 7px 16px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: all 0.2s;
}

.email-actions a:hover,
.email-actions button:hover { transform: translateY(-2px); filter: brightness(1.05); }

/* ERP Features */
.erp-features {
  list-style: none;
  margin-top: 14px;
  margin-bottom: 10px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(59,130,246,0.12);
}

.erp-features li {
  padding: 11px 18px;
  font-size: 0.93rem;
  color: #334155;
  border-bottom: 1px solid rgba(59,130,246,0.08);
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.erp-features li:last-child { border-bottom: none; }
.erp-features li:nth-child(odd) { background: rgba(59,130,246,0.03); }
.erp-features li a:hover { color: #2563eb; }
body.dark .erp-features li a:hover { color: #60a5fa; }

/* Report Issue Button */
.report-btn {
  display: block;
  padding: 14px 20px;
  margin-top: 12px;
  border-radius: 18px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  color: white !important;
  font-size: 0.88rem;
  line-height: 1.4;
  letter-spacing: 0.3px;
}

/* WhatsApp Share */
.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #25D366, #128C7E) !important;
  color: white !important;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none;
  margin-top: 10px;
  box-shadow: 0 4px 12px rgba(37,211,102,0.3);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.whatsapp-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(37,211,102,0.4); }

.attendance-stat-box {
  margin-top: 14px;
  display: none;
  text-align: center;
  padding: 16px;
  border-radius: 16px;
  background: rgba(59,130,246,0.06);
  border: 1px solid rgba(59,130,246,0.15);
  backdrop-filter: blur(8px);
}

.attendance-stat-box.active { display: block; }

.attendance-stat-box.safe {
  background: rgba(16,185,129,0.1);
  border: 1px solid rgba(16,185,129,0.3);
}

body.dark .attendance-stat-box.safe { background: rgba(16,185,129,0.12); }

.attendance-stat-box.warning {
  background: rgba(239,68,68,0.08);
  border: 1px solid rgba(239,68,68,0.3);
}

body.dark .attendance-stat-box.warning { background: rgba(239,68,68,0.12); }

.attendance-stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.1;
  color: #1e40af;
}

.attendance-stat-box.safe .attendance-stat-number { color: #059669; }
body.dark .attendance-stat-box.safe .attendance-stat-number { color: #34d399; }

.attendance-stat-box.warning .attendance-stat-number { color: #dc2626; }
body.dark .attendance-stat-box.warning .attendance-stat-number { color: #f87171; }

.attendance-stat-label {
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 4px;
  color: #334155;
}

body.dark .attendance-stat-label { color: #cbd5e1; }

.attendance-result {
  margin-top: 14px;
  background: rgba(240,249,255,0.85);
  border: 1px solid rgba(59,130,246,0.15);
  border-radius: 16px;
  padding: 14px 18px;
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e40af;
  display: none;
  backdrop-filter: blur(8px);
}

.attendance-result.active { display: block; }

.attendance-result.safe {
  background: rgba(16,185,129,0.1);
  border: 1px solid rgba(16,185,129,0.3);
  color: #059669;
}

body.dark .attendance-result.safe {
  background: rgba(16,185,129,0.15);
  color: #34d399;
}

.attendance-result.warning {
  background: rgba(239,68,68,0.08);
  border: 1px solid rgba(239,68,68,0.3);
  color: #dc2626;
}

body.dark .attendance-result.warning {
  background: rgba(239,68,68,0.15);
  color: #f87171;
}

/* Card scroll-in animation */
.card.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.card.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .card.reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* Mobile */
@media (max-width: 768px) {
  header { padding: 55px 15px 25px; }
  .logo { font-size: 50px; }
  h1 { font-size: 1.8rem; }
  .container { padding: 15px; }
  .card { padding: 18px; }
  .card h2 { font-size: 1.3rem; }
  .btn, .link { padding: 10px 18px; font-size: 0.85rem; }
  .theme-toggle { top: 16px; right: 16px; padding: 5px 10px; }
  .theme-toggle button { font-size: 17px; padding: 3px 6px; }
  .attendance-grid { grid-template-columns: 1fr; }
}

@media (min-width: 769px) {
  .container { padding-bottom: 20px; }
}

/* College Details Section */
.building-card {
  background: rgba(59,130,246,0.04);
  border: 1px solid rgba(59,130,246,0.15);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.building-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59,130,246,0.12);
  border-color: rgba(59,130,246,0.25);
}

.building-icon {
  font-size: 2.2rem;
  flex-shrink: 0;
  margin-top: 4px;
}

.building-info {
  flex: 1;
}

.building-info h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 8px;
}

.building-name {
  font-weight: 600;
  color: #334155;
  margin-bottom: 12px;
  line-height: 1.4;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.contact-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.contact-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.contact-text {
  color: #475569;
  font-weight: 500;
  line-height: 1.4;
}

/* Dark mode for College Details */
body.dark .building-card {
  background: rgba(30,41,59,0.6);
  border-color: rgba(255,255,255,0.08);
}

body.dark .building-card:hover {
  box-shadow: 0 8px 25px rgba(99,102,241,0.15);
  border-color: rgba(99,102,241,0.2);
}

body.dark .building-info h3 {
  color: #93c5fd;
}

body.dark .building-name {
  color: #cbd5e1;
}

body.dark .contact-link {
  color: #60a5fa;
}

body.dark .contact-link:hover {
  color: #93c5fd;
}

body.dark .contact-text {
  color: #94a3b8;
}

/* Mobile responsive for building cards */
@media (max-width: 768px) {
  .building-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    padding: 18px;
  }

  .building-icon-wrapper {
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .building-icon {
    font-size: 2.4rem;
  }

  .building-badge {
    font-size: 0.7rem;
    padding: 5px 12px;
  }

  .building-info h3 {
    font-size: 1.1rem;
  }

  .building-name {
    font-size: 0.9rem;
  }

  .building-tags {
    gap: 5px;
    margin-bottom: 10px;
  }

  .tag {
    font-size: 0.7rem;
    padding: 3px 10px;
  }

  .contact-row {
    gap: 8px;
    margin-bottom: 6px;
  }

  .contact-icon {
    font-size: 1rem;
  }

  .contact-link, .contact-text {
    font-size: 0.85rem;
  }

  .building-actions {
    width: 100%;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
  }

  .building-btn {
    width: 100%;
    justify-content: center;
    font-size: 0.88rem;
    padding: 12px 16px;
  }
}

/* Enhanced Building Cards UI/UX */
.building-icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.building-icon {
  font-size: 2.4rem;
  margin-top: 4px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.building-badge {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 50px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(37,99,235,0.3);
}

.main-building-card {
  background: linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.04));
  border: 2px solid rgba(59,130,246,0.2);
  position: relative;
  overflow: hidden;
}

.main-building-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
  background-size: 200% 100%;
  animation: shimmer 3s ease infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.main-building-card .building-badge {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  box-shadow: 0 2px 8px rgba(124,58,237,0.3);
}

.building-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.tag {
  background: rgba(59,130,246,0.1);
  color: #2563eb;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 50px;
  letter-spacing: 0.3px;
  border: 1px solid rgba(59,130,246,0.15);
}

.building-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.building-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  color: white !important;
}

.building-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.05);
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}

.building-btn span {
  font-size: 1rem;
}

/* Dark mode enhancements */
body.dark .building-icon {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

body.dark .main-building-card {
  background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.06));
  border-color: rgba(99,102,241,0.25);
}

body.dark .main-building-card::before {
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1);
}

body.dark .tag {
  background: rgba(99,102,241,0.15);
  color: #93c5fd;
  border-color: rgba(99,102,241,0.2);
}

body.dark .building-badge {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  box-shadow: 0 2px 8px rgba(99,102,241,0.3);
}

body.dark .main-building-card .building-badge {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  box-shadow: 0 2px 8px rgba(139,92,246,0.3);
}

/* Instagram Button with Logo */
.instagram-btn {
  display: inline-flex !important;
  align-items: center;
  gap: 10px;
  padding: 12px 28px !important;
}

.instagram-icon {
  width: 22px;
  height: 22px;
  color: white;
  flex-shrink: 0;
}

.instagram-btn span {
  font-weight: 600;
}

@media (max-width: 768px) {
  .instagram-btn {
    padding: 10px 22px !important;
    font-size: 0.9rem;
  }
  .instagram-icon {
    width: 20px;
    height: 20px;
  }
}

/* ================= PREMIUM ATTENDANCE CALCULATOR ================= */

.attendance-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95)) !important;
  border: 1px solid rgba(59,130,246,0.12) !important;
  overflow: hidden;
}

body.dark .attendance-card {
  background: linear-gradient(135deg, rgba(30,41,59,0.9), rgba(15,23,42,0.9)) !important;
  border: 1px solid rgba(99,102,241,0.15) !important;
}

.attendance-header {
  text-align: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(59,130,246,0.1);
}

body.dark .attendance-header {
  border-bottom-color: rgba(99,102,241,0.15);
}

.attendance-icon {
  font-size: 2.2rem;
  margin-bottom: 6px;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px rgba(59,130,246,0.2));
}

body.dark .attendance-icon {
  filter: drop-shadow(0 4px 12px rgba(99,102,241,0.3));
}

.attendance-header h2 {
  font-size: 1.5rem;
  margin-bottom: 4px;
  background: linear-gradient(135deg, #1e3a8a, #2563eb, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

body.dark .attendance-header h2 {
  background: linear-gradient(135deg, #fff, #93c5fd, #a5f3fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.attendance-subtitle {
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 500;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.4;
}

body.dark .attendance-subtitle {
  color: #94a3b8;
}

/* Quick Stats */
.attendance-quick-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 14px;
}

.quick-stat {
  background: rgba(59,130,246,0.04);
  border: 1px solid rgba(59,130,246,0.1);
  border-radius: 14px;
  padding: 10px 8px;
  text-align: center;
  transition: all 0.3s ease;
}

.quick-stat:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(59,130,246,0.1);
  border-color: rgba(59,130,246,0.2);
}

body.dark .quick-stat {
  background: rgba(99,102,241,0.08);
  border-color: rgba(99,102,241,0.15);
}

body.dark .quick-stat:hover {
  box-shadow: 0 4px 16px rgba(99,102,241,0.15);
  border-color: rgba(99,102,241,0.25);
}

.quick-stat-icon {
  font-size: 1.1rem;
  margin-bottom: 2px;
}

.quick-stat-value {
  font-size: 1.1rem;
  font-weight: 800;
  color: #1e40af;
  line-height: 1.1;
}

body.dark .quick-stat-value {
  color: #93c5fd;
}

.quick-stat-label {
  font-size: 0.68rem;
  font-weight: 600;
  color: #64748b;
  margin-top: 2px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

body.dark .quick-stat-label {
  color: #94a3b8;
}

/* Input Grid */
.attendance-input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 14px;
}

.attendance-input-group {
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(59,130,246,0.12);
  border-radius: 16px;
  padding: 12px;
  transition: all 0.3s ease;
}

body.dark .attendance-input-group {
  background: rgba(30,41,59,0.5);
  border-color: rgba(99,102,241,0.12);
}

.attendance-input-group:hover {
  border-color: rgba(59,130,246,0.25);
  box-shadow: 0 4px 20px rgba(59,130,246,0.08);
}

body.dark .attendance-input-group:hover {
  border-color: rgba(99,102,241,0.2);
  box-shadow: 0 4px 20px rgba(99,102,241,0.1);
}

.input-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.input-icon-bg {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
}

.input-icon-bg.blue { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.input-icon-bg.green { background: linear-gradient(135deg, #10b981, #059669); }
.input-icon-bg.purple { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
.input-icon-bg.orange { background: linear-gradient(135deg, #f59e0b, #d97706); }

.input-icon-bg svg {
  width: 14px;
  height: 14px;
}

.attendance-input-group label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #1e293b;
}

body.dark .attendance-input-group label {
  color: #e2e8f0;
}

.attendance-input-group input {
  width: 100%;
  padding: 9px 12px;
  border: 2px solid rgba(59,130,246,0.15);
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  background: rgba(255,255,255,0.9);
  color: #0f172a;
  transition: all 0.2s ease;
  margin-bottom: 4px;
}

body.dark .attendance-input-group input {
  background: rgba(15,23,42,0.7);
  border-color: rgba(99,102,241,0.2);
  color: #f1f5f9;
}

.attendance-input-group input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59,130,246,0.12), 0 4px 12px rgba(59,130,246,0.08);
}

body.dark .attendance-input-group input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99,102,241,0.15), 0 4px 12px rgba(99,102,241,0.1);
}

.input-helper {
  display: block;
  font-size: 0.7rem;
  font-weight: 500;
  color: #64748b;
  line-height: 1.2;
}

body.dark .input-helper {
  color: #94a3b8;
}

/* Premium Calculate Button */
.calculate-btn-premium {
  width: 100%;
  padding: 12px 24px;
  border-radius: 14px;
  font-weight: 700;
  font-size: 0.98rem;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8);
  color: white;
  box-shadow: 0 4px 20px rgba(37,99,235,0.3), 0 0 0 1px rgba(255,255,255,0.1) inset;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 14px;
  position: relative;
  overflow: hidden;
}

.calculate-btn-premium:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(37,99,235,0.4), 0 0 0 1px rgba(255,255,255,0.15) inset;
  filter: brightness(1.05);
}

.calculate-btn-premium:active {
  transform: translateY(-1px);
}

.btn-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.calculate-btn-premium:hover .btn-glow {
  opacity: 1;
}

.btn-icon {
  font-size: 1.3rem;
}

.btn-text {
  letter-spacing: 0.3px;
}

.btn-arrow {
  transition: transform 0.3s ease;
  margin-left: 4px;
}

.calculate-btn-premium:hover .btn-arrow {
  transform: translateX(4px);
}

body.dark .calculate-btn-premium {
  background: linear-gradient(135deg, #6366f1, #4f46e5, #4338ca);
  box-shadow: 0 4px 20px rgba(99,102,241,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset;
}

body.dark .calculate-btn-premium:hover {
  box-shadow: 0 8px 30px rgba(99,102,241,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset;
}

/* Progress Section */
.attendance-progress-wrap {
  margin-bottom: 14px;
  display: none;
}

.attendance-progress-wrap.active {
  display: block;
  animation: fadeInUp 0.4s ease;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.progress-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
}

body.dark .progress-label {
  color: #94a3b8;
}

.progress-percentage {
  font-size: 1.1rem;
  font-weight: 800;
  color: #2563eb;
}

body.dark .progress-percentage {
  color: #60a5fa;
}

.attendance-progress-track {
  width: 100%;
  height: 16px;
  border-radius: 50px;
  background: rgba(59,130,246,0.08);
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.08);
}

body.dark .attendance-progress-track {
  background: rgba(255,255,255,0.06);
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.2);
}

.attendance-progress-fill {
  height: 100%;
  border-radius: 50px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1), background 0.6s ease;
  width: 0%;
  position: relative;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
}

.attendance-progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  animation: shimmer 2s infinite;
}

.attendance-progress-fill.safe {
  background: linear-gradient(135deg, #10b981, #059669, #047857);
}

.attendance-progress-fill.warning {
  background: linear-gradient(135deg, #ef4444, #dc2626, #b91c1c);
}

.attendance-progress-marker {
  position: absolute;
  top: -4px;
  bottom: -4px;
  width: 3px;
  background: #1e293b;
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(0,0,0,0.2);
  transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

body.dark .attendance-progress-marker {
  background: #f1f5f9;
  box-shadow: 0 0 6px rgba(255,255,255,0.2);
}

.progress-target-label {
  position: absolute;
  top: -24px;
  transform: translateX(-50%);
  font-size: 0.7rem;
  font-weight: 700;
  color: #64748b;
  background: rgba(255,255,255,0.9);
  padding: 2px 8px;
  border-radius: 6px;
  white-space: nowrap;
  border: 1px solid rgba(59,130,246,0.15);
}

body.dark .progress-target-label {
  color: #94a3b8;
  background: rgba(30,41,59,0.9);
  border-color: rgba(99,102,241,0.2);
}

/* Stat Badge (compact, replaces old ring) */
.attendance-stat-box {
  display: none;
  margin-bottom: 10px;
  text-align: center;
}

.attendance-stat-box.active {
  display: block;
  animation: fadeInUp 0.4s ease;
}

.stat-visual {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  padding: 6px 16px;
  border-radius: 50px;
  background: rgba(59,130,246,0.08);
}

.attendance-stat-box.safe .stat-visual { background: rgba(16,185,129,0.1); }
.attendance-stat-box.warning .stat-visual { background: rgba(239,68,68,0.08); }

.attendance-stat-number {
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1;
  color: #1e40af;
}

body.dark .attendance-stat-number {
  color: #93c5fd;
}

.attendance-stat-box.safe .attendance-stat-number {
  color: #059669;
}

body.dark .attendance-stat-box.safe .attendance-stat-number {
  color: #34d399;
}

.attendance-stat-box.warning .attendance-stat-number {
  color: #dc2626;
}

body.dark .attendance-stat-box.warning .attendance-stat-number {
  color: #f87171;
}

.attendance-stat-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

body.dark .attendance-stat-label {
  color: #94a3b8;
}

/* Result Message */
.attendance-result {
  margin-top: 0;
  background: rgba(240,249,255,0.85);
  border: 1px solid rgba(59,130,246,0.15);
  border-radius: 14px;
  padding: 12px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e40af;
  display: none;
  line-height: 1.4;
  backdrop-filter: blur(8px);
}

.attendance-result.active {
  display: block;
  animation: fadeInUp 0.4s ease;
}

.attendance-result.safe {
  background: rgba(16,185,129,0.08);
  border: 1px solid rgba(16,185,129,0.2);
  color: #059669;
}

body.dark .attendance-result.safe {
  background: rgba(16,185,129,0.12);
  color: #34d399;
}

.attendance-result.warning {
  background: rgba(239,68,68,0.06);
  border: 1px solid rgba(239,68,68,0.2);
  color: #dc2626;
}

body.dark .attendance-result.warning {
  background: rgba(239,68,68,0.1);
  color: #f87171;
}

body.dark .attendance-result {
  background: rgba(30,41,59,0.6);
  border-color: rgba(99,102,241,0.15);
  color: #f8fafc;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .attendance-header h2 { font-size: 1.3rem; }
  .attendance-subtitle { font-size: 0.8rem; }
  .attendance-quick-stats { gap: 6px; }
  .quick-stat { padding: 8px 6px; }
  .quick-stat-icon { font-size: 1rem; }
  .quick-stat-value { font-size: 1rem; }
  .quick-stat-label { font-size: 0.6rem; }
  .attendance-input-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
  .attendance-input-group { padding: 10px; }
  .input-header { gap: 6px; margin-bottom: 6px; }
  .input-icon-bg { width: 24px; height: 24px; }
  .input-icon-bg svg { width: 13px; height: 13px; }
  .attendance-input-group label { font-size: 0.72rem; }
  .input-helper { display: none; }
  .calculate-btn-premium { font-size: 0.9rem; padding: 12px 18px; }
  .attendance-stat-number { font-size: 1.2rem; }
  .attendance-result { font-size: 0.85rem; padding: 10px 14px; }
}

/* Visible focus states for keyboard users */
a:focus-visible,
button:focus-visible,
input:focus-visible,
.hamburger:focus-visible {
  outline: 3px solid #3b82f6;
  outline-offset: 2px;
}

/* ============ NEW: Multi-page additions ============ */

/* Breadcrumb */
.breadcrumb {
  font-size: 0.85rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.breadcrumb a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}

.breadcrumb a:hover { text-decoration: underline; }

body.dark .breadcrumb { color: #94a3b8; }
body.dark .breadcrumb a { color: #60a5fa; }

/* Home button (top of inner pages, next to breadcrumb) */
.home-btn-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 6px;
}

.home-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px !important;
  font-size: 0.85rem !important;
  margin: 0 !important;
}

/* Page header (icon + title + tagline) for inner pages */
.page-header {
  text-align: center;
  padding: 20px 10px 10px;
  position: relative;
  z-index: 1;
}

.page-header .page-icon {
  font-size: 3rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px rgba(59,130,246,0.2));
}

body.dark .page-header .page-icon {
  filter: drop-shadow(0 4px 12px rgba(99,102,241,0.3));
}

.page-header h1.page-title {
  font-size: 2rem;
  margin-top: 10px;
}

.page-header .page-tagline {
  margin-top: 8px;
  color: #475569;
  font-weight: 500;
  font-size: 0.95rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}

body.dark .page-header .page-tagline { color: #94a3b8; }

@media (max-width: 768px) {
  .page-header .page-icon { font-size: 2.4rem; }
  .page-header h1.page-title { font-size: 1.5rem; }
  .page-header .page-tagline { font-size: 0.85rem; }
}

/* Related pages section */
.related-pages {
  margin-top: 24px;
}

.related-pages h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 14px;
  padding: 0 4px;
}

body.dark .related-pages h3 { color: #93c5fd; }

.related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.related-card {
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(59,130,246,0.15);
  border-radius: 20px;
  padding: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(30,58,138,0.05);
  backdrop-filter: blur(10px);
}

.related-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(30,58,138,0.1);
  border-color: rgba(59,130,246,0.3);
}

.related-card .related-icon {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.related-card .related-text {
  display: flex;
  flex-direction: column;
}

.related-card .related-label {
  font-size: 0.65rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.related-card .related-name {
  font-weight: 700;
  color: #1e293b;
  font-size: 0.95rem;
}

body.dark .related-card {
  background: rgba(30,41,59,0.85);
  border-color: rgba(99,102,241,0.15);
}

body.dark .related-card .related-name { color: #f1f5f9; }
body.dark .related-card .related-label { color: #64748b; }

@media (max-width: 768px) {
  .related-grid { grid-template-columns: 1fr; }
}

/* Home page: all-pages link grid */
.pages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 8px;
}

.page-tile {
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(59,130,246,0.15);
  border-radius: 24px;
  padding: 22px 16px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(30,58,138,0.05);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.page-tile:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 36px rgba(30,58,138,0.12);
  border-color: rgba(59,130,246,0.3);
}

.page-tile .tile-icon {
  font-size: 2.2rem;
}

.page-tile .tile-name {
  font-weight: 700;
  color: #1e293b;
  font-size: 0.95rem;
}

.page-tile .tile-desc {
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 500;
  line-height: 1.3;
}

body.dark .page-tile {
  background: rgba(30,41,59,0.85);
  border-color: rgba(99,102,241,0.15);
}

body.dark .page-tile .tile-name { color: #f1f5f9; }
body.dark .page-tile .tile-desc { color: #94a3b8; }

@media (max-width: 768px) {
  .pages-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .page-tile { padding: 18px 12px; }
  .page-tile .tile-icon { font-size: 1.8rem; }
  .page-tile .tile-name { font-size: 0.85rem; }
  .page-tile .tile-desc { display: none; }
}

/* "View all notices" link style under home preview */
.see-more-link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 600;
  font-size: 0.88rem;
  color: #2563eb;
  text-decoration: none;
}

.see-more-link:hover { text-decoration: underline; }
body.dark .see-more-link { color: #60a5fa; }

/* No-results message kept for potential future search use */
.no-results {
  display: none;
  text-align: center;
  padding: 30px 20px;
  color: #64748b;
  font-weight: 500;
}
.no-results.active { display: block; }
body.dark .no-results { color: #94a3b8; }
