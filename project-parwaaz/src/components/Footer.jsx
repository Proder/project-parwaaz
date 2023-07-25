import React from 'react'
import "../styles/footer.css"
import {Link} from "react-router-dom"

export default function Footer() {

    const linkedInURL = "https://www.linkedin.com/company/project-parwaaz/"
    const instaURL = "https://www.instagram.com/projectparwaaz.in/"

  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-list">
          <Link to="../pages/Volunteering" className="list-items">
            Careers
          </Link>
          <span className='spacer'>.</span>
          <Link to="../pages/Financials" className="list-items">
            Financials
          </Link>
          <span className='spacer'>.</span>
          <Link to="../pages/Donate" className="list-items">
            Donate Now
          </Link>
          <span className='spacer'>.</span>
          <Link to="../pages/Blog" className="list-items">
            Blog
          </Link>
          <span className='spacer'>.</span>
          <Link to="../pages/Contact" className="list-items">
            Contact Us
          </Link>
        </div>
        <div className='socials'>
        <Link to={linkedInURL}>
          <i className="fa-brands fa-linkedin" id='social-icons' />
        </Link>
        <Link to={instaURL}>
          <i className="fa-brands fa-instagram" id='social-icons'/>
        </Link>
          <i className="fa-brands fa-twitter" id='social-icons' />
          <i className="fa-brands fa-youtube" id='social-icons' />
        </div>
        <div className='footer-line'><span>©2023 Project Parwaaz | All rights reserved</span></div>
      </div>
    </section>
  );
}
