import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Cam from '../elements/images/Cam';

import Badge from '../elements/Badge';
import Root from '../elements/Root';
import Heading from '../elements/Heading';
import Subheading from '../elements/Subheading';
import SectionHeader from '../elements/SectionHeader';
import Paragraph from '../elements/Paragraph';
import Links from '../elements/Links';

import { BRAND_COLOUR } from '../elements/global';

const EssayPage = () => (
  <Root>
    <Badge size="160px" image={<Cam />} />
    <Heading>Too many constraints, or not enough?</Heading>
    <Subheading>
      At work, accountability and achievability play a constant tug-of-war in your mind.
      Are you getting caught in the middle?
    </Subheading>
    <Paragraph>
      By Cameron Gorrie
      {' '}
      &lt;
      <a href="mailto:sastraxi@gmail.com">sastraxi@gmail.com</a>
      &gt;, March 2022
    </Paragraph>
    <Paragraph>
      Hello
    </Paragraph>
  </Root>
);

export default EssayPage;
