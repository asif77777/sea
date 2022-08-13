import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../data/feature.css";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      centerPadding: "60px",
      autoplaySpeed: 2000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
 
    return (
      <div id="features" className="text-center">
        <h2>u p c o m i n g</h2>
        <div class="slider">
          <Slider {...settings}>
            <div>
              <img
                src="https://i.im.ge/2022/08/12/OM4rvq.about.md.jpg"
                alt=" "
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg"
                alt=" "
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg"
                alt=" "
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg"
                alt=" "
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg"
                alt=" "
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg"
                alt=" "
              />
            </div>
          </Slider>



          
        </div>
      </div>
    );
  }

}