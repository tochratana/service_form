/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "header-1": "38px", // Main headings (e.g., <h1>)
        "header-2": "32px", // Secondary headings (e.g., <h2>)
        "header-3": "28px", // Tertiary headings (e.g., <h3>)
        "header-4": "24px", // Subheadings (e.g., <h4>)
        "header-5": "20px", // Smaller headings (e.g., <h5>)
        "header-6": "18px", // Smallest headings (e.g., <h6>)
        subheader: "16px", // Subheaders or important text
        "body-large": "16px", // Large body text
        body: "14px", // Default body text
        "body-small": "12px", // Small body text
        caption: "10px", // Captions and fine print
        button: "14px", // Button text
        input: "14px", // Form input text
        label: "12px", // Form labels and small text
        comment: "12px", // Comments and minor text
        price: "16px", // Prices and important figures
        quote: "16px", // Quotes or highlighted text
        lead: "18px", // Lead paragraphs or emphasis
        desc: "14px", // Code snippets or monospaced text
        footer: "12px", // Footer text
      },
      fontFamily: {
        teko: ["Teko", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--amber-500)",
          50: "#fef8e4",
          100: "#fef1b9",
          200: "#fcd97f",
          300: "#fabc4a",
          400: "#f8a32c",
          500: "#f59e0b",
          600: "#e86b00",
          700: "#d35f00",
          800: "#b34800",
          900: "#9e3d00",
        },
        secondary: "#1F2937",
        semiBlue: {
          DEFAULT: "var(--blue-500)",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        white: "#ffffff",
        black: "#000000",
        grey: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#262626",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
