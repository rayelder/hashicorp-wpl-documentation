Version 1.0.0



---

# KeyBenefitsWithImage

## Purpose

To promote product or solution key benefits alongside imagery

## Rules

* Limit of 3 bullets
* Limit of 6 consecutive instances when using collapsed instance without images

## Props

| Name | Type | Description |
|----|----|----|
| `appearance` | `string` | Display component on light or dark background **Options:** `"light"`, `"dark"` |
| `showIcon` | `boolean` | Show or hide icon |
| `showExplanation` | `boolean` | Show or hide explanation section |
| `explanationHeading` | `string` |    |
| `explanation` | `string` |    |
| `showBullets` | `boolean` | Show or hide bullets section |
| `bulletsHeading` | `string` |    |
| `bullets` | `string` |    |
| `showImage` | `boolean` | Show or hide the image. |

## States

* Not applicable

## UX writing guidelines

* Focus on writing keyword relevant display titles
* Target a readability grade level score of 8 to meet plain language guidelines

### Character limits

| Content | Minimum | Maximum |
|----|----|----|
| `whyHeading` | 40 | 55 |
| `why` | 150 | 170 |
| `bulletsHeading` | 40 | 55 |
| `bullets` (each bullet) | 40 | 55 |

## Changelog

### Aug 31, 2022

* Replaced `heading` and `description` with Intro component to allow designers to select heading size
* Added `isCollapsed` and refined `showImage` variants to support HCP use case pages
* Added `showExplanation` and `showBullets` to allow designers to show or hide specific content sections

### Aug 15, 2022

* Created `_KeyBenefitsIcon` component for `KeyBenefits` and `KeyBenefitsWithImage` patterns
* Added `showImage` prop to enable optional image on small breakpoint

### Aug 9, 2022

* Refined breakpoints in preparation for adding image variant

## Links

* [Figma](https://www.figma.com/file/VvpEQaWhKQExx9QTWRyayd/branch/gLfWIxUdC56xS1M8z70kbE/Patterns?node-id=1631%3A13269)
* [Design documentation](https://hashicorp-wpl-documentation.vercel.app/patterns/key-benefits-with-image)
* ~~Swingset~~


