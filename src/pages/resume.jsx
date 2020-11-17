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
      padding-top: 0.4em;
    }
  }
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
        &nbsp;(Director of Engineering)
      </Company>
      <Date>Apr 2019 to present</Date>
      <Duties>
        As part of the leadership team of the Product & Engineering department,
        my duties have ranged from mentoring ICs, coaching team and technology leads,
        software architecture, designing and running pre- and post-mortem sessions, to
        adapting and adopting Basecamp's <a href="https://basecamp.com/shapeup">Shape Up</a>
        for our business, stakeholder management, and being a partner to Product in
        shaping the future of classrooms in higher education.
      </Duties>
      <Duties>
        At the core of this is the people-centric approach that I bring to everything I do.
        I've been part of and contributed our internal communications strategy, ensuring
        that a number of business pivots and reorganizations were received warmly by our
        developers, leads, and partners across the organisation. This has meant providing
        as much transparency as possible on decision-making happening at the exec level,
        while being clear and pragmatic about next steps.
      </Duties>
      <Duties>
        Overall, I'm grateful to work at a company with supremely talented individuals
        and a meaningful mission.
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
        prepared and gave lectures to complement the course material (
        <a href="https://github.com/sastraxi/w2d1-node-api-demo">an example</a>
        ).
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>
        <a href="https://robin.live">Robin Media</a>
        &nbsp;(CTO, co-founder)
      </Company>
      <Date>September 2016 to August 2018</Date>
      <Duties>
        In late summer 2016, we set out to take on companies like Ticketmaster
        and StubHub with a consumer-centric, demand-side approach to ticketing:
        ticket reservations. We iterated on this approach for a year and a half
        (including participating in the&nbsp;
        <a href="https://www.techstars.com/content/accelerators/announcing-techstars-music-2017-one-goes-11/">
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
        , managing technical debt, and making sure our
        products were deployed properly.
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
      Other substantial projects I&apos;ve worked on include&nbsp;
      <b>Live Lecture</b>
      &nbsp;(an education-focused video streaming platform built with Python and&nbsp;
      <a href="https://www.wowza.com/">Wowza</a>
      ),&nbsp;
      <b>DCS Infosys</b>
      &nbsp;(a project to digitise the records of the Department of
      Computer Science at the University of Toronto), and&nbsp;
      <b>JSCOOP</b>
      &nbsp;(a Java/Eclipse&nbsp;
      <a href="https://code.google.com/archive/p/jscoop/">implementation</a>
      &nbsp;of the&nbsp;
      <a href="https://www.eiffel.org/doc/solutions/Concurrent_programming_with_SCOOP">SCOOP paradigm</a>
      &nbsp;from Eiffel).
    </Paragraph>
    <SectionHeader>
      Selected technical skills
    </SectionHeader>
    <SkillsTable />
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
    <SectionHeader>
      References
    </SectionHeader>
    <Paragraph>
      Available&nbsp;
      <a href="mailto:sastraxi+webrefs@gmail.com">by request</a>
      .
    </Paragraph>
  </Root>
);

export default IndexPage;
