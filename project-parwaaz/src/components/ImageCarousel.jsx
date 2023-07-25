import React from 'react'
import "../styles/imgCarousel.css"

export default function ImageCarousel() {
  return (
    <>
    <div className='img-carousel'>
        {/* <div className='useless'></div> */}
      <div className='section'>
        <div className='article'>     
            <ul id='img-ul'>
              <li id='img-list'>
                <img src="http://dummyimage.com/600x400/000000/ffffff.png" className='row-img'/>
              </li>
              <li id='img-list'>
                <img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" className='row-img'/>
              </li>
              <li id='img-list'>
                <img src="http://dummyimage.com/600x400/000000/ffffff.png" className='row-img'/>
              </li>
              <li id='img-list'>
                <img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" className='row-img'/>
              </li>
              <li id='img-list'>
                <img src="http://dummyimage.com/600x400/000000/ffffff.png" className='row-img'/>
              </li>
              <li id='img-list'>
                <img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" className='row-img'/>
              </li>
              <li id='img-list'>
                <img src="http://dummyimage.com/600x400/000000/ffffff.png" className='row-img'/>
              </li>
              <li id='img-list'>
                <img src="http://dummyimage.com/600x400/eeeeee/cccccc.png" className='row-img'/>
              </li>
            </ul>
          </div>
        </div>
    </div>
      
    </>
  );
}
