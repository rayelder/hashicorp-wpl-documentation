Updated: Dec 6, 2022

Status: **[Work-in-progress](https://hashicorp-wpl-documentation.vercel.app/guides/can-i-use#work-in-progress)**

---

# Button / Github

## Purpose

- To link to Github repositories
- To showcase Github stars as social proof of community adoption

---

## Rules

- Always show GitHub star count on .io domains

## Figma props

| Name        | Type      | Description                                                               |
| ----------- | --------- | ------------------------------------------------------------------------- |
| `page`      | `variant` | Display component on `page` backgrounds. **Options:** `light` or `strong` |
| `showCount` | `boolean` | Show and hide Github star count. Default is `True`                        |
| `count`     | `text`    | Github star count number without formatting                               |

## States

- `Enabled`
- `Hover`
- `Active`
- `Focus`

## UX writing guidelines

Not applicable.

## Changelog

### Dec 6, 2022

- Added states for all buttons
- Standardized borders colors and focus rings
- Updated design documentation

### Oct 24, 2022

- Combined with [primary](https://hashicorp-wpl-documentation.vercel.app/components/button/primary) and [secondary](https://hashicorp-wpl-documentation.vercel.app/components/button/secondary) buttons
- Updated `appearance` to `page`
- Applied semantic design tokens

### Sep 8, 2022

- Updated design to match current [Button](https://hashicorp-wpl-documentation.vercel.app/components/button) implementation
- Added `appearance` for `light` and `dark`

## Links

### Design

- Figma
- [Documentation](https://hashicorp-wpl-documentation.vercel.app/components/button/github)

### Engineering

- ~~Swingset~~
