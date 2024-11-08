
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import bannerBg from "../../../public/assets/img/cbam-declarants/banner.jpg";
import Link from "next/link";
import styles from "../homes/home/styles/BannerOne.module.css";


const BannerOne = () => {
  return (
    <>
      <div className={styles.banner__one}>
            <div className={styles.banner__one_image}>
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
                      A Total Solution for CBAM Compliance
                      </h2>
                    </div>
                  </div>

                  
                <div className="col-lg-4 col-md-6 text-center"> 
                <div className={styles.banner__one_bg_content}>
                        <div className="btn-four">
                          Track
                        </div>
                      <p>Keep track of the impact of CBAM for each of your suppliers</p>
                      </div>
                      </div>

                      <div className="col-lg-4 col-md-6 text-center">
                      <div className={styles.banner__one_bg_content}>
                      <div className="btn-four">
                          Collect
                        </div>
                        <p>Collect Real Emission Data from your Suppliers, no matter where they are</p>
                      </div></div>

                      <div className="col-lg-4 col-md-6 text-center">
                      <div className={styles.banner__one_bg_content}>
                      <div className="btn-four">
                          Verify
                        </div>
                        <p>Ensure that your CBAM Report can pass verification</p>
                      </div></div> 
                </div>
              </div>
            </div>
      </div>
    </>
  );
};

export default BannerOne;
