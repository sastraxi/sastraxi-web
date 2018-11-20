import React from 'react';
import styled from 'styled-components';

import Cam from '../elements/images/Cam';

import Badge from '../elements/Badge';
import Root from '../elements/Root';
import Heading from '../elements/Heading';
import Subheading from '../elements/Subheading';
import Paragraph from '../elements/Paragraph';
import SkillsTable from '../components/SkillsTable';

const Links = styled(Paragraph)`
  & > a {
    display: inline-block;
    margin-right: 0.5em;
  }

  @media (max-width: 480px) {
    text-align: center;
    margin: 2em 0;
  }
`;

const IndexPage = () => (
  <Root>
    <Badge size="160px" image={<Cam />} />
    <Heading>Cameron Gorrie</Heading>
    <Subheading>
      Software architect, mentor, entrepreneur
    </Subheading>
    <Links>
      <a href="mailto:sastraxi+weblinks@gmail.com">Email</a>
      <a href="https://github.com/sastraxi">Github</a>
      <a href="https://www.linkedin.com/in/camerongorrie/">Linkedin</a>
      <a href="https://angel.co/cam-gorrie">AngelList</a>
    </Links>
    <Paragraph>
      Mentor / instructor @&nbsp;
      <a href="https://www.lighthouselabs.ca">Lighthouse Labs</a>
      . Formerly CTO @&nbsp;
      <a href="https://robin.live">Robin Media</a>
      , dev @&nbsp;
      <a href="https://streetcontxt.com">Street Contxt</a>
      , software team lead @&nbsp;
      <a href="https://lyricfind.com">LyricFind</a>
      .
    </Paragraph>
    <Paragraph>
      I love learning, and I love solving problems.&nbsp;
      <a href="mailto:sastraxi+webcta@gmail.com">Get in touch</a>
      .
    </Paragraph>
    <Paragraph>
      I solve people problems by supporting, mentoring, and enabling my co-workers,
      as well as by contributing in management capacities. Over my career, I have
      gained a wealth of experience both in managing dev teams and facilitating
      communication between different branches of organisations.
    </Paragraph>
    <Paragraph>
      I solve tech, product, and usability problems by breaking them down and
      approaching them from every angle imaginable. Building user stories, performing
      user inteviews, more formal requirements analysis, and expectaton setting
      are all tools I have used to succesfully deliver products within reasonable
      timeframes and budgets. I believe that there is no&nbsp;
      <i>one</i>
      &nbsp;correct approach to
      building software, but rather that it is context-dependent (in a big way!).
    </Paragraph>
    <Paragraph>
      My greatest achievements so far have been in watching the students I&apos;ve mentored
      grow. I live for that moment when their eyes light up and they make a hundred
      connections at once in their brains about programming and for that brief second
      it all makes sense. I love that feeling myself, and I love helping others get there.
    </Paragraph>
    <Paragraph>
      More concretely, I lead the development of all of&nbsp;
      <a href="https://robin.live">Robin Media</a>
      &apos;s initiatives up until September 2018 and lead a 2-year rewrite
      of the Lyricfind backend systems from 2014-2016.
      I was also (largely) responsible for product and project management on these efforts.
    </Paragraph>
    <Paragraph>
      See an example of my&nbsp;
      <a href="https://medium.com/@sastraxi/authenticated-and-stitched-schemas-with-postgraphile-passport-and-stripe-a51490a858a2">
        technical writing
      </a>
      . In this article, I walk the reader through building a simple
      stitched GraphQL schema using node.js and&nbsp;
      <a href="https://www.graphile.org/postgraphile/">PostGraphile</a>
      .
    </Paragraph>
    <Subheading>
      Selected technical skills
    </Subheading>
    <SkillsTable />
    <Paragraph>
      I perform with a band called&nbsp;
      <a href="https://myfavouritefilter.com">
        My Favourite Filter
      </a>
      &nbsp;in Toronto, Ontario. The band&apos;s website is
      another example of a static site written in Gatsby; the source
      code is available on my&nbsp;
      <a href="https://github.com/sastraxi">Github</a>
      .
    </Paragraph>
    <Paragraph>
      This site was built using&nbsp;
      <a href="https://gatsbyjs.org">Gatsby</a>
      .
    </Paragraph>
  </Root>
);

export default IndexPage;
