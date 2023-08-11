/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: "#2e3254",
        gray: {
          "100": "#929292",
          "200": "#1d2641",
          "300": "#19243f",
          "400": "#1e2136",
          "500": "#131e38",
          "600": "#090c15",
        },
        white: "#fff",
        mediumseagreen: {
          "100": "#3dd39d",
          "200": "#21d695",
        },
        lightgray: "#d0d0d0", 
        lightslategray: "#818bac",
        silver: "#c4c4c4",
      },
      fontFamily: {
        "gotham-pro": "'Gotham Pro'",
        "open-sans": "'Open Sans'",
        "gotham-pro-narrow": "'Gotham Pro Narrow'",
      },
      borderRadius: {
        mini: "15px",
        "3xs": "10px",
        "10xs-9": "2.9px",
        "smi-6": "12.6px",
        "smi-3": "12.3px",
      },
    },
    fontSize: {
      "5xs": "8px",
      "5xs-3": "7.3px",
      "4xs-6": "8.6px",
      "2xs-1": "10.1px",
      "3xs-8": "9.8px",
      "xs-8": "11.8px",
      "3xs": "10px",
      smi: "13px",
      xs: "12px",
      "2xs": "11px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
