# Operasjonell-frontend-utvikling- Emne 2

📖 Om prosjektet
Stay er en digital bookingnettside for små Bed and Breakfast-steder. Løsningen gjør det enkelt for brukere å finne ledige rom, lese anmeldelser og sende bookingforespørsler.

Målgruppen: Privatpersoner som ønsker å booke overnatting hos Bed and Breakfast

Kundecase: Arbeidskrav i gruppen 1-3

---

👥 Teamet vårt

- [Frida] - Backlog for mappe 2+samle alt
- [Dastan Hawrami] - Github-repo+Enkelt arbeidsflyt+Pr-mal
- [Iben] - Wireframe/sidekart i Figjam
- [Vetle] - Krav/Qa-sjekkleste+starte prosjektdokument

---

🎯 Funksjonalitet

- ✅ Brukerregistrering og innlogging
- ✅ Søk og filtrer rom basert på pris og egenskaper
- ✅ Se romdetaljer med bilder og beskrivelser
- ✅ Lese og skrive anmeldelser
- ✅ Full CRUD-funksjonalitet (Create, Read, Update, Delete)

---

🛠️ Teknologi

- Frontend: HTML, CSS, JavaScript
- API: [Lenke til API-dokumentasjon]
- Versjonskontroll: GitHub
- Prosjektstyring: GitHub Projects

---

📂 Ansvarsfordeling per side

| Student  | Side           | Ressurs (API)                       | Reserve  |
| -------- | -------------- | ----------------------------------- | -------- |
| [Vetle]  | Romsoversikt   | `rooms` (GET, POST)                 | [Navn 2] |
| [Iben]   | Min profil     | `users` (GET, PATCH, DELETE)        | [Navn 3] |
| [Dastan] | Mine bookinger | `bookings` (GET, POST, DELETE)      | [Navn 4] |
| [Frida]  | Anmeldelser    | `rooms/reviews` (GET, POST, DELETE) | [Navn 1] |

\*Hver side må inneholde full CRUD-funksjonalitet mot API.

---

🚀 Hvordan jobbe sammen?
1️⃣ Finn en oppgave

- Gå til "Projects" → "Stay - Sprint Planning"
- Velg en oppgave fra "Todo"
- Flytt den til "In Progress"
- Assign deg selv til oppgaven

2️⃣ Lag en branch-GitHub (enkelt)

1. Gå til repository på GitHub\*\*

2. Klikk på "main"
3. Skriv nytt branch-navn
   Skriv: `ditt-navn/hva-du-gjør`
4. Klikk "Create branch"
5. Hent branchen lokalt:
   git fetch
   git checkout ditt-navn/hva-du-gjør

---

🔄 Bytte mellom branches:

Se alle branches:

git branch

Bytt til main:

git checkout main

Bytt til din branch:

git checkout Dastan/login-side

---

✅ Sjekkliste:

- [ ] `git checkout main`
- [ ] `git pull`
- [ ] `git checkout -b ditt-navn/oppgave`
- [ ] Skriv kode
- [ ] `git add .`
- [ ] `git commit -m "beskrivelse"`
- [ ] `git push origin ditt-navn/oppgave`
- [ ] Lag Pull Request på GitHub

---
