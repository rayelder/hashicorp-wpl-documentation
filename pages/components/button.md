Version 1.0.0



---

# Button

## Purpose

To navigate, submit a form, or trigger an action.

## Rules

* Use at `48px` height
* Only arrow icon is allowed

## Props

| Name | Type | Description |
|----|----|----|
| `isSecondary` | `boolean` | Only available on `color: “blue”` |
| `label` | `string` | The text inside the button |
| `showArrow` | `boolean` | Show or hide the animated chevron to arrow icon |
| `appearance` | `string` | Toggle styling for light or dark background.**Options:** `"light"`, `"dark"` |
| `color` | `string` | Styles the button with a color based on a HashiCorp product**Options:** "blue", "black", "boundary", "consul", "nomad", "packer", "terraform", "vagrant", "vault", "waypoint" |
| `showClickTrigger` | `boolean` | Show or hide the `clickTrigger` text |
| `clickTrigger` | `string` | Text below button to encourage engagement |

## States

* enabled
* hover
* active
* focus
* disabled


View Storybook

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
| `label` | 10 | 30 |
| `clickTrigger` | 30 | 50 |

## Changelog

August 15, 2022

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
* Storybook

### Development

* [Swingset](https://react-components.vercel.app/components/button)


