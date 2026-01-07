# @wegora/design-system

Wegora Design System - Style guides and component library for the Wegora application ecosystem.

## Installation

```bash
npm install @wegora/design-system --registry=https://npm.pkg.github.com
```

### Authentication

Create a `.npmrc` file in your project root:

```
@wegora:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Usage

### Import Everything

```typescript
import {
  COLORS,
  TYPOGRAPHY,
  ICONS,
  ILLUSTRATIONS,
  CTA,
  CHIPS,
  DIVIDERS,
} from '@wegora/design-system';
```

### Import Specific Modules

```typescript
// Hub/Marketing styles
import { COLORS, TYPOGRAPHY, ILLUSTRATIONS } from '@wegora/design-system/hub';

// App/Cockpit styles
import { COLORS, STATUS_COLORS, GRID } from '@wegora/design-system/app';

// Component documentation
import { BUTTON, CARD, BADGE } from '@wegora/design-system/components';
```

## Modules

### Hub Style Guide (`/hub`)

Design tokens for marketing/public pages:

- `COLORS` - Blue (WEG), Teal (Eigentümer), Text greys, Accent
- `TEXT_USAGE` - Text hierarchy patterns
- `ICONS` - Phosphor Icons reference
- `LOGO` - WegoraLogo component documentation
- `TYPOGRAPHY` - Font sizes and styles
- `DIVIDERS` - Section separator patterns
- `CHIPS` - Badge/tag patterns
- `CTA` - Call-to-action button patterns
- `ILLUSTRATIONS` - SVG illustration guidelines and templates

### App Style Guide (`/app`)

Design tokens for cockpit/app components:

- `COLORS` - Mode-aware color system
- `STATUS_COLORS` - Status badge colors
- `BUDGET_COLORS` - Budget progress indicators
- `MODE_GRADIENTS` / `MODE_ACCENTS` - Mode-specific styling
- `ICONS` - App-specific icon reference
- `TYPOGRAPHY` - App typography
- `CARD` / `INFO_BAR` / `TASK_ITEM` - Component patterns
- `SPACING` / `GRID` - Layout utilities
- `ANIMATION` - Framer Motion presets

### Component Library (`/components`)

Documentation for reusable UI components:

- `BUTTON` - Button variants and usage
- `CARD` - Card component patterns
- `BADGE` - Status badges
- `DROPDOWN_MENU` - Dropdown menus
- `WEGORA_LOGO` - Logo component
- `HEADER` / `FOOTER` - Layout components
- `MODE_TOGGLE` - WEG/Eigentümer toggle
- `LOGIN_DROPDOWN` - Auth components
- `NAVIGATION` - Navigation patterns
- `HUB_LAYOUT` - Main layout wrapper

## Publishing

1. Update version in `package.json`
2. Build: `npm run build`
3. Publish: `npm publish`

## Development

```bash
# Install dependencies
npm install

# Build
npm run build
```
