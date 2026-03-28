# 🎓 Adhyayan Classes — Website

A full-featured coaching institute website built with **Vite + React + Tailwind CSS**.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The output goes to the `dist/` folder — ready to deploy.

---

## 📁 Project Structure

```
client/
├── public/
│   └── logo.svg               ← Favicon / logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          ← Top navigation bar
│   │   ├── Footer.jsx          ← Bottom footer
│   │   ├── WhatsAppButton.jsx  ← Floating WhatsApp button
│   │   └── ScrollToTop.jsx     ← Auto-scroll on route change
│   ├── pages/
│   │   ├── Home.jsx            ← Landing page
│   │   ├── About.jsx           ← About us + faculty
│   │   ├── Courses.jsx         ← All batches/courses
│   │   ├── Results.jsx         ← Toppers & achievements
│   │   ├── Contact.jsx         ← Enquiry form
│   │   └── NotFound.jsx        ← 404 page
│   ├── App.jsx                 ← Routes setup
│   ├── main.jsx                ← Entry point
│   └── index.css               ← Tailwind + custom styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## ✏️ What to Customize

### 📞 Contact Details
Update your real phone, email, and address in these files:
- `src/components/Footer.jsx` — phone, email, address
- `src/pages/Contact.jsx` — phone, email, WhatsApp link, map embed
- `src/components/WhatsAppButton.jsx` — WhatsApp number in the `href`

**WhatsApp number format:**
```
https://wa.me/91XXXXXXXXXX
```
Replace `91XXXXXXXXXX` with your country code + number (no spaces/dashes).

---

### 🗺️ Google Maps Embed
In `src/pages/Contact.jsx`, find the Maps placeholder section at the bottom and replace it with your actual embed:

1. Go to [maps.google.com](https://maps.google.com)
2. Search for your institute address
3. Click **Share → Embed a map**
4. Copy the `<iframe>` code
5. Replace the placeholder `<div>` with the iframe

---

### 👩‍🏫 Faculty Details
In `src/pages/About.jsx`, update the `faculty` array with:
- Real descriptions for each sir
- Their qualifications or experience years

---

### 🏆 Results / Toppers
In `src/pages/Results.jsx`, update the `toppers` array with real student names, scores, and exams. Add or remove entries as needed.

---

### 📱 Social Media Links
In `src/components/Footer.jsx`, update the Instagram and YouTube `href` attributes to your real profile URLs.

---

### 🎨 Colors
The theme is configured in `tailwind.config.js`. The main colors used:
- **Bhagva/Orange:** `#FF6600`, `#FF9933`
- **Crimson/Red:** `#DC143C`
- **Dark background:** `#0f0f0f`

---

## 🌐 Deployment Options

### Option A — Netlify (Free, Easiest)
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Option B — Vercel (Free)
```bash
npm install -g vercel
vercel
```

### Option C — GitHub Pages
Use the `vite-plugin-gh-pages` package or configure your repo settings.

---

## 📦 Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 6 |
| Tailwind CSS | 3 |
| React Router DOM | 6 |
| Lucide React | latest |

---

## 📞 Support
For any changes or additions to the website, feel free to reach out!
