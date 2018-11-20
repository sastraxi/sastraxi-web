import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import '../init.css';
import { BOX_SHADOW, BRAND_COLOUR } from './global';

const Outer = styled.div`
`;

const Inner = styled.div`
  padding: 3em;
  background: white;
  box-shadow: ${BOX_SHADOW};
  max-width: 700px;
  border-right: 5px solid ${BRAND_COLOUR};
  margin: 0;

  a {
    color: ${BRAND_COLOUR};
  }

  @media (max-width: 700px) {
    border-right: none;
  }

  @media (max-width: 480px) {
    text-align: center;
    padding: 2em 1.5em;
  }
`;

const Wrapper = ({ children }) => (
  <>
    <Helmet
      title="Cameron Gorrie | sastraxi.com"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Outer>
      <Inner>
        {children}
      </Inner>
    </Outer>
  </>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
