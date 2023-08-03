import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyOffset = 690;
      const shouldStick = window.scrollY > stickyOffset;

      setIsSticky(shouldStick);
    };
    window.addEventListener("scroll", handleScroll);
   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activateTab = (e) => {
    document.querySelectorAll(".option").forEach((element) => {
      if (element !== e.target) {
        element.classList.remove("active");
      } else {
        element.classList.add("active");
      }
    });
  };

  return (
    <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-logo-container">
          <img className="logo" src={Logo} />
        </div>

        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <div className="option empty-div"></div>
          <div className="option empty-div"></div>
          <Link to="/" className="option active" onClick={(e) => activateTab(e)} >
            HOME
          </Link>
          <Link to="/About" className="option" onClick={(e) => activateTab(e)}>
            ABOUT US
          </Link>
          <Link to="#" className="option" onClick={(e) => activateTab(e)}>
            WHY CHILDREN
          </Link>
          <Link to="/Volunteer" className="option" onClick={(e) => activateTab(e)}>
            VOLUNTEER
          </Link>
          <Link to="/faqs" className="option" onClick={(e) => activateTab(e)}>
            FAQ
          </Link>
          <Link to="/apply" className="option" onClick={(e) => activateTab(e)}>
            APPLY
          </Link>
          <Link to="/Contact" className="option" onClick={(e) => activateTab(e)} id="last-tab">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
