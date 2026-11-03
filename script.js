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
    "hero.lead": "PULSO pretvara ideje u događaje i iskustva koja okupljaju ljude, podstiču povezivanje i stvaraju nove prilike.",
    "hero.cta1": "Upoznaj grane",
    "hero.cta2": "Organizuj sa nama",

    "strip.base": "baza",

    "about.eyebrow": "O nama",
    "about.title": "Svaki dobar događaj ima svoj puls.",
    "about.p1": "PULSO je organizacija koja okuplja ljude, ideje i energiju oko događaja i projekata koji pomjeraju stvari naprijed. Osmislili smo PULSO sa jednom idejom — da stvaramo nešto više od običnih okupljanja.",
    "about.p2": "Od prvog koncepta do posljednjeg detalja, sami osmišljavamo, pokrećemo i realizujemo događaje, festivale, takmičenja i iskustva pod brendom PULSO. Vjerujemo u snagu zajedništva, energiju ljudi i ideje koje postaju stvarnost. Jer svaki pokret počinje jednim impulsom.",
    "about.s1": "Ljudi",
    "about.s2": "Energija",
    "about.s3": "Pokret",

    "services.eyebrow": "Grane",
    "services.title": "Pet grana. Jedan puls.",
    "services.note": "Različita interesovanja, različite ideje i različiti načini povezivanja. Jedna zajednička energija.",
    "services.c1p": "Festivali, tematski događaji i okupljanja koja stvaraju nova poznanstva i zajedničke trenutke.",
    "services.c2p": "Poslovni susreti, networking događaji i takmičenja koja povezuju kompanije, profesionalce i nove ideje.",
    "services.c3p": "Sportski događaji, timski izazovi i takmičenja koja podstiču aktivnost, saradnju i zajednički duh.",
    "services.c4p": "Kreativni projekti, kulturni događaji i inovativni koncepti koji pomjeraju granice uobičajenog.",
    "services.c5p": "Studentski festivali, takmičenja, radionice i inicijative koje okupljaju mlade i daju prostor njihovim idejama.",
    "services.extraLabel": "Dodatno · Za kompanije i brendove",
    "services.c6p": "Od ideje do realizacije, preuzimamo kompletnu organizaciju događaja za kompanije, brendove i druge klijente – uključujući planiranje, osmišljavanje koncepta, logistiku, produkciju i koordinaciju svih detalja.",

    "events.eyebrow": "Događaji",
    "events.title": "Uskoro.",
    "events.note": "Od Podgorice do primorja i sjevera — prvi PULSO datumi se najavljuju uskoro.",

    "contact.eyebrow": "Kontakt",
    "contact.title": "Imaš ideju? Hajde da je pokrenemo.",
    "contact.text": "Imaš ideju, projekat ili prijedlog za saradnju? Želiš da organizuješ događaj za svoju kompaniju ili brend? Otvoreni smo za nove koncepte, partnerstva i inicijative. Hajde da zajedno napravimo nešto vrijedno pažnje.",
    "contact.email": "Email",
    "contact.igLabel": "Zaprati nas",
    "contact.mailLabel": "Piši nam",
    "contact.location": "Baza",
    "contact.area": "Događaji",
    "contact.areaValue": "Širom Crne Gore",

    "form.name": "Ime i prezime",
    "form.email": "Email",
    "form.type": "Grana",
    "form.other": "Saradnja / ostalo",
    "form.message": "Poruka",
    "form.send": "Pošalji",
    "form.success": "Hvala! Poruka je poslata — javićemo ti se uskoro.",
    "form.sending": "Šaljem...",
    "form.error": "Poruka nije poslata. Pokušaj ponovo ili nam piši na pulsomne1@gmail.com.",

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
    "hero.lead": "PULSO turns ideas into events and experiences that bring people together, encourage connection and create new opportunities.",
    "hero.cta1": "Explore branches",
    "hero.cta2": "Work with us",

    "strip.base": "base",

    "about.eyebrow": "About us",
    "about.title": "Every great event has a pulse.",
    "about.p1": "PULSO is an organization that brings people, ideas and energy together around events and projects that move things forward. We created PULSO with one idea — to build something more than ordinary gatherings.",
    "about.p2": "From the first concept to the final detail, we design, launch and deliver our own events, festivals, competitions and experiences under the PULSO brand. We believe in the power of togetherness, the energy of people and ideas that become reality. Because every movement starts with a single impulse.",
    "about.s1": "People",
    "about.s2": "Energy",
    "about.s3": "Movement",

    "services.eyebrow": "Branches",
    "services.title": "Five branches. One pulse.",
    "services.note": "Different interests, different ideas and different ways of connecting. One shared energy.",
    "services.c1p": "Festivals, themed events and gatherings that create new friendships and shared moments.",
    "services.c2p": "Business meetings, networking events and competitions that connect companies, professionals and new ideas.",
    "services.c3p": "Sports events, team challenges and competitions that encourage activity, collaboration and team spirit.",
    "services.c4p": "Creative projects, cultural events and innovative concepts that push the boundaries of the ordinary.",
    "services.c5p": "Student festivals, competitions, workshops and initiatives that bring young people together and give space to their ideas.",
    "services.extraLabel": "Additionally · For companies & brands",
    "services.c6p": "From idea to execution, we take on the complete organization of events for companies, brands and other clients — including planning, concept development, logistics, production and coordination of every detail.",

    "events.eyebrow": "Events",
    "events.title": "Coming soon.",
    "events.note": "From Podgorica to the coast and the north — the first PULSO dates will be announced soon.",

    "contact.eyebrow": "Contact",
    "contact.title": "Got an idea? Let's bring it to life.",
    "contact.text": "Have an idea, a project or a proposal for collaboration? Want to organize an event for your company or brand? We're open to new concepts, partnerships and initiatives. Let's create something worth noticing together.",
    "contact.email": "Email",
    "contact.igLabel": "Follow us",
    "contact.mailLabel": "Email us",
    "contact.location": "Base",
    "contact.area": "Events",
    "contact.areaValue": "Across Montenegro",

    "form.name": "Full name",
    "form.email": "Email",
    "form.type": "Branch",
    "form.other": "Partnership / other",
    "form.message": "Message",
    "form.send": "Send",
    "form.success": "Thanks! Your message was sent — we'll get back to you soon.",
    "form.sending": "Sending...",
    "form.error": "Message not sent. Please try again or email us at pulsomne1@gmail.com.",

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
    date: null, // datum još nije poznat — prikazuje se "Uskoro"
    title: { me: "Finally Free", en: "Finally Free" },
    place: { me: "Naučno-tehnološki park · Podgorica", en: "Science & Technology Park · Podgorica" },
    branch: "Youth",
  },
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
      let day, monthLabel;
      if (ev.date) {
        const d = new Date(ev.date + "T00:00:00");
        day = String(d.getDate()).padStart(2, "0");
        monthLabel = `${months[d.getMonth()]} ${d.getFullYear()}`;
      } else {
        day = "??";
        monthLabel = lang === "me" ? "Uskoro" : "Coming soon";
      }
      return `
        <article class="event">
          <div class="event__date">
            <span class="event__day">${day}</span>
            <span class="event__month">${monthLabel}</span>
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
      ? "PULSO Events — Zajedno kucamo jače | Crna Gora"
      : "PULSO Events — Together we beat stronger | Montenegro";

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

/* Kontakt forma — šalje poruku na mail preko FormSubmit-a */
const FORM_EMAIL = "pulsomne1@gmail.com";
const FORM_AJAX = `https://formsubmit.co/ajax/${FORM_EMAIL}`;

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const formBtn = document.getElementById("formBtn");

