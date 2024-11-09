import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import bannerBg from "../../../public/assets/img/cbam-verifier/banner.jpg";
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
            <div className={styles.banner__one_image}>
              <img
                className={styles.banner__one_shape}
                src={bannerBg.src}
                alt="banner-shape"
              />
              <div className="container">
              <div className="row d-flex align-items-stretch">

<div className="col-xl-12 text-center">
                    <div className={styles.banner__one_content}>
                      <h2 className="text-light pb-30">
                      Widen your Customer  Network on a Global Scale
                      </h2>
                    </div>
                  </div>

  <div className="col-lg-4 col-md-6 mb-2 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
    <div className="btn-four">
      Remote
      </div>
      <p className="text-capitalize">reduce in-person work and receive data submission virtually</p>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 mb-2 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
    <div className="btn-four">
      Virtual Verification
      </div>
      <p className="text-capitalize">Allow virtual verification through acess to intangible emission data points</p>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 mb-2 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
    <div className="btn-four">
      Compliance
      </div>
      <p className="text-capitalize">Increase Verification numbers and ensure better CBAM Compliance</p>
    </div>
  </div>

</div>
              </div>
            </div>
            </SwiperSlide>
            </Swiper>
      </div>
    </>
  );
};

export default BannerOne;
