# Icon / Flight

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

To display a contained or not contained [Flight icon](https://flight-hashicorp.vercel.app/)

## Rules

- None

## Figma properties

| Name           | Type            | Description                                                                                                  |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| `page`         | `variant`       | Render component on light or strong (dark) backgrounds. **Options:** `light`, `strong`. **Default:** `light` |
| `theme`        | `variant`       |                                                                                                              |
| `isSecondary`  | `variant`       | Render secondary styling                                                                                     |
| `hasContainer` | `variant`       | Toggle between pure FlightIcon and container FlightIcon with a background                                    |
| `icon`         | `instance_swap` | Set FlightIcon using instance swap property                                                                  |

## States

None

## UX writing guidelines

None

## Changelog

### Dec 16, 2022

- Updated design documentation

## Where used

- [KeyBenefit](/components/key-benefit)
- [KeyBenefits](/components/key-benefits)

## Links

### Design

- ~~Figma~~
- [Documentation](/components/icon/flight)

### Engineering

- ~~Swingset~~
