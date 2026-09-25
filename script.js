/* ============================================================
   KO Link-in-Bio — Configuration & Logic
   ============================================================ */

/* -------------------------------------------
   KO Brand Configuration
   Update these values to customize the page
   ------------------------------------------- */
const KO_CONFIG = {
    name: "KO",
    fullName: "Kudahuvadhoo Online",
    tagline: "Your Island. Your News. Your Voice.",
    logo: "./assets/logo.png"
};

/* -------------------------------------------
   Social Media Configuration
   Replace "#" with actual URLs
   ------------------------------------------- */
const KO_SOCIALS = {
    facebook: "https://web.facebook.com/kudahuvadhoo.mv",
    instagram: "https://www.instagram.com/kudahuvadhoomv/",
    youtube: "https://www.youtube.com/@kudahuvadhoomv",
    viber: "https://invite.viber.com/?g2=AQBf9dTlRT4rr01Fq9IQU%2FHoNZb0biJ%2F8w6o8Nc%2FM58L9ArMtkvTAqy0a9pyo4vd",
    twitter: "https://x.com/kudahuvadhoomv",
    email: "mailto:kudahuvadhoo.mv@gmail.com"
};

/* -------------------------------------------
   Analytics placeholder
   Uncomment and replace with your tracking code
   ------------------------------------------- */
/*
(function() {
    // Google Analytics / other analytics insertion point
    // Example:
    // var script = document.createElement('script');
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
    // document.head.appendChild(script);
})();
*/

/* -------------------------------------------
   Icon map
   ------------------------------------------- */
const ICONS = {
    globe: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    users: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    "message-circle": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
    facebook: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
    instagram: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
    youtube: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon></svg>',
    "message-square": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
    calendar: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
    "user-plus": '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>',
    link: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
     twitter: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>',
     tiktok: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.28 8.28 0 0 0 4.76 1.52V6.93a4.85 4.85 0 0 1-1-.03z"></path></svg>',
     telegram: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>'
};

/* -------------------------------------------
   Dark Mode
   ------------------------------------------- */
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme() {
    try {
        return localStorage.getItem('KO-theme');
    } catch (e) {
        return null;
    }
}

function applyTheme(theme) {
    if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0f172a');
    } else {
        root.setAttribute('data-theme', 'light');
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ffffff');
    }
}

function initTheme() {
    const stored = getStoredTheme();
    const system = getSystemTheme();
    const theme = stored || system;
    applyTheme(theme);
}

if (themeToggle) {
    initTheme();

    themeToggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try {
            localStorage.setItem('KO-theme', next);
        } catch (e) {
            // ignore localStorage errors
        }
    });
}

/* -------------------------------------------
   Share
   ------------------------------------------- */
const shareButton = document.getElementById('share-button');
const shareToast = document.getElementById('share-toast');
let shareToastTimer = null;

function showShareToast() {
    if (!shareToast) return;
    shareToast.classList.add('is-visible');
    if (shareToastTimer) clearTimeout(shareToastTimer);
    shareToastTimer = setTimeout(() => {
        shareToast.classList.remove('is-visible');
        shareToastTimer = null;
    }, 2000);
}

if (shareButton) {
    shareButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            shareButton.setAttribute('title', 'Copied!');
            shareButton.setAttribute('aria-label', 'Link copied to clipboard');
            showShareToast();
            setTimeout(() => {
                shareButton.setAttribute('title', 'Share');
                shareButton.setAttribute('aria-label', 'Share this page');
            }, 2000);
        } catch (e) {
            // ignore clipboard errors
        }
    });
}


/* -------------------------------------------
   Link Card Rendering
   ------------------------------------------- */
function renderLinks() {
    const container = document.getElementById('links-container');
    if (!container) return;

    const enabledLinks = (typeof links !== 'undefined' ? links : []).filter(link => link.enabled !== false);

    if (enabledLinks.length === 0) {
        container.innerHTML = '<p class="no-links">No links available at this time.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();

    enabledLinks.forEach((link, index) => {
        const card = document.createElement('a');
        card.className = 'link-card' + (link.featured ? ' featured' : '');
        card.href = link.url || '#';
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.style.animationDelay = (index * 0.05) + 's';

        const iconSvg = ICONS[link.icon] || ICONS.link;
        const badgeHtml = link.featured ? '<span class="link-badge">Featured</span>' : '';

        card.innerHTML = `
            <div class="link-icon">${iconSvg}</div>
            <div class="link-content">
                <div class="link-title">${escapeHtml(link.title || '')}</div>
                <div class="link-description">${escapeHtml(link.description || '')}</div>
            </div>
            <div class="link-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
            ${badgeHtml}
        `;

        fragment.appendChild(card);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/* -------------------------------------------
   Initialize when DOM is ready
   ------------------------------------------- */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderLinks);
} else {
    setTimeout(renderLinks, 0);
}
