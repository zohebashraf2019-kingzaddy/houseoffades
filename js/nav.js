/* Shared mobile menu: works the same on every page */
(() => {
  const burger = document.getElementById("burger"), links = document.getElementById("navLinks");
  if (!burger || !links) return;
  const root = document.documentElement, body = document.body;
  let savedY = 0;

  const lock = () => {
    savedY = window.scrollY;
    body.classList.add("menu-open");
    body.style.top = `-${savedY}px`; // iOS Safari ignores overflow:hidden, so pin the page instead
  };
  const unlock = () => {
    if (!body.classList.contains("menu-open")) return;
    body.classList.remove("menu-open");
    body.style.top = "";
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto"; // jump straight back, no smooth-scroll from the top
    window.scrollTo(0, savedY);
    root.style.scrollBehavior = prev;
  };
  const open = () => {
    burger.classList.add("open"); links.classList.add("open");
    burger.setAttribute("aria-expanded", "true"); burger.setAttribute("aria-label", "Close menu");
    lock();
  };
  const close = () => {
    burger.classList.remove("open"); links.classList.remove("open");
    burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Open menu");
    unlock();
  };
  window.hofCloseMenu = close;

  burger.setAttribute("aria-controls", "navLinks"); burger.setAttribute("aria-expanded", "false");
  burger.addEventListener("click", () => (links.classList.contains("open") ? close() : open()));
  // Restore position first, then the browser follows the link to its section
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  // Tap the dark area around the links to close
  links.addEventListener("click", e => { if (e.target === links) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && links.classList.contains("open")) close(); });
  window.matchMedia("(min-width: 901px)").addEventListener("change", e => { if (e.matches) close(); });
})();
