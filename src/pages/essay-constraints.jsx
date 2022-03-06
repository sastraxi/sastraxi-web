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
    <Heading>Are you over-constrained or under-constrained?</Heading>
    <Subheading>
      At work, accountability and achievability play a constant tug-of-war in your mind.
      Are you getting caught in the middle?
    </Subheading>
    <Paragraph>
      Abc Def Ghi
    </Paragraph>
  </Root>
);

export default EssayPage;
