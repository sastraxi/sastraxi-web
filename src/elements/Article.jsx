import React from 'react';
import styled from 'styled-components';

import '../init.css';
import { BOX_SHADOW, BRAND_COLOUR, BRAND_COLOUR_A10, BRAND_COLOUR_A25, BRAND_COLOUR_A40, BRAND_COLOUR_A50 } from './global';

const Article = styled.div`
  line-height: 150%;

  p {
    max-width: 40em;
  }

  li {
    max-width: 30em;
  }

  li + li {
    margin-top: 0.4em;
  }

  h1 { 
    margin: 0;
    margin-top: 0.5em;
    font-size: 2.2em;
  
    line-height: 110%;
  
    @media print {
      margin-top: 0;
    }
  }

  h2 {
    margin: 0;
    margin-top: 30px;
    margin-bottom: 20px;
    line-height: 140%;
    font-size: 1.8em;
    font-weight: 500;
  }

  h3 {
    margin-top: 1.5em;
    margin-bottom: 0.2em;
    font-size: 1.15em;
    font-weight: 500;
  }
  h3 + p { margin-top: 0; }

  blockquote {
    margin-left: 0;
    max-width: 36em;
    border-left: 3em solid ${BRAND_COLOUR_A10};
    padding: 0.1em 1.2em;
    position: relative;
  }
  blockquote::after {
    content: "";
    width: 3px;
    top: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    background: ${BRAND_COLOUR_A25};
  }

  blockquote > :first-child {
    margin-top: 0.7em;
  }

  code {
    background: ${BRAND_COLOUR};
    color: white;
    font-family: monospace;
    font-size: 1.1em;
    padding: 0.15em 0.6em;
    line-height: 0.8em;
    border-radius: 3px;
    box-shadow: inset -0.1em -0.1em 0 rgba(255, 255, 255, 0.3);
  }

`;

export default Article;
