import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = ({ children }) => <IconWrapper>{children}</IconWrapper>;

const IconWrapper = styled.span`
  background-color: #1c46f2;
  padding: 0px;
  margin-right: 16px;

  svg {
    background-color: transparent;
    border-color: transparent;
    color: #fff;
    border: none;
    border-color: none;
  }
`;

Icon.propTypes = {
  children: PropTypes.element,
};

export default Icon;
