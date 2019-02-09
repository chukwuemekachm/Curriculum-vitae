import React from 'react';

import Main from '../components/molecules/Main';
import Seo from '../components/seo';
import Aside from '../components/molecules/Aside';

const IndexPage = () => (
  <div>
    <Seo title="Chukwuemeka" />
    <Aside />
    <Main />
  </div>
);

export default IndexPage;
