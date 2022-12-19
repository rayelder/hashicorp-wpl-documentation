# Nav / PageBuilder variant

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

To render secondary navigation components for [hashicorp.com](https://www.hashicorp.com/) DatoCMS PageBuilder

---

## Rules

- navigation is always sticky

## Figma properties

| Name         | Type      | Description                                                                                                                                                                |
| ------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `breakpoint` | `variant` | Render navigation component for selected breakpoint. **Options:** `small`, `medium`, and `large`. **Default:** `large`                                                     |
| `theme`      | `variant` | Render product themed navigation component. **Options:** `boundary`, `consul`, `nomad`, `packer`, `terraform`, `vagrant`, `vault`, and `waypoint`. **Default:** `boundary` |

## States

**The last navigation component is sticky.**

Link and Button states defined by:

- Button / Primary
- Button / Secondary

## UX writing guidelines

TBD

## Changelog

### Dec 5, 2022

- Created consistent calls-to-action across all navigation components and breakpoints
- Create navigation component design documentation

## Usage

TBD

## Links

### Design

- ~~Figma~~
- ~~Documentation~~

### Engineering

- ~~Swingset~~
