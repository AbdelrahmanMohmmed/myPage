var pageTitles = {
  "index.html": "Mrgaren - Home",
  "projects.html": "My Projects",
  "community.html": "My Resume",
  "about.html": "About Me"
};
var pageName = window.location.pathname.split("/").pop() || "index.html";
document.getElementById("hh1").textContent = pageTitles[pageName] || "Mrgaren";

/* ---------- Dark / light theme toggle ---------- */
var root = document.documentElement;

// Apply the saved theme (default: dark). The small script in each page's
// <head> already does this before the page paints; this line is a safety net.
root.dataset.theme = localStorage.getItem("theme") || "dark";

var toggle = document.getElementById("theme-toggle");

function updateToggle() {
  if (!toggle) return;
  var isDark = root.dataset.theme === "dark";
  toggle.textContent = isDark ? "☀️" : "🌙";
  toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  toggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
}

if (toggle) {
  toggle.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", root.dataset.theme);
    updateToggle();
  });
}

updateToggle();