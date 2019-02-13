import React from 'react';
import styled, { withTheme } from 'styled-components';

import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';

const Main = ({ theme }) => (
  <MainWrapper>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <ContentWrapper>
      <Title header>Chukwuemeka</Title>
      <Title header color={theme.primary}>
        Chima
      </Title>
      <Title>Fullstack JavaScript Developer</Title>
      <Text color={theme.secondary}>
        An experienced Software Engineer with a demonstrated history of working
        in the information technology and services industry. Skilled at building
        Fullstack web apps on REST and GraphQL services. Currently works at
        Andela.
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

  @media only screen and (min-width: 1700px) {
    right: 26%;
  }

  @media only screen and (min-width: 1600px) and (max-width: 1699px) {
    right: 16%;
  }

  @media only screen and (min-width: 1500px) and (max-width: 1599px) {
    right: 14%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    position: static;
    padding: 16px;
    box-sizing: border-box;

    span {
      margin: 36px 0;
    }

    h3:nth-of-type(3) {
      margin-top: 16px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 380px;
  height: auto;
  position: absolute;
  top: 25%;
  left: 23%;
  z-index: 10;

  @media only screen and (min-width: 1600px) {
    left: 26%;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
    height: auto;
    margin: 16px auto;
    position: static;
    box-sizing: border-box;
  }
`;

export default withTheme(Main);
