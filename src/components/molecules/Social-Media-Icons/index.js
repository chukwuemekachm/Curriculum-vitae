import React from 'react';
import styled from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

import Icon from '../../atoms/Icon';

const SocialMediaIcons = () => (
  <IconsWrapper>
    <Icon>
      <IoLogoGithub />
    </Icon>
    <Icon>
      <IoLogoLinkedin />
    </Icon>
    <Icon>
      <IoLogoTwitter />
    </Icon>
  </IconsWrapper>
);

const IconsWrapper = styled.div``;

export default SocialMediaIcons;
