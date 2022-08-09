Version 1.0.2

# Intro

## Purpose:

Use to introduce a topic and encourage call-to-action.



---

## Rules

* Do not center align typography on small breakpoint
* Encourage the use of a single call-to-action. Default call-to-action should be primary Stand-alone-link

## Props

| Name | Type | Description |
|----|----|----|
| `appearance` | string | Display intro on light or dark backgrounds. **Options:** “light”, “dark” |
| `textAlignment` | string | Controls the text alignment rendering. **Options:** “left”, “center” |
| `showActions` | boolean | Show or hide Actions component. Default is `True` |
| `showEyebrow` | boolean | Show or hide eyebrow text. Default is `False` |
| `eyebrow` | string | Optional text displayed above the `heading` |
| `heading` | string | Required text displayed within the `heading` element |
| `headingSize` | number | Display intro on light or dark backgrounds. **Options:** 1, 2, 3 |
| `description` | string | Required text following the `heading` element |

## States

Not applicable

## UX writing guidelines

* Focus on writing keyword relevant display titles.
* Target a readability grade level score of 8 to meet plain language guidelines.
* `eyebrow` text uses [Title case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case)


**Character limits**

| Content | Minimum | Maximum |
|----|----|----|
| `heading` | 40 | 55 |
| `description` | 175 | 300 |

## Changelog

Aug 09, 2022

* Fixed gap spacing across all breakpoints
* Updated eyebrow styling to `body/large/bold` using `neutral/500`. [Approved by Coon Lam](https://hashicorp.slack.com/archives/C02BPN64LSG/p1659969972606119)

## Links

* [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/branch/1Hl4j9jAe0Z12GrOGt46RZ/Components?node-id=536%3A702)
* [Design documentation](https://hashicorp-wpl-documentation.vercel.app/components/intro)
* [Swingset](https://react-components.vercel.app/components/intro)



---

## Checklist

* Spacing
* Text color contrast


