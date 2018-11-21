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
  }
`;

const IndexPage = () => (
  <Root>
    <Badge size="160px" image={<Cam />} />
    <Heading>Cameron Gorrie</Heading>
    <Subheading>
      Software architect, entrepreneur, mentor
    </Subheading>
    <Links>
      <Link to="/">Back to the first page</Link>
    </Links>
    <SectionHeader>
      Work experience
    </SectionHeader>
    <Paragraph>
      <Company>Lighthouse Labs (Mentor)</Company>
      <Date>Started May 2018</Date>
      <Duties>
        abc
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>Robin Media (CTO)</Company>
      <Date>September 2016 to August 2018</Date>
      <Duties>
        music ticketing, product, hiring, pivot,
        techstars,
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>Street Contxt (Software Developer)</Company>
      <Date>March to September 2016</Date>
      <Duties>
        Part of a development team responsible for maintaining and adding
        features to a research exchange/marketplace web application aimed
        towards investment banks. Technologies used: Scala/Java, Solr,
        PostgreSQL, Apache Spark, Webpack, React, Knockout.
      </Duties>
    </Paragraph>
    <Paragraph>
      <Company>LyricFind (Team Lead)</Company>
      <Date>June 2012 to March 2016</Date>
      <Duties>
        Project manager/software team lead (of 8) for a music lyric
        licensing provider. Successfully delivered a project to rebuild
        our backend system (Spring MVC/MariaDB/Solr), precipitated by a
        fundamental business direction shift. Management responsibilities
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
      &nbsp;(an education-focused video streaming platform),&nbsp;
      <b>DCS Infosys</b>
      &nbsp;(a project to digitise the records of the Department of
      Computer Science at the University of Toronto), and&nbsp;
      <b>JSCOOP</b>
      &nbsp;(a).
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
      H.B.Sc., Computer Science 2006-2010.
      <br />
      Specialty in Artificial Intelligence, Parallel Processing.
    </Paragraph>
  </Root>
);

export default IndexPage;
