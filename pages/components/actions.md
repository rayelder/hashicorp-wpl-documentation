import Image from 'next/image'
import { Callout, Tab, Tabs } from 'nextra-theme-docs'

<Callout type="default" emoji="🔴">
  Status: **Work-in-progress**
</Callout>

<Callout type="default" emoji="🟢">
  Status: **Ready for use**
</Callout>

<Image
  src="/images/preview/preview-actions@2x.png"
  alt="Hello"
  width={192}
  height={148}
/>

# Actions

<Tabs items={['Purpose', 'Rules']}>
<Tab>
To render primary and secondary calls-to-action
</Tab>
<Tab>

<ul><li>The first item and second item are always the `primary` and `secondary` variations respectively.</li><li>In the `mixed` variation, the [StandaloneLink](https://hashicorp-wpl-documentation.vercel.app/components/standalone-link) always comes second</li></ul>

 </Tab>
   </Tabs>

## Figma properties

| Name            | Type      | Description                                                                                           |
| --------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `surface`       | `variant` | Render on light or strong backgrounds. **Options:** `light`, `strong`                                 |
| `type`          | `variant` | Render using StandaloneLink or Button components. **Options:** `StandaloneLink`, `Button`, or `mixed` |
| `isStacked`     | `boolean` | Toggle between horizontal and vertical stacking                                                       |
| `showSecondary` | `boolean` | Show or hide chevron to arrow                                                                         |

## States

**None.** Interaction states defined by [Button](https://hashicorp-wpl-documentation.vercel.app/components/button) and [StandaloneLink](https://hashicorp-wpl-documentation.vercel.app/components/standalone-link) components.

## UX writing guidelines

TBD

## Changelog

### Dec 16, 2022

- Updated design documentation

### Nov 9, 2022

- Updated design documentation

### Nov 7, 2022

- Updated [Button](https://hashicorp-wpl-documentation.vercel.app/components/button/primary) and [StandaloneLink](https://hashicorp-wpl-documentation.vercel.app/components/standalone-link) nested components
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

<Tabs items={['Design', 'Engineering']}>
<Tab>

<ul>
<li>[Figma](https://www.figma.com/file/7cYgDM618stjYUHDqAfRec/Components?node-id=572%3A1058)</li>
<li>[Documentation](/components/actions)</li>
</ul>
</Tab>
<Tab>
<ul><li>[Swingset](https://react-components.vercel.app/components/actions)</li></ul>
</Tab>
</Tabs>
