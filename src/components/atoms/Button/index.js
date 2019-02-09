import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ children, download }) => {
  const buttonCSS = download ? downloadButtonCSS : defaultButtonCSS;
  return <ButtonWrapper buttonCSS={buttonCSS}>{children}</ButtonWrapper>;
};

const defaultButtonCSS = css`
  background-color: #1c46f2;
  border-color: #1c46f2;

  &:hover {
    background-color: #0b30c1;
    border-color: #0b30c1;
    cursor: pointer;
  }
`;

const downloadButtonCSS = css`
  background-color: #07123d;
  border-color: #07123d;

  &:hover {
    background-color: #1c46f2;
    border-color: #1c46f2;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.button`
  color: #ffffff;
  white-space: nowrap;
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 2px;
  font-family: 'Montserrat';
  font-weight: 200;
  border-radius: 5px;
  margin: 0px;
  padding: 10px 30px;
  opacity: 1;

  ${({ buttonCSS }) => buttonCSS}
`;

Button.propTypes = {
  children: PropTypes.string,
  download: PropTypes.bool,
};

export default Button;
