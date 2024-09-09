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
        <th>jam-shuffle</th>
        <td>
            Break through creative block. Jam with your friends (
              <a href="jam-shuffle.pages.dev">jam-shuffle</a>
            )
        </td>
      </tr>
      <tr>
        <th>midi-viewer</th>
        <td>
          Connect a MIDI keyboard to visualize notes, chords, and detect key / mode (
            <a href="https://midi-viewer.pages.dev">midi-viewer</a>
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
    </tbody>
  </StyledTable>
);

export default Projects;
