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
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  color: #ffffff;
`;

const headerTitleCSS = css`
  font-size: 55px;
  line-height: 73px;
  font-weight: 700;
  color: #000000;
`;

const TitleWrapper = styled.h3`
  white-space: normal;
  font-family: 'Montserrat';
  letter-spacing: 0px;
  text-align: inherit;
  margin: 0px;
  padding: 0px;

  ${({ titleCSS }) => titleCSS}
  color: ${({ color }) => (color ? color : 'inherit')};
`;

Title.propTypes = {
  children: PropTypes.string,
  header: PropTypes.bool,
  color: PropTypes.string,
};

export default Title;
