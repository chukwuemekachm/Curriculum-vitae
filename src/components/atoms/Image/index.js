import React from 'react';
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        photo: file(relativePath: { eq: "photo.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.photo.childImageSharp.fluid} />}
  />
);

export default Image;
