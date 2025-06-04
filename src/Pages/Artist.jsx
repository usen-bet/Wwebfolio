import "./Style/Artist.scss"
import Navbar from "../Components/Navbar"
import pic1 from "../assets/art/pic1.png"
import pic2 from "../assets/art/pic2.png"
import pic3 from "../assets/art/pic3.png"
import pic4 from "../assets/art/pic4.png"
import pic5 from "../assets/art/pic5.png"
import pic6 from "../assets/art/pic6.png"
import img7 from "../assets/art/img7.jpg"
import img8 from "../assets/art/img8.jpg"
import img9 from "../assets/art/img9.jpg"
import img10 from "../assets/art/img10.jpg"
import img11 from "../assets/art/img11.jpg"
import img12 from "../assets/art/img12.jpg"
import img13 from "../assets/art/img13.jpg"
import img14 from "../assets/art/img14.jpg"
import img15 from "../assets/art/img15.jpg"
import img16 from "../assets/art/img16.jpg"
// import img17 from "../assets/art/img17.png"
// import img18 from "../assets/art/img18.png"
// import img19 from "../assets/art/img19.png"
// import img20 from "../assets/art/img20.png"
// import img21 from "../assets/art/img21.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";


function Artist() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 3,
    slidesToScroll: 3,
    
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  return (
    <div className='bg-image ServicesPage'>
      <Navbar /> 
      <div className="artworks">
        <h1>Artworks</h1>
    <Slider {...settings} className="carousel">
        <div className="card">
          <div className="card-content">
            <img src={pic1} alt="" className="img1" />
            <img src={pic2} alt="" className="img1" />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src={pic3} alt="" className="img1" />
            <img src={pic4} alt="" className="img1" />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src={pic5} alt="" className="img1" />
            <img src={pic6} alt="" className="img1" />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src={img7} alt="" className="img1" />
            <img src={img8} alt="" className="img1" />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src={img9} alt="" className="img1" />
            <img src={img10} alt="" className="img1" />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src={img11} alt="" className="img1" />
            <img src={img12} alt="" className="img1" />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src={img13} alt="" className="img1" />
            <img src={img14} alt="" className="img1" />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src={img15} alt="" className="img1" />
            <img src={img16} alt="" className="img1" />
          </div>
        </div>
    </Slider>
      </div>
    </div>
  )
}

export default Artist

