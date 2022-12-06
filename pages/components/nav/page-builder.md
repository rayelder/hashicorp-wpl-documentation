Updated: Dec 5, 2022

Status: **[Work-in-progress](https://hashicorp-wpl-documentation.vercel.app/guides/can-i-use#work-in-progress)**



---

# Nav / PageBuilder variant

## Purpose

To render secondary <nav /> components for [hashicorp.com](https://www.hashicorp.com/) DatoCMS PageBuilder



---

## Rules

* <nav /> is always sticky

## Figma props

| Name | Type | Description |
|----|----|----|
| `breakpoint` | `variant` | Render <nav /> component for selected breakpoint. **Options:** `small`, `medium`, and `large`. **Default:** `large` |
| `theme` | `variant` | Render product themed <nav /> component. **Options:** `boundary`, `consul`, `nomad`, `packer`, `terraform`, `vagrant`, `vault`, and `waypoint`. **Default:** `boundary` |

## States

==The last <nav /> component is sticky.== n Link and Button states defined by:

* Button / Primary
* Button / Secondary

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


