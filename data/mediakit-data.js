/* ============================================================
   KO Media Kit Data
   ============================================================
   Edit this file to update statistics and ad slot pricing.
   ============================================================ */

const mediakitData = {
    brand: {
        name: "Kudahuvadhoo Online",
        shortName: "KO",
        tagline: "Your Island. Your News. Your Voice.",
        url: "https://kudahuvadhoo.mv",
        logoWhite: "./assets/logo-white.png",
        lastUpdated: "September 2026"
    },
    stats: [
        {
            label: "Page Views",
            value: "2K",
            icon: "eye",
            colorVar: "--orange",
            description: "Monthly page views"
        },
        {
            label: "Users",
            value: "500+",
            icon: "users",
            colorVar: "--teal",
            description: "Active monthly users"
        },
        {
            label: "Bounce Rate",
            value: "12%",
            icon: "trending-down",
            colorVar: "--pink",
            description: "Low bounce rate"
        },
        {
            label: "Top Category",
            value: "/sports",
            icon: "folder",
            colorVar: "--navy",
            description: "Most visited section"
        },
        {
            label: "Facebook Fans",
            value: "1.4K",
            icon: "facebook-stat",
            colorVar: "--facebook",
            description: "Facebook page Views"
        },
        {
            label: "Twitter Reach",
            value: "182",
            icon: "twitter",
            colorVar: "--twitter",
            description: "Monthly profile visitors"
        }
    ],
    adSlots: [
        {
            position: 1,
            name: "Home Top",
            detail: "Above the fold on homepage",
            price: "3000/-",
            colorVar: "--teal"
        },
        {
            position: 2,
            name: "Comment Top",
            detail: "Above first article comment",
            price: "2000/-",
            colorVar: "--navy"
        },
        {
            position: 3,
            name: "Section Top",
            detail: "Top of category pages",
            price: "3000/-",
            colorVar: "--orange"
        },
        {
            position: 4,
            name: "Sidebar Ad",
            detail: "Persistent sidebar placement",
            price: "2000/-",
            colorVar: "--pink"
        },
        {
            position: 5,
            name: "Article Top",
            detail: "Above article content",
            price: "3000/-",
            colorVar: "--gold"
        },
        {
            position: 6,
            name: "Sidebar Ad",
            detail: "Inside article sidebar",
            price: "2000/-",
            colorVar: "--navy"
        }
    ],
    contact: {
        email: "kudahuvadhoo.mv@gmail.com",
        phone: "+9607861051",
        note: "For advertising inquiries, sponsorship opportunities, or partnership discussions."
    },
    audience: [
        { platform: "facebook", label: "Facebook Followers", value: "4.6K", colorVar: "--facebook", icon: "facebook", brandColor: "#1877F2" },
        { platform: "facebook", label: "Facebook Members", value: "1.7k", colorVar: "--facebook", icon: "facebook", brandColor: "#1877F2" },
        { platform: "youtube", label: "YouTube Subscribers", value: "11", colorVar: "--red", icon: "youtube", brandColor: "#FF0000" },
        { platform: "viber", label: "Viber Community", value: "1.8K", colorVar: "--pink", icon: "viber", brandColor: "#7360f2" },
        { platform: "viber", label: "Viber Channel", value: "213", colorVar: "--pink", icon: "viber", brandColor: "#7360f2" },
        { platform: "x", label: "X / Twitter Followers", value: "246", colorVar: "--cyan", icon: "twitter", brandColor: "#000000" },
        { platform: "telegram", label: "Telegram Subscribers", value: "3", colorVar: "--navy", icon: "telegram", brandColor: "#0088cc" },
        { platform: "instagram", label: "Instagram Followers", value: "393", colorVar: "--orange", icon: "instagram", brandColor: "#E4405F" },
        { platform: "tiktok", label: "TikTok Followers", value: "4", colorVar: "--navy", icon: "tiktok", brandColor: "#000000" }
    ]
};

/* Icon map for mediakit */
const mediakitIcons = {
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    'trending-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    'facebook-stat': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>',
    viber: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.28 8.28 0 0 0 4.76 1.52V6.93a4.85 4.85 0 0 1-1-.03z"/></svg>'
};

