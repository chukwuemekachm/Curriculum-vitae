import React from 'react';
import styled from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

import Icon from '../../atoms/Icon';

const SocialMediaIcons = () => (
  <IconsWrapper>
    <Icon>
      <IoLogoLinkedin />
    </Icon>
    <Icon>
      <IoLogoGithub />
    </Icon>
    <Icon>
      <IoLogoTwitter />
    </Icon>
  </IconsWrapper>
);

const IconsWrapper = styled.div`
  margin-top: 10px;
`;

export default SocialMediaIcons;
