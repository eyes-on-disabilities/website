import { defineConfig } from "vitepress";
import { shared } from "./shared";
import { de } from "./de";
import { en } from "./en";

export default defineConfig({
    ...shared,
    locales: {
        root: { label: "English", ...en },
        de: { label: "Deutsch", ...de },
    },
});
