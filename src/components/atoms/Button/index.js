import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ children, download }) => {
  const buttonCSS = download ? downloadButtonCSS : defaultButtonCSS;
  return <ButtonWrapper buttonCSS={buttonCSS}>{children}</ButtonWrapper>;
};

const defaultButtonCSS = css`
  background-color: ${props => props.theme.primary};
  border-color: ${props => props.theme.primary};

  &:hover {
    background-color: ${props => props.theme.primaryHover};
    border-color: ${props => props.theme.primaryHover};
    cursor: pointer;
  }
`;

const downloadButtonCSS = css`
  background-color: ${props => props.theme.secondary};
  border-color: ${props => props.theme.secondary};

  &:hover {
    background-color: ${props => props.theme.secondaryHover};
    border-color: ${props => props.theme.secondaryHover};
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.button`
  color: ${props => props.theme.accent};
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
  children: PropTypes.string.isRequired,
  download: PropTypes.bool,
};

export default Button;
