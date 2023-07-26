import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg"
const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyOffset = 600;
      const shouldStick = window.scrollY > stickyOffset;

      setIsSticky(shouldStick);
    };
      window.addEventListener("scroll", handleScroll);
      return () => {window.removeEventListener("scroll", handleScroll);};

  
  },[]);


  return (
    <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-logo-container">
          <img src={Logo} />
        </div>

        <div className="nav-btn">
          <label htmlFor="nav-check" />
        </div>

        <div className="nav-links">
          <Link to="/" className="option">
            Home
          </Link>
          <Link to="/About" className="option">
            About Us
          </Link>
          <Link to="/Volunteer" className="option">
            Volunteering
          </Link>
          <Link to="#" className="option">
            Item3
          </Link>
          <Link to="/Donate" className="option">
            Donate
          </Link>
          <Link to="/Contact" className="option">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
