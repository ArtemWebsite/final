import React from "react";
import Slider from "react-slick";
import i1 from "../../../public/assets/img/cbam-declarants/i1.png";
import i2 from "../../../public/assets/img/cbam-declarants/i2.jpg";
import i3 from "../../../public/assets/img/cbam-declarants/i3.jpg";
import i4 from "../../../public/assets/img/cbam-declarants/i4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DeclarantSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const images = [i1, i2, i3, i4];

  return (
    <div className="declarant-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <img src={image.src} alt={`slider-image-${index}`} className="img-fluid rounded" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DeclarantSlider;
