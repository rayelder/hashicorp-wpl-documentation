# HeroWithImage

Status: **[Work-in-progress](/guides/can-i-use#work-in-progress)**

## Purpose

To promote ?

---

## Rules

- `background-color` CSS property editable via DatoCMS
- Only 2 calls-to-action
- Unique images should be created for each breakpoint
  - Small breakpoint → 16:9
  - Medium breakpoint → 1:1
  - Large breakpoint → 16:9

## Figma properties

| Name              | Type      | Description                                                                                        |
| ----------------- | --------- | -------------------------------------------------------------------------------------------------- |
| `breakpoint`      | `variant` | Render specific breakpoint variants. **Options**: `small`, `medium`, `large`. Default is `large`.  |
| `page`            | `variant` | Render component on specific background color. **Options:** `light`, `strong`. Default is `strong` |
| `showEyebrow`     | `boolean` | Show or hide EyebrowWithPattern component. Default is `True`.                                      |
| `showInlineVideo` | `boolean` | Show or hide InlineVideo component over background image. Default is `False`.                      |

## States

Not applicable. Interactions defined by [Button](/components/button), [StandaloneLink](/components/standalone-link), and InlineVideo components.

## UX writing guidelines

TBD

## Changelog

### Nov 17, 2022

- Documented pattern and nested components

### Nov 7, 2022

- Documented pattern and nested components
- Added `page.light` implementation
- Added InlineVideo component
- Increased vertical spacing on `small` breakpoint

## Where used

None

## Links

### Design

- [Figma](https://www.figma.com/file/VvpEQaWhKQExx9QTWRyayd/Patterns?node-id=2591%3A14651)
- [Documentation](https://hashicorp-wpl-documentation.vercel.app/patterns/hero)

### Engineering

- ~~Swingset~~
