/* =========================================
   PULSO — prevodi, događaji i interakcije
   ========================================= */

/* ---------- 1. PREVODI ----------
   Da dodaš novi tekst: u HTML stavi data-i18n="kljuc",
   pa ovdje dodaj isti ključ u "me" i "en".
   Nazivi grana (Social PULSO...) i podnaslovi su isti na oba jezika. */
const translations = {
  me: {
    "nav.about": "O nama",
    "nav.services": "Grane",
    "nav.events": "Događaji",
    "nav.contact": "Kontakt",

    "hero.eyebrow": "Baza Podgorica · Događaji širom Crne Gore",
    "hero.title1": "Zajedno",
    "hero.title2": "kucamo jače.",
    "hero.lead": "PULSO okuplja ljude kroz pet grana događaja — od festivala i druženja do biznisa, sporta, kulture i programa za mlade.",
    "hero.cta1": "Upoznaj grane",
    "hero.cta2": "Organizuj sa nama",

    "strip.base": "baza",

    "about.eyebrow": "O nama",
    "about.title": "Svaki dobar događaj ima svoj puls.",
    "about.p1": "PULSO je organizacija sa bazom u Podgorici koja stvara događaje širom Crne Gore — u Budvi, Kotoru, na Žabljaku i svuda gdje ima ljudi spremnih da se pokrenu.",
    "about.p2": "Kroz pet grana spajamo zabavu, posao, sport, kulturu i mlade. Brinemo o konceptu, lokaciji, produkciji i promociji, kako bi učesnici imali samo jedan zadatak: da budu dio pulsa.",
    "about.s1": "Ljudi",
    "about.s2": "Energija",
    "about.s3": "Pokret",

    "services.eyebrow": "Grane",
    "services.title": "Pet grana. Jedan puls.",
    "services.note": "Svaka grana ima svoju publiku i svoj ritam, ali sve dijele istu energiju.",
    "services.c1p": "Druženja, festivali, lifestyle i društvena okupljanja.",
    "services.c2p": "Poslovna takmičenja, networking i povezivanje kompanija.",
    "services.c3p": "Sportski turniri, rekreativni izazovi i kompanijska takmičenja.",
    "services.c4p": "Kreativni izazovi, umjetnost, kultura i originalni koncepti.",
    "services.c5p": "Događaji za mlade i studente — takmičenja, radionice i druženja koja povezuju generaciju.",

    "events.eyebrow": "Događaji",
    "events.title": "Uskoro.",
    "events.note": "Od Podgorice do primorja i sjevera — prvi PULSO datumi se najavljuju uskoro.",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Imaš ideju? Hajde da je pokrenemo.",
    "contact.text": "Za saradnju, sponzorstva ili organizaciju događaja bilo gdje u Crnoj Gori — javi nam se.",
    "contact.email": "Email",
    "contact.location": "Baza",
    "contact.area": "Događaji",
    "contact.areaValue": "Širom Crne Gore",

    "form.name": "Ime i prezime",
    "form.email": "Email",
    "form.type": "Grana",
    "form.other": "Saradnja / ostalo",
    "form.message": "Poruka",
    "form.send": "Pošalji",
    "form.success": "Hvala! Javićemo ti se uskoro.",

    "footer.base": "Podgorica — događaji širom Crne Gore.",
    "footer.rights": "Sva prava zadržana.",

    months: ["JAN", "FEB", "MAR", "APR", "MAJ", "JUN", "JUL", "AVG", "SEP", "OKT", "NOV", "DEC"],
  },

  en: {
    "nav.about": "About",
    "nav.services": "Branches",
    "nav.events": "Events",
    "nav.contact": "Contact",

    "hero.eyebrow": "Based in Podgorica · Events across Montenegro",
    "hero.title1": "Together",
    "hero.title2": "we beat stronger.",
    "hero.lead": "PULSO brings people together through five event branches — from festivals and social gatherings to business, sports, culture and youth programs.",
    "hero.cta1": "Explore branches",
    "hero.cta2": "Work with us",

    "strip.base": "base",

    "about.eyebrow": "About us",
    "about.title": "Every great event has a pulse.",
    "about.p1": "PULSO is a Podgorica-based organization creating events across Montenegro — in Budva, Kotor, Žabljak and anywhere people are ready to move.",
    "about.p2": "Through five branches we connect fun, business, sport, culture and young people. We handle the concept, venue, production and promotion, so participants have just one job: to be part of the pulse.",
    "about.s1": "People",
    "about.s2": "Energy",
    "about.s3": "Movement",

    "services.eyebrow": "Branches",
    "services.title": "Five branches. One pulse.",
    "services.note": "Each branch has its own audience and rhythm, but they all share the same energy.",
    "services.c1p": "Social gatherings, festivals, lifestyle and community events.",
    "services.c2p": "Business competitions, networking and connecting companies.",
    "services.c3p": "Sports tournaments, recreational challenges and corporate competitions.",
    "services.c4p": "Creative challenges, art, culture and original concepts.",
    "services.c5p": "Events for young people and students — competitions, workshops and meetups that connect a generation.",

    "events.eyebrow": "Events",
    "events.title": "Coming soon.",
    "events.note": "From Podgorica to the coast and the north — the first PULSO dates will be announced soon.",

    "contact.eyebrow": "Contact",
    "contact.title": "Got an idea? Let's bring it to life.",
    "contact.text": "For partnerships, sponsorships or events anywhere in Montenegro — get in touch.",
    "contact.email": "Email",
    "contact.location": "Base",
    "contact.area": "Events",
    "contact.areaValue": "Across Montenegro",

    "form.name": "Full name",
    "form.email": "Email",
    "form.type": "Branch",
    "form.other": "Partnership / other",
    "form.message": "Message",
    "form.send": "Send",
    "form.success": "Thanks! We'll get back to you soon.",

    "footer.base": "Podgorica — events across Montenegro.",
    "footer.rights": "All rights reserved.",

    months: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
  },
};

