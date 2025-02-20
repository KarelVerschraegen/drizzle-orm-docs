import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';
import TwitterLink from './components/Icons/TwitterLink';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import TitleComponent from './components/TitleComponent/TitleComponent';
import GithubLink from './components/Icons/GithubLink';
import DiscordLink from './components/Icons/DiscordLink';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';

const config: DocsThemeConfig = {
  banner: {
    key: 'rqb',
    text: (
      <a href="https://driz.li/821days" target="_blank" rel="nofollow noreferrer">
        🎉 Drizzle got FASTER! Read more →
      </a>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - DrizzleORM',
        description: 'Drizzle ORM | %s',
      };
    }
    return {
      titleTemplate: 'DrizzleORM - next gen TypeScript ORM',
      description: 'Drizzle ORM is a lightweight and performant TypeScript ORM with developer experience in mind',
    };
  },
  logo: <Logo />,
  docsRepositoryBase: 'https://github.com/drizzle-team/drizzle-orm',
  gitTimestamp: <></>,
  main: ({ children }) => <div style={{ maxWidth: 1024, margin: '0 auto' }}>{children}</div>,
  navbar: {
    extraContent:
  <>
    <div className="social-networks">
      <GithubLink />
      <DiscordLink />
      <TwitterLink />
    </div>
    <ThemeToggle />
  </>,
  },
  themeSwitch: {
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'system',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: TitleComponent,
  },
  editLink: {
    text: '',
  },
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
    </>
  ),
  footer: {
    component: <Footer />,
  },
};

export default config;
