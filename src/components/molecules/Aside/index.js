import React from 'react';
import styled, { withTheme } from 'styled-components';

import SocialMediaIcons from '../Social-Media-Icons';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

const Aside = ({ theme }) => (
  <AsideWrapper>
    <ContentWrapper>
      <InfoWrapper>
        <Title color={theme.accent}>Email</Title>
        <Text>chukwuemekachm@gmail.com</Text>
      </InfoWrapper>
      <InfoWrapper>
        <Title color={theme.accent}>Phone</Title>
        <Text>+2348076960039</Text>
      </InfoWrapper>
      <InfoWrapper>
        <Title color={theme.accent}>Find Me On</Title>
        <SocialMediaIcons />
      </InfoWrapper>
      <Button download>DOWNLOAD VCARD</Button>
    </ContentWrapper>
  </AsideWrapper>
);

const InfoWrapper = styled.div`
  margin-bottom: 25px;

  h3 {
    margin-bottom: 5px;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 20px;

  @media only screen and (max-width: 768px) {
    position: static;
    min-width: 100%;
  }
`;

const AsideWrapper = styled.div`
  background-color: ${props => props.theme.primary};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding-left: 3.7%;
  min-width: 472px;
  box-sizing: border-box;

  @media only screen and (min-width: 1500px) {
    left: 5%;
  }

  /* @media only screen and (min-width: 1500px) and (max-width: 1599px) {
    left: 5%;
  } */

  @media only screen and (max-width: 768px) {
    margin-top: 32px;
    min-width: 100%;
    padding: 32px 0;
    text-align: center;
    position: static;
  }
`;

export default withTheme(Aside);
