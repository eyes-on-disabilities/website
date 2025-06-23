import { defineConfig } from "vitepress";

export const de = defineConfig({
    lang: "de-DE",
    title: "Eyes on (Dis)Abilities",
    description: "Günstige Eye-Tracking-Lösungen für mehr Teilhabe",
    themeConfig: {
        nav: [
            { text: "Jetzt loslegen", link: "/de/01-introduction/01-welcome" },
            { text: "Kontakt & Mitmachen", link: "/de/06-miscellaneous/contact" },
            { text: "Spenden", link: "/de/06-miscellaneous/donate" },
        ],

        sidebar: [
            {
                text: "Einführung",
                items: [
                    { text: "Willkommen", link: "/de/01-introduction/01-welcome" },
                    {
                        text: "Was dich erwartet",
                        link: "/de/01-introduction/02-what-you-can-expect",
                    },
                ],
            },
            {
                text: "Grundlagenwissen",
                items: [
                    {
                        text: "ALS und Motoneuron-Krankheiten",
                        link: "/de/02-basic-knowledge/01-motoneuron-diseases",
                    },
                    {
                        text: "Eye-Tracking: Was ist das?",
                        link: "/de/02-basic-knowledge/02-eye-tracking-what-is-this",
                    },
                ],
            },
            {
                text: "Der Eye-Tracking-Guide",
                items: [
                    {
                        text: "Einführung",
                        link: "/de/03-the-eye-tracking-guide/01-introduction",
                    },
                    {
                        text: "Kommunikationstafeln",
                        link: "/de/03-the-eye-tracking-guide/02-communication-boards",
                    },
                    {
                        text: "Smartphone",
                        link: "/de/03-the-eye-tracking-guide/03-smartphone",
                    },
                    { text: "Webcam", link: "/de/03-the-eye-tracking-guide/04-webcam" },
                    {
                        text: "Eye-Tracking-Brille",
                        link: "/de/03-the-eye-tracking-guide/05-eye-tracking-glasses",
                    },
                    {
                        text: "Produkte",
                        link: "/de/03-the-eye-tracking-guide/06-products",
                    },
                ],
            },
            {
                text: "Software und Hardware im Detail",
                items: [
                    {
                        text: "AITrack",
                        link: "/de/04-software-and-hardware-in-detail/aitrack",
                    },
                    {
                        text: "Beam Eye-Tracker",
                        link: "/de/04-software-and-hardware-in-detail/beam",
                    },
                    {
                        text: "EyeTrackVR",
                        link: "/de/04-software-and-hardware-in-detail/eyetrackvr",
                    },
                    {
                        text: "Miranda",
                        link: "/de/04-software-and-hardware-in-detail/miranda",
                    },
                    {
                        text: "Opentrack",
                        link: "/de/04-software-and-hardware-in-detail/opentrack",
                    },
                    {
                        text: "OptiKey",
                        link: "/de/04-software-and-hardware-in-detail/optikey",
                    },
                    {
                        text: "Pupil",
                        link: "/de/04-software-and-hardware-in-detail/pupil",
                    },
                ],
            },
            {
                text: "Weiteres zu Eye-Tracking-Themen",
                items: [
                    {
                        text: "Firmen, Spiele, Foren",
                        link: "/de/05-more-eye-tracking-topics/companies-games-forums",
                    },
                ],
            },
            {
                text: "Sonstiges",
                items: [
                    { text: "Über uns", link: "/de/06-miscellaneous/about-us" },
                    { text: "Kontakt", link: "/de/06-miscellaneous/contact" },
                    { text: "Presse", link: "/de/06-miscellaneous/press" },
                    { text: "Spenden", link: "/de/06-miscellaneous/donate" },
                    { text: "Impressum", link: "/de/06-miscellaneous/imprint" },
                    { text: "Datenschutz", link: "/de/06-miscellaneous/privacy" },
                ],
            },
            {
                text: "Development & Wiki",
                collapsed: true,
                items: [
                    { text: "Einführung", link: "/de/07-wiki/introduction" },
                    {
                        text: "Sicherheit bei Infrarotstrahlen",
                        link: "/de/07-wiki/infrared-safety",
                    },
                ],
            },
        ],

        outline: {
            label: "Abschnitte",
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
