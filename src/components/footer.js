import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row justify-content-between">
          <section className="col-md-4 contact">
            <a href="/" className="logo gibson">aperio</a>
            <small className="d-block">Charlottesville, VA</small>
            <small className="d-block"><a href="mailto:publish@virginia.edu">publish@virginia.edu</a></small>
            <a href="https://library.virginia.edu" className="logo-img"><img src="/assets/uva_library_light.gif" alt="University of Virginia Library" /></a>
          </section>          
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
          <small className="text-light d-block mb-3">© {year}, aperio · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="https://fulcrum.org/terms">Terms</a></small>    
          </div>
          <div className="col-md-6 text-right">
            <small className="text-white">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
