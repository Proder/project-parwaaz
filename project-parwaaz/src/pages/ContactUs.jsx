import "../styles/contactUs.css";
import { useState } from "react";

const ContactUs = () => {
  const [isMapRequired,setIsMapRequired] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleMapClick = () => {
    if (!isMapLoaded) {
      setIsMapRequired(true);
      setIsMapLoaded(true); // Mark the map as loaded
    } else {
      setIsMapRequired((prevState) => !prevState);
    }
  };

   const handleCallClick = () => {
     const phoneNumber = "+911234567890"; // Replace this with your phone number
     window.location.href = `tel:${phoneNumber}`;
   };
    const handleEmailClick = () => {
      const emailAddress = "parwaazproject@gmail.com"; // Replace this with your email address
      window.location.href = `mailto:${emailAddress}`;
    };

  return (
    <div className="contact-page-container">
      <div className="contact-cards-container">
        <div className="contact-card">
          <i className="fa-solid fa-phone"></i>
          <div className="corner-top-right-bevel"></div>
          <div className="contact-card-content" onClick={handleCallClick}>
            <span className="contact-title">Call Us Anytime</span>
            <span className="contact-info">+91 1234567890</span>
          </div>
        </div>
        <div className="contact-card">
          <i className="fa-regular fa-map"></i>
          <div className="corner-top-right-bevel"></div>
          <div className="contact-card-content" onClick={handleMapClick}>
            <span className="contact-title">Our Office</span>
            <span className="contact-info">
              Marmat, Doda, Jammu and Kashmir
            </span>
          </div>
        </div>
        <div className="contact-card">
          <i className="fa-regular fa-envelope"></i>
          <div className="corner-top-right-bevel"></div>
          <div className="contact-card-content" onClick={handleEmailClick}>
            <span className="contact-title">Email</span>
            <span className="contact-info">parwaazproject@gmail.com</span>
          </div>
        </div>
      </div>

      {isMapRequired && (
        <div className="map-container">
          {isMapLoaded ? ( // Render the iframe when the map is loaded
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3340.467426374404!2d75.54518507492823!3d33.14935346486618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDA4JzU3LjciTiA3NcKwMzInNTEuOSJF!5e0!3m2!1sen!2sus!4v1690346204139!5m2!1sen!2sus"
              width="100%"
              height="500"
              title="Google Maps"
              style={{
                border: 0,
                allowFullScreen: "true",
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
              }}
            ></iframe>
          ) : (
            <div className="map-loading">Loading Map...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactUs;
