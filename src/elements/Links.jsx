import styled from 'styled-components';
import Paragraph from './Paragraph';

const Links = styled(Paragraph)`
  & > a {
    display: inline-block;
    margin-right: 0.5em;
  }

  @media (max-width: 480px) {
    text-align: center;
    padding: 1em 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.16);
  }
`;

export default Links;
