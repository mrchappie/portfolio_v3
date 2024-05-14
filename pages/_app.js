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
          content="🌟 Passionate Junior Frontend Developer with a thirst for learning and tackling new challenges. I thrive on innovation and am always ready to explore new horizons in the tech world. 🚀 Proficient in JavaScript ⚡️, Angular ⚙️, React ⚛️, and frontend development technologies including HTML 🌐, CSS 🎨 (including Tailwind CSS 🌈 and SASS 💅), TypeScript 📘, Git 🌱, GitHub 🐙, and Firebase 🔥. Let's build exciting user experiences together! 💻"
        />
        <meta
          property="og:image"
          content="/public/assets/portfolio_website_preview.png"
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