/* ---------- 2. DOGAĐAJI ----------
   Ovo su PRIMJERI — zamijeni ih pravim događajima.
   date: "GGGG-MM-DD", branch: naziv grane (isti na oba jezika) */
const events = [
  {
    date: "2026-12-05",
    title: { me: "PULSO Opening Night", en: "PULSO Opening Night" },
    place: { me: "Podgorica · Lokacija uskoro", en: "Podgorica · Venue TBA" },
    branch: "Social",
  },
  {
    date: "2027-01-23",
    title: { me: "Business Pulse Meetup", en: "Business Pulse Meetup" },
    place: { me: "Podgorica · Lokacija uskoro", en: "Podgorica · Venue TBA" },
    branch: "Business",
  },
  {
    date: "2027-03-06",
    title: { me: "Snow Challenge", en: "Snow Challenge" },
    place: { me: "Žabljak · Lokacija uskoro", en: "Žabljak · Venue TBA" },
    branch: "Sports",
  },
  {
    date: "2027-04-17",
    title: { me: "Kreativni vikend", en: "Creative Weekend" },
    place: { me: "Kotor · Lokacija uskoro", en: "Kotor · Venue TBA" },
    branch: "Creative",
  },
  {
    date: "2027-05-15",
    title: { me: "Student Pulse", en: "Student Pulse" },
    place: { me: "Budva · Lokacija uskoro", en: "Budva · Venue TBA" },
    branch: "Youth",
  },
];

/* ---------- 3. LOGIKA ---------- */
let currentLang = "me";

function renderEvents(lang) {
  const list = document.getElementById("eventsList");
  const months = translations[lang].months;

  list.innerHTML = events
    .map((ev) => {
      const d = new Date(ev.date + "T00:00:00");
      const day = String(d.getDate()).padStart(2, "0");
      const month = months[d.getMonth()];
      return `
        <article class="event">
          <div class="event__date">
            <span class="event__day">${day}</span>
            <span class="event__month">${month} ${d.getFullYear()}</span>
          </div>
          <div>
            <h3 class="event__title">${ev.title[lang]}</h3>
            <p class="event__meta">${ev.place[lang]}</p>
          </div>
          <span class="event__tag">${ev.branch} PULSO</span>
        </article>`;
    })
    .join("");
}

function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.documentElement.lang = lang === "me" ? "sr-ME" : "en";
  document.title =
    lang === "me"
      ? "PULSO — Zajedno kucamo jače | Crna Gora"
      : "PULSO — Together we beat stronger | Montenegro";

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  renderEvents(lang);

  try {
    localStorage.setItem("pulso-lang", lang);
  } catch (e) {}
}

/* Dugmad za jezik */
document.querySelectorAll(".lang__btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

/* Početni jezik: sačuvan izbor, inače crnogorski */
let savedLang = null;
try {
  savedLang = localStorage.getItem("pulso-lang");
} catch (e) {}
setLanguage(savedLang === "en" ? "en" : "me");

/* Navigacija — pozadina pri skrolu */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 20);
});

/* Mobilni meni */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  navLinks.classList.toggle("is-open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
  });
});

/* Animacija pojavljivanja pri skrolu */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* Kontakt forma (za sada samo poruka — nema slanja na server) */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formStatus").textContent =
    translations[currentLang]["form.success"];
  e.target.reset();
});

/* Godina u footeru */
document.getElementById("year").textContent = new Date().getFullYear();
