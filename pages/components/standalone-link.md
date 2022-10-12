Version: 0.1.1

Status: **Ready for use**



---

# StandaloneLink

## Purpose

As navigational element directly following content



---

## Rules

* They may appear on their own, directly following content,  or in combination with a primary Button

## Props

| Name | Type | Description |
|----|----|----|
| `color` | string | Toggle between blue and black variants. **Options:** “blue”, “black” |
| `appearance` | string | Display  on light or dark backgrounds. **Options:** “light”, “dark” |
| `label` | string | Call-to-action text |
| `showArrow` | boolean | Show or hide chevron/arrow |
| `isSecondary` | boolean | Toggle between primary and secondary variants |

## States

* Enabled
* Hover
* Active
* Focus

## UX writing guidelines

* Target a maximum of 2-3 words per `label`
* Target a readability grade level score of 8 to meet plain language guidelines.
* `label` text uses [Sentence case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case)


**Character limits**

| Content | Minimum | Maximum |
|----|----|----|
| `label` | TBD | TBD |

## Changelog

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
* Storybook / [Playground](https://hashicorp-web-presence.vercel.app/playground/standalone-link)

### Development

* [Swingset](https://react-components.vercel.app/components/standalonelink)


