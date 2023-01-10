# \<PersonCard />

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

- To promote an individual (i.e. ambassador)

## Guidelines

- [UX writing guidelines](#ux-writing-guidelines)

## Figma properties

| Name          | Type      | Description                                                                                                     |
| ------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| `surface`     | `variant` | Display component on `light` or `strong` backgrounds. **Options:** `light`, `strong-faint` **Default:** `light` |
| `description` | `text`    |                                                                                                                 |

## Nested components

- \<\_Card / Badges />
- \<\_Card / NameLocation />
- \<\_Card / Thumbnail />

## States

- `enabled`
- `hover`
- `active`
- `focus`

## UX writing guidelines

- Target a readability grade level score of 8 to meet plain language guidelines.

**Character limits**

| Content       | Minimum | Maximum |
| ------------- | ------- | ------- |
| `description` |         | 170     |

## Changelog

### Jan 10, 2023

- Updated design documentation

## Where used

- [\<FacetedSearch />](/components/faceted-search)

## Resources

### Design

- [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=1177%3A4800)

### Engineering

- [Swingset](https://react-components.vercel.app/components/card)
