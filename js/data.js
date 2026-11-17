/* ==========================================================
   Reno's House of Fades — site data
   Edit this file to update barbers, hours, services & reviews.
   ========================================================== */

window.HOF = {
  phone: "(775) 357-9590",
  phoneHref: "tel:+17753579590",
  address: "180 W Peckham Ln, Suite 1130",
  city: "Reno, NV 89509",
  mapsUrl: "https://www.google.com/maps/dir//180+W+Peckham+Ln+Ste+1130,+Reno,+NV+89509",
  socials: {
    instagram: "https://www.instagram.com/renoshouseoffades/",
    facebook: "https://www.facebook.com/renoshouseoffades/",
    yelp: "https://www.yelp.com/biz/reno-s-house-of-fades-reno"
  },

  /* 0 = Sunday ... 6 = Saturday. null = closed */
  hours: [
    { day: "Sunday",    open: null },
    { day: "Monday",    open: null },
    { day: "Tuesday",   open: "9:00 AM", close: "6:00 PM", o: 9, c: 18 },
    { day: "Wednesday", open: "9:00 AM", close: "6:00 PM", o: 9, c: 18 },
    { day: "Thursday",  open: "9:00 AM", close: "6:00 PM", o: 9, c: 18 },
    { day: "Friday",    open: "9:00 AM", close: "6:00 PM", o: 9, c: 18 },
    { day: "Saturday",  open: "9:00 AM", close: "6:00 PM", o: 9, c: 18 }
  ],

  /* Barber photos: drop a square-ish JPG in /assets/barbers/<slug>.jpg
     and it shows up automatically. Until then a monogram card is shown.
     Booking links are each barber's own page for now — swap for the
     in-house booking tab later. */
  barbers: [
    { slug: "anthony-acosta",   name: "Anthony Acosta",   role: "Owner · Barber", phone: "(775) 354-7438", book: "https://squareup.com/appointments/book/9V1DMR44KRYG2", platform: "Square", ig: "https://www.instagram.com/ant_banks04/" },
    { slug: "juan-garcia",      name: "Juan Garcia",      role: "Owner · Barber", phone: "(775) 544-1412", book: "https://squareup.com/appointments/book/706HZ2T0MH9DG", platform: "Square" },
    { slug: "rodolfo-silverio", name: "Rodolfo “Rudy” Silverio", role: "Barber", phone: "(775) 741-5081", book: "https://rudyhof.setmore.com/", platform: "Setmore" },
    { slug: "steven-garcia",    name: "Steven Garcia",    role: "Barber", phone: "(775) 393-0740", book: "https://squareup.com/appointments/book/2WKZJ8S3WJA9F", platform: "Square" },
    { slug: "keni-rogers",      name: "Keni Rogers",      role: "Barber · Blasian Blendz", phone: "(775) 846-9128", book: "https://booksy.com/en-us/131679_blasian-blendz_barber-shop_29330_reno", platform: "Booksy" },
    { slug: "rico-colta",       name: "Rico Colta",       role: "Barber", phone: null, book: "https://book.squareup.com/appointments/48fo5rng3vodx2/location/LTSFJ78DX7KPY/services", platform: "Square" },
    { slug: "bryan-banuelos",   name: "Bryan Banuelos",   role: "Barber · Bryan Blendz", phone: "(775) 846-1702", book: "https://bryan-blendz.square.site/", platform: "Square" },
    { slug: "eduardo-mora",     name: "Eduardo Mora",     role: "Barber · Blended Blvd", phone: "(775) 525-4084", book: "https://blended-blvd.square.site/", platform: "Square" },
    { slug: "luis-contreras",   name: "Luis Contreras",   role: "Barber", phone: null, book: "https://book.squareup.com/appointments/j2jhdrlfbn4y6l/location/LYGQ1D9JHS8Q1/services", platform: "Square" }
  ],

  services: [
    { icon: "clipper", name: "Men's Haircut", desc: "Skin fades, tapers, drops, bursts and classic cuts — blended clean and finished with a sharp line-up." },
    { icon: "razor",   name: "Hot Towel Shave", desc: "Old-school straight-razor shave with hot towels, lather and a cool finish. Pure barbershop tradition." },
    { icon: "beard",   name: "Beard Trim", desc: "Shape-up, sculpt and line the beard to fit your face — razor-sharp edges, no guesswork." },
    { icon: "head",    name: "Head Shave", desc: "Smooth, clean head shave with a hot towel prep for that fresh, polished look." }
  ],

  /* ---------------------------------------------------------
     REVIEWS — paste real Yelp / Google reviews here.
     Only real reviews, copied from the client's listings.
     Example:
     { name: "Mike R.", source: "Yelp", stars: 5, date: "Oct 2026",
       text: "Best fade in Reno…", barber: "Anthony" },
     The review slider appears automatically once this has entries.
     --------------------------------------------------------- */
  reviews: [],

  ratings: [
    { source: "Google", score: 4.3, count: 53, url: "https://www.google.com/maps/search/?api=1&query=Reno%27s+House+of+Fades+180+W+Peckham+Ln" },
    { source: "Yelp", score: null, count: null, url: "https://www.yelp.com/biz/reno-s-house-of-fades-reno" }
  ]
};
