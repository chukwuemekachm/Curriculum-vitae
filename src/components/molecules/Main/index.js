import React from 'react';
import styled from 'styled-components';

import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

const Main = () => (
  <MainWrapper>
    <ContentWrapper>
      <Title header>Chukwuemeka</Title>
      <Title header color="#1c46f2">
        Chima
      </Title>
      <Title>Fullstack JavaScript Developer</Title>
      <Text color="#000">
        An experienced Software Engineer with a demonstrated history of working
        in the information technology and services industry. Skilled at building
        Fullstack web apps on REST and GraphQL services.
        <br />
        Currently works at Andela.
      </Text>
      <Button>PORTFOLIO</Button>
    </ContentWrapper>
  </MainWrapper>
);

const MainWrapper = styled.div``;

const ContentWrapper = styled.div`
  width: 480px;
  text-align: left;
  position: absolute;
  top: 28%;
  right: 11%;

  h3:nth-of-type(3) {
    font-weight: 600;
    margin-top: 10px;
  }

  span {
    margin: 32px 0 32px 0;
  }
`;

export default Main;
