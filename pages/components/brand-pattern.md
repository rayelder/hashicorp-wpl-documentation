# \<BrandPattern />

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

To render an optimized SVG brand pattern across breakpoints

---

## Rules

- SVG should be pinned top right for large and medium breakpoints
- For now, SVG should be hidden on small breakpoints

## Figma properties

| Name     | Type      | Description                                                           |
| -------- | --------- | --------------------------------------------------------------------- |
| `theme`  | `variant` | Selected theme. Options: `action` and `neutral`. Default is `action`. |
| `isTall` | `boolean` | Toggle between `tall` and `short` variants. Default is `tall`.        |

## States

Not applicable.

## UX writing guidelines

Not applicable.

## Changelog

### Dec 19, 2022

- Updated design documentation

### Dec 16, 2022

- Added `theme` background gradients requested by Dylan Staley

### Nov 7, 2022

- Documented component
- Created large breakpoint for corporate action and neutral themes (tall and short variants)

## Where used

None

## Links

### Design

- [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=2303%3A11771)
- [Documentation](/components/brand-pattern)

### Engineering

- ~~Swingset~~
