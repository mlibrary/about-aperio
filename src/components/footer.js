import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

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
            <span className="d-block">Charlottesville, VA</span>
            <span className="d-block"><a href="mailto:publish@virginia.edu">publish@virginia.edu</a></span>            
            <a href="https://library.virginia.edu" className="logo-img"><img src="/assets/uva_library_light.gif" alt="University of Virginia Library" /></a>
            <span className="d-block">              
              <a className="footer-email text-light" href="http://eepurl.com/dhJ1S1">Join our mailing list</a>
            </span>
          </section>
          <section className="col-md-3">
            <ul className="list-unstyled pt-4">
              <li><Link className="text-light gibson" to="/about">About Aperio</Link></li>
              <li><Link className="text-light gibson" to="about#policies">Practices and Policies</Link></li>
              <li><a className="text-light gibson" href="https://fulcrum.org/aperio">Books</a></li>
              <li><a className="text-light gibson" href="https://journals.aperio.press/journals">Journals</a></li>
              <li><Link className="text-light gibson" to="/proposal-information">Proposal Information</Link></li>
              <li><Link className="text-light gibson" to="/proposal-journals">Journals Program</Link></li>
              <li><Link className="text-light gibson" to="/proposal-books">Books Program</Link></li>
              <li><Link className="text-light gibson" to="/news">News</Link></li>
            </ul>
          </section>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
          <span className="text-light d-block mb-3">© {year}, aperio · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="https://fulcrum.org/terms">Terms</a></span>    
          </div>
          <div className="col-md-6 text-right">
            <span className="text-white">Powered by</span> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
