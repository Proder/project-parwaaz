import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-logo-container">
          <div className="nav-logo">Logo</div>
        </div>

        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="#" className="option">
            Home
          </a>
          <a href="#" className="option">About Us</a>
          <a href="#"className="option">Volunteering</a>
          <a href="#" className="option">Item3</a>
          <a href="#" className="option">Donate</a>
          <a href="#" className="option">Contact</a>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
