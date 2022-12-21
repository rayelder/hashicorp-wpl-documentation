export default {
  project: { link: 'https://github.com/rayelder/hashicorp-wpl-documentation' },
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – WPL',
  sidebar: { defaultMenuCollapseLevel: 0 },
  logo: <>WPL Design Docs</>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="HashiCorp Web Pattern Library (WPL)" />
      <meta name="og:title" content="HashiCorp Web Pattern Library (WPL)" />
    </>
  ),
  navigation: { next: false },
  navigation: { prev: false },
  footer: { component: null },
  toc: { float: true },
  darkMode: true,
  banner: {
    key: 'hmds-beta',
    text: <span>HashiCorp Web Pattern Library</span>,
    dismissible: false,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – HMDS',
    }
  },
}
