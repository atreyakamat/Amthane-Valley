import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.75rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        forest: "var(--forest-green)",
        "forest-soft": "var(--forest-green-soft)",
        "forest-muted": "var(--forest-green-muted)",
        coconut: "var(--coconut-brown)",
        "coconut-soft": "var(--coconut-brown-soft)",
        cream: "var(--cream-white)",
        "cream-soft": "var(--cream-white-soft)",
        aqua: "var(--aqua-blue)",
        "deep-aqua": "var(--deep-aqua)",
        "sunlit-sand": "var(--sunlit-sand)",
        "twilight-green": "var(--twilight-green)",
        // Additional colors for the new design
        "background-light": "#f6f8f6",
        "background-dark": "#112111",
      },
      fontFamily: {
        sans: "var(--font-body)",
        heading: "var(--font-heading)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        leaf: "var(--shadow-leaf)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(12, 26, 20, 0.68) 0%, rgba(12, 26, 20, 0.45) 40%, rgba(12, 26, 20, 0.25) 70%, rgba(12, 26, 20, 0.7) 100%)",
        leafy:
          "radial-gradient(circle at 20% 20%, rgba(137, 207, 240, 0.12), transparent 55%), radial-gradient(circle at 80% 0%, rgba(28, 59, 42, 0.12), transparent 58%)",
        grain: "url('/assets/textures/grain.png')",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      transitionTimingFunction: {
        "gentle-spring": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "float-up": {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "leaf-sway": {
          "0%, 100%": { transform: "rotate(-1.5deg) translateY(0)" },
          "50%": { transform: "rotate(1.5deg) translateY(-4px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200%" },
          "100%": { backgroundPosition: "200%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "float-up": "float-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "leaf-sway": "leaf-sway 6s ease-in-out infinite",
        shimmer:
          "shimmer 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite, fade-in 0.3s ease-out forwards",
        "fade-in": "fade-in 0.35s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
