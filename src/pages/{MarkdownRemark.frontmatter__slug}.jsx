import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Cam from '../elements/images/Cam';
import Badge from '../elements/Badge';
import Root from '../elements/Root';
import Heading from '../elements/Heading';
import Subheading from '../elements/Subheading';
import Article from '../elements/Article';

const Spacer = styled.div`
  margin: 0;
  height: 0em;
  padding: 0;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, tableOfContents, html } = markdownRemark;
  return (
    <Root title={frontmatter.title}>
      <Badge size="120px" image={<Cam />} />
      <Heading>{frontmatter.title}</Heading>
      <Subheading><Link to="/blog">Blog</Link> » {frontmatter.date}</Subheading>
      <Article>
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        { tableOfContents && <Spacer /> }
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
    </Root>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      tableOfContents(
        maxDepth: 2
      )
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
