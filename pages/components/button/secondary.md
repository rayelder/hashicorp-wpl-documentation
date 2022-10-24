Version: 0.1.0

Status: **Not ready to use**



---

# Secondary button

## Purpose

To navigate, submit a form, or trigger an action.

## Rules

* Use at `48px` height
* Only chevron icon is allowed

## Figma props

| Name | Type | Description |
|----|----|----|
| `text` | `text` | The call-to-action text for the button |
| `showArrow` | `boolean` | Show or hide the animated chevron to arrow icon |
| `page` | `variant` | Toggle styling for light or dark background.**Options:** `"light"`, `"dark"` |

## States

[See playground for proposed interaction states](https://hashicorp-web-presence.vercel.app/playground/button)

* enabled
* hover
* active
* focus

## UX writing guidelines

* Use [Sentence case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case)
* Lead the call-to-action with a verb
* Limit call-to-action `text` to 3 words
* Do not use an ampersand
* Avoid the use of “Learn more”

### Character limits

| Content | Minimum | Maximum |
|----|----|----|
| `text` | 10 | 30 |

## Changelog

### Oct 24, 2022

* Combined with [primary](https://hashicorp-wpl-documentation.vercel.app/components/button/primary) and [GitHub](https://hashicorp-wpl-documentation.vercel.app/components/button/github) buttons
* Updated `appearance` to `page`
* Applied semantic design tokens

### Aug 15, 2022

**Team decisions:**

* Replace Flight arrow with custom animated chevron icon
* Don’t allow primary and secondary button pairings. Instead, pair primary or secondary `Button` with `Standalonelink`
* Do not strip out product colors
* Only use chevron icon

### Aug 10, 2022

* Combined `Button` and `ProductButton` into a single Figma component
* Added `clickTrigger` text feature
* Refined props to accommodate current and future usage

## Links

### Design

* [Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/branch/OMEgzrp0nOtVags6nwQCyq/Components?node-id=102%3A47)
* [Documentation](https://hashicorp-wpl-documentation.vercel.app/components/button)

### Development

* [Swingset](https://react-components.vercel.app/components/button)


