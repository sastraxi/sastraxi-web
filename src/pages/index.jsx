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
    <Subheading>Software architect, problem solver, mentor</Subheading>
    <Links>
      <Link to="/resume">Résumé</Link>
      <Link to="/blog">Blog</Link>
      <a href="mailto:sastraxi+weblinks@gmail.com">Email</a>
      <a href="https://github.com/sastraxi">Github</a>
      <a href="https://www.linkedin.com/in/camerongorrie/">Linkedin</a>
    </Links>
    <Paragraph>
      Staff developer @&nbsp;
      <a href="https://tophat.com">Top Hat</a>
      . Formerly a mentor / instructor
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
      <a href="mailto:sastraxi+webcta@gmail.com">Get in touch</a>
      .
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
      Sometimes it&apos;s better to build a quick proof-of-concept or even a
      landing page to capture interest than to build the new feature outright.
      Other times, it&apos;s a matter of weighing technical debt against the
      business use case, coming up with the simplest robust design, reducing
      scope where appropriate, and making sure the team moves forward together
      while communicating simply (and often asynchronously).
    </Paragraph>
    <Paragraph>
      I have used this methodology to successfully deliver many products within
      reasonable timeframes and budgets, all under various degrees of
      uncertainty. I believe that there are many correct approaches to building
      software, and mine is just one of them.
    </Paragraph>
    <SectionHeader>What I&apos;m up to</SectionHeader>
    <Paragraph>
      In April 2019, I joined&nbsp;
      <a href="https://tophat.com/">Top Hat</a>
      &nbsp;and served the business as a Director of Engineering for three years
      before transitioning to a Staff role. See my
      {' '}
      <Link to="/resume">CV</Link>
      {' '}
      for more information about what I&apos;ve
      been up to there.
    </Paragraph>
    <Paragraph>
      I have been mentoring students at&nbsp;
      <a href="https://www.lighthouselabs.ca">Lighthouse Labs</a>
      &nbsp;for a few months now, and it has been deeply satisfying witnessing
      their journeys. There are these moments when their eyes light up and they
      make a hundred connections at once in their brains about programming and
      for that brief second it all makes sense. I love that feeling myself, and
      I love helping others get there.
    </Paragraph>
    <Paragraph>
      I am super proud of the work we&apos;ve done at&nbsp;
      <a href="https://robin.live">Robin Media</a>
      , where I led the development
      of our initiatives up until September 2018. I also led a 2-year rewrite of
      the&nbsp;
      <a href="https://lyricfind.com">LyricFind</a>
      &nbsp;backend systems from 2014-2016. I also took on a good amount of the
      product and project management tasks for these efforts.
    </Paragraph>
    <SectionHeader>Selected projects</SectionHeader>
    <Projects />
    <SectionHeader>Miscellaneous</SectionHeader>
    <Paragraph>
      <a href="https://github.com/sastraxi/sastraxi-web">This site</a>
      &nbsp;was built using&nbsp;
      <a href="https://gatsbyjs.org">Gatsby</a>
      . While it has its hiccups, I&apos;ve found it simple to keep up-to-date
      while providing high performance and accessibility.
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
      I have participated in a number of bands as a songwriter, bassist, and/or
      vocalist. Check out
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
