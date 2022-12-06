Updated: Dec 5, 2022

Status: **[Work-in-progress](https://hashicorp-wpl-documentation.vercel.app/guides/can-i-use#work-in-progress)**



---

# Nav / Primary variant

## Purpose

To render primary nav components for [hashicorp.com](https://www.hashicorp.com/) and .io product domains



---

## Rules

* Primary <nav /> is always sticky when not combined with a secondary <nav />
* When combined with a secondary <nav />, the background should be a subtle gray with secondary button
* Animate in the “Talk to an expert” secondary button when the secondary <nav /> has becomes sticky
* Always show GitHub star counts on .io domains

## Figma props

| Name | Type | Description |
|----|----|----|
| `breakpoint` | `variant` | Render <nav /> component for selected breakpoint. **Options:** `small`, `medium`, and `large`. Default: `large` |
| `theme` | `variant` | Render product themed <nav /> component. **Options:** `boundary`, `consul`, `neutral`, `nomad`, `packer`, `terraform`, `vagrant`, `vault`, and `waypoint`. **Default:** `neutral` |
| `hasSecondary` | `variant` | Toggle to render subdued primary [hashicorp.com](https://www.hashicorp.com/) <nav> when combined with secondary navigation |

## States

==The last <nav /> component is sticky.== 

Link and Button states defined by:

* Button / Github
* Button / Primary
* Button / Secondary
* MenuItem

## UX writing guidelines

TBD

## Changelog

### Dec 5, 2022

* Created consistent calls-to-action across all <nav /> components and breakpoints
* Create <nav /> component design documentation

## Usage

TBD

## Links

### Design

* ~~Figma~~
* ~~Documentation~~

### Development

* ~~Swingset~~


