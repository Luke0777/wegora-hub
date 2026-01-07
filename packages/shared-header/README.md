# @wegora/shared-header

Shared header component for Wegora web applications. Provides a consistent navigation header across all Wegora products.

## Installation

```bash
npm install @wegora/shared-header
```

## Setup

### 1. Add CSS Variables

Import the styles in your main CSS file:

```css
@import "@wegora/shared-header/styles.css";
```

Or import in your entry file:

```tsx
import "@wegora/shared-header/styles.css";
```

### 2. Configure Tailwind

Add the Wegora color tokens to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@wegora/shared-header/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
```

## Usage

### Basic Usage (Vanilla React)

```tsx
import { WegoraHeader } from "@wegora/shared-header";
import "@wegora/shared-header/styles.css";

function App() {
  return (
    <div>
      <WegoraHeader />
      <main className="pt-24">{/* Your content */}</main>
    </div>
  );
}
```

### With React Router

```tsx
import { WegoraHeader } from "@wegora/shared-header";
import { Link, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div>
      <WegoraHeader
        LinkComponent={Link}
        currentPath={location.pathname}
        ctaHref="/register"
        ctaText="Get Started"
      />
      <main className="pt-24">{/* Your routes */}</main>
    </div>
  );
}
```

### With Next.js

```tsx
import { WegoraHeader } from "@wegora/shared-header";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Create a wrapper for Next.js Link
const NextLink = ({ to, href, children, className }) => (
  <Link href={to || href} className={className}>
    {children}
  </Link>
);

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <div>
      <WegoraHeader LinkComponent={NextLink} currentPath={pathname} />
      <main className="pt-24">{children}</main>
    </div>
  );
}
```

### Custom Navigation Items

```tsx
import { WegoraHeader } from "@wegora/shared-header";
import { Sparkle, Book } from "@phosphor-icons/react";

function App() {
  return (
    <WegoraHeader
      navItems={[
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Docs", href: "/docs" },
      ]}
      angebotItems={[
        {
          label: "For Businesses",
          href: "/business",
          description: "Enterprise solutions",
          icon: <Sparkle className="h-4 w-4 text-weg-500" />,
          variant: "weg",
        },
        {
          label: "For Individuals",
          href: "/individual",
          description: "Personal accounts",
          icon: <Book className="h-4 w-4 text-owner-500" />,
          variant: "owner",
        },
      ]}
    />
  );
}
```

### Simplified Header (No Dropdown)

```tsx
import { WegoraHeader } from "@wegora/shared-header";

function App() {
  return (
    <WegoraHeader
      showAngebotDropdown={false}
      navItems={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
```

## Props

| Prop                 | Type                | Default             | Description                                          |
| -------------------- | ------------------- | ------------------- | ---------------------------------------------------- |
| `navItems`           | `NavItem[]`         | Vision, Über uns... | Navigation links                                     |
| `angebotItems`       | `DropdownNavItem[]` | WEG, Eigentümer     | Dropdown menu items                                  |
| `showAngebotDropdown`| `boolean`           | `true`              | Show/hide the "Unser Angebot" dropdown               |
| `ctaText`            | `string`            | "Jetzt registrieren"| Primary CTA button text                              |
| `ctaHref`            | `string`            | "/cockpit"          | Primary CTA button link                              |
| `showLogin`          | `boolean`           | `true`              | Show/hide the login dropdown                         |
| `className`          | `string`            | -                   | Additional CSS classes                               |
| `onLogoClick`        | `() => void`        | -                   | Logo click handler (overrides logoHref)              |
| `logoHref`           | `string`            | "/"                 | Logo link destination                                |
| `LinkComponent`      | `Component`         | `<a>`               | Custom link component (React Router, Next.js, etc.)  |
| `currentPath`        | `string`            | ""                  | Current URL path for active state                    |

## Individual Components

You can also import individual components for custom compositions:

```tsx
import {
  WegoraLogo,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  cn,
} from "@wegora/shared-header";

function CustomHeader() {
  return (
    <header>
      <WegoraLogo size="lg" dotContext="eigentuemer" />
      <Button variant="primary">Custom Button</Button>
    </header>
  );
}
```

## Logo Variants

```tsx
import { WegoraLogo } from "@wegora/shared-header";

// Horizontal (default)
<WegoraLogo variant="horizontal" size="md" />

// Stacked
<WegoraLogo variant="stacked" size="lg" />

// Icon only
<WegoraLogo variant="icon-only" size="sm" />

// With context dot
<WegoraLogo dotContext="weg" />        // Blue dot
<WegoraLogo dotContext="eigentuemer" /> // Teal dot
<WegoraLogo dotContext="none" />        // No dot

// Color modes
<WegoraLogo colorMode="default" />     // Full color
<WegoraLogo colorMode="monochrome" />  // Uses currentColor
<WegoraLogo colorMode="white" />       // White (for dark backgrounds)
```
