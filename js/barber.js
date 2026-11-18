/* ==========================================================
   Reno's House of Fades — barber profile page
   URL: barber.html?id=<slug>   (slugs live in js/data.js)

   Per-barber fields you can add in data.js (all optional):
     bio:       "A few sentences about the barber"
     specialty: "Skin fades, tapers & designs"
     services:  [{ name: "Haircut", price: 40, dur: "45 min" }, ...]
   Until those are filled in, the page shows a placeholder bio and
   the shop's standard services with "price at booking".
   ========================================================== */
(function () {
  const D = window.HOF;
  const $ = s => document.querySelector(s);
  const list = D.barbers;

  const id = (new URLSearchParams(location.search).get("id") || location.hash.slice(1) || "").toLowerCase();
  let idx = list.findIndex(b => b.slug === id);
  if (idx < 0) idx = 0;
  const b = list[idx];
  const first = b.name.replace(/[“”"].*?[“”"]/g, "").trim().split(/\s+/)[0];
  const pad = n => String(n).padStart(2, "0");
  const initials = n => n.replace(/[“”"].*?[“”"]/g, "").split(/\s+/).filter(Boolean).map(w => w[0]).slice(0, 2).join("");
  const handle = url => { const m = (url || "").match(/instagram\.com\/([^/?#]+)/i); return m ? m[1] : ""; };
  const photoSrc = s => `assets/barbers/${s}.jpg?v=3`;
  const owner = /owner/i.test(b.role);

  /* ---------- Meta ---------- */
  document.title = `${b.name} | Reno's House of Fades`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = `Book with ${b.name} at Reno's House of Fades, 180 W Peckham Ln, Reno NV. Services, prices and online booking.`;

  /* ---------- Profile ---------- */
  const photo = $("#pPhoto");
  photo.src = photoSrc(b.slug);
  photo.alt = `${b.name}, ${b.role} at Reno's House of Fades`;
  photo.onerror = () => { photo.outerHTML = `<div class="monogram"><span>${initials(b.name)}</span></div>`; };
  $("#pIndex").textContent = `${pad(idx + 1)} / ${pad(list.length)}`;
  $("#pRole").textContent = b.role;
  $("#pName").textContent = b.name;

  const ig = $("#pIg"), h = handle(b.ig);
  if (h) { ig.href = b.ig; ig.textContent = `@${h} ↗`; }
  else { ig.href = D.socials.instagram; ig.textContent = "@renoshouseoffades ↗"; }

  $("#pBio").textContent = b.bio || (owner
    ? `${first} co-owns Reno's House of Fades and has been behind the chair here since day one. Clean fades, sharp line-ups and real barbershop energy. Full bio coming soon.`
    : `${first} is part of the House of Fades team on W Peckham Ln. Fades, tapers, line-ups and beard work, done with the detail the shop is known for. Full bio coming soon.`);
  $("#pFocus").textContent = b.specialty || "Fades, tapers & line-ups";
  $("#pVia").textContent = b.platform || "Call the shop";

  const book = $("#pBook");
  const bookHref = b.book || D.phoneHref;
  book.href = bookHref;
  if (!b.book) book.removeAttribute("target");
  book.innerHTML = `${b.book ? "Book with" : "Call to book"} ${first} <b>→</b>`;
  document.querySelectorAll("[data-book]").forEach(a => {
    a.href = bookHref;
    if (!b.book) a.removeAttribute("target");
  });
  $("#mBook").textContent = `Book ${first}`;

  const tel = b.phone ? "tel:+1" + b.phone.replace(/\D/g, "") : D.phoneHref;
  const call = $("#pCall");
  call.href = tel;
  call.textContent = b.phone ? `Call ${b.phone}` : `Call the shop`;
  $("#mCall").href = tel;

  $("#pNote").innerHTML = b.book
    ? `Booking opens ${first}'s ${b.platform || "booking"} page with live openings, services and current prices.`
    : `Online booking for ${first} is coming soon. Call the shop at <a href="${D.phoneHref}">${D.phone}</a> to get in his chair.`;

  /* ---------- Booking policies ---------- */
  const reach = b.phone ? `call or text ${first} at <a href="${tel}">${b.phone}</a>` : `call the shop at <a href="${D.phoneHref}">${D.phone}</a>`;
  $("#polLate").innerHTML = `Please ${reach} as soon as you know. More than 10–15 min late may mean a shorter service or rescheduling.`;
  $("#polCancel").innerHTML = b.book
    ? `Please give at least 24 hours' notice. Use your ${b.platform || "booking"} confirmation link, or ${reach}.`
    : `Please give at least 24 hours' notice. ${reach.charAt(0).toUpperCase() + reach.slice(1)}.`;

  /* ---------- Service menu ---------- */
  const own = Array.isArray(b.services) && b.services.length;
  const services = own ? b.services : D.services.map(s => ({ name: s.name, desc: s.desc }));
  const price = p => typeof p === "number" ? `<span class="price">$${p}</span>` : `<span class="price ask">${p || "At booking"}</span>`;
  $("#pServices").innerHTML = services.map((s, i) => `
    <div class="price-row reveal">
      <span class="price-name">${s.name}</span>
      ${price(s.price)}
      ${s.dur || s.desc ? `<span class="price-sub">${[s.dur, s.desc].filter(Boolean).join(" · ")}</span>` : ""}
    </div>`).join("");
  $("#pPriceNote").textContent = own
    ? "Prices and times as listed in the barber's booking system and may change. Final pricing is confirmed at booking."
    : `Pricing varies by barber. Tap Book to see ${first}'s current prices and add-ons.`;

  /* ---------- Other barbers ---------- */
  $("#pOthers").innerHTML = list.map((o, i) => ({ o, i })).filter(x => x.o.slug !== b.slug).map(({ o, i }) => `
    <a class="mini reveal" href="barber.html?id=${o.slug}">
      <div class="mini-photo">
        <img src="${photoSrc(o.slug)}" alt="${o.name}" loading="lazy"
             onerror="this.outerHTML='<div class=\\'monogram\\'><span>${initials(o.name)}</span></div>'">
      </div>
      <span class="mini-name">${o.name}<small>${o.role}</small></span>
    </a>`).join("");

  /* ---------- Nav (mobile menu) ---------- */
  const burger = $("#burger"), links = $("#navLinks");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open"); links.classList.toggle("open");
    document.body.style.overflow = links.classList.contains("open") ? "hidden" : "";
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    burger.classList.remove("open"); links.classList.remove("open"); document.body.style.overflow = "";
  }));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el, k) => {
    el.style.transitionDelay = (k % 4) * 80 + "ms";
    io.observe(el);
  });

  $("#year").textContent = new Date().getFullYear();
})();
