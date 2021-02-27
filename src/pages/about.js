import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="dynamic-styles">About / Contact</h2>
          <p>
            The pandemic turned the world upside down and forced almost everyone
            to work/study from home, although it has been proven that a good
            online experience is crucial. Whether it's a digital meeting,
            shopping, or sports, we all want it to work smoothly and well.
          </p>
          <p>
            That's why Studio Coat exists to be a creative company that makes
            digital solutions to online problems. From building websites to
            interactive experiences and using A.R. to A.I., with Studio Coat,
            the goal is to use technology to improve the online experiences and
            making new technology tangible and understandable.
          </p>
          <p>
            <div>Please feel free to contact us.</div>
            <div>
              mail to{" "}
              <a href="mailto:contact@studiocoat.nl">contact@studiocoat.nl</a>
            </div>
            <div>
              or call <a>+31 6 83 56 61 14</a>
            </div>
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
