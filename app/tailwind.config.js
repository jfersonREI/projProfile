/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      //rei
      "rei-blue-5": "#e5e9ed",
      "rei-blue-10": "#ccd3db",
      "rei-blue-20": "#b2bdc8",
      "rei-blue-30": "#99a7b7",
      "rei-blue-40": "#7f91a4",
      "rei-blue-50": "#667b92",
      "rei-blue-60": "#4d6581",
      "rei-blue-70": "#334f6e",
      "rei-blue-80": "#1a395c",
      "rei-blue-90": "#00234a",

      "rei-red-5": "#ffeceb",
      "rei-red-10": "#ffd9d8",
      "rei-red-20": "#fec6c4",
      "rei-red-30": "#feb4b1",
      "rei-red-40": "#fea19d",
      "rei-red-50": "#fe8e8a",
      "rei-red-60": "#fe7c77",
      "rei-red-70": "#fd6963",
      "rei-red-80": "#fd5650",
      "rei-red-90": "#fd433c",

      "rei-secondary-5": "#ecf9fc",
      "rei-secondary-10": "#d9f2f9",
      "rei-secondary-20": "#c6ecf6",
      "rei-secondary-30": "#b3e6f3",
      "rei-secondary-40": "#a0dff0",
      "rei-secondary-50": "#8ed9ee",
      "rei-secondary-60": "#7bd3eb",
      "rei-secondary-70": "#68cde8",
      "rei-secondary-80": "#55c6e5",
      "rei-secondary-90": "#42c0e2",

      "rei-lt-gray": "#f5f8fa",
      "rei-gray-5": "#eaeaea",
      "rei-gray-10": "#d8d8d8",
      "rei-gray-20": "#c6c6c6",
      "rei-gray-30": "#b4b4b4",
      "rei-gray-40": "#a2a2a2",
      "rei-gray-50": "#919191",
      "rei-gray-60": "#7f7f7f",
      "rei-gray-70": "#6d6d6d",
      "rei-gray-80": "#5b5b5b",
      "rei-gray-90": "#494949",

      "rei-green-5": "#e8f3f3",
      "rei-green-10": "#d2e8e8",
      "rei-green-20": "#bbdcdc",
      "rei-green-30": "#a5d1d1",
      "rei-green-40": "#8ec5c5",
      "rei-green-50": "#78baba",
      "rei-green-60": "#62afaf",
      "rei-green-70": "#4ba3a3",
      "rei-green-80": "#359898",
      "rei-green-90": "#1e8c8c",

      "rei-purple-5": "#f3f3f9",
      "rei-purple-10": "#e6e4ef",
      "rei-purple-20": "#d9d6e8",
      "rei-purple-30": "#ccc7e1",
      "rei-purple-40": "#bfb8d7",
      "rei-purple-50": "#b3aad1",
      "rei-purple-60": "#a49cc8",
      "rei-purple-70": "#968dc2",
      "rei-purple-80": "#8b7fb9",
      "rei-purple-90": "#7a6db2",
    },
    fontSize: {
      "11xl": "6.25rem", // 100px
      "10xl": "4.5rem", // 72px
      "9xl": "3.5rem", // 56px
      "8xl": "2.75rem", // 44px
      "7xl": "2.5rem", // 40px
      "6xl": "2rem", // 32px
      "5xl": "1.75rem", // 28px
      "4xl": "1.625rem", // 26px
      "3xl": "1.5rem", // 24px
      "2xl": "1.375rem", // 22px
      xl: "1.25rem", // 20px
      lg: "1.125rem", // 18px
      base: "1rem", // 16px
      sm: "0.875rem", // 14px
      xs: "0.8125rem", // 13px
    },
    fontFamily: {
      sans: ["Inter", "Arial", "sans-serif"],
      serif: ["Merriweather", "serif"],
      code: [
        "source-code-pro",
        "Menlo",
        "Monaco, Consolas",
        "Courier New",
        "monospace",
      ],
    },

    extend: {
      fontSize: {
        xxxs: "0.625rem", // 10px
        xxs: "0.75rem", // 12px
      },
      animation: {
        fadeIn: "fadeIn 500ms ease-in forwards",
        fadeOut: "fadeOut 500ms ease-out forwards",
        fadeInSlow: "fadeIn 1000ms ease-in forwards",
        fadeOutSlow: "fadeOut 1000ms ease-out forwards",
        scaleIn: "scaleIn 300ms ease-in forwards",
        rotate: "rotate 1s linear infinite",
      },
      boxShadow: {
        rei: "-4px 5px 60px 0 rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "100%": { opacity: 1 },
          "0%": { opacity: 0 },
        },
        scaleIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
