import React from 'react';
import { Link } from 'gatsby';

import Cam from '../elements/images/Cam';

import Badge from '../elements/Badge';
import Root from '../elements/Root';
import Heading from '../elements/Heading';
import Subheading from '../elements/Subheading';
import Paragraph from '../elements/Paragraph';
import Links from '../elements/Links';
import SectionHeader from '../elements/SectionHeader';
import Projects from '../components/Projects';

const IndexPage = () => (
  <Root>
    <Badge size="120px" image={<Cam />} />
    <Heading>Cameron Gorrie</Heading>
    <Subheading>Software architect, leader, mentor, advocate</Subheading>
    <Links>
      <Link to="/resume">Résumé</Link>
      <Link to="/blog">Blog</Link>
      <a href="mailto:sastraxi+weblinks@gmail.com">Email</a>
      <a href="https://github.com/sastraxi">Github</a>
      <a href="https://github.com/sfc-gh-cgorrie">Github (Snowflake)</a>
      <a href="https://www.linkedin.com/in/camerongorrie/">Linkedin</a>
    </Links>
    <Paragraph>
      Developer experience @ <a href="https://www.snowflake.com/en/">Snowflake</a>
      . Formerly Principal dev @&nbsp;
      <a href="https://tophat.com">Top Hat</a>
      , mentor / instructor
      @&nbsp;
      <a href="https://www.lighthouselabs.ca">Lighthouse Labs</a>
      , CTO @&nbsp;
      <a href="https://robin.live">Robin Media</a>
      , dev @&nbsp;
      <a href="https://streetcontxt.com">Street Contxt</a>
      , software team lead
      @&nbsp;
      <a href="https://lyricfind.com">LyricFind</a>
      . Techstars Music 2017&nbsp;
      <a href="https://medium.com/techstars/announcing-techstars-music-2017-this-one-goes-to-11-3dc0d8b6f88f">
        alumnus
      </a>
      .
    </Paragraph>
    <Paragraph>
      I love to learn, and I love solving problems.&nbsp;
      I live in Toronto, Ontario and am currently open to remote opportunities.
    </Paragraph>
    <SectionHeader>How I work</SectionHeader>
    <Paragraph>
      I solve people problems by supporting, mentoring, and enabling my
      co-workers, as well as by contributing in management capacities through
      servant leadership. Over my career, I have gained a wealth of experience
      both in managing dev teams and facilitating communication between
      different branches of organisations.
    </Paragraph>
    <Paragraph>
      I solve tech, product, and usability problems by breaking them down and
      approaching them from several different perspectives simultaneously.
      Sometimes it&apos;s better to build something quick, and sometimes it&apos;s
      worth taking the time to get it completely right.
      Generally, it&apos;s a matter of weighing technical debt against the
      business use case, coming up with the simplest robust design, reducing
      scope where appropriate, and making sure the team moves forward together
      while keeping mental models aligned.
    </Paragraph>
    <Paragraph>
      I have used this methodology to successfully deliver many products within
      reasonable timeframes and budgets, all under various degrees of
      uncertainty&mdash;sometimes extreme. There are many correct approaches
      to building software, and we owe it to the problem to choose the right one.
    </Paragraph>
    <SectionHeader>What I&apos;m up to</SectionHeader>
    <Paragraph>
      Since March 2023, I've been working at&nbsp;
      <a href="https://snowflake.com">Snowflake</a>
      , building a local development experience for the&nbsp;
      <a href="https://www.snowflake.com/en/data-cloud/workloads/applications/native-apps/">Native Apps Framework</a>
      , which has involved significant contribution to&nbsp;
      <a href="https://docs.snowflake.com/en/developer-guide/snowflake-cli-v2/index">Snowflake CLI</a>
      &nbsp;as well as many improvements to the underlying framework.
    </Paragraph>
    <Paragraph>
      See my <a href="https://medium.com/snowflake/zero-to-one-with-snowflake-native-apps-c108b0e51fc9">blog post</a> that outlines some of this work.
    </Paragraph>
    <SectionHeader>Selected projects</SectionHeader>
    <Projects />
    <SectionHeader>Miscellaneous</SectionHeader>
    <Paragraph>
      <a href="https://github.com/sastraxi/sastraxi-web">This site</a>
      &nbsp;was built using&nbsp;
      <a href="https://gatsbyjs.org">Gatsby</a>.
    </Paragraph>
    <Paragraph>
      Here is an example of my&nbsp;
      <a href="https://medium.com/@sastraxi/authenticated-and-stitched-schemas-with-postgraphile-passport-and-stripe-a51490a858a2">
        technical writing
      </a>
      . In this article, I walk the reader through building a simple stitched
      GraphQL schema using node.js,&nbsp;
      <a href="https://www.graphile.org/postgraphile/">PostGraphile</a>
      ,
      and&nbsp;
      <a href="https://stripe.com">Stripe</a>
      .
    </Paragraph>
    <Paragraph>
      I record and perform music regularly. See
      {' '}
      <a href="https://myfavouritefilter.bandcamp.com/">
        My Favourite Filter on Bandcamp
      </a>
      {' '}
      or
      {' '}
      <a href="https://seedling.bandcamp.com/">Seedling on Bandcamp</a>
      .
    </Paragraph>
    <Paragraph />
  </Root>
);

export default IndexPage;
