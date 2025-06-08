import DefaultTheme from "vitepress/theme";
import CustomLayouts from "./CustomLayouts.vue";
import "./custom.css";

export default {
    extends: DefaultTheme,
    // override the Layout with a wrapper component that
    // injects the slots
    Layout: CustomLayouts,
};
