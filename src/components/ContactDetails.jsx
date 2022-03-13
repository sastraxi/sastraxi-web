import React from 'react';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';

const ContactDetails = styled(Paragraph)`
  margin-top: -0.5em;

  a:after {
    content: none;
  }

  display: none;
  @media print {
    display: block;
  }
`;

export default () => (
  <ContactDetails>
    Email&nbsp;
    <a href="mailto:sastraxi+resume@gmail.com">sastraxi@gmail.com</a>
    , or call 647.551.9485
  </ContactDetails>
);
