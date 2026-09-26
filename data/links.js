/* ============================================================
    KO Links Data
    ============================================================
    Edit this file to add, remove, or reorder links.

    Fields:
    - title:       Link title (required)
    - description: Short description shown below title
    - url:         Target URL (required). Use "#" for placeholders.
    - icon:        Icon name from ICONS map in script.js
    - featured:    Set true to make it stand out (optional, default: false)
    - enabled:     Set false to hide the link (optional, default: true)
    ============================================================ */

const links = [
    {
        title: "News Website",
        description: "Visit our official website",
        url: "https://kudahuvadhoo.mv/",
        icon: "globe",
        featured: true,
        enabled: true
    },
    
    {
        title: "Viber Channel",
        description: "Chat with us on Viber",
        url: "https://invite.viber.com/?g2=AQBf9dTlRT4rr01Fq9IQU%2FHoNZb0biJ%2F8w6o8Nc%2FM58L9ArMtkvTAqy0a9pyo4vd",
        icon: "message-circle",
        featured: false,
        enabled: true
    },
{
        title: "Viber Community",
        description: "Join our Viber community group",
        url: "https://invite.viber.com/?g2=AQBmrHVQhW1BCkgowuUgKolXYEyTDCtBYMisrfDEuZITTyF8FJirUO125E66c%2BOg&lang=en",
        icon: "message-circle",
        featured: false,
        enabled: true
    },
    {
        title: "Facebook Page",
        description: "Follow us on Facebook",
        url: "https://web.facebook.com/kudahuvadhoo.mv",
        icon: "facebook",
        featured: false,
        enabled: true
    },
    {
        title: "Instagram",
        description: "Follow us on Instagram",
        url: "https://www.instagram.com/kudahuvadhoomv/",
        icon: "instagram",
        featured: false,
        enabled: true
    },
    {
        title: "YouTube",
        description: "Watch our videos",
        url: "https://www.youtube.com/@kudahuvadhoomv",
        icon: "youtube",
        featured: false,
        enabled: true
    },
    {
        title: "TikTok",
        description: "Watch our TikTok videos",
        url: "https://www.tiktok.com/@kudahuvadhoo.mv",
        icon: "tiktok",
        featured: false,
        enabled: true
    },
    {
        title: "Telegram",
        description: "Join our Telegram channel",
        url: "https://t.me/kudahuvadhoomv",
        icon: "telegram",
        featured: false,
        enabled: true
    },
    {
        title: "X / Twitter",
        description: "Follow us on X",
        url: "https://x.com/kudahuvadhoomv",
        icon: "twitter",
        featured: false,
        enabled: true
    },
    
    {
        title: "Facebook Group",
        description: "Join our community group",
        url: "https://web.facebook.com/groups/kudahuvadhoo.mv",
        icon: "users",
        featured: false,
        enabled: true
    },
   
   
    {
        title: "Media Kit",
        description: "Statistics, reach & ad rates",
        url: "mediakit.html",
        icon: "link",
        featured: true,
        enabled: true
    }
];

if (typeof renderLinks === 'function') {
    renderLinks();
}