// Polja koja stižu u mail
function buildFields(data) {
  return {
    "Ime i prezime": data.get("name"),
    email: data.get("email"), // FormSubmit ovo koristi kao "Reply-To"
    Grana: data.get("type"),
    Poruka: data.get("message"),
    Jezik: currentLang.toUpperCase(),
    _subject: `PULSO sajt — nova poruka (${data.get("type")})`,
    _template: "table",
    _captcha: "false",
  };
}

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const dict = translations[currentLang];
  const data = new FormData(contactForm);

  // Ako je bot popunio skriveno polje — ne šalji ništa
  if (data.get("_honey")) return;

  formBtn.disabled = true;
  formBtn.textContent = dict["form.sending"];
  formStatus.classList.remove("is-error");
  formStatus.textContent = "";

  const fields = buildFields(data);

  // Jednostavan zahtjev (FormData, bez JSON zaglavlja) — pregledači ga ne blokiraju
  const body = new FormData();
  for (const [k, v] of Object.entries(fields)) body.append(k, v ?? "");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);

  try {
    const res = await fetch(FORM_AJAX, {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
      signal: controller.signal,
    });
    const result = await res.json();

    if (String(result.success) !== "true") throw new Error(result.message || `HTTP ${res.status}`);

    formStatus.textContent = dict["form.success"];
    contactForm.reset();
  } catch (err) {
    console.error("FormSubmit greška:", err.message);

    if (/activat/i.test(err.message || "")) {
      formStatus.textContent =
        "Forma još nije aktivirana — provjeri pulsomne1@gmail.com (i Spam) i klikni 'Activate Form'.";
      formStatus.classList.add("is-error");
    } else {
      // FormSubmit ne odgovara (npr. njihov server ne radi) — posjetilac ostaje na sajtu
      const reason = err.name === "AbortError" ? "server ne odgovara" : err.message;
      formStatus.textContent = `${dict["form.error"]} (${reason || "nepoznata greška"})`;
      formStatus.classList.add("is-error");
    }
  } finally {
    clearTimeout(timer);
  }

  formBtn.disabled = false;
  formBtn.textContent = dict["form.send"];
});

/* Godina u footeru */
document.getElementById("year").textContent = new Date().getFullYear();
