import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AfroStyles from "../data/afrostyles";

const MultipleItems = () => {

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (

  <div className="content">
    <h1 className="header">Afro Styles Fashion Store</h1>
    <div className="container">
      <Slider {...settings}>
        {AfroStyles.map((item) => (
          <div key={item.id}>
            <div className="img-body border border-blue-600">
              <img src={item.src} alt={item.alt} />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
</div>
  )
}

export default MultipleItems
