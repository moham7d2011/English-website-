import type { Config } from "tailwindcss";

/**
 * Design tokens. Use logical utilities (ms-*, me-*, ps-*, pe-*, start-*, end-*,
 * text-start, rounded-ss-*) instead of left/right so the layout stays RTL-correct.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Nile teal: main brand colour
        primary: {
          50: "#eefafa",
          100: "#d4f1f2",
          200: "#aae2e5",
          300: "#74cbd0",
          400: "#3fafb6",
          500: "#1f939b",
          600: "#14767f",
          700: "#115f67",
          800: "#124d54",
          900: "#123f45",
        },
        // Saffron: rewards, highlights, tips
        accent: {
          50: "#fffaeb",
          100: "#fff0c2",
          200: "#ffe08a",
          300: "#ffd45e",
          400: "#ffc72c",
          500: "#f5b000",
          600: "#c98a00",
        },
        ink: {
          DEFAULT: "#17262b",
          muted: "#4b5f66",
        },
        surface: {
          DEFAULT: "#f5f8f7",
          raised: "#ffffff",
        },
        danger: {
          DEFAULT: "#b3261e",
          soft: "#fdeceb",
        },
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
