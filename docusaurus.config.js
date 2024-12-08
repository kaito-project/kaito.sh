// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kubernetes AI Toolchain Operator',
  tagline: 'Automate AI model deployment on Kubernetes',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kaito.sh',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kaito-project', // Usually your GitHub org/user name.
  projectName: 'kaito.sh', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    "docusaurus-plugin-sass",
    require.resolve("docusaurus-plugin-image-zoom"),
  ],
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
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: "start",
        content:
          '⭐️ If you like KAITO, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/kaito-project/kaito">GitHub</a>! ⭐️',
      },
      navbar: {
        title: 'KAITO',
        logo: {
          alt: 'KAITO',
          src: 'favicons/favicon.ico',
        },
        items: [
          //{
          //  type: 'docSidebar',
          //  sidebarId: 'tutorialSidebar',
          //  position: 'left',
          //  label: 'Tutorial',
          //},
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/kaito-project/kaito',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'KAITO installation',
                href: 'https://github.com/kaito-project/kaito/blob/main/docs/installation.md',
              },
              {
                label: 'Custom model integration',
                href: 'https://github.com/kaito-project/kaito/blob/main/docs/custom-model-integration/custom-model-integration-guide.md',
              },
              {
                label: 'Model serving/inference API',
                href: 'https://github.com/kaito-project/kaito/tree/main/docs/inference',
              },
              {
                label: 'Fine-tuning API',
                href: 'https://github.com/kaito-project/kaito/tree/main/docs/tuning',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Contributors and Maintainers',
                href: 'https://github.com/kaito-project/kaito/graphs/contributors',
              },
              {
                label: 'KAITO Roadmap',
                href: 'https://github.com/orgs/kaito-project/projects/1',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/kaito-project/kaito',
              },
            ],
          },
        ],
        copyright: `
        <br />
        <strong>Copyright © ${new Date().getFullYear()} The KAITO authors. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks. For a list of trademarks of The Linux Foundation, please see our <a href="https://www.linuxfoundation.org/trademark-usage/"> Trademark Usage</a> page.</strong
      `,
      },
      prism: {
        theme: require("prism-react-renderer").themes.dracula,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        config: {
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
    }),
};

export default config;
