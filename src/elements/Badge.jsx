import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BRAND_COLOUR } from './global';

// https://stackoverflow.com/questions/66835241/gatsby-image-plugin-not-displaying-properly-on-ios-devices
const BadgeOuter = styled.a`
  display: inline-block;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  padding: 0;
  overflow: hidden;
  border: 3px solid ${BRAND_COLOUR};
  position: relative;
  z-index: 0;

  margin-bottom: 1em;

  float: right;
  margin-left: 1em;
  @media (max-width: 480px) {
    float: none;
    margin-left: 0;
  }
  

  @media print {
    display: none;
  }
`;

const Badge = ({ image, size }) => (
  <BadgeOuter size={size} href="/">
    { image }
  </BadgeOuter>
);

Badge.propTypes = {
  image: PropTypes.node.isRequired,
  size: PropTypes.string,
  float: PropTypes.oneOf(['left', 'right', 'none']),
};

Badge.defaultProps = {
  size: '200px',
  float: 'none',
};

export default Badge;
