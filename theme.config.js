export default {
  project: { link: 'https://github.com/rayelder/hashicorp-wpl-documentation' },
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – HashiCorp WPL',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">HashiCorp</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Web pattern library
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="HashiCorp - Web pattern library" />
      <meta name="og:title" content="HashiCorp - Web pattern library" />
    </>
  ),
  navigation: { next: false },
  navigation: { prev: false },
  footer: { component: null },
  toc: { float: true },
  darkMode: true,
}
