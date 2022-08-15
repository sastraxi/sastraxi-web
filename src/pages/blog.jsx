import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

import Cam from '../elements/images/Cam';
import Badge from '../elements/Badge';
import Root from '../elements/Root';
import Heading from '../elements/Heading';
import Paragraph from '../elements/Paragraph';

const Post = styled.div`
  h2 {
    margin: 0;  
    font-weight: 500;
    margin-bottom: 0.1em;
  }

  h3 {
    margin: 0;
    font-weight: 500;
    margin-bottom: 0.3em;
    font-size: 1em;
  } 

  p {
    margin: 0;
    font-size: 0.85em;
    line-height: 1.5em;
    max-width: 40em;
  }

  margin-top: 2em;
  & + & {
    margin-top: 1.4em;
  }
`;

const isPublic = ({ node }) => node.frontmatter.status !== 'draft';

export default function Template({ data }) {
  const { edges } = data.allMarkdownRemark;
  const posts = edges.filter(isPublic);
  const renderedPosts = posts.map(({ node }) => (
    <Post>
      <Link to={node.frontmatter.slug}>
        <h2>{node.frontmatter.title}</h2>
      </Link>
      <h3>
        Posted
        {' '}
        {node.frontmatter.date}
      </h3>
      <p>{node.excerpt}</p>
    </Post>
  ));
  return (
    <Root title="Blog posts">
      <Badge size="120px" image={<Cam />} />
      <Heading>Blog posts</Heading>
      {posts.length === 0
        && (<Paragraph>No blog posts are public (yet). Come back soon!</Paragraph>)}
      {renderedPosts}
    </Root>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 310)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            status
          }
        }
      }
    }
  }
`;
