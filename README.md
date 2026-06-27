# Agafay Camels — Website

Static landing page for **agafaycamels.com** — Camel Rides, Sunset Tours & Desert Dinner from Marrakech.  
Built with pure HTML, CSS, and vanilla JavaScript. No framework. No build step. No server required.

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Markup | HTML5 (semantic) |
| Styles | CSS3 (custom properties, Grid, Flexbox, animations) |
| Scripts | Vanilla JavaScript (ES6+, IntersectionObserver) |
| Fonts | Google Fonts (Playfair Display + Poppins + Inter) |
| Hosting | GitHub Pages |
| DNS / SSL | Cloudflare |

---

## Project Files

| File | Purpose |
|------|---------|
| `index.html` | Main page — all sections |
| `style.css` | All styles, responsive design, animations |
| `script.js` | Navbar, hamburger, fade-in, form handler, back-to-top, smooth scroll |
| `CNAME` | Custom domain for GitHub Pages (`agafaycamels.com`) |
| `README.md` | This file |

---

## Deployment

### 1 — Upload Files to GitHub

**Option A — GitHub Website (no terminal needed):**
1. Go to [github.com](https://github.com) and sign in
2. Click **New repository** → Name it `agafaycamels` → Set to **Public**
3. Click **Create repository**
4. Click **uploading an existing file**
5. Drag all project files: `index.html`, `style.css`, `script.js`, `CNAME`, `README.md`
6. Click **Commit changes**

**Option B — Terminal:**
```bash
cd /path/to/agafaycamels
git init
git branch -m main
git add .
git commit -m "Initial commit — agafaycamels.com"
gh repo create YOUR_USERNAME/agafaycamels --public --source=. --remote=origin --push
```

---

### 2 — Enable GitHub Pages

1. Go to your repository → **Settings → Pages**
2. Under **Source** → select **Deploy from a branch**
3. Under **Branch** → select **main** → **/ (root)**
4. Click **Save**

Site will be live at: `https://YOUR_USERNAME.github.io/agafaycamels`

---

### 3 — Connect the Custom Domain (agafaycamels.com)

1. In **Settings → Pages**, enter `agafaycamels.com` in the **Custom domain** field → **Save**
2. Verify the `CNAME` file in your repo contains:
   ```
   agafaycamels.com
   ```
3. Wait 15–60 minutes for DNS propagation
4. Return to **Settings → Pages** → enable **Enforce HTTPS**

---

### 4 — Connect Cloudflare

**Step 1 — Add domain:**
1. Go to [cloudflare.com](https://cloudflare.com) → **Add a Site** → `agafaycamels.com` → Free plan

**Step 2 — DNS records for GitHub Pages:**

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | @ | 185.199.108.153 | DNS only (grey) |
| A | @ | 185.199.109.153 | DNS only (grey) |
| A | @ | 185.199.110.153 | DNS only (grey) |
| A | @ | 185.199.111.153 | DNS only (grey) |
| CNAME | www | YOUR_USERNAME.github.io | DNS only (grey) |

> Set to **DNS only** (grey cloud) — GitHub Pages needs to issue the SSL certificate directly.

**Step 3 — Update nameservers at your registrar** with the two nameservers Cloudflare provides.

**Step 4 — SSL/TLS in Cloudflare:**
- SSL mode: **Full**
- Enable **Always Use HTTPS**
- Enable **Automatic HTTPS Rewrites**
- Caching: **Standard** level

**Step 5 — Verify:** After propagation (up to 24h), `https://agafaycamels.com` loads with valid SSL.

---

### 5 — Contact Form (Static Hosting)

> The form in `index.html` is **UI only** — it shows a JavaScript alert but does not send data.

**To connect a real form service:**

| Service | Free tier | Setup |
|---------|-----------|-------|
| [Formspree](https://formspree.io) | 50/month | `action="https://formspree.io/f/YOUR_ID"` + `method="POST"` |
| [Getform](https://getform.io) | 50/month | `action="https://getform.io/f/YOUR_ID"` + `method="POST"` |
| [Web3Forms](https://web3forms.com) | 250/month | `action` + hidden `access_key` input |
| [Netlify Forms](https://netlify.com/products/forms/) | 100/month | Only on Netlify hosting |
| [Google Forms](https://forms.google.com) | Unlimited | Embed iframe |

**For Formspree:**
1. Sign up → create form → copy endpoint URL
2. In `index.html`, update the `<form>` tag:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. In `script.js`, `initForm()` auto-detects the real action and skips the JS alert.

---

## How to Edit Content

| What | Where |
|------|-------|
| Site title / meta | `<head>` in `index.html` |
| Logo | `.logo` in `<header>` |
| Hero headline & subtitle | `.hero-left` in `index.html` |
| WhatsApp links | Replace all `href="#"` on WhatsApp buttons → `https://wa.me/212XXXXXXXXX` |
| Experience cards | `.exp-card` elements in `#experiences` section |
| Testimonial reviews | `.review-card` elements in `#reviews` section |
| Contact email | `contact@agafaycamels.com` in contact section + `script.js` alert |
| Colors | `:root` variables at top of `style.css` |
| Fonts | Google Fonts `<link>` in `<head>` + font variables in `style.css` |

---

## WhatsApp Link Format

Replace all `href="#"` on WhatsApp buttons:
```
https://wa.me/212600000000
```
- Include country code, no `+` or spaces
- Morocco: `212` + number without leading `0`

---

## Add Real Photos

Replace CSS gradient placeholders with real Agafay Desert photos:

1. Add photos to a `photos/` folder in the project
2. In `index.html`, find divs like:
   ```html
   <!-- Replace gradient with real Agafay sunset camel ride photo -->
   <div class="exp-img exp-img--1" ...></div>
   ```
3. Add an `<img>` inside:
   ```html
   <div class="exp-img exp-img--1">
     <img src="./photos/agafay-camel-sunset.jpg" alt="Agafay sunset camel ride" loading="lazy">
   </div>
   ```
4. Add CSS for photo containers in `style.css`:
   ```css
   .exp-img img, .gl-card img {
     position: absolute;
     inset: 0;
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
   ```

---

*© 2026 Agafay Camels — agafaycamels.com*
