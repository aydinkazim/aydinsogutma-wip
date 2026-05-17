export const translations = {
    tr: {
        nav: {
            brand: "AYDIN",
            brandSuffix: "SOĞUTMA",
        },
        hero: {
            badge: "YAPIM AŞAMASINDA",
            titleLine1: "GELECEĞİ",
            titleLine2: "SOĞUTUYORUZ",
            description: "Endüstriyel soğutma çözümlerinde devrim yaratıyoruz.",
            descriptionHighlight: "Akıllı, verimli ve sürdürülebilir",
            descriptionSuffix: "teknolojilerle tanışmaya hazırlanın.",
            cta: "E-posta Gönder",
            call: "Hemen Arayın",
            whatsapp: "WhatsApp'tan Yazın",
        },
        features: {
            card1: {
                title: "Akıllı Sistemler",
                description: "Yüksek verimlilik sağlayan optimizasyon ile maksimum enerji tasarrufu.",
            },
            card2: {
                title: "Güvenilir Servis",
                description: "7/24 kesintisiz teknik destek ve uzaktan izleme sistemleri.",
            },
        },
        footer: {
            copyright: "Aydın Soğutma made with 😻 by",
            rights: "Tüm hakları saklıdır.", // Keeping this just in case, though the specific request was for the credit line
        },
    },
    en: {
        nav: {
            brand: "AYDIN",
            brandSuffix: "SOĞUTMA",
        },
        hero: {
            badge: "UNDER CONSTRUCTION",
            titleLine1: "COOLING",
            titleLine2: "THE FUTURE",
            description: "Revolutionizing industrial cooling solutions.",
            descriptionHighlight: "Smart, efficient, and sustainable",
            descriptionSuffix: "technologies are coming soon.",
            cta: "Send Email",
            call: "Call Now",
            whatsapp: "Chat on WhatsApp",
        },
        features: {
            card1: {
                title: "Smart Systems",
                description: "Maximum energy savings with high-efficiency optimization.",
            },
            card2: {
                title: "Reliable Service",
                description: "24/7 uninterrupted technical support and remote monitoring systems.",
            },
        },
        footer: {
            copyright: "Aydın Soğutma made with 😻 by",
            rights: "All rights reserved.",
        },
    },
};

export type Language = 'tr' | 'en';
export type TranslationKey = keyof typeof translations.tr;
