**Version:** 0.1.0

**Status:** In review. Not ready for use.



---

# Video

## Purpose

To feature a video within a pattern



---

## Rules

* TBD

## Where used

* [About us](https://www.hashicorp.com/about) hero pattern
* VideoFeature pattern

## Figma properties

| Name | Type | Description |
|----|----|----|
| `breakpoint` | `Variant` | Control breakpoint dimensions and default properties |
| `surface` | `Variant` | Display on light or strong backgrounds. **Options:** `light` and `dark` |
| `showGradient` | `Variant` | Control gradient rendering. Options: `left` and `right`. Default: `left` |
| `solution` | `Variant` | Select  solution gradient. **Options:** `neutral`, `infrastructure`, `security`, `networking`, and `applications`. **Default:** `neutral` |
| `showDescription` | `Boolean` | Show or hide `description`. **Default:** `False` |
| `description` | `Text` | Optional text below video player. Show or hide using `showDescription` |

## States

* Not applicable
* Interaction defined by Wistia and YouTube players

## UX writing guidelines

* TBD


**Character limits**

| Content | Minimum | Maximum |
|----|----|----|
| `description` | 45 | 90 |

## Changelog

### Sep 26, 2022

* Added solution gradient to right
* Reduced character limit of `description` to accommodate small breakpoint

## Links

* [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/branch/qDnReYgTBKGbE2o8TCBMLx/Components?node-id=1707%3A9339)
* [Design documentation](https://hashicorp-wpl-documentation.vercel.app/components/video)
* ~~Swingset~~


