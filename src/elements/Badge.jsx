import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BRAND_COLOUR } from './global';

const BadgeOuter = styled.span`
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  padding: 0;
  overflow: hidden;
  border: 3px solid ${BRAND_COLOUR};
`;

const Badge = ({ image, size }) => (
  <BadgeOuter size={size}>
    { image }
  </BadgeOuter>
);

Badge.propTypes = {
  image: PropTypes.node.isRequired,
  size: PropTypes.string,
};

Badge.defaultProps = {
  size: '200px',
};

export default Badge;
