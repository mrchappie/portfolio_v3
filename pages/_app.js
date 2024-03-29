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
import { useRouter } from 'next/router';
import Head from 'next/head';
import ScrollToTop from 'react-scroll-to-top';

function MyApp() {
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <Head>
        <title>{'<Alexandru BOȘCU/>'}</title>
        <meta property="og:title" content="Alexandru BOSCU Portfolio" />
        <meta
          property="og:description"
          content="Passionate Frontend Developer | Seeking Opportunities to Join an Exceptional Team"
        />
        <meta
          property="og:image"
          content="http://www.machinelearningworkshop.com/image/all.png"
        />
        <meta
          property="og:image:alt"
          content="Black and white line drawing of refrigerator, french door refrigerator, range, washer, fan, microwave, vaccuum, space heater and air conditioner"
        />
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
          </>
        )}
        {path === '/about' && (
          <>
            <About></About>
            <FooterComponent></FooterComponent>
          </>
        )}
        {path === '/tech_stack' && <TechStack></TechStack>}
        {path === '/projects' && (
          <>
            <Projects></Projects>
            <FooterComponent></FooterComponent>
          </>
        )}
        {path === '/contact' && <Contact></Contact>}
        <ScrollToTop smooth />
      </AppContainer>
    </>
  );
}

export default MyApp;
