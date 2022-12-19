export default {
  project: { link: 'https://github.com/rayelder/hashicorp-wpl-documentation' },
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – HMDS',
  sidebar: { defaultMenuCollapseLevel: 0 },
  logo: <>Design Documentation</>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="HashiCorp Marketing Design System (HMDS)"
      />
      <meta
        name="og:title"
        content="HashiCorp Marketing Design System (HMDS)"
      />
    </>
  ),
  navigation: { next: false },
  navigation: { prev: false },
  footer: { component: null },
  toc: { float: true },
  darkMode: true,
  banner: {
    key: 'hmds-beta',
    text: <span>HashiCorp Marketing Design System</span>,
    dismissible: false,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – HMDS',
    }
  },
}
