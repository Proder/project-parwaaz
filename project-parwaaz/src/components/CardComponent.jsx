import "../styles/cardComponent.css"

const CardComponent = () => {
  return (
  
    <div className="card-container">
        <div className="card">
            <div className="img-box">
                <img src="https://i.postimg.cc/t4w95jsf/img-01.png"/>
            </div>
            <div className="card-content">
                <h2>Leafs</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card" >
            <div className="img-box">
                <img src="https://i.postimg.cc/pdjRc68d/img-02.png"/>
            </div>
            <div className="card-content">
                <h2>Fruits</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
        <div className="card">
            <div className="img-box">
                <img src="https://i.postimg.cc/26fms7F7/img-03.png"/>
            </div>
            <div className="card-content">
                <h2>Flowers</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Architecto, hic? Magnam eum error saepe doloribus corrupti
                    repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
            </div>
        </div>
    </div>

  )
}

export default CardComponent