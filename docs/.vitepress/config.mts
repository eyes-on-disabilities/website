import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Eyes on (Dis)Abilities",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Jetzt loslegen", link: "/01-einfuerung/01-willkommen" },
            { text: "Kontakt", link: "/06-sonstiges/kontakt" },
            { text: "Spenden", link: "/06-sonstiges/spenden" },
            { text: "Impressum", link: "/06-sonstiges/impressum" },
        ],

        sidebar: [
            {
                text: "Einführung",
                items: [
                    { text: "Willkommen", link: "/01-einfuerung/01-willkommen" },
                    {
                        text: "Was dich erwartet",
                        link: "/01-einfuerung/02-was-dich-erwartet",
                    },
                ],
            },
            {
                text: "Grundlagenwissen",
                items: [
                    {
                        text: "ALS und Motoneuron-Krankheiten",
                        link: "/02-grundlagenwissen/01-motoneuron-krankheiten",
                    },
                    {
                        text: "Eye-Tracking: Was ist das?",
                        link: "/02-grundlagenwissen/02-eye-tracking-was-ist-das",
                    },
                ],
            },
            {
                text: "Der Eye-Tracking-Guide",
                items: [
                    { text: "Einstieg", link: "/03-der-eye-tracking-guide/01-einstieg" },
                    {
                        text: "Kommunikationstafeln",
                        link: "/03-der-eye-tracking-guide/02-kommunikationstafeln",
                    },
                    {
                        text: "Smartphone",
                        link: "/03-der-eye-tracking-guide/03-smartphone",
                    },
                    { text: "Webcam", link: "/03-der-eye-tracking-guide/04-webcam" },
                    {
                        text: "Eye-Tracking-Brille",
                        link: "/03-der-eye-tracking-guide/05-eye-tracking-brille",
                    },
                    { text: "Produkte", link: "/03-der-eye-tracking-guide/06-produkte" },
                ],
            },
            {
                text: "Software und Hardware im Detail",
                items: [
                    { text: "bla", link: "/04-software-und-hardware-im-detail/bla" },
                ],
            },
            {
                text: "Weiteres zu Eye-Tracking-Themen",
                items: [
                    { text: "Firmen, Spiele, Foren", link: "/05-weiteres-zu-eye-tracking-themen/firmen-spiele-foren" },
                ],
            },
            {
                text: "Sonstiges",
                items: [
                    { text: "Über uns", link: "/06-sonstiges/ueber-uns" },
                    { text: "Kontakt", link: "/06-sonstiges/kontakt" },
                    { text: "Presse", link: "/06-sonstiges/presse" },
                    { text: "Spenden", link: "/06-sonstiges/spenden" },
                    { text: "Impressum", link: "/06-sonstiges/impressum" },
                ],
            },
        ],

        socialLinks: [
            { icon: "codeberg", link: "https://codeberg.org/eyes-on-disabilities" },
            { icon: "github", link: "https://github.com/eyes-on-disabilities" },
            { icon: "discord", link: "https://discord.gg/wqYUgdBDam" },
            { icon: "mastodon", link: "https://cccwi.social/@eyes_on_disabilities" },
        ],

        docFooter: {
            prev: "Vorige Seite",
            next: "Nächste Seite",
        },
    },
});
