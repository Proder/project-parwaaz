import "../styles/navbar.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.jpg";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation()
  const routeName = location.pathname.replace('/','')
  
  useEffect(() => {
    switch (routeName){
      case '' : document.getElementById('Home').classList.add('active')
      break
      case 'About' : document.getElementById('About').classList.add('active')
      break

      case 'Volunteer' : document.getElementById('Volunteer').classList.add('active')
      break
      case 'faqs' : document.getElementById('Faqs').classList.add('active')
      break
      case 'apply' : document.getElementById('Apply').classList.add('active')
      break
      case 'Contact' : document.getElementById('Contact').classList.add('active')
      break
     
      
    }
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
          <Link to="/" className="option " id="Home" onClick={(e) => activateTab(e)} >
            HOME
          </Link>
          <Link to="/About" className="option" id="About"onClick={(e) => activateTab(e)}>
            ABOUT US
          </Link>
          {/* <Link to="#" className="option" id="Why" onClick={(e) => activateTab(e)}>
            WHY CHILDREN
          </Link> */}
          <Link to="/Volunteer" className="option" id="Volunteer"onClick={(e) => activateTab(e)}>
            VOLUNTEER
          </Link>
          <Link to="/faqs" className="option" id="Faqs"onClick={(e) => activateTab(e)}>
            FAQ
          </Link>
          <Link to="/apply" className="option" id="Apply"onClick={(e) => activateTab(e)}>
            APPLY
          </Link>
          <Link to="/Contact" className="option" id="Contact" onClick={(e) => activateTab(e)} >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
