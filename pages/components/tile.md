# \<Tile />

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

- To highlight next desired interaction

## Guidelines

- TBD
- [UX writing guidelines](#ux-writing-guidelines)

## Figma properties

| Name           | Type      | Description                                                                                                                                                                     |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`         | `variant` | Render Figma component on light or strong backgrounds. **Options:** `light`, `strong`, **Default:** `light`                                                                     |
| `theme`        | `variant` | Render themed Figma component. **Options:** `action`, `neutral`, `boundary`, `consul`, `nomad`, `packer`, `terraform`, `vagrant`, `vault`, and `waypoint` **Default:** `action` |
| `showBadge`    | `boolean` | Show or hide [\<Badge />](/components/badge) component                                                                                                                          |
| `showSubtitle` | `boolean` | Show or hide subtitle text                                                                                                                                                      |

## States

- `enabled`
- `hover` uses scrim technique similar to \<Button />
- `active`
- `focus`

## UX writing guidelines

- Use [Title case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case) for `heading` and `subtitle` text
- Target a readability grade level score of 8 to meet plain language guidelines.

**Character limits**

| Content    | Minimum | Maximum |
| ---------- | ------- | ------- |
| `heading`  |         | 14      |
| `subtitle` |         | 25      |

**Nested components:**

- [\<Badge />](/components/badge)
- [\<StandaloneLink />](/components/standalone-link)

## Changelog

### Jan 9, 2023

- Updated design documentation

## Where used

- [\<NextSteps />](/components/next-steps)

## Resources

### Design

- [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=2819%3A11406)

### Engineering

- ~~Swingset~~
