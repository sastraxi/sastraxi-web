import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  ul {
    margin: 0;
  }
`;

const Projects = () => (
  <Container>
    <ul>
      <li>
        pgsh - postgres tools for local development (
        <a href="https://github.com/sastraxi/pgsh">github</a>
        )
      </li>
      <li>
        sendy video - collect video greetings from your friends (
        <a href="https://sendy.video">website</a>
        {', '}
        <a href="https://github.com/sastraxi/sendy-video">github</a>
        )
      </li>
    </ul>
  </Container>
);

export default Projects;
