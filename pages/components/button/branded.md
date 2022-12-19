# Button / Branded

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

- To link to [hashicorp.com](https://www.hashicorp.com) product pages (i.e. [Terraform product page](https://www.hashicorp.com/products/terraform))

---

## Rules

None

## Figma properties

| Name      | Type      | Description                                                                                                                                                 |
| --------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`    | `variant` | Display component on `page` backgrounds. **Options:** `light` or `strong`                                                                                   |
| `state`   | `variant` | Toggle between `enabled` and `disabled` states. **Default:** `enabled`                                                                                      |
| `product` | `variant` | Render product themed button. **Options:** `boundary`, `consul`, `nomad`, `packer`, `terraform`, `vagrant`, `vault`, and `waypoint` **Default:** `boundary` |

## States

- `enabled`
- `hover`
- `active`
- `focus`
- `disabled`

## UX writing guidelines

Not applicable

## Changelog

### Dec 6, 2022

- Added states for all buttons
- Standardized borders colors and focus rings
- Updated design documentation

### Oct 28, 2022

- Moved nested Figma component from ProductsUsed pattern to Components
- Updated `appearance` to `page`
- Reduced border width to 1px

## Links

### Design

- Figma
- [Documentation](https://hashicorp-wpl-documentation.vercel.app/components/button/branded)

### Engineering

- ~~Swingset~~
