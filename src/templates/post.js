import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import './post.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <article className="post">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1 className="post__title">
          {post.frontmatter.title}
        </h1>
        <p>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
