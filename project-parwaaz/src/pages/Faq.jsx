import "../styles/faq.css";

const Faq = () => {
  const openFaq = (e) => {
    document.querySelectorAll(".faq-title").forEach((element) => {
      if (element !== e.target.parentNode) {
        element.classList.remove("selected");
      } else if (
        element === e.target.parentNode &&
        element.classList.contains("selected")
      ) {
        element.classList.remove("selected");
      } else {
        element.classList.add("selected");
      }
    });
  };
  return (
    <div className="faq-page">
        <div className="all-faqs-container">
        <div className="faq-container">
        <div className="faq-title">
          <div className="circle"></div>
          <span>Lorem Ipsum</span>
          <i className="fa-solid fa-plus" onClick={(e) => openFaq(e)}></i>
        </div>
        <div className="faq-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-title">
          <div className="circle"></div>
          <span>Lorem Ipsum</span>
          <i className="fa-solid fa-plus" onClick={(e) => openFaq(e)}></i>
        </div>
        <div className="faq-content">
          1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-title">
          <div className="circle"></div>
          <span>Lorem Ipsum</span>
          <i className="fa-solid fa-plus" onClick={(e) => openFaq(e)}></i>
        </div>
        <div className="faq-content" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
        </div>
   
    </div>
  );
};

export default Faq;
