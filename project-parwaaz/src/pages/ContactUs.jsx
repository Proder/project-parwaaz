import "../styles/contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-cards-container">
        <div className="contact-card">
          <i className="fa-solid fa-phone"></i>
          <div className="corner-top-right-bevel"></div>
          <div className="contact-card-content">
            <span className="contact-title">Call Us Anytime</span>
            <span className="contact-info">+91 1234567890</span>
          </div>
        </div>
        <div className="contact-card">
          <i className="fa-regular fa-map"></i>
          <div className="corner-top-right-bevel"></div>
          <div className="contact-card-content">
            <span className="contact-title">Our Office</span>
            <span className="contact-info">Marmat, Doda, Jammu and Kashmir</span>
          </div>
        </div>
        <div className="contact-card">
          <i className="fa-regular fa-envelope"></i>
          <div className="corner-top-right-bevel"></div>
          <div className="contact-card-content">
            <span className="contact-title">Message Us Anytime</span>
            <span className="contact-info">+91 1234567890</span>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3340.467426374404!2d75.54518507492823!3d33.14935346486618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDA4JzU3LjciTiA3NcKwMzInNTEuOSJF!5e0!3m2!1sen!2sus!4v1690346204139!5m2!1sen!2sus"
        width="100%"
        height="500"
        style={{
          border: 0,
          allowfullscreen: "true",
          loading: "lazy",
          referrerpolicy: "no-referrer-when-downgrade",
        }}
      ></iframe>
    </div>
  );
};

export default ContactUs;
