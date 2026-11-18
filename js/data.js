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
     in-house booking tab later.
     Each barber gets a profile page at barber.html?id=<slug>.
     Optional fields for that page: bio, specialty, and
     services: [{ name: "Haircut", price: 40, dur: "45 min" }]. */
  barbers: [
    { slug: "anthony-acosta",   name: "Anthony Acosta",   role: "Owner · Barber", phone: "(775) 354-7438", book: "https://squareup.com/appointments/book/9V1DMR44KRYG2", platform: "Square", ig: "https://www.instagram.com/ant_banks04/" },
    { slug: "juan-garcia",      name: "Juan Garcia",      role: "Owner · Barber", phone: "(775) 544-1412", book: "https://squareup.com/appointments/book/706HZ2T0MH9DG", platform: "Square" },
    { slug: "rodolfo-silverio", name: "Rodolfo “Rudy” Silverio", role: "Barber", phone: "(775) 741-5081", book: "https://rudyhof.setmore.com/", platform: "Setmore" },
    { slug: "steven-garcia",    name: "Steven Garcia",    role: "Barber", phone: "(775) 393-0740", book: "https://squareup.com/appointments/book/2WKZJ8S3WJA9F", platform: "Square" },
    { slug: "keni-rogers",      name: "Keni Rogers",      role: "Barber · Blasian Blendz", phone: "(775) 846-9128", book: "https://booksy.com/en-us/131679_blasian-blendz_barber-shop_29330_reno", platform: "Booksy" },
    { slug: "rico-colta",       name: "Rico Colta",       role: "Barber", phone: null, book: "https://book.squareup.com/appointments/48fo5rng3vodx2/location/LTSFJ78DX7KPY/services", platform: "Square" },
    { slug: "bryan-banuelos",   name: "Bryan Banuelos",   role: "Barber · Bryan Blendz", phone: "(775) 846-1702", book: "https://bryan-blendz.square.site/", platform: "Square" },
    { slug: "eduardo-mora",     name: "Eduardo Mora",     role: "Barber · Blended Blvd", phone: "(775) 525-4084", book: "https://blended-blvd.square.site/", platform: "Square" },
    { slug: "luis-contreras",   name: "Luis Contreras",   role: "Barber", phone: null, book: "https://book.squareup.com/appointments/j2jhdrlfbn4y6l/location/LYGQ1D9JHS8Q1/services", platform: "Square", ig: "https://www.instagram.com/barberweich/" }
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
     Fields: name, from, source, date, text, more (optional 2nd paragraph),
     barber (slug from the list above, or null), stars (optional, only if known).
     The review wall appears automatically once this has entries.
     --------------------------------------------------------- */
  reviewsShown: 4,   // how many reviews show on the site; the rest live on Yelp
  reviews: [
    { name: "Morgan M.", from: "Reno, NV", source: "Yelp", date: "Oct 2024", barber: "rodolfo-silverio",
      text: "This barbershop should have nothing less than 5 stars. I brought my son in today with an appointment I made online. The scheduling process was very easy. We walked in and felt so welcome. The aesthetic of the shop was modern and clean. I spent 10 years in the industry and feel qualified to speak on the topic! Rudy was so professional and my son left there saying, \"mom, this is the best haircut I've ever had!\" I watched sports while I waited and listened to the barbers banter back and forth like I was at a family reunion. I loved the experience, my 15 year old (hard to please) loved the experience, and we will be back. I keep looking at his beautiful fade in awe. It takes a lot of patience and talent to cut hair the way these men cut hair. If anyone wants a true barbershop experience in Reno, while receiving exactly what they ask for, please choose Reno's House of Fades. 5 Stars!" },
    { name: "Sanam F.", from: "NV", source: "Yelp", date: "Mar 2026", barber: "anthony-acosta",
      text: "LOVE this place! I have been looking for a barber for my son (7) and was so impressed with this place! We saw Anthony and on top of being so nice and sweet with my son, he gave him probably the best cut he's ever gotten. On the way home, my son said he wants to keep going back to see him so I already made another appointment. Highly recommend!!" },
    { name: "Lorenzo O.", from: "Los Angeles, CA", source: "Yelp", date: "Mar 2025", barber: "eduardo-mora",
      text: "Eduardo does an amazing job. He'll get you right. He always has a chill vibe. Interacts with you and talks to really get to know you. Last time I got a mid taper fade and it was to perfection." },
    { name: "Ana G.", from: "Reno, NV", source: "Yelp", date: "Apr 2024", barber: "rico-colta",
      text: "My husband went on Saturday, no appointment, we did a walk in, so it was a bit of a wait, which should be anticipated at an establishment dedicated to giving the best result to their clients. Honestly the best haircut, he's had in a long time, it was all thanks to the barber named Rico, worth the wait. Definitely a place for anyone wanting a high quality haircut should checkout." },
    { name: "Gerald D.", from: "Scottsdale, AZ", source: "Yelp", date: "Sep 2026", barber: "rodolfo-silverio",
      text: "Just finished getting a fresh cut from Rudolfo, fantastic as always, great atmosphere, great music, this cuts on fire!!!",
      more: "Earlier review: Rodolfo is professional, courteous, pays attention and listens to his clientele. Is aware of his clientele's desired outcome. Best cut I've had in awhile and most definitely will be back." },
    { name: "Brandon C.", from: "Victorville, CA", source: "Yelp", date: "Apr 2024", barber: null,
      text: "That's a great place. Nothing is more upsetting than getting a hair cut and walking out looking a mess still. THIS place makes you look good befor you leave. Export cuts! Old fashion shave/trim. Real fades. They style your hair after your cut. When you feel good you look good. The price is high! Wish it was a little more affordable. You get what you pay for I guess." }
  ],

  ratings: [
    { source: "Google", score: 4.3, count: 53, url: "https://www.google.com/maps/search/?api=1&query=Reno%27s+House+of+Fades+180+W+Peckham+Ln" },
    { source: "Yelp", score: null, count: null, url: "https://www.yelp.com/biz/reno-s-house-of-fades-reno" }
  ]
};
