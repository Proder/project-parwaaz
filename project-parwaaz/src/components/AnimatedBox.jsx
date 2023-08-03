import "../styles/animatedBox.css";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png"
import fifth from "../assets/fifth.png"
const AnimatedBox = () => {


  return (
    <>
      <div className="animated-box-container">
        {/* <div className="animated-box-1" >
    <div className="cloud small-cloud-right"style={{ opacity : props.opacity ,transform : `translateX(${props.translate*2}px) scale(0.75)`}}></div>
    <div className="cloud medium-cloud-right"style={{ opacity : props.opacity ,transform : `translateX(${props.translate*1}px)`}}></div>
    <div className="cloud large-cloud-right"style={{ opacity : props.opacity ,transform : `translateX(${props.translate*0.5}px) scale(1.25)`}}></div>
        </div>
    <div className="animated-box-2" >
    <div className="cloud small-cloud-left"style={{ opacity : props.opacity ,transform : `translateX(-${props.translate*0.1}px) scale(0.75)`}}></div>
    <div className="cloud medium-cloud-left"style={{ opacity : props.opacity ,transform : `translateX(-${props.translate*1.25}px)`}}></div>
    <div className="cloud large-cloud-left"style={{ opacity : props.opacity ,transform : `translateX(-${props.translate*1.75}px) scale(1.25)`}}></div>
        </div> */}
        <div className="img-container">
          <div className="img img1">
            <img src={first} />
          </div>
          <div className="img img2">
            <img src={second} />
          </div>
          <div className="img img3">
            <img src={third} />
          </div>
          <div className="img img4">
            <img src={fourth} />
          </div>
          <div className="img img4">
            <img src={fifth} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedBox;
