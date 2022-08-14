import React from 'react';
import styled from 'styled-components';
import { StyledTable } from '../elements/Table';

const Warning = styled.div`
  &::before {
    content: '⚠️';
    padding-right: 0.5em;
  }
`;

const Projects = () => (
  <StyledTable cellSpacing={0}>
    <tbody>
      <tr>
        <th>pgsh</th>
        <td>
          postgres tools for local development (
          <a href="https://github.com/sastraxi/pgsh">github</a>
          )
        </td>
      </tr>
      <tr>
        <th>sendy video</th>
        <td>
          collect video greetings from your friends (
          <a href="https://github.com/sastraxi/sendy-video">github</a>
          )
        </td>
      </tr>
      <tr>
        <th>colleq</th>
        <td>
          social coding in your IDE (wip)
        </td>
      </tr>
    </tbody>
  </StyledTable>
);

export default Projects;
