import React from 'react';
import { ThemeProvider } from 'styled-components';

import Main from '../components/molecules/Main';
import Seo from '../components/seo';
import Aside from '../components/molecules/Aside';
import { epicTheme } from '../styles/themes';

const IndexPage = () => (
  <ThemeProvider theme={epicTheme}>
    <div>
      <Seo title="Chukwuemeka" />
      <Main />
      <Aside />
    </div>
  </ThemeProvider>
);

export default IndexPage;
