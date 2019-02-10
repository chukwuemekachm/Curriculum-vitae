import React from 'react';
import styled from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

import Icon from '../../atoms/Icon';

const SocialMediaIcons = () => (
  <IconsWrapper>
    <a
      href="https://linkedin.com/in/chima-chukwuemeka-b17716168/"
      target="_blank"
    >
      <Icon>
        <IoLogoLinkedin />
      </Icon>
    </a>
    <a href="https://github.com/chukwuemekachm" target="_blank">
      <Icon>
        <IoLogoGithub />
      </Icon>
    </a>
    <a href="https://twitter.com/chukwuemekachm" target="_blank">
      <Icon>
        <IoLogoTwitter />
      </Icon>
    </a>
  </IconsWrapper>
);

const IconsWrapper = styled.div`
  margin-top: 10px;
`;

export default SocialMediaIcons;
