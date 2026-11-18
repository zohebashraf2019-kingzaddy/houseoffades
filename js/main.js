/* Reno's House of Fades — interactions */
(function () {
  const D = window.HOF;
  const $ = (s, el = document) => el.querySelector(s);

  /* ---------- Loader ---------- */
  window.addEventListener("load", () => setTimeout(() => $("#loader").classList.add("done"), 500));
  setTimeout(() => $("#loader").classList.add("done"), 3000); // safety

  /* ---------- Nav ---------- */
  const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  burger.addEventListener("click", () => {
    burger.classList.toggle("open"); links.classList.toggle("open");
    document.body.style.overflow = links.classList.contains("open") ? "hidden" : "";
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    burger.classList.remove("open"); links.classList.remove("open"); document.body.style.overflow = "";
  }));

  /* ---------- Logo → back to top ---------- */
  document.querySelectorAll(".nav-logo, .footer-logo-link").forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    burger.classList.remove("open"); links.classList.remove("open"); document.body.style.overflow = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", location.pathname);
  }));

  /* ---------- Icons ---------- */
  const ICONS = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    clipper: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="15" y="14" width="18" height="30" rx="6"/><path d="M15 14h18v-4H15z"/><path d="M17 10V5M21 10V5M25 10V5M29 10V5M33 10V6"/><circle cx="24" cy="27" r="3"/></svg>',
    razor: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 30L30 8l6 6-24 20z"/><path d="M30 8l12 0"/><path d="M12 34l-4 8 10-4"/><circle cx="32" cy="12" r="1.5" fill="currentColor"/></svg>',
    beard: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 16c0 16 6 26 14 26s14-10 14-26"/><path d="M10 16c4 6 8 8 14 8s10-2 14-8"/><path d="M17 31c3-2 11-2 14 0"/><path d="M14 8c3 3 6 4 10 4s7-1 10-4"/></svg>',
    head: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 26c0-10 5-18 12-18s12 8 12 18c0 9-5 16-12 16s-12-7-12-16z"/><path d="M9 25h3M36 25h3"/><path d="M18 14c2-2 4-3 6-3"/><path d="M34 4l4 4M38 4l-4 4" stroke-width="1.8"/></svg>'
  };

  /* ---------- Barbers (cards link to barber.html?id=<slug>) ---------- */
  const initials = n => n.replace(/[“”"].*?[“”"]/g, "").split(/\s+/).filter(Boolean).map(w => w[0]).slice(0, 2).join("");
  const handle = url => { const m = (url || "").match(/instagram\.com\/([^/?#]+)/i); return m ? "@" + m[1] : ""; };
  const pad = n => String(n).padStart(2, "0");
  const grid = $("#barberGrid");
  grid.innerHTML = D.barbers.map((b, i) => {
    const owner = /owner/i.test(b.role);
    return `
    <a class="barber reveal" href="barber.html?id=${b.slug}" aria-label="${b.name}: view menu and book">
      <div class="barber-photo">
        <img src="assets/barbers/${b.slug}.jpg?v=3" alt="${b.name}, barber at House of Fades" loading="lazy"
             onerror="this.outerHTML='<div class=\\'monogram\\'><span>${initials(b.name)}</span><small>House of Fades</small></div>'">
      </div>
      <div class="barber-shade"></div>
      <div class="barber-top">
        <span class="barber-index">${pad(i + 1)} / ${pad(D.barbers.length)}</span>
        ${owner ? '<span class="tag-owner">Owner</span>' : `<span class="barber-handle">${handle(b.ig)}</span>`}
      </div>
      <span class="barber-view" aria-hidden="true">View</span>
      <div class="barber-body">
        <span class="barber-role">${b.role}</span>
        <h3>${b.name}</h3>
        <div class="barber-foot">
          <span>${b.platform ? "Books via " + b.platform : "Book through the shop"}</span>
          <span class="barber-link">Menu &amp; Book <b>→</b></span>
        </div>
      </div>
    </a>`;
  }).join("");

  /* ---------- Services ---------- */
  $("#serviceGrid").innerHTML = D.services.map(s => `
    <div class="service reveal">${ICONS[s.icon]}<h3>${s.name}</h3><p>${s.desc}</p></div>`).join("");

  /* ---------- Hours / open status (Reno = America/Los_Angeles) ---------- */
  const reno = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  const today = reno.getDay(), hr = reno.getHours() + reno.getMinutes() / 60;
  const t = D.hours[today];
  const isOpen = t.open && hr >= t.o && hr < t.c;
  const nextOpen = () => {
    for (let i = 1; i <= 7; i++) {
      const d = D.hours[(today + i) % 7];
      if (d.open) return `${i === 1 ? "tomorrow" : d.day} at ${d.open}`;
    }
  };
  const statusText = isOpen
    ? `<span class="on">● Open now</span> · until <b>${t.close}</b> today`
    : (t.open && hr < t.o ? `<span class="off">● Closed</span> · opens <b>today at ${t.open}</b>` : `<span class="off">● Closed</span> · opens <b>${nextOpen()}</b>`);
  $("#heroStatus").innerHTML = statusText;
  const pill = $("#openPill");
  pill.textContent = isOpen ? "OPEN NOW" : "CLOSED";
  pill.className = "open-pill " + (isOpen ? "on" : "off");
  // Display order Tue → Mon
  const order = [2, 3, 4, 5, 6, 0, 1];
  $("#hoursTable").innerHTML = order.map(i => {
    const h = D.hours[i];
    return `<tr class="${h.open ? "" : "closed"} ${i === today ? "today" : ""}"><td>${h.day}</td><td>${h.open ? `${h.open} – ${h.close}` : "Closed"}</td></tr>`;
  }).join("");

  /* ---------- Ratings ---------- */
  const stars = n => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));
  $("#ratingRow").innerHTML = D.ratings.map(r => `
    <a class="rating-card" href="${r.url}" target="_blank" rel="noopener">
      <div class="score ${r.source === "Yelp" ? "yelp" : ""}">${r.score ? r.score.toFixed(1) : "★"}</div>
      <div>
        <div class="src">${r.source}</div>
        ${r.score ? `<div class="stars">${stars(r.score)}</div>` : ""}
        <div class="meta">${r.count ? `${r.count} reviews` : `Read our reviews on ${r.source} →`}</div>
      </div>
    </a>`).join("");

  /* ---------- Review wall (renders once reviews are added in data.js) ---------- */
  if (D.reviews.length) {
    const wall = $("#reviewWall");
    const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const byBarber = slug => D.barbers.find(b => b.slug === slug);
    const nick = b => { const m = b.name.match(/[“"](.+?)[”"]/); return m ? m[1] : b.name.split(" ")[0]; };
    wall.hidden = false;
    const shown = D.reviews.slice(0, D.reviewsShown || 4);
    wall.innerHTML = shown.map(r => {
      const b = r.barber && byBarber(r.barber);
      const long = (r.text.length + (r.more || "").length) > 260;
      return `
      <article class="rv reveal${long ? " is-long" : ""}">
        <div class="rv-top">
          <span class="rv-avatar">${esc(r.name[0])}</span>
          <div class="rv-who"><strong>${esc(r.name)}</strong><small>${esc(r.from || "")}</small></div>
          <span class="rv-src">${esc(r.source || "Yelp")}</span>
        </div>
        ${r.stars ? `<div class="rv-stars">${stars(r.stars)}</div>` : ""}
        <div class="rv-body"><p>${esc(r.text)}</p>${r.more ? `<p class="rv-more">${esc(r.more)}</p>` : ""}</div>
        ${long ? `<button class="rv-toggle" type="button">Read more</button>` : ""}
        <div class="rv-foot">
          <span>${esc(r.date || "")}</span>
          ${b ? `<a href="barber.html?id=${b.slug}">Cut by ${esc(nick(b))} →</a>` : ""}
        </div>
      </article>`;
    }).join("");
    wall.querySelectorAll(".rv-toggle").forEach(btn => btn.addEventListener("click", () => {
      const card = btn.closest(".rv"); const open = card.classList.toggle("open");
      btn.textContent = open ? "Show less" : "Read more";
    }));
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el, k) => {
    el.style.transitionDelay = (k % 4) * 80 + "ms";
    io.observe(el);
  });

  /* ---------- Count-up ---------- */
  const cio = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count; let n = 0;
    const step = () => { n++; el.textContent = n; if (n < end) setTimeout(step, 1200 / end); };
    step(); cio.unobserve(el);
  }), { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(el => cio.observe(el));

  /* ---------- Lazy videos ---------- */
  const vio = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    const v = e.target;
    v.querySelectorAll("source[data-src]").forEach(s => { s.src = s.dataset.src; s.removeAttribute("data-src"); });
    v.load(); v.play().catch(() => {});
    vio.unobserve(v);
  }), { rootMargin: "200px" });
  document.querySelectorAll("video[data-lazy-video]").forEach(v => vio.observe(v));

  /* ---------- Parallax (anniversary) ---------- */
  const ann = $(".ann-bg");
  if (ann && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", () => {
      const r = ann.parentElement.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) ann.style.transform = `translateY(${(r.top - innerHeight / 2) * -0.12}px)`;
    }, { passive: true });
  }

  /* ---------- Gallery: show 8, expand for the rest ---------- */
  const gGrid = $("#galleryGrid"), moreBtn = $("#galleryMore");
  if (gGrid && moreBtn) {
    const extra = gGrid.querySelectorAll(".g-more");
    if (!extra.length) moreBtn.hidden = true;
    moreBtn.addEventListener("click", () => {
      const open = gGrid.classList.toggle("expanded");
      moreBtn.setAttribute("aria-expanded", open);
      moreBtn.innerHTML = open ? "Show Less" : `View Full Gallery <span class="g-count">+${extra.length}</span>`;
      if (open) extra.forEach((f, k) => { f.classList.remove("in"); setTimeout(() => f.classList.add("in"), 40 + k * 60); });
      else gGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- Lightbox (browse all gallery photos) ---------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCount = $("#lbCount");
  const pics = [...document.querySelectorAll(".gallery-grid figure img")];
  let cur = 0;
  const show = n => {
    cur = (n + pics.length) % pics.length;
    lbImg.src = pics[cur].src; lbImg.alt = pics[cur].alt;
    lbCount.textContent = `${cur + 1} / ${pics.length}`;
  };
  pics.forEach((img, k) => img.parentElement.addEventListener("click", () => {
    show(k); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
  }));
  const close = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); };
  $("#lbClose").onclick = close;
  $("#lbPrev").onclick = e => { e.stopPropagation(); show(cur - 1); };
  $("#lbNext").onclick = e => { e.stopPropagation(); show(cur + 1); };
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(cur - 1);
    if (e.key === "ArrowRight") show(cur + 1);
  });
  let tx = null;
  lb.addEventListener("touchstart", e => (tx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
  });

  $("#year").textContent = new Date().getFullYear();
})();

/* ---------- Remodel sneak peek: before/after slider ---------- */
(() => {
  const peek = document.getElementById("peek");
  const range = document.getElementById("peekRange");
  if (!peek || !range) return;
  const set = v => peek.style.setProperty("--pos", v + "%");
  range.addEventListener("input", e => set(e.target.value));
  // gentle intro sweep the first time it scrolls into view
  const io = new IntersectionObserver(([en]) => {
    if (!en.isIntersecting) return;
    io.disconnect();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t0 = null;
    const step = ts => {
      t0 ??= ts;
      const p = Math.min((ts - t0) / 1800, 1);
      const v = 50 + Math.sin(p * Math.PI * 2) * 30 * (1 - p);
      set(v); range.value = v;
      if (p < 1) requestAnimationFrame(step);
    };
    setTimeout(() => requestAnimationFrame(step), 400);
  }, { threshold: 0.5 });
  io.observe(peek);
})();
