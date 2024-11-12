import Image from "next/image";
import bannerBg from "../../../public/assets/img/cbam/home-img.jpg";
import Link from "next/link";
import styles from "../homes/home/styles/BannerTwo.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

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
    <div className={styles.banner__one}>
      <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
      <SwiperSlide>
      <div className={styles.banner__one_image}>
        <Image
          src={bannerBg}
          alt="banner-shape"
          className={styles.banner__one_shape}
          width={1920} // Adjust width based on your image dimensions
          height={1080} // Adjust height based on your image dimensions
          priority
        />
        <div className="container">
          <div className="row d-flex align-items-stretch">
            <div className="col-xl-12 text-center">
              <div className={styles.banner__one_content}>
                <h2 className="text-light pb-30">What is CBAM?</h2>
                <p className="main_banner_inner_text">
                  Carbon Border Adjustment Mechanism.
                  Transitional Period: 2023-2025
                </p>
                <p>Effective since October 2023</p>
                <div className={styles.banner__one_content_button}>
                  <Link href="/contact" className="btn-three mb-5">
                    Learn more
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
  );
};

export default BannerOne;
