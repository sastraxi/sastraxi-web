import React from 'react';
import { Link, graphql } from 'gatsby';

import Cam from '../elements/images/Cam';
import Badge from '../elements/Badge';
import Root from '../elements/Root';
import Heading from '../elements/Heading';
import Subheading from '../elements/Subheading';
import Article from '../elements/Article';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Root title={frontmatter.title}>
      <Badge size="120px" image={<Cam />} />
      <Heading>{frontmatter.title}</Heading>
      <Subheading><Link to="/blog">Blog</Link> » {frontmatter.date}</Subheading>
      <Article>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Article>
    </Root>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
