import React from "react"
import {Link} from "gatsby"
// import Img from 'gatsby-image'

//export const getLogo = graphql`
//{
//  logo:file(relativePath:{eq: "LeverLogo.svg"}) {
//    childImageSharp{
//      fluid(maxWidth: 700){
//        ...GatsbyImageSharpFluid
//      }
//    }
//  }
//}
// `

const Navbar = () => {

  return (
  
  <div className="header-nav-container navbar-dark">    
      <header>
        <div className="container py-3">
          <div className="row">
            <div className="col-md-8">
              <a href="/" className="navbar-brand">
                <h1>aperio</h1>
              </a>
              <span className="text-light garamond"><em>A service of the University of Virginia</em></span>
            </div>
          </div>
        </div>       
      </header>
      <div className="nav-scroller">
        <div className="container">
          <nav className="nav d-flex justify-content-between collapse">
            <Link to="/about" className="nav-link text-dark">
              About
            </Link>
            <a className="nav-link text-dark" href="https://fulcrum.org/aperio">Books</a>
            <a className="nav-link text-dark" href="https://journals.aperio.press/journals">Journals</a>
            <div className="dropdown show">
              <a className="nav-link text-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Publish with us
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="/proposal-information">Proposal Information</a>
                <a className="dropdown-item" href="/proposal-journals">Journals Program</a>
                <a className="dropdown-item" href="/proposal-books">Books Program</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
