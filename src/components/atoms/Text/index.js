import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = ({ children, color }) => (
  <TextWrapper color={color}>{children}</TextWrapper>
);

const TextWrapper = styled.h5`
  background-color: #1c46f2;
  white-space: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  font-family: 'Open Sans';
  font-weight: 300;
  margin: 40px;
  padding: 20px;
  opacity: 1;

  color: ${({ color }) => (color ? color : '#fff')};
`;

Text.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};

export default Text;
