import React from "react"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import NewsList from "../components/news/newsList"

const News = ({data}) => {
  const news = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="News" />
      <div className="container page-container">
        <div className="row text-right">
          <div className="col-md-12">
            <p className="social scala-sans">Connect with us  
              <a href="https://twitter.com/AperioUVA"><svg width="24px" height="24px" viewBox="0 0 24 24" className="social-link tw" aria-hidden="false"><title>Twitter</title><path d="M22,5.8a8.6,8.6,0,0,1-2.36.65,4.07,4.07,0,0,0,1.8-2.27,8.1,8.1,0,0,1-2.6,1A4.1,4.1,0,0,0,11.75,8a4.73,4.73,0,0,0,.09.93A11.6,11.6,0,0,1,3.39,4.62,4.2,4.2,0,0,0,2.83,6.7a4.09,4.09,0,0,0,1.82,3.4A4,4,0,0,1,2.8,9.6v0a4.11,4.11,0,0,0,3.29,4A4.2,4.2,0,0,1,5,13.81a4,4,0,0,1-.78-.07,4.14,4.14,0,0,0,3.83,2.85A8.22,8.22,0,0,1,3,18.34a6.37,6.37,0,0,1-1-.06,11.48,11.48,0,0,0,6.29,1.84A11.58,11.58,0,0,0,20,8.46c0-.18,0-.36,0-.53A8.31,8.31,0,0,0,22,5.8Z"></path></svg></a>
              <a href="http://eepurl.com/dhJ1S1"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="social-link email" aria-hidden="false"><title>Sign-up for Emails</title><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg></a>
            </p>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <NewsList news={news} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "news" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    }
  ) {
    edges {
      node {
        id
        fields{
          slug
        }
        html
        frontmatter {
          title
          summary
          date(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
}
`

export default News
