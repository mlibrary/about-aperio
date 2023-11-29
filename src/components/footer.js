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
            <span className="d-block">Charlottesville, VA</span>
            <span className="d-block"><a href="mailto:publish@virginia.edu">publish@virginia.edu</a></span>            
            <a href="https://library.virginia.edu" className="logo-img"><img src="/assets/uva_library_light.gif" alt="University of Virginia Library" /></a>
            <span className="d-block">
              <a href="https://twitter.com/AperioUVA"><svg height="16px" width="auto" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
</svg></a> 
              <a className="footer-email text-light" href="http://eepurl.com/dhJ1S1">Join our mailing list</a>
            </span>
          </section>
          <section className="col-md-3">
            <ul className="list-unstyled pt-4">
              <li><a className="text-light gibson" href="/about">About Aperio</a></li>
              <li><a className="text-light gibson" href="about#policies">Practices and Policies</a></li>
              <li><a className="text-light gibson" href="/proposal-information">Proposal Information</a></li>
              <li><a className="text-light gibson" href="/news">News</a></li>
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
