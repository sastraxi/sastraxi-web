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

const Together = styled.section`
  page-break-inside: avoid;
`;

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

const Resume = () => (
  <Root>
    <Badge size="120px" image={<Cam />} />
    <Heading>Cameron Gorrie</Heading>
    <Subheading>
      Software architect, leader, mentor, advocate
    </Subheading>
    <ContactDetails />
    <Links>
      <Link to="/">Back to the home page</Link>
    </Links>
    <SectionHeader>
      Selected work experience
    </SectionHeader>
    <Paragraph>
      <Company>
        <a href="https://snowflake.com">Snowflake</a>
        &nbsp;(Developer Experience)
      </Company>
      <Date>March 2023 to Present</Date>
      <Duties>
        I have been leading the vision and implementation for
        the local development experience of building&nbsp;
        <a href="https://www.snowflake.com/en/data-cloud/workloads/applications/native-apps/">Native Apps</a>
        &nbsp;inside the Snowflake ecosystem. We&apos;ve built this experience inside&nbsp;
        <a href="https://docs.snowflake.com/en/developer-guide/snowflake-cli-v2/index">Snowflake CLI</a>
        &nbsp;(Python) as well as making many improvements to the underlying framework (Java / FoundationDB).
        This work has reduced the time-to-first-app deployment from hours to minutes.
      </Duties>
      <Duties>
        This has involved writing functional and design specifications, moving them through the review
        process (including presenting to the CTO), interviewing and onboarding new team members, building workshops
        to spread knowledge internally, presenting to management and area architects, creating public-facing
        tutorials and examples, collaborating with teams in remote time zones, ideating and creating applications
        for our BUILD and Summit conferences, collaborating with other Snowflake teams as a domain expert,
        and doing away team work when dependency teams were not able to commit.
      </Duties>
      <Duties>
        In addition, I was acting Product Manager for our team until May 2024 and continue to maintain
        a laser focus on customer outcomes.
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>
        <a href="https://tophat.com">Top Hat</a>
        &nbsp;(Director of Engineering / Principal Developer)
      </Company>
      <Date>April 2019 to February 2023</Date>
      <Duties>
        As part of the leadership team of the Product &amp; Engineering department,
        my duties have been diverse. In addition to the following selected items
        I spend my time mentoring ICs, coaching team and technology leads, designing
        software architecture and documentation, (re-)building processes,
        and leading group sessions (such as premortems and design jams).
      </Duties>
      <Duties>
        <b>In 2019</b>
        , I designed (via RFC) and drove the implementation of an &quot;ABAC&quot;
        authorization service that provides the role flexibility our institutional
        partners had been asking for. This service has enabled several new features
        that helped us sell to institutions rather than individual professors.
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
        , I continued my frontend focus on the staff engineering team while supporting 5+ other
        (product) teams. I optimized the (shared) critical boostrap path of our webapps,
        improving many of the core web vitals of our apps by ~17% (P75).
        I rewrote a (pytest) test harness that used sqlite to use postgresql (for prod parity)
        while improving DX. I discovered and fixed many bugs in our frontend
        shared infrastructure, reducing bundle size for all apps by about 30%.
        I lead two "tiger" teams, bringing together domain experts to reduce cognitive
        overhead in our frontend code and migrate to a new source of truth for course data,
        developing a deep understanding (and opinions) in the react state management space.
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>
        <a href="https://lighthouselabs.ca">Lighthouse Labs</a>
        &nbsp;(Mentor / Lecturer)
      </Company>
      <Date>May 2018 to April 2019</Date>
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
        We were acquired by <a href="https://triller.co/">Triller</a>.
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>
        <a href="https://streetcontxt.com">Street Contxt</a>
        &nbsp;(Software Developer)
      </Company>
      <Date>March to September 2016</Date>
      <Duties>
        The majority of my time here was spent optimizing our search infrastructure
        as well as ensuring that our emails were not flagged as spam or low-quality.
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>
        <a href="https://lyricfind.com">LyricFind</a>
        &nbsp;(Team Lead)
      </Company>
      <Date>June 2012 to March 2016</Date>
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

export default Resume;
