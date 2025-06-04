import React from 'react'
import "./Styles/SideScroller.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import vid1 from "../assets/videos/shorts/azza payment.mp4"
import vid2 from "../assets/videos/shorts/How to sell crypto on azza_5.mp4"
import vid3 from "../assets/videos/shorts/how to swap crypto on azza.mp4"
import vid4 from "../assets/videos/shorts/send your friend crypto on azza_1.mp4"
import vid5 from "../assets/videos/Landscape/Azza milestone2.mp4"
import vid6 from "../assets/videos/Landscape/Azza opener.mp4"
import vid7 from "../assets/videos/Landscape/logoanimation.mp4"
import vid8 from "../assets/videos/Landscape/Soflare 2 (voiced).mp4"
import vid9 from "../assets/videos/Landscape/Solflare how-to( Voiced ).mp4"
import vid10 from "../assets/videos/Landscape/Solflare.mp4"

function SideScroller() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
 
  return (

  <div className='SliderPage'>
     <h1 className="title">
    Videos
     </h1> 
     <div className="none1">
     <div className='divider'>
      <Slider {...settings} className='sides'>
              <video className='vid' controls>
              <source src={vid1} type='video/mp4' />
              </video>
              <video className='vid' controls>
              <source src={vid2} type='video/mp4'/>
              </video>
              <video className='vid' controls>
              <source src={vid3} type='video/mp4'/>
            </video>
            <video className='vid' controls>
              <source src={vid4} type='video/mp4'/>
            </video>
            <video className='vid' controls>
              <source src={vid5} type='video/mp4'/>
            </video>
      </Slider> 
      <Slider {...settings} className='sides'>
            <video className='vidd' controls>
              <source src={vid6} type='video/mp4'/>
            </video>
            <video className='vidd' controls>
              <source src={vid7} type='video/mp4'/>
            </video>
            <video className='vidd' controls>
              <source src={vid8} type='video/mp4'/>
            </video>
            <video className='vidd' controls>
              <source src={vid9} type='video/mp4'/>
            </video>
            <video className='vidd' controls>
              <source src={vid10} type='video/mp4'/>
            </video>
      </Slider> 
     </div>
     </div>
  </div>
  )
}

export default SideScroller