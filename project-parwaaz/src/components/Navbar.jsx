import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.jpg";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const routeName = location.pathname
  useEffect(() => {
    document.querySelectorAll(".option").forEach((element) => {

      if (element?.dataset?.path === routeName) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }, [routeName]);
  useEffect(() => {

    const handleScroll = () => {
      const stickyOffset = 550;
      const shouldStick = window.scrollY > stickyOffset;

      setIsSticky(shouldStick);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const activateTab = (e) => {
  //   document.querySelectorAll(".option").forEach((element) => {
  //     if (element !== e.target) {
  //       element.classList.remove("active");
  //     } else {
  //       element.classList.add("active");
  //     }
  //   });
  // };

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
          <Link
            to="/"
            className="option"
            data-path="/"
          >
            HOME
          </Link>
          <Link
            to="/About"
            className="option"
            data-path='/About'
          >
            ABOUT US
          </Link>

          <Link
            to="/Volunteer"
            className="option"
            data-path='/Volunteer'
          >
            VOLUNTEER
          </Link>
          <Link
            to="/faqs"
            className="option"
            data-path='/faqs'
          >
            FAQ
          </Link>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLScE5ZAOz9KGSfEaXCKceR3ErwG_m_s43U5_poR8vgCngoIRgA/viewform?pli=1"
            className="option"
            data-path='/Apply'
          >
            APPLY
          </Link>
          <Link
            to="/Contact"
            className="option"

            data-path='/Contact'
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
