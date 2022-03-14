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
          <a href="https://sendy.video">website</a>
          {', '}
          <a href="https://github.com/sastraxi/sendy-video">github</a>
          )
          <Warning>
            N.B. first request
            {' '}
            <a href="https://github.com/sastraxi/sendy-video/issues/1">may be slow</a>
            {' '}
            due to lambda cold boot
          </Warning>
        </td>
      </tr>
      <tr>
        <th>elefant</th>
        <td>
          social coding in your IDE (wip)
        </td>
      </tr>
    </tbody>
  </StyledTable>
);

export default Projects;

// const Projects = () => (
//   <Container>
//     <ul>
//       <li>
//         <b>pgsh</b>
//         :  (

//         )
//       </li>
//       <li>
//

//       </li>
//       <li>
//         <b>elefant</b>
//         : social coding in your IDE (wip)
//       </li>
//     </ul>
//   </Container>
// );

// export default Projects;
