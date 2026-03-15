/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0f0f0e",
          2: "#161614",
          3: "#1e1e1b",
        },
        border: {
          dim: "rgba(255,255,255,0.07)",
          DEFAULT: "rgba(255,255,255,0.13)",
        },
        ink: {
          1: "#f0ede6",
          2: "#9b9891",
          3: "#5c5a56",
        },
        teal: {
          DEFAULT: "#4ecba4",
          dim: "rgba(78,203,164,0.12)",
        },
        amber: {
          DEFAULT: "#d4a24e",
          dim: "rgba(212,162,78,0.12)",
        },
        purple: {
          DEFAULT: "#9b8ce8",
          dim: "rgba(155,140,232,0.12)",
        },
        coral: {
          DEFAULT: "#d4715e",
          dim: "rgba(212,113,94,0.12)",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
        sans: ['"IBM Plex Sans"', "sans-serif"],
      },
    },
  },
  safelist: ["text-teal", "text-purple", "text-amber", "text-coral"],
  plugins: [],
};
