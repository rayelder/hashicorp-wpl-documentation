Version: **0.1.0**

Status: **Ready for use**



---

# Intro

## Purpose

To introduce a topic and encourage call-to-action



---

## Rules

* Do not center align typography on small breakpoint
* Encourage the use of a single call-to-action. Default call-to-action should be primary Stand-alone-link

## Props

| Name | Type | Description |
|----|----|----|
| `page` | string | Display component styling for `page` backgrounds. **Options:** `light`, `strong`. Default is `light` |
| `textAlignment` | string | Controls the text alignment rendering. **Options:** `left`, center. Default is `left` |
| `showActions` | boolean | Show or hide Actions component. Default is `True` |
| `showEyebrow` | boolean | Show or hide eyebrow text. Default is `False` |
| `eyebrow` | string | Optional text displayed above the `heading` |
| `heading` | string | Required text displayed within the `heading` element |
| `display` | number | Display intro on light or dark backgrounds. **Options:** 1, 2, 3 |
| `description` | string | Required text following the `heading` element |

## States

Not applicable. [Button](https://hashicorp-wpl-documentation.vercel.app/components/button/primary) and [StandaloneLink](https://hashicorp-wpl-documentation.vercel.app/components/standalone-link) define interaction states.

## UX writing guidelines

* Focus on writing keyword relevant display titles.
* Target a readability grade level score of 8 to meet plain language guidelines.
* `eyebrow` text uses [Title case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case)


**Character limits**

| Content | Minimum | Maximum |
|----|----|----|
| `heading` | 40 | 55 |
| `description` | 175 | 300 |
| bullet `text` |    | 180 |

## Changelog

### Nov 8, 2022

* Removed `showBullet` on `_Bullet` nested component
* Updated Figma documentation

### Oct 20, 2022

* Added optional bullets to `textAlignment`: `left`

### Aug 17, 2022

* Aligned auto layout gap to `32px` between `eyebrow` and `heading` [Agreement between Alex, Noel, and Ray via Asana](https://app.asana.com/0/1201874072258661/1202615934597667/f)

### Aug 15, 2022

* Updated `appearance` values to “light” and “dark” to be consistent with other components and patterns

### Aug 09, 2022

* Fixed gap spacing across all breakpoints
* Updated eyebrow styling to `body/large/bold` using `neutral/500` [Approved by Coon Lam](https://hashicorp.slack.com/archives/C02BPN64LSG/p1659969972606119)
* Make heading and description responsive

## Links

### Design

* [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/branch/1Hl4j9jAe0Z12GrOGt46RZ/Components?node-id=536%3A702)
* [Documentation](https://hashicorp-wpl-documentation.vercel.app/components/intro)

### Development

* [Swingset](https://react-components.vercel.app/components/intro)


