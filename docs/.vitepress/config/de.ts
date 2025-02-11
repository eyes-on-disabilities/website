import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export const de = defineConfig({
    lang: 'de-DE',
    title: "Eyes on (Dis)Abilities",
    description: "Günstige Eye-Tracking-Lösungen für mehr Teilhabe",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: "/logo_64x64.png",

        nav: [
            { text: "Jetzt loslegen", link: "/de/01-einfuehrung/01-willkommen" },
            { text: "Kontakt", link: "/de/06-sonstiges/kontakt" },
            { text: "Spenden", link: "/de/06-sonstiges/spenden" },
            { text: "Impressum", link: "/de/06-sonstiges/impressum" },
            { text: "Datenschutz", link: "/de/06-sonstiges/datenschutz" },
        ],

        sidebar: [
            {
                text: "Einführung",
                items: [
                    { text: "Willkommen", link: "/de/01-einfuehrung/01-willkommen" },
                    {
                        text: "Was dich erwartet",
                        link: "/de/01-einfuehrung/02-was-dich-erwartet",
                    },
                ],
            },
            {
                text: "Grundlagenwissen",
                items: [
                    {
                        text: "ALS und Motoneuron-Krankheiten",
                        link: "/de/02-grundlagenwissen/01-motoneuron-krankheiten",
                    },
                    {
                        text: "Eye-Tracking: Was ist das?",
                        link: "/de/02-grundlagenwissen/02-eye-tracking-was-ist-das",
                    },
                ],
            },
            {
                text: "Der Eye-Tracking-Guide",
                items: [
                    { text: "Einführung", link: "/de/03-der-eye-tracking-guide/01-einfuehrung" },
                    {
                        text: "Kommunikationstafeln",
                        link: "/de/03-der-eye-tracking-guide/02-kommunikationstafeln",
                    },
                    {
                        text: "Smartphone",
                        link: "/de/03-der-eye-tracking-guide/03-smartphone",
                    },
                    { text: "Webcam", link: "/de/03-der-eye-tracking-guide/04-webcam" },
                    {
                        text: "Eye-Tracking-Brille",
                        link: "/de/03-der-eye-tracking-guide/05-eye-tracking-brille",
                    },
                    { text: "Produkte", link: "/de/03-der-eye-tracking-guide/06-produkte" },
                ],
            },
            {
                text: "Software und Hardware im Detail",
                items: [
                    {
                        text: "AITrack",
                        link: "/de/04-software-und-hardware-im-detail/aitrack",
                    },
                    {
                        text: "Beam Eye-Tracker",
                        link: "/de/04-software-und-hardware-im-detail/beam",
                    },
                    {
                        text: "EyeTrackVR",
                        link: "/de/04-software-und-hardware-im-detail/eyetrackvr",
                    },
                    {
                        text: "Miranda",
                        link: "/de/04-software-und-hardware-im-detail/miranda",
                    },
                    {
                        text: "Opentrack",
                        link: "/de/04-software-und-hardware-im-detail/opentrack",
                    },
                    {
                        text: "OptiKey",
                        link: "/de/04-software-und-hardware-im-detail/optikey",
                    },
                    { text: "Pupil", link: "/de/04-software-und-hardware-im-detail/pupil" },
                ],
            },
            {
                text: "Weiteres zu Eye-Tracking-Themen",
                items: [
                    {
                        text: "Firmen, Spiele, Foren",
                        link: "/de/05-weiteres-zu-eye-tracking-themen/firmen-spiele-foren",
                    },
                ],
            },
            {
                text: "Sonstiges",
                items: [
                    { text: "Über uns", link: "/de/06-sonstiges/ueber-uns" },
                    { text: "Kontakt", link: "/de/06-sonstiges/kontakt" },
                    { text: "Presse", link: "/de/06-sonstiges/presse" },
                    { text: "Spenden", link: "/de/06-sonstiges/spenden" },
                    { text: "Impressum", link: "/de/06-sonstiges/impressum" },
                    { text: "Datenschutz", link: "/de/06-sonstiges/datenschutz" },
                ],
            },
            {
                text: "Development & Wiki",
                collapsed: true,
                items: [
                    { text: "Einführung", link: "/de/07-wiki/einfuehrung" },
                    {
                        text: "Sicherheit bei Infrarotstrahlen",
                        link: "/de/07-wiki/infrarot-sicherheit",
                    },
                ],
            },
        ],

        outline: {
            label: "Abschnitte",
        },

        socialLinks: [
            { icon: "codeberg", link: "https://codeberg.org/eyes-on-disabilities" },
            { icon: "github", link: "https://github.com/eyes-on-disabilities" },
            { icon: "discord", link: "https://discord.gg/wqYUgdBDam" },
            { icon: "mastodon", link: "https://cccwi.social/@eyes_on_disabilities" },
        ],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2019-present Evan You",
        },

        lastUpdated: {
            text: "Zuletzt aktualisiert",
            formatOptions: {
                dateStyle: "medium",
                timeStyle: "short",
                hourCycle: "h24",
            },
        },

        docFooter: {
            prev: "Vorige Kapitel",
            next: "Nächste Kapitel",
        },

        darkModeSwitchLabel: "Design",
        lightModeSwitchTitle: "Zum hellen Design wechseln",
        darkModeSwitchTitle: "Zum dunklen Design wechseln",
        sidebarMenuLabel: "Kapitel",
        returnToTopLabel: "Zum Kapitelanfang",
        langMenuLabel: "Sprache ändern",
    },
});
