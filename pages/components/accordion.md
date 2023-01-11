# \<Accordion />

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

- To display a collapsible list of titled content

## Guidelines

- [UX writing guidelines](#ux-writing-guidelines)

## Figma properties

| Name            | Type      | Description                                                                                                               |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| `breakpoint`    | `variant` | Render component for correct breakpoint. **Options:** `small`, `medium`, and `large`. **Default:** `small`                |
| `title`         | `text`    |                                                                                                                           |
| `showTabs`      | `boolean` | Show or hide [\<Tabs />](/components/tabs) component                                                                      |
| `showBorderTop` | `boolean` | Show or hide `border-top` of the first \<AccordionItem />. Only show if [\<Tabs />](/components/tabs) component is hidden |

## States

- \<AccordionItem /> has `isCollapsed` property to open and close the content section

## UX writing guidelines

- Use [Title case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case) for `title` text
- Target a readability grade level score of 8 to meet plain language guidelines.

**Character limits**

| Content | Minimum | Maximum |
| ------- | ------- | ------- |
| `title` |         | 50      |

**Nested components:**

- \<AccordionItem />

## Changelog

### Jan 10, 2023

- Added `breakpoint:  medium`
- Replaced `arrow-down` [Flight icon](https://flight-hashicorp.vercel.app/) with `chevron-down`
- Replaced `arrow-up` [Flight icon](https://flight-hashicorp.vercel.app/) with `chevron-up`
- Updated colors
- Created design documentation

## Where used

TBD

## Resources

### Design

- [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=1361%3A6862)

### Engineering

- [\<Swingset />](https://react-components.vercel.app/components/accordion)
