import React from 'react'
import "../styles/about.css"
import imageOne from "../assets/Simplicity.jpg"

export default function About() {
  return (
    <>
      <div className="vision">
        <div className="vision-title">
          <span>Our Vision</span>
        </div>
        <div className="vision-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            </p>
        </div>
        <img src={imageOne} alt="Vision Image" className='vision-img'></img>
      </div>
    </>
  );
}
