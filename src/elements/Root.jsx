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
  padding-right: 4.2em;
  background: white;
  box-shadow: ${BOX_SHADOW};
  max-width: 800px;
  border-left: 5px solid ${BRAND_COLOUR};
  border-right: 5px solid ${BRAND_COLOUR};
  margin: 0 auto;

  a {
    color: ${BRAND_COLOUR};
    @media print {
      &:after {
        content:" (" attr(href) ")";
        font-size: 0.8em;
        font-weight: normal;
      }
    }
  }

  @media (max-width: 820px) {
    border-left: none;
    border-right: none;
  }

  @media (max-width: 480px) {
    text-align: center;
    padding: 2em 1.5em;
  }

  @media print {
    padding: 2em !important;
    box-shadow: none !important;
    border: none !important;
    max-width: unset;
  }
`;

const Wrapper = ({ children, title }) => (
  <>
    <Helmet
      title={`${title} | sastraxi.com`}
      meta={[
        { name: 'description', content: 'The portfolio / resume website for Cameron Gorrie' },
        { name: 'keywords', content: 'resume, cv, portfolio, dev, gatsby' },
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
  title: PropTypes.string,
};

Wrapper.defaultProps = {
  title: 'Cameron Gorrie',
};

export default Wrapper;
