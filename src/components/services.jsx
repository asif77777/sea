
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../data/services.css";
import Slider from "react-slick";



export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div id="services">
        <h2>o u r s h o p </h2>
        <Slider {...settings}>
          <div>

          <img
                src="https://images.unsplash.com/photo-1660056625374-7a6c19bb2007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt=" "
              />
          
          </div>
          <div>
          <img
                src="https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_960_720.jpg"
                alt=" "
              />
          </div>
          <div>
          <img
                src="https://images.unsplash.com/photo-1660056625374-7a6c19bb2007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt=" "
              />
          </div>
          <div>
          <img
                src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"
                alt=" "
              />
          </div>
          <div>
          <img
                src="https://images.unsplash.com/photo-1660056625374-7a6c19bb2007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt=" "
              />
          </div>
           
        </Slider>
      </div>
    );
  }
}













export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our shop </h2>
           
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
