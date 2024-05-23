// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apana IIT Notes',
  tagline: 'Notes is a mini Wikipedia 📖 for computer science students, created by Apana IIT.',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Apana IIT',
      logo: { alt: 'My Site Logo', src: 'img/logo.svg' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial'
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [ { label: 'Tutorial', to: '/docs/intro' } ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus'
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus'
            }
          ]
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' }
          ]
        }
      ],
      copyright: 'Copyright © 2024  IIT Apana, Inc. Built with Apana IIT.'
    },
    prism: {
      theme: {
        plain: { color: '#393A34', backgroundColor: '#f6f8fa' },
        styles: [
          {
            types: [ 'comment', 'prolog', 'doctype', 'cdata' ],
            style: { color: '#999988', fontStyle: 'italic' }
          },
          { types: [ 'namespace' ], style: { opacity: 0.7 } },
          {
            types: [ 'string', 'attr-value' ],
            style: { color: '#e3116c' }
          },
          {
            types: [ 'punctuation', 'operator' ],
            style: { color: '#393A34' }
          },
          {
            types: [
              'entity',   'url',
              'symbol',   'number',
              'boolean',  'variable',
              'constant', 'property',
              'regex',    'inserted'
            ],
            style: { color: '#36acaa' }
          },
          {
            types: [ 'atrule', 'keyword', 'attr-name', 'selector' ],
            style: { color: '#00a4db' }
          },
          {
            types: [ 'function', 'deleted', 'tag' ],
            style: { color: '#d73a49' }
          },
          {
            types: [ 'function-variable' ],
            style: { color: '#6f42c1' }
          },
          {
            types: [ 'tag', 'selector', 'keyword' ],
            style: { color: '#00009f' }
          }
        ]
      },
      darkTheme: {
        plain: { color: '#F8F8F2', backgroundColor: '#282A36' },
        styles: [
          {
            types: [ 'prolog', 'constant', 'builtin' ],
            style: { color: 'rgb(189, 147, 249)' }
          },
          {
            types: [ 'inserted', 'function' ],
            style: { color: 'rgb(80, 250, 123)' }
          },
          {
            types: [ 'deleted' ],
            style: { color: 'rgb(255, 85, 85)' }
          },
          {
            types: [ 'changed' ],
            style: { color: 'rgb(255, 184, 108)' }
          },
          {
            types: [ 'punctuation', 'symbol' ],
            style: { color: 'rgb(248, 248, 242)' }
          },
          {
            types: [ 'string', 'char', 'tag', 'selector' ],
            style: { color: 'rgb(255, 121, 198)' }
          },
          {
            types: [ 'keyword', 'variable' ],
            style: { color: 'rgb(189, 147, 249)', fontStyle: 'italic' }
          },
          {
            types: [ 'comment' ],
            style: { color: 'rgb(98, 114, 164)' }
          },
          {
            types: [ 'attr-name' ],
            style: { color: 'rgb(241, 250, 140)' }
          }
        ]
      }
    }
  }
};


export default config;
