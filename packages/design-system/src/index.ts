/**
 * Wegora Design System
 *
 * This package contains design tokens, style guides, and component documentation
 * for the Wegora application ecosystem.
 *
 * @packageDocumentation
 */

// Hub/Marketing Style Guide - namespaced to avoid conflicts
export * as Hub from './hub-styleguide';

// App/Cockpit Style Guide - namespaced to avoid conflicts
export * as App from './app-styleguide';

// Component Library Documentation - namespaced to avoid conflicts
export * as Components from './component-library';

// Re-export individual items with prefixes for flat imports
export {
  COLORS as HUB_COLORS,
  TEXT_USAGE,
  ICONS as HUB_ICONS,
  LOGO,
  CARD_STATES,
  TYPOGRAPHY as HUB_TYPOGRAPHY,
  DIVIDERS,
  CHIPS,
  CTA,
  ILLUSTRATIONS,
  ILLUSTRATION_TEMPLATE,
  FLOW_DIAGRAM_TEMPLATE,
} from './hub-styleguide';

export {
  COLORS as APP_COLORS,
  STATUS_COLORS,
  BUDGET_COLORS,
  MODE_GRADIENTS,
  MODE_ACCENTS,
  ICONS as APP_ICONS,
  TYPOGRAPHY as APP_TYPOGRAPHY,
  CARD as APP_CARD,
  INFO_BAR,
  TASK_ITEM,
  FINANCIAL_CARD,
  PROGRESS_BAR,
  SPACING,
  GRID,
  ANIMATION,
  INTERACTION,
  BORDER,
  getStatusColor,
  getStatusLabel,
  getBudgetColor,
} from './app-styleguide';

export {
  BUTTON,
  CARD as CARD_COMPONENT,
  BADGE,
  DROPDOWN_MENU,
  WEGORA_LOGO,
  HEADER,
  FOOTER,
  MODE_TOGGLE,
  LOGIN_DROPDOWN,
  NAVIGATION,
  HUB_LAYOUT,
} from './component-library';
