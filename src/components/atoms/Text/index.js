import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = ({ children, color }) => (
  <TextWrapper color={color}>{children}</TextWrapper>
);

const TextWrapper = styled.span`
  background-color: #1c46f2;
  white-space: normal;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 1.5px;
  font-family: 'Open Sans';
  font-weight: 100;
  margin: 0px;
  padding: 0px;
  opacity: 1;

  color: ${({ color }) => (color ? color : '#efeff4')};
`;

Text.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
};

export default Text;
