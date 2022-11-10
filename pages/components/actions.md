Version: **0.1.0**

Status: **Ready for use**



---

# Actions

## Purpose

To render primary and secondary calls-to-action



---

## Rules

* The first item and second item are always the `primary` and `secondary` variations respectively.
* In the `mixed` variation, the [StandaloneLink](https://hashicorp-wpl-documentation.vercel.app/components/standalone-link) always comes second

## Figma props

| Name | Type | Description |
|----|----|----|
| `surface` | `variant` | Render on light or strong backgrounds. **Options:** `light`, `strong` |
| `type` | `variant` | Render using StandaloneLink or Button components. **Options:** `StandaloneLink`, `Button`, or `mixed` |
| `isStacked` | `boolean` | Toggle between horizontal and vertical stacking |
| `showSecondary` | `boolean` | Show or hide chevron to arrow |

## States

**None.** Interaction states defined by [Button](https://hashicorp-wpl-documentation.vercel.app/components/button) and [StandaloneLink](https://hashicorp-wpl-documentation.vercel.app/components/standalone-link) components.

## UX writing guidelines

TBD

## Changelog

### Nov 9, 2002

* Updated Figma documentation

### Nov 7, 2002

* Updated [Button](https://hashicorp-wpl-documentation.vercel.app/components/button/primary) and [StandaloneLink](https://hashicorp-wpl-documentation.vercel.app/components/standalone-link) nested components
* Updated documentation

### Oct 12, 2022

* Documented component
* Fixed props on `strong` backgrounds
* Added nested component props

## Usage

### Components

* [Intro](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=536%3A702)

### Patterns

* [CallToAction](https://www.figma.com/file/VvpEQaWhKQExx9QTWRyayd/Patterns?node-id=136%3A3)
* [Hero](https://hashicorp-wpl-documentation.vercel.app/patterns/hero)

## Links

### Design

* [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=572%3A1058)
* [Documentation](https://hashicorp-wpl-documentation.vercel.app/components/actions)

### Development

* [Swingset](https://react-components.vercel.app/components/actions)


