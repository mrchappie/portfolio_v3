'use strict';
import React from 'react';
import '../styles/css/globals.css';

import AppContainer from '../components/appContainer/appContainer';
import Navigation from '../components/navigationBar/navigationBar';
import Homepage from './index';
import About from './about/index';
import TechStack from './tech_stack/index';
import Projects from './projects/index';
import Contact from './contact/index';
import FooterComponent from '../components/footer/footerComponent';
import ScrollDown from '../components/scrollDown/scrollDown';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp() {
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <Head>
        <title>{'<Alexandru BOȘCU/>'}</title>
        <meta name="description" content="Lorem ipsum dolor" />
        <link rel="icon" href="/assets/icons/website__icon.svg" />
      </Head>
      <AppContainer>
        <Navigation></Navigation>
        {path === '/' && (
          <>
            <Homepage></Homepage>
            <TechStack></TechStack>
            <Projects></Projects>
            <FooterComponent></FooterComponent>
            <ScrollDown></ScrollDown>
          </>
        )}
        {path === '/about' && (
          <>
            <About></About>
            <FooterComponent></FooterComponent>
            <ScrollDown></ScrollDown>
          </>
        )}
        {path === '/tech_stack' && <TechStack></TechStack>}
        {path === '/projects' && (
          <>
            <Projects></Projects>
            <FooterComponent></FooterComponent>
            <ScrollDown></ScrollDown>
          </>
        )}
        {path === '/contact' && <Contact></Contact>}
      </AppContainer>
    </>
  );
}

export default MyApp;
