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
        As part of the leadership team of the Product &amp; Engineering department,
        my duties have been diverse. Internal to Engineering, I&apos;ve spent my time mentoring ICs,
        coaching team and technology leads, building software architecture and documentation,
        and designing and running group sessions (such as premortems and design jams).
      </Duties>
      <Duties>
        At the core of this is the people-centric approach that I bring to everything I do.
        I&apos;ve been part of and contributed our internal communications strategy, ensuring
        that a number of business pivots and reorganizations were received warmly by our
        developers, leads, and partners across the organisation. This has meant providing
        as much transparency as possible on decision-making happening at the exec level,
        while being clear and pragmatic about next steps, and sometimes pushing back and
        challenging those in senior leadership positions to build solutions that work for
        the whole business.
      </Duties>
      <Duties>
        What follows is a small selection of experiences from my time at
        Top Hat.
      </Duties>
      <Duties>
        In 2019, I flagged the need for, designed and drove the implementation of a
        new (&quot;ABAC&quot;)
        authorization service in order to provide the role flexibility our institutional partners
        were asking for. I helped drive the decision to create a technical lead career ladder,
        providing paths for ICs who were looking to make their impact at a larger scale (but without
        getting involved in people management). We implemented a new Agile process based on
        Basecamp&apos;s
        {' '}
        <a href="https://basecamp.com/shapeup">Shape Up</a>
        . A group of individual contributors and I implemented a strategy
        for dealing with interruptive issues that ensured
        that those who had ownership and knowledge could get involved directly, leading
        to a reduction of MTTR.
      </Duties>
      <Duties>
        In 2020, I directed our initiative to bring
        {' '}
        <a href="https://tophat.com/news/top-hat-launches-free-virtual-classroom-capabilities-to-help-educators-better-engage-and-motivate-higher-ed-students/">
          video streaming to our classroom offering
        </a>
        . This meant building a WebRTC-based proof-of-concept, evaluating different vendors,
        contract negotiation, post-sales relationship management, and building knowledge
        about video inside of our team. I was part of the effort to shift our department
        to a remote-first model (prompted in part by the pandemic), and during this year I also
        spent a lot of time revamping our hiring processes, including building a case study
        that we still use for all higher-level hires.
      </Duties>
      <Duties>
        In 2021, I focused on further improving our hiring strategy and assisted in onboarding a
        {' '}
        <a href="https://tophat.com/press-releases/top-hat-acquires-morton/">textbook publisher</a>
        {' '}
        that we acquired. I ran a series of design jams with developers, designers, and product
        managers to determine what exactly we should build to help the STEM needs of our new
        customers. I collaborated with Product in starting a relationship with a contractor
        in order to help us achieve LTI 1.3 compliance for &quot;deep linking&quot; needs,
        and spent time investigating the parts of our codebase that were slowing us down.
      </Duties>
      <Duties>
        In 2022, I focused on the developer experience of our frontend platform
        and the performance of our web applications. I optimized the (shared) critical boostrap path
        of our applications, improving many of the core web vitals of our apps by around 15% (P75).
        I have done this both as an IC and through my management of the Staff and Frontend
        Platform engineering teams.
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
        products were deployed properly and in an automated fashion.
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
      Selected projects
    </SectionHeader>
    <Projects />
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
