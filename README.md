# KO Link-in-Bio Website

A modern, professional link-in-bio page for **Kudahuvadhoo Online (KO)**. Built with pure HTML, CSS, and JavaScript. Designed for GitHub Pages hosting.

## Features

- Mobile-first responsive design
- Dark mode with system preference detection and localStorage persistence
- Dynamic link cards generated from a simple JavaScript data file
- Featured link styling
- Social media icon row
- Smooth animations with `prefers-reduced-motion` support
- Accessible (semantic HTML, keyboard navigation, focus states, ARIA labels)
- SEO metadata (Open Graph, Twitter Card, theme-color)
- Share button with clipboard copy fallback and toast confirmation
- Media kit page with statistics, ad slots, and contact options

## Project Structure

```
KO-link-page/
├── index.html
├── mediakit.html
├── style.css
├── script.js
├── data/
│   ├── links.js
│   └── mediakit-data.js
└── assets/
    ├── logo.png
    ├── favicon.png
    └── og-image.jpg
```

## Quick Start

1. Clone or download this repository.
2. Open `index.html` in a browser to preview locally.
3. Open `mediakit.html` to preview the media kit page locally.
4. Edit `data/links.js` to update links, titles, descriptions, icons, and featured status.
5. Edit `script.js` to update `KO_CONFIG` (name, tagline) and `KO_SOCIALS` (social URLs).
6. Replace `assets/logo.svg`, `assets/favicon.ico`, and `assets/og-image.jpg` with your own assets.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/root` (or `/docs` if you place files in a `docs` folder)
4. Click **Save**.
5. Your site will be live at: `https://<username>.github.io/<repository-name>/`

## Customization

### Colors
Edit CSS variables in `style.css` under `:root`:

```css
:root {
    --primary: #171717;
    --primary-light: #525252;
    --secondary: #737373;
    --background: #ffffff;
    --surface: #ffffff;
    --text: #171717;
    --text-secondary: #737373;
    --text-muted: #a3a3a3;
    --border: #e5e5e5;
}
```

Dark mode colors are defined under `[data-theme="dark"]` in the same file.

### Links
Edit `data/links.js`. Each link object supports:

- `title` — Display title
- `description` — Short subtitle
- `url` — Target URL
- `icon` — Icon name (see `ICONS` map in `script.js`)
- `featured` — `true` to highlight the card
- `enabled` — `false` to hide the link

### Socials
Update `KO_SOCIALS` in `script.js`:

```javascript
const KO_SOCIALS = {
    facebook: "https://web.facebook.com/kudahuvadhoo.mv",
    instagram: "https://www.instagram.com/kudahuvadhoomv/",
    youtube: "https://www.youtube.com/@kudahuvadhoomv",
    viber: "https://invite.viber.com/...",
    twitter: "https://x.com/kudahuvadhoomv",
    email: "mailto:kudahuvadhoo.mv@gmail.com"
};
```

### Analytics
Uncomment the placeholder block in `script.js` and insert your analytics code (e.g., Google Analytics).

### Media Kit
`mediakit.html` is a standalone page for media kit content. Its content is controlled by `data/mediakit-data.js`.

Edit `data/mediakit-data.js` to update:
- `brand` — site name, tagline, logo, and last updated date
- `stats` — statistics array with label, value, icon, color, and description
- `adSlots` — ad slot positions, names, details, prices, and colors
- `audience` — platform audience data with labels, values, colors, and icons
- `contact` — email, phone, and note shown in the contact card

The contact card renders two action buttons from this data:
- **Contact Us** — `mailto:` link from `contact.email`
- **Call us** — `tel:` link from `contact.phone`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

&copy; 2026 Kudahuvadhoo Online. All rights reserved.
