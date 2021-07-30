const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tezos',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/tezos-logo.svg',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {to: 'https://tezos.com/learn/getting-started/', label: 'Learn', position: 'right'},
        {to: 'https://tezos.com/developer-portal/', label: 'Build', position: 'right'},
        {to: 'https://tezos.com/community/', label: 'Community', position: 'right'},
        {to: 'https://tezos.com/careers/', label: 'Careers', position: 'right'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      
      links: [
        {
          title: 'GENERAL',
          items: [
            {
              label: 'Learn',
              href: 'https://tezos.com/learn/getting-started/',
            },
            {
              label: 'Build',
              href: 'https://tezos.com/developer-portal/',
            },
            {
              label: 'Community',
              href: 'https://tezos.com/community/',
            },
            {
              label: 'Careers',
              href: 'https://tezos.com/careers/',
            },
          ],
        },
        {
          title: 'TECHNOLOGY',
          items: [
            {
              label: 'White paper',
              href: 'https://tezos.com/whitepaper.pdf',
            },
            {
              label: 'Getting Started',
              href: 'https://tezos.com/learn/getting-started/',
            },
            {
              label: 'Developer Portal',
              href: 'https://tezos.com/developer-portal/',
            },
            {
              label: 'Tezos Wiki',
              href: '/',
            },
            {
              label: 'Gitlab',
              href: 'https://gitlab.com/tezos',
            },
          ],
        },
        
      ],
      copyright: ` © Tezos ${new Date().getFullYear()}`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
