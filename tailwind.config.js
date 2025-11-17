/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette principale - Charte graphique Plan B
        'red-dark': '#A41712',      // Rouge foncé - titres, prix, accents
        'gold': '#D1A84A',          // Jaune/Or vieilli - sous-titres, éléments décoratifs
        'parchment': '#E8D7A8',     // Beige parchemin - bannières, encarts
        'wood-dark': '#2E1F1A',     // Marron bois foncé - fond général
        'anthracite': '#1A1A1A',    // Noir/Gris anthracite - texte
        // Couleurs secondaires
        'basil': '#4A7A3C',         // Vert basilic
        'cheddar': '#CE7A32',       // Orange cheddar
        // Compatibilité avec l'ancien système
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#A41712",       // Rouge foncé comme couleur primaire
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#D1A84A",       // Or comme couleur secondaire
          foreground: "#2E1F1A",
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
          DEFAULT: "#D1A84A",
          foreground: "#2E1F1A",
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
      fontFamily: {
        'display': ['Bebas Neue', 'Playfair Display', 'serif'],  // Slab Serif pour titres
        'body': ['Montserrat', 'sans-serif'],                    // Sans-serif pour texte
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

