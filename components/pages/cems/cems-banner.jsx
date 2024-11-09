import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import bannerBg from "../../../public/assets/img/cems/banner.jpg";
import img1 from "../../../public/assets/img/cems/small-image-banner.png";

import Link from "next/link";
import styles from "../homes/home/styles/BannerThree.module.css";

const slideControl = {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 5500,
    reverseDirection: false,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".banner_next",
    prevEl: ".banner_prev",
  },
};

const BannerOne = () => {
  return (
    <>
      <div className={styles.banner__one}>
      <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
      <SwiperSlide>
            <div className={styles.banner__one_image_1}>
              <img
                className={styles.banner__one_shape}
                src={bannerBg.src}
                alt="banner-shape"
              />
              
              <div className="container" style={{zIndex:"999"}}>
              <div className="row d-flex align-items-stretch">

<div className="col-xl-12 pt-60 pb-10 text-center">
                    <div className={styles.banner__one_content}>
                      <h2 className="text-light pb-30  width-narrow">
                      Emission Monitoring Equipment
                      </h2>
                      <h6 className="text-light pb-30  width-narrow">The ARTEM CEMS Modul is designed to continuously monitor multiple parameters, including the content of CO2 SO2, NO, O2 and Perfluoro carbons.  It measures:  </h6>
                    </div>
                  </div>
<div className="width-narrow-new row ">
  <div className="col-lg-3 col-md-6 text-center ">
      <div className="btn-four">
      Flow Rate
      </div>
  </div>

  <div className="col-lg-3 col-md-6 text-center">
      <div className="btn-four" >
      Pressure
      </div>
  </div>

  <div className="col-lg-3 col-md-6 text-center">
      <div className="btn-four" >
      Humidity of the Flue Gas
      </div>
  </div>

  <div className="col-lg-3 col-md-6 text-center">
      <div className="btn-four" >
      Temperature
      </div>
  </div>
  </div>
  <div className="col-xl-12 pt-0 text-center">
                    <div className={styles.banner__one_content}>
                      <p>The measured parameters are transmitted to the Data Storage System(DSS). </p>
                    </div>
                  </div>
</div>
              <div className="row d-flex justify-content-center">
              <div className="col-lg-8 col-md-6 text-center">
                  <img className={styles.banner__one_content} src={img1.src} alt="img-with-text" />
                  </div>
                  </div>
              </div>
              <div className="banner-image-overlay" style={{    position: "absolute",
    height: "100%",
    width:" 100%",
    background: "#00000082",
    zIndex: "99"}}></div>
            </div>
            </SwiperSlide>
            </Swiper>
      </div>
    </>
  );
};

export default BannerOne;
