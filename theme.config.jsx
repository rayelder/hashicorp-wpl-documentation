import React from 'react'

export default {
  project: {
    link: 'https://hashicorp-wpl-documentation.vercel.app/',
  },
  logo: <strong>HashiCorp WPL</strong>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – HashiCorp WPL',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="HashiCorp WPL" />
      <meta
        property="og:description"
        content="Documentation for HashiCorp WPL"
      />
    </>
  ),
  primaryHue: { dark: 220, light: 220 },
  sidebar: { defaultMenuCollapseLevel: 2 },
  footer: {
    text: (
      <span>
        ©{new Date().getFullYear()}{' '}
        <a
          href="https://hashicorp-wpl-documentation.vercel.app/"
          target="_blank"
        >
          HashiCorp, Inc.
        </a>
        &nbsp; All rights reserved.
      </span>
    ),
  },
  toc: {
    extraContent: <img src="#" alt="" />,
    float: true,
  },
}
