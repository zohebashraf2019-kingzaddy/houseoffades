/* HOF Supply merch page */
(() => {
  const $ = s => document.querySelector(s);

  /* Mobile menu */
  $("#year").textContent = new Date().getFullYear();

  /* Reveal on scroll */
  const rio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el, k) => {
    el.style.transitionDelay = (k % 4) * 70 + "ms"; rio.observe(el);
  });

  /* Colorway pickers: swap the big image when a swatch is tapped */
  document.querySelectorAll(".m-drop").forEach(sec => {
    const img = sec.querySelector(".mv-img"), name = sec.querySelector(".mv-name");
    const sws = sec.querySelectorAll(".sw");
    // preload all colorways
    sws.forEach(sw => { const p = new Image(); p.src = sw.dataset.img; });
    sws.forEach(sw => sw.addEventListener("click", () => {
      if (sw.classList.contains("active")) return;
      sws.forEach(s => s.classList.remove("active")); sw.classList.add("active");
      img.classList.add("swap");
      setTimeout(() => {
        img.src = sw.dataset.img; img.alt = sw.getAttribute("aria-label") + " colorway";
        name.textContent = sw.dataset.name; img.classList.remove("swap");
      }, 220);
    }));
  });

  /* Lazy-load + play videos only when visible */
  const vio = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (e.isIntersecting) {
      const s = v.querySelector("source[data-src]");
      if (s) { s.src = s.dataset.src; s.removeAttribute("data-src"); v.load(); }
      v.play().catch(() => {});
    } else v.pause();
  }), { threshold: 0.25 });
  document.querySelectorAll("video[data-lazy-video]").forEach(v => vio.observe(v));

  /* Sticker spins faster on scroll */
  const st = $(".m-sticker svg");
  if (st && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addEventListener("scroll", () => { st.style.setProperty("--r", scrollY * 0.25 + "deg"); }, { passive: true });
  }
})();
