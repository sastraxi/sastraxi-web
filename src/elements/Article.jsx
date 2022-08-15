import React from 'react';
import styled from 'styled-components';

import '../init.css';
import { BOX_SHADOW, BRAND_COLOUR } from './global';

const Article = styled.div`

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
`;

export default Article;
