Updated: Dec 5, 2022

Status: **[Work-in-progress](https://hashicorp-wpl-documentation.vercel.app/guides/can-i-use#work-in-progress)**



---

# Nav / Secondary variant

## Purpose

To render secondary <nav /> components for [hashicorp.com](https://www.hashicorp.com/)



---

## Rules

* Secondary <nav /> is always sticky
* Primary <nav /> is not sticky when combined with secondary <nav />
* Animate in the “Talk to an expert” secondary button when the secondary <nav /> has becomes sticky

## Figma props

| Name | Type | Description |
|----|----|----|
| `breakpoint` | `variant` | Render <nav /> component for selected breakpoint. **Options:** `small`, `medium`, and `large`. **Default:** `large` |
| `page` | `variant` | Render on light or strong backgrounds. **Options:** `light`, `strong` |
| `section` | `variant` | Render section specific secondary <na/> component. **Options:** `about`, `blog`, `brand`, `careers`, `certification`, `consul`, `nomad`, `partners`, `support`, `terraform`, and `vault`. **Default:** `terraform` |

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


