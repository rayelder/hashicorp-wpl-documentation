Updated: Dec 6, 2022

Status: **[Ready for use](https://hashicorp-wpl-documentation.vercel.app/guides/can-i-use#ready-for-use)**



---

# StandaloneLink

## Purpose

Call-to-action directly following content to navigate or trigger an action.



---

## Rules

* May appear on their own, directly following content, or in combination with [Button / Primary](https://hashicorp-wpl-documentation.vercel.app/components/button/primary)

## Figma props

| Name | Type | Description |
|----|----|----|
| `color` | string | Toggle between blue and black variants. **Options:** “blue”, “black” |
| `surface` | `variant` | Display component specific background colors. **Options:** `light`, `strong`, and `strong-faint`. **Default:** `light` |
| `theme` | `variant` | Toggle between blue and black variants. **Options:** “blue”, “black” |
| `text` | `text` | Call-to-action text |
| `isSecondary` | `boolean` | Toggle on secondary variants |
| `icon` | `instance_  swap` | Toggle between `chevron-right` or `arrow-right` |

## States

* `enabled`
* `hover`
* `active`
* `focus`

## UX writing guidelines

* Target a maximum of 2-3 words per `label`
* Target a readability grade level score of 8 to meet plain language guidelines.
* `text` text uses [Sentence case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case)

**Character limits**

| Content | Minimum | Maximum |
|----|----|----|
| `text` | 10 | 30 |

## Changelog

### Dec 6, 2022

* Added states for `surface` `strong`
* Added `icon` instance swap property
* Updated design documentation

### Sep 12, 2022

* Added design documentation

## Used

### Components

* [Actions](https://hashicorp-wpl-documentation.vercel.app/components/actions)
* [Intro](https://hashicorp-wpl-documentation.vercel.app/components/intro)
* [Card](https://hashicorp-wpl-documentation.vercel.app/components/card)

## Links

### Design

* [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=2824%3A11407)
* [Documentation](https://hashicorp-wpl-documentation.vercel.app/components/standalone-link)

### Development

* [Swingset](https://react-components.vercel.app/components/standalonelink)


