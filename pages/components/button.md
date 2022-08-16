Version 7.0.0

**In-progress**



---

# Button

## Purpose

To navigate, submit a form, or trigger an action.

## Rules

* Only use at `48px` height

## Props

| Name | Type | Description |
|----|----|----|
| `isPrimary` | `boolean` |    |
| `label` | `string` |    |
| `showIcon` | `boolean` |    |
| `icon` | `string` |    |
| `appearance` | `string` |    |
| `color` | `string` |    |
| `showClickTrigger` | `boolean` |    |
| `clickTrigger` | `string` |    |

## States

* enabled
* hover
* active
* focus
* disabled

## UX writing guidelines

* Use [Sentence case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case)
* Lead the call-to-action with a verb
* Limit to 2 words
* Do not use an ampersand
* Avoid the use of “Learn more”
* Use `clickTrigger` text for `aria-label`
* `clickTrigger` text should only be used with a single primary button

### Character limits

| Content | Minimum | Maximum |
|----|----|----|
| `label` | ? | ? |
| `clickTrigger` | ? | ? |

## Changelog

August 15, 2022

* **Team decision:** Replace Flight arrow with custom chevron icon
* **Team decision:** Don’t allow primary and secondary button pairings. Instead, pair primary or secondary `Button` with `Standalonelink`
* **Team decision:** Do not strip out product colors

### Aug 10, 2022

* Combined `Button` and `ProductButton` into a single Figma component
* Added `clickTrigger` text feature
* Refined props to accommodate current and future usage

## Links

* [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/branch/OMEgzrp0nOtVags6nwQCyq/Components?node-id=102%3A47)
* [Design documentation](https://hashicorp-wpl-documentation.vercel.app/components/button)
* [Swingset](https://react-components.vercel.app/components/button)


