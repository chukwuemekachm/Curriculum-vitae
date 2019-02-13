import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Title = ({ children, header, color }) => {
  const titleCSS = header ? headerTitleCSS : defaultTitleCSS;
  return (
    <TitleWrapper titleCSS={titleCSS} color={color}>
      {children}
    </TitleWrapper>
  );
};

const defaultTitleCSS = css`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: ${props => props.theme.accent};
`;

const headerTitleCSS = css`
  font-size: 42px;
  line-height: 46px;
  font-weight: 600;
  color: #000000;
`;

const TitleWrapper = styled.h3`
  white-space: normal;
  font-family: 'Open Sans';
  letter-spacing: 0px;
  text-align: inherit;
  margin: 0px;
  padding: 0px;

  ${({ titleCSS }) => titleCSS}
  color: ${({ color }) => (color ? color : 'inherit')};
`;

Title.propTypes = {
  children: PropTypes.string.isRequired,
  header: PropTypes.bool,
  color: PropTypes.string,
};

export default Title;
