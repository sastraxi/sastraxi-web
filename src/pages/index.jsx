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

const IndexPage = () => (
  <Root>
    <Badge size="160px" image={<Cam />} />
    <Heading>Cameron Gorrie</Heading>
    <Subheading>
      Software architect, entrepreneur, mentor
    </Subheading>
    <Links>
      <Link to="/resume">Résumé</Link>
      <a href="mailto:sastraxi+weblinks@gmail.com">Email</a>
      <a href="https://github.com/sastraxi">Github</a>
      <a href="https://www.linkedin.com/in/camerongorrie/">Linkedin</a>
    </Links>
    <Paragraph>
      Senior Engineering Manager @&nbsp;
      <a href="https://tophat.com">Top Hat</a>
      . Formerly a mentor / instructor @&nbsp;
      <a href="https://www.lighthouselabs.ca">Lighthouse Labs</a>
      , CTO @&nbsp;
      <a href="https://robin.live">Robin Media</a>
      , dev @&nbsp;
      <a href="https://streetcontxt.com">Street Contxt</a>
      , software team lead @&nbsp;
      <a href="https://lyricfind.com">LyricFind</a>
      . Techstars Music 2017&nbsp;
      <a href="https://www.techstars.com/content/accelerators/announcing-techstars-music-2017-one-goes-11/">alumnus</a>
      .
    </Paragraph>
    <Paragraph>
      I love to learn, and I love solving problems.&nbsp;
      <a href="mailto:sastraxi+webcta@gmail.com">Get in touch</a>
      .
    </Paragraph>
    <SectionHeader>
      How I work
    </SectionHeader>
    <Paragraph>
      I solve people problems by supporting, mentoring, and enabling my co-workers,
      as well as by contributing in management capacities through servant leadership.
      Over my career, I have gained a wealth of experience both in managing dev teams
      and facilitating communication between different branches of organisations.
    </Paragraph>
    <Paragraph>
      I solve tech, product, and usability problems by breaking them down and
      approaching them from different perspectives.

      Sometimes it&apos;s better
      to build a quick proof-of-concept or even a landing page to capture
      interest than to build the new feature outright.

      Other times, it&apos;s a matter of weighing technical debt against
      the business use case, coming up with the simplest robust design,
      reducing scope, and making sure the team moves forward together
      while communicating with external stakeholders.
    </Paragraph>
    <Paragraph>
      I have used this methodology to successfully deliver many products
      within reasonable timeframes and budgets, all under various degrees
      of uncertainty. I believe that there are many correct approaches
      to building software.
    </Paragraph>
    <SectionHeader>
      What I&apos;m up to
    </SectionHeader>
    <Paragraph>
      Most recently, I joined&nbsp;
      <a href="https://tophat.com/">Top Hat</a>
      &nbsp;as a Senior Engineering Manager.
    </Paragraph>
    <Paragraph>
      I have been mentoring students at&nbsp;
      <a href="https://www.lighthouselabs.ca">Lighthouse Labs</a>
      &nbsp;for a few months now, and it has been deeply satisfying witnessing
      their journeys. There are these moments when their eyes light up
      and they make a hundred connections at once in their brains about programming and
      for that brief second it all makes sense. I love that feeling myself,
      and I love helping others get there.
    </Paragraph>
    <Paragraph>
      More concretely, I am super proud of the work we&apos;ve done at&nbsp;
      <a href="https://robin.live">Robin Media</a>
      , where I led the development of our initiatives up until September 2018.
      I also led a 2-year rewrite of the&nbsp;
      <a href="https://lyricfind.com">LyricFind</a>
      &nbsp;backend systems from 2014-2016.
      I also took on a good amount of the product and project
      management tasks for these efforts.
    </Paragraph>
    <Paragraph>
      Here is an example of my&nbsp;
      <a href="https://medium.com/@sastraxi/authenticated-and-stitched-schemas-with-postgraphile-passport-and-stripe-a51490a858a2">
        technical writing
      </a>
      . In this article, I walk the reader through building a simple
      stitched GraphQL schema using node.js,&nbsp;
      <a href="https://www.graphile.org/postgraphile/">PostGraphile</a>
      , and&nbsp;
      <a href="https://stripe.com">Stripe</a>
      .
    </Paragraph>
    <Paragraph>
      <a href="https://github.com/sastraxi/sastraxi-web">This site</a>
      &nbsp;was built using&nbsp;
      <a href="https://gatsbyjs.org">Gatsby</a>
      .
    </Paragraph>
  </Root>
);

export default IndexPage;
