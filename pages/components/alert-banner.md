Version 1.0.0



---

# AlertBanner

## Purpose

To announce an event or product release



---

## Rules

* TBD

## Props

| Name | Type | Description |
|----|----|----|
| `product` | string | A lower-case product identifier to pull in respective theme colors. The default is `neutral` `neutral/100` color. Options: `neutral`, `boundary`, `consul`, `nomad`, `packer`, `terraform`, `vault`, `vagrant`, `waypoint` |
| `tag` | string | Tag text before divider |
| `text` | string | Message text after divider |
| `linkText` | string | Link text for call-to-action |

## States

Not applicable

## UX writing guidelines

* TBD


**Character limits**

| Content | Minimum | Maximum |
|----|----|----|
| `tag` | TBD | TBD |
| `text` | TBD | TBD |
| `linkText` | TBD | TBD |

## Changelog

### Sep 6, 2022

* Created and published Figma component based on current Swingset implementation
* Nested [CloseButton](https://hashicorp-wpl-documentation.vercel.app/components/close-button)

## Links

* [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=2749%3A11517)
* [Design documentation](https://hashicorp-wpl-documentation.vercel.app/components/alert-banner)
* [Swingset](https://react-components.vercel.app/components/alertbanner)


