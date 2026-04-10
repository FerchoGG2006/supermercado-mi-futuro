/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "on-tertiary-fixed-variant": "#614000",
              "surface-container-highest": "#e4e2dd",
              "on-tertiary-fixed": "#281800",
              "on-secondary-fixed-variant": "#145131",
              "on-tertiary": "#ffffff",
              "secondary-fixed-dim": "#98d4ab",
              "inverse-surface": "#30312e",
              "secondary": "#306948",
              "secondary-container": "#b3f1c6",
              "outline-variant": "#bec9be",
              "tertiary-fixed-dim": "#ffba44",
              "primary": "#006036",
              "primary-container": "#1a7a4a",
              "surface-dim": "#dbdad5",
              "surface": "#fbf9f4",
              "on-secondary-container": "#366f4d",
              "inverse-primary": "#80d9a0",
              "on-secondary": "#ffffff",
              "on-error-container": "#93000a",
              "on-surface": "#1b1c19",
              "on-background": "#1b1c19",
              "surface-bright": "#fbf9f4",
              "surface-tint": "#006d3f",
              "on-primary": "#ffffff",
              "on-surface-variant": "#3f4941",
              "primary-fixed-dim": "#80d9a0",
              "on-primary-fixed-variant": "#00522e",
              "tertiary-fixed": "#ffddaf",
              "tertiary-container": "#906200",
              "on-secondary-fixed": "#002110",
              "surface-container-low": "#f5f3ee",
              "inverse-on-surface": "#f2f1ec",
              "on-primary-container": "#abffc6",
              "outline": "#6f7a70",
              "on-error": "#ffffff",
              "surface-variant": "#e4e2dd",
              "surface-container": "#f0eee9",
              "surface-container-lowest": "#ffffff",
              "secondary-fixed": "#b3f1c6",
              "background": "#fbf9f4",
              "error-container": "#ffdad6",
              "primary-fixed": "#9bf6ba",
              "error": "#ba1a1a",
              "on-primary-fixed": "#00210f",
              "tertiary": "#714b00",
              "surface-container-high": "#eae8e3",
              "on-tertiary-container": "#ffeacf"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "2xl": "1rem",
              "3xl": "1.5rem",
              "full": "9999px"
      },
      "fontFamily": {
              "headline": ["Manrope", "sans-serif"],
              "body": ["Inter", "sans-serif"],
              "label": ["Inter", "sans-serif"],
              "inter": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
