import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

import bannerBg from "../../../../public/assets/img/shape/shape-3.png";
import Link from "next/link";
import styles from "./styles/BannerOne.module.css";

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
              <video autoPlay loop muted playsInline className={styles.video}>
                <source src="/assets/video/green.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img
                className={styles.banner__one_shape}
                src={bannerBg.src}
                alt="banner-shape"
              />
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 pt-120 text-center">
                    <div className={styles.banner__one_content}>
                      <h2 className="text-light pb-30">
                      Comply With EU 
                      Emission Regulations With ARTEM
                      </h2>
                      <p>
                      EU Regulation (EU) 2024/1787 on the reduction of methane emissions in the energy sector  
                      </p>
                      <p>
                      EU Regulation (EU) 2023/956 Carbon Border Adjustment Mechanism “CBAM”  
                      </p>
                      <div className={styles.banner__one_content_button}>
                        <Link className="btn-one me-3" href="/contact">
                        ARTEM CBAM Reporting Tool
                        </Link>
                        <Link className="btn-three" href="/contact">
                        ARTEM Methane Reporting Tool
                        </Link>
                      </div>
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
