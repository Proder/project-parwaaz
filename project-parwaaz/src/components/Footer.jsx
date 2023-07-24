import React from 'react'
import "../styles/footer.css"
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-list">
          <Link to="../pages/Careers" className="list-items">
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
      </div>
    </section>
  );
}
