import React from 'react';
import styled from 'styled-components';

import SocialMediaIcons from '../Social-Media-Icons';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';

const Aside = () => (
  <AsideWrapper>
    <ContentWrapper>
      <InfoWrapper>
        <Title color="#fff">Email</Title>
        <Text>chukwuemekachm@gmail.com</Text>
      </InfoWrapper>
      <InfoWrapper>
        <Title color="#fff">Phone</Title>
        <Text>+2348076960039</Text>
      </InfoWrapper>
      <InfoWrapper>
        <Title color="#fff">Find Me On</Title>
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
`;

const AsideWrapper = styled.div`
  background-color: #1c46f2;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  padding-left: 3.7%;
  min-width: 472px;
  max-width: 35%;
  box-sizing: border-box;
`;

export default Aside;
