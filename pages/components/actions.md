# \<Actions />

## Purpose

- To render primary and secondary calls-to-action

## Guidelines

- The first and second items are always the `primary` and `secondary` respectively.
- In the `mixed` variation, the [StandaloneLink](/components/standalone-link) is always the second item

## Figma properties

| Name            | Type      | Description                                                                                           |
| --------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `surface`       | `variant` | Render on light or strong backgrounds. **Options:** `light`, `strong`                                 |
| `type`          | `variant` | Render using StandaloneLink or Button components. **Options:** `StandaloneLink`, `Button`, or `mixed` |
| `isStacked`     | `boolean` | Toggle between horizontal and vertical stacking                                                       |
| `showSecondary` | `boolean` | Show or hide chevron to arrow                                                                         |

## States

Interaction defined by [Button](/components/button) and [StandaloneLink](/components/standalone-link) components

## UX writing guidelines

TBD

## Changelog

### Dec 16, 2022

- Updated design documentation

### Nov 9, 2022

- Updated design documentation

### Nov 7, 2022

- Updated [Button](/components/button/primary) and [StandaloneLink](/components/standalone-link) nested components
- Updated documentation

### Oct 12, 2022

- Documented component
- Fixed props on `strong` backgrounds
- Added nested component props

## Where used

- CallToAction
- [Hero](/patterns/hero)
- [Intro](/components/intro)

## Resources

### Design

- [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=572%3A1058)
- [Documentation](/components/actions)

### Engineering

- [Swingset](https://react-components.vercel.app/components/actions)
