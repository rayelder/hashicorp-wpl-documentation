# \<Badge />

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

- To label items using 1-2 words

## Guidelines

- [UX writing guidelines](#ux-writing-guidelines)

## Figma properties

| Name          | Type      | Description                                                                                                                                                                     |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`        | `variant` | Render Figma component on light or strong backgrounds. **Options:** `light`, `faint`, `strong`, `strong-faint`, `action`, `action-faint`, **Default:** `light`                  |
| `theme`       | `variant` | Render themed Figma component. **Options:** `action`, `neutral`, `boundary`, `consul`, `nomad`, `packer`, `terraform`, `vagrant`, `vault`, and `waypoint` **Default:** `action` |
| `isSecondary` | `boolean` | Toggle between primary and secondary variants [\<Badge />](/components/badge) component                                                                                         |

## States

Not interactive

## UX writing guidelines

- Only use 1 to 2 words for `text`
- Use [Title case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case) for `heading` and `subtitle` text
- Target a readability grade level score of 8 to meet plain language guidelines.

**Character limits**

| Content | Minimum | Maximum |
| ------- | ------- | ------- |
| `text`  |         | 15      |

**Nested components:**

- [\<Badge />](/components/badge)
- [\<StandaloneLink />](/components/standalone-link)

## Changelog

### Jan 10, 2023

- Updated design documentation

## Where used

- [\<Card />](/components/card)
- [\<Tile />](/components/tile)

## Resources

### Design

- [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=1361%3A6862)

### Engineering

- [\<Badge />](https://react-components.vercel.app/components/badge)
- [\<ProductBadge />](https://react-components.vercel.app/components/productbadge)
