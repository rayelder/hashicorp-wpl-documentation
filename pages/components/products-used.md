# \<ProductsUsed />

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

- To showcase products used in solutions
- Optional: To link to [hashicorp.com](https://www.hashicorp.com) product pages

---

## Rules

- TBD

## Figma properties

| Name            | Type      | Description                                                                                         |
| --------------- | --------- | --------------------------------------------------------------------------------------------------- |
| `page`          | `variant` | Display component on `page` backgrounds. **Options:** `light` or `strong`                           |
| `isInteractive` | `boolean` | Toggle [Branded button](/components/button/branded) from `enabled` to `disabled`. Default is `True` |
| `label`         | `text`    | Contextual label above buttons. Default is “Products used”                                          |

## States

- Not applicable
- Defined by [Branded button](/components/button/branded) variant

## UX writing guidelines

TBD

## Changelog

### Oct 28, 2022

- Replaced nested button component with [Branded button](/components/button/branded) component
- Updated `appearance` to `page`
- Updated `label` fill color

## Links

### Design

- [Figma](https://www.figma.com/file/VvpEQaWhKQExx9QTWRyayd/Patterns?node-id=677%3A4054)
- [Documentation](/components/button/branded)

### Engineering

- [Swingset](https://react-components.vercel.app/components/productsused)
