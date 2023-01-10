# \<BlogCard />

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

- To promote a blog post

## Guidelines

- [UX writing guidelines](#ux-writing-guidelines)

## Figma properties

| Name              | Type      | Description                                                                                                     |
| ----------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| `surface`         | `variant` | Display component on `light` or `strong` backgrounds. **Options:** `light`, `strong-faint` **Default:** `light` |
| `showThumbnail`   | `boolean` | Show or hide nested \<Thumbnail /> component. **Default:** `False`                                              |
| `title`           | `text`    |                                                                                                                 |
| `showDescription` | `boolean` | Show or hide `description` text                                                                                 |
| `description`     | `text`    |                                                                                                                 |

## Nested components

- \<\_Card / Badges />
- \<\_Card / MetaData />

## States

- `enabled`
- `hover`
- `active`
- `focus`

## UX writing guidelines

- Use [Title case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case) for `title` text
- Target a readability grade level score of 8 to meet plain language guidelines.

**Character limits**

| Content       | Minimum | Maximum |
| ------------- | ------- | ------- |
| `title`       |         | 130     |
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
