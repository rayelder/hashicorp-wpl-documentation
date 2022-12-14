# Nav / Secondary variant

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

To render secondary navigation components for [hashicorp.com](https://www.hashicorp.com/)

---

## Rules

- Secondary navigation is always sticky
- Primary navigation is not sticky when combined with secondary navigation
- Animate in the “Talk to an expert” secondary button when the secondary navigation has becomes sticky

## Figma properties

| Name         | Type      | Description                                                                                                                                                                                                             |
| ------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `breakpoint` | `variant` | Render navigation component for selected breakpoint. **Options:** `small`, `medium`, and `large`. **Default:** `large`                                                                                                  |
| `page`       | `variant` | Render on light or strong backgrounds. **Options:** `light`, `strong`                                                                                                                                                   |
| `section`    | `variant` | Render section specific secondary navigation component. **Options:** `about`, `blog`, `brand`, `careers`, `certification`, `consul`, `nomad`, `partners`, `support`, `terraform`, and `vault`. **Default:** `terraform` |

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

## Where used

TBD

## Links

### Design

- ~~Figma~~
- ~~Documentation~~

### Engineering

- ~~Swingset~~
