# Tanvir Hossen Bappy — Portfolio

Personal portfolio built with React + Vite. Deployed to GitHub Pages at [thbappy7706.github.io](https://thbappy7706.github.io).

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deploy to GitHub Pages

### One-time setup

1. Make sure this repo is named `thbappy7706.github.io` (your username + `.github.io`).

2. Install the gh-pages tool (already in devDependencies):
   ```bash
   npm install
   ```

3. Add this to `package.json` if not already present:
   ```json
   "homepage": "https://thbappy7706.github.io"
   ```

### Deploy

```bash
npm run deploy
```

This runs `npm run build` then publishes the `dist/` folder to the `gh-pages` branch automatically.

### GitHub Pages Settings

In your repo → **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: `gh-pages` / `/ (root)`

Your site will be live at **https://thbappy7706.github.io** within a few minutes.

---

## 🛠 Stack

- **React 18** — UI
- **Vite 5** — Build tool
- **CSS Modules** — Scoped styling
- **Google Fonts** — Bebas Neue + DM Mono + DM Sans

## ✏️ Customization

| What | Where |
|------|-------|
| Personal info & bio | `src/components/About.jsx` |
| Work experience | `src/components/Experience.jsx` |
| Projects list | `src/components/Projects.jsx` |
| Contact links | `src/components/Contact.jsx` |
| Colors / fonts | `src/index.css` (CSS variables) |
| Nav links | `src/components/Navbar.jsx` |
| Resume link | `src/components/Navbar.jsx` (resumeBtn href) |

## 📝 Update Resume Link

In `src/components/Navbar.jsx`, replace the `href` in the Resume button:

```jsx
<a className={styles.resumeBtn} href="YOUR_GOOGLE_DRIVE_OR_PDF_LINK" ...>
```
