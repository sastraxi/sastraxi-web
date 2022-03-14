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
import SkillsTable from '../components/SkillsTable';
import ContactDetails from '../components/ContactDetails';

import { BRAND_COLOUR } from '../elements/global';
import Projects from '../components/Projects';

const Company = styled.div`
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 80%;
`;

const Duties = styled.div`
  margin-top: 0.4em;
  @media (min-width: 481px) {
    margin-left: 0.2em;
    padding-left: 0.8em;
    border-left: 1px solid ${BRAND_COLOUR};
    & + & {
      margin-top: 0;
      padding-top: 0.6em;
    }
  }
  @media print {
    font-size: 80%;
    margin-right: 2em;
  }
`;

const Together = styled.div`
  page-break-inside: avoid;
`;

const IndexPage = () => (
  <Root>
    <Badge size="160px" image={<Cam />} />
    <Heading>Cameron Gorrie</Heading>
    <Subheading>
      Software architect, entrepreneur, mentor
    </Subheading>
    <ContactDetails />
    <Links>
      <Link to="/">Back to the first page</Link>
    </Links>
    <SectionHeader>
      Selected work experience
    </SectionHeader>
    <Paragraph>
      <Company>
        <a href="https://tophat.com">Top Hat</a>
        &nbsp;(Director of Engineering, staff IC)
      </Company>
      <Date>Apr 2019 to present</Date>
      <Duties>
        As part of the leadership team of the Product &amp; Engineering department,
        my duties have been diverse. In addition to the following technical experiences
        I&apos;ve spent my time mentoring ICs, coaching team and technology leads,
        designing software architecture and documentation, (re-)building processes,
        and leading group sessions (such as premortems and design jams).
      </Duties>
      <Duties>
        <b>In 2019</b>
        , I flagged the need for, designed, gained alignment (via an RFC process)
        and drove the implementation of a new (&quot;ABAC&quot;) authorization
        service that would provide the role flexibility our institutional partners
        were asking for. This service is now in its final phase of roll-out and has
        enabled several features that shipped in 2021 (and will ship in 2022).
      </Duties>
      <Duties>
        <b>In 2020</b>
        , I directed our initiative to bring
        {' '}
        <a href="https://tophat.com/news/top-hat-launches-free-virtual-classroom-capabilities-to-help-educators-better-engage-and-motivate-higher-ed-students/">
          video streaming to our classroom offering
        </a>
        . This meant building a WebRTC-based proof-of-concept, evaluating different vendors,
        contract negotiation, post-sales relationship management, and building knowledge
        about video inside of our team. I also helped write our virtual classrom service
        (touching django, mysql, business logic, message broker events, etc).
      </Duties>
      <Duties>
        <b>In 2021</b>
        , I transitioned to an individual contributor role at the Staff level
        with a specific focus on frontend performance and developer experience. I lent
        my time to the marketing team, finishing our redesign of our external-facing Catalog.
        I wrote tests, fixed bugs, improved accessibility, built admin tools for the back
        office, improved end-user performance, and updated our Cloudformation templates to
        allow the site to be rooted at both old and new URLs while the re-brand was occurring.
      </Duties>
      <Duties>
        <b>In 2022</b>
        , I continued my frontend focus while also supporting a number of other
        teams when needs arose. I optimized the (shared) critical boostrap path of our
        applications, improving many of the core web vitals of our apps by around 15% (P75).
        I rewrote a (pytest) test harness that used sqlite to use postgresql, for parity
        reasons as well as to allow us to test new dialect-specific code, while keeping
        the test suite extremely fast and improving UX by making it work in all sorts of
        dockerized/non-docker situations. I discovered and fixed many bugs in our frontend
        shared infrastructure, reducing bundle size for all apps by ~1.5mb. I participated
        in a &quot;tech debt&quot; removal strike team during our hackathon, retiring much
        of the older alt.js code in favour of our
        {' '}
        <a href="https://github.com/tophat/dont-waste-your-ducking-time">preferred global state solution</a>
        .
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>
        <a href="https://lighthouselabs.ca">Lighthouse Labs</a>
        &nbsp;(Mentor, lecturer)
      </Company>
      <Date>May 2018 to Apr 2019</Date>
      <Duties>
        Students in the web development immersive program at Lighthouse
        embark on a 10 week program to learn how to build software using
        Javascript, React, Ruby on Rails, and PostgreSQL. As a mentor,
        I helped students get &quot;unstuck&quot; and tried to transfer some
        of my high-level knowledge and instil best practices. I also
        prepared example code and gave lectures to complement the course material (
        <a href="https://github.com/sastraxi/w2d1-node-api-demo">an example</a>
        ).
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>
        <a href="https://robin.live">Robin Media</a>
        &nbsp;(CTO, co-founder; acquired)
      </Company>
      <Date>September 2016 to August 2018</Date>
      <Duties>
        In late summer 2016, we set out to take on companies like Ticketmaster
        and StubHub with a consumer-centric, demand-side approach to ticketing:
        ticket reservations. We iterated on this approach for a year and a half
        (including participating in the&nbsp;
        <a href="https://medium.com/techstars/announcing-techstars-music-2017-this-one-goes-to-11-3dc0d8b6f88f">
          Techstars Music 2017 accelerator
        </a>
        &nbsp;in Los Angeles)
        before pivoting and switching to a B2B event concierge approach.
      </Duties>
      <Duties>
        Management responsibilities included managing the development team, splitting
        product management duties with our design lead, performing user interviews
        and crafting narratives, sprint planning, and working with my co-founders
        to craft company vision. In addition, I led development efforts, building
        proof-of-concept systems, choosing the&nbsp;
        <a href="https://medium.com/@sastraxi/authenticated-and-stitched-schemas-with-postgraphile-passport-and-stripe-a51490a858a2">
          right technologies
        </a>
        , makin the right choices regarding &quot;technical debt&quot;, and making sure our
        products were deployed properly and in an automated fashion via Kubernetes.
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>
        <a href="https://streetcontxt.com">Street Contxt</a>
        &nbsp;(Software developer)
      </Company>
      <Date>March to September 2016</Date>
      <Duties>
        Part of a development team responsible for maintaining and adding
        features to a research exchange/marketplace web application aimed
        towards investment banks. Technologies used include Scala/Java, Solr,
        PostgreSQL, Apache Spark, Webpack, React, Knockout.
      </Duties>
      <Duties>
        The majority of my time here was spent optimizing our search infrastructure
        as well as ensuring that our emails were not flagged as spam or low-quality.
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>
        <a href="https://lyricfind.com">LyricFind</a>
        &nbsp;(Team lead)
      </Company>
      <Date>June 2012 to March 2016</Date>
      <Duties>
        Project manager/software team lead (of 8) for a music lyric
        licensing provider. Successfully delivered a project to rebuild
        our backend system (Spring MVC/MariaDB/Solr), precipitated by a
        fundamental business direction shift.
      </Duties>
      <Duties>
        Management responsibilities
        included interviewing/hiring full-time and co-op developers,
        setting short- and medium-term development goals, motivating
        and challenging the team, leading collaborative design sessions,
        building time projections and gathering requirements/scope from
        the CEO/CTO in order to deliver their vision. UI and UX design
        and prototyping for multiple internal data entry systems.
      </Duties>
    </Paragraph>
    <Paragraph>
      Other substantial projects I&apos;ve worked on include
      {' '}
      <b>Live Lecture</b>
      {' '}
      (an education-focused video streaming platform built with Python and
      {' '}
      <a href="https://www.wowza.com/">Wowza</a>
      ),
      {' '}
      <b>DCS Infosys</b>
      {' '}
      (a project to digitise the records of the Department of
      Computer Science at the University of Toronto), and
      {' '}
      <b>JSCOOP</b>
      {' '}
      (a Java/Eclipse
      {' '}
      <a href="https://code.google.com/archive/p/jscoop/">implementation</a>
      {' '}
      of the
      {' '}
      <a href="https://www.eiffel.org/doc/solutions/Concurrent_programming_with_SCOOP">SCOOP paradigm</a>
      {' '}
      from Eiffel; screencast available
      {' '}
      <a href="https://www.youtube.com/watch?v=J3N1VV2ngUk">here</a>
      ).
    </Paragraph>
    <Together>
      <SectionHeader>
        Selected projects
      </SectionHeader>
      <Projects />
    </Together>
    <Together>
      <SectionHeader>
        Selected technical skills
      </SectionHeader>
      <SkillsTable />
    </Together>
    <Together>
      <SectionHeader>
        Education
      </SectionHeader>
      <Paragraph>
        <Company>University of Toronto</Company>
        <Date>September 2006 to August 2010</Date>
        <Duties>
          H.B.Sc. with Distinction, Computer Science
          <br />
          Specialty in Artificial Intelligence, Parallel Processing
        </Duties>
      </Paragraph>
    </Together>
    <Together>
      <SectionHeader>
        References
      </SectionHeader>
      <Paragraph>
        Available&nbsp;
        <a href="mailto:sastraxi+webrefs@gmail.com">by request</a>
        .
      </Paragraph>
    </Together>
  </Root>
);

export default IndexPage;
