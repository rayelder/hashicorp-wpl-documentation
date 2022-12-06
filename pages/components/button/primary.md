Updated: Dec 6, 2022

Status: **[Work-in-progress](https://hashicorp-wpl-documentation.vercel.app/guides/can-i-use#work-in-progress)**



---

# Button / Primary

## Purpose

To navigate, submit a form, or trigger an action.

## Rules

* Use at `48px` height
* Only Flight chevron icon is allowed

## Figma props

| Name | Type | Description |
|----|----|----|
| `text` | `text` | The call-to-action text for the button |
| `showArrow` | `boolean` | Show or hide the animated chevron to arrow icon |
| `page` | `variant` | Toggle styling for light or dark background.**Options:** `light`, `strong` |
| `surface` | `variant` | Sets the button background and foreground colors based on usage. **Options:** `action`, `strong`, `boundary`, `consul`, `nomad`, `packer`, `terraform`, `vagrant`, `vault`, `waypoint`. Default is `action` |
| `showClickTrigger` | `boolean` | Show or hide the `clickTrigger` text. Default is `False` |
| `clickTrigger` | `string` | Text below button to encourage engagement |

## States

* `enabled`
* `hover`
* `active`
* `focus`

## UX writing guidelines

* Use [Sentence case capitalization](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case)
* Lead the call-to-action with a verb
* Limit `label` to 3 words
* Do not use an ampersand
* Avoid the use of “Learn more”
* Use `clickTrigger` text for `aria-label`
* `clickTrigger` text should only be used with a single primary button

### Character limits

| Content | Minimum | Maximum |
|----|----|----|
| `text` | 10 | 30 |
| `clickTrigger` | 30 | 50 |

## Changelog

### Dec 6, 2022

* Added hover overlay to Button / Primary
* Split Button / PrimaryWithClickTrigger out of Button / Primary
* Added states for all buttons
* Standardized borders colors and focus rings
* Updated design documentation

### Oct 24, 2022

* Combined with [secondary](https://hashicorp-wpl-documentation.vercel.app/components/button/secondary) and [GitHub](https://hashicorp-wpl-documentation.vercel.app/components/button/github) buttons
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


