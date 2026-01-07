/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        weg: {
          DEFAULT: "hsl(var(--weg-500))",
          50: "hsl(var(--weg-50))",
          100: "hsl(var(--weg-100))",
          200: "hsl(var(--weg-200))",
          300: "hsl(var(--weg-300))",
          400: "hsl(var(--weg-400))",
          500: "hsl(var(--weg-500))",
          600: "hsl(var(--weg-600))",
          700: "hsl(var(--weg-700))",
          800: "hsl(var(--weg-800))",
          900: "hsl(var(--weg-900))",
        },
        owner: {
          DEFAULT: "hsl(var(--owner-500))",
          50: "hsl(var(--owner-50))",
          100: "hsl(var(--owner-100))",
          200: "hsl(var(--owner-200))",
          300: "hsl(var(--owner-300))",
          400: "hsl(var(--owner-400))",
          500: "hsl(var(--owner-500))",
          600: "hsl(var(--owner-600))",
          700: "hsl(var(--owner-700))",
          800: "hsl(var(--owner-800))",
          900: "hsl(var(--owner-900))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
