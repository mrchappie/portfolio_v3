'use strict';
import React from 'react';
import '../styles/css/globals.css';

import AppContainer from '../components/appContainer/appContainer';
import Navigation from '../components/navigationBar/navigationBar';
import Homepage from './index';
import TechStack from './techStackPage';
import Projects from './projectsPage';
import FooterComponent from '../components/footer/footerComponent';
import NoPage from './404/noPage';
import { useRouter } from 'next/router';

function MyApp() {
  const router = useRouter();
  const path = router.asPath;

  return (
    <AppContainer>
      <Navigation></Navigation>
      {path === '/' && (
        <>
          <Homepage></Homepage>
          <TechStack></TechStack>
          <Projects></Projects>
        </>
      )}

      {path === '/tech_stack' && <TechStack></TechStack>}
      {path === '/projects/show_more' && <Projects></Projects>}
      {path === '/404' && <NoPage></NoPage>}
      <FooterComponent></FooterComponent>
    </AppContainer>
  );
}

export default MyApp;
