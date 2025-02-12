import { defineConfig } from "vitepress";

export const shared = defineConfig({
    rewrites: {
        "en/:rest*": ":rest*",
    },

    markdown: {
        math: true,
    },

    head: [["link", { rel: "icon", type: "image/png", href: "/logo_64x64.png" }]],

    themeConfig: {
        logo: "/logo_64x64.png",

        socialLinks: [
            { icon: "github", link: "https://github.com/eyes-on-disabilities" },
            { icon: "discord", link: "https://discord.gg/wqYUgdBDam" },
            { icon: "mastodon", link: "https://cccwi.social/@eyes_on_disabilities" },
        ],

        lastUpdated: {
            text: "Zuletzt aktualisiert",
            formatOptions: {
                dateStyle: "medium",
                timeStyle: "short",
                hourCycle: "h24",
            },
        },
    },
});
