Status: **Work-in-progress**

---

# KeyBenefits

## Purpose

To promote product or solution key benefits

## Rules

- Must display at least 2 benefits
- Limit of 3 benefits

## Props

| Name         | Type      | Description                                                            |
| ------------ | --------- | ---------------------------------------------------------------------- |
| `appearance` | `string`  | Display on light or dark backgrounds. **Options:** “light”, “dark”     |
| `isVertical` | `boolean` | Toggle large breakpoint variant between stacked vertical or horizontal |

## States

- Not applicable

## UX writing guidelines

- Focus on writing keyword relevant display titles
- Target a readability grade level score of 8 to meet plain language guidelines

### Character limits

| Content       | Minimum | Maximum |
| ------------- | ------- | ------- |
| `heading`     | 50      | 70      |
| `description` | 120     | 140     |

[See character limits for Intro component](https://hashicorp-wpl-documentation.vercel.app/components/intro#ux-writing-guidelines)

## Changelog

### Aug 15, 2022

- Added `appearance` prop with “light” and “dark” variants
- Replaced `showCTA` prop with `isVertical`
- Created `_KeyBenefitsIcon` component for `KeyBenefits` and `KeyBenefitsWithImage` patterns

### Aug 9, 2022

- Refined breakpoints in preparation for adding image variant

## Links

- [Figma](https://www.figma.com/file/VvpEQaWhKQExx9QTWRyayd/branch/gLfWIxUdC56xS1M8z70kbE/Patterns?node-id=217%3A479)
- [Design documentation](https://hashicorp-wpl-documentation.vercel.app/patterns/key-benefits)
- ~~Swingset~~
