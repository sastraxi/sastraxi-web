import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  margin-top: 0.5em;
  font-size: 2.2em;

  line-height: 110%;

  @media print {
    margin-top: 0;
  }
`;

export default Heading;
