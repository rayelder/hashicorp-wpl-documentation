# Nav / Primary variant

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

To render primary navigation components for [hashicorp.com](https://www.hashicorp.com/) and .io product domains

---

## Rules

- Primary navigation is always sticky when not combined with a secondary navigation
- When combined with a secondary navigation, the background should be a subtle gray with secondary button
- Animate in the “Talk to an expert” secondary button when the secondary navigation has becomes sticky
- Always show GitHub star counts on .io domains

## Figma properties

| Name           | Type      | Description                                                                                                                                                                          |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `breakpoint`   | `variant` | Render navigation component for selected breakpoint. **Options:** `small`, `medium`, and `large`. Default: `large`                                                                   |
| `theme`        | `variant` | Render product themed navigation component. **Options:** `boundary`, `consul`, `neutral`, `nomad`, `packer`, `terraform`, `vagrant`, `vault`, and `waypoint`. **Default:** `neutral` |
| `hasSecondary` | `variant` | Toggle to render subdued primary [hashicorp.com](https://www.hashicorp.com/) navigation when combined with secondary navigation                                                      |

## States

**The last navigation component is sticky.**

Link and Button states defined by:

- Button / Github
- Button / Primary
- Button / Secondary
- MenuItem

## UX writing guidelines

TBD

## Changelog

### Dec 5, 2022

- Created consistent calls-to-action across all navigation components and breakpoints
- Created navigation component design documentation

## Usage

TBD

## Links

### Design

- ~~Figma~~
- ~~Documentation~~

### Engineering

- ~~Swingset~~
