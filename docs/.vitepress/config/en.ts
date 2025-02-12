import { defineConfig } from "vitepress";

export const en = defineConfig({
    lang: "en-US",
    title: "Eyes on (Dis)Abilities",
    description: "Affordable eye-tracking solutions for more inclusion",
    themeConfig: {
        nav: [
            { text: "Get started", link: "/01-introduction/01-welcome" },
            { text: "Contact", link: "/06-miscellaneous/contact" },
            { text: "Donate", link: "/06-miscellaneous/donate" },
            { text: "Imprint", link: "/06-miscellaneous/imprint" },
            { text: "Privacy", link: "/06-miscellaneous/privacy" },
        ],

        sidebar: [
            {
                text: "Introduction",
                items: [
                    { text: "Welcome", link: "/01-introduction/01-welcome" },
                    {
                        text: "What to expect",
                        link: "/01-introduction/02-what-you-can-expect",
                    },
                ],
            },
            {
                text: "Basic Knowledge",
                items: [
                    {
                        text: "ALS and Motor Neuron Diseases",
                        link: "/02-basic-knowledge/01-motoneuron-diseases",
                    },
                    {
                        text: "Eye-Tracking: What is it?",
                        link: "/02-basic-knowledge/02-eye-tracking-what-is-this",
                    },
                ],
            },
            {
                text: "The Eye-Tracking Guide",
                items: [
                    {
                        text: "Introduction",
                        link: "/03-the-eye-tracking-guide/01-introduction",
                    },
                    {
                        text: "Communication Boards",
                        link: "/03-the-eye-tracking-guide/02-communication-boards",
                    },
                    {
                        text: "Smartphone",
                        link: "/03-the-eye-tracking-guide/03-smartphone",
                    },
                    { text: "Webcam", link: "/03-the-eye-tracking-guide/04-webcam" },
                    {
                        text: "Eye-Tracking Glasses",
                        link: "/03-the-eye-tracking-guide/05-eye-tracking-glasses",
                    },
                    {
                        text: "Products",
                        link: "/03-the-eye-tracking-guide/06-products",
                    },
                ],
            },
            {
                text: "Software and Hardware in Detail",
                items: [
                    {
                        text: "AITrack",
                        link: "/04-software-and-hardware-in-detail/aitrack",
                    },
                    {
                        text: "Beam Eye-Tracker",
                        link: "/04-software-and-hardware-in-detail/beam",
                    },
                    {
                        text: "EyeTrackVR",
                        link: "/04-software-and-hardware-in-detail/eyetrackvr",
                    },
                    {
                        text: "Miranda",
                        link: "/04-software-and-hardware-in-detail/miranda",
                    },
                    {
                        text: "Opentrack",
                        link: "/04-software-and-hardware-in-detail/opentrack",
                    },
                    {
                        text: "OptiKey",
                        link: "/04-software-and-hardware-in-detail/optikey",
                    },
                    {
                        text: "Pupil",
                        link: "/04-software-and-hardware-in-detail/pupil",
                    },
                ],
            },
            {
                text: "More Eye-Tracking Topics",
                items: [
                    {
                        text: "Companies, Games, Forums",
                        link: "/05-more-eye-tracking-topics/companies-games-forums",
                    },
                ],
            },
            {
                text: "Miscellaneous",
                items: [
                    { text: "About Us", link: "/06-miscellaneous/about-us" },
                    { text: "Contact", link: "/06-miscellaneous/contact" },
                    { text: "Press", link: "/06-miscellaneous/press" },
                    { text: "Donate", link: "/06-miscellaneous/donate" },
                    { text: "Imprint", link: "/06-miscellaneous/imprint" },
                    { text: "Privacy", link: "/06-miscellaneous/privacy" },
                ],
            },
            {
                text: "Development & Wiki",
                collapsed: true,
                items: [
                    { text: "Introduction", link: "/07-wiki/introduction" },
                    {
                        text: "Infrared Safety",
                        link: "/07-wiki/infrared-safety",
                    },
                ],
            },
        ],

        outline: {
            label: "Sections",
        },

        footer: {
            message: "Made with <3 by",
            copyright: "© IFB-Stiftung",
        },

        docFooter: {
            prev: "Previous Chapter",
            next: "Next Chapter",
        },

        darkModeSwitchLabel: "Theme",
        lightModeSwitchTitle: "Switch to light theme",
        darkModeSwitchTitle: "Switch to dark theme",
        sidebarMenuLabel: "Chapters",
        returnToTopLabel: "Back to top",
        langMenuLabel: "Change language",
    },
});
