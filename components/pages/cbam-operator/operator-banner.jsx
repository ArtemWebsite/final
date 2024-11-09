
import bannerBg from "../../../public/assets/img/cbam-operator/banner.jpg";
import Link from "next/link";
import styles from "../homes/home/styles/BannerThree.module.css";


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
              <div className="row d-flex align-items-stretch">

<div className="col-xl-12 text-center">
                    <div className={styles.banner__one_content}>
                      <h2 className="text-light pb-30 width-narrow">
                      We Help Operators Globally to Measure and Calculate Emissions
                      </h2>
                    </div>
                  </div>

  <div className="col-lg-3 col-md-6 mb-2 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
      <div className="btn-four" >
        Track
      </div>
      <p  className="text-capitalize">Track Carbon Certificate Price according to Current emission levels</p>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 mb-2 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
    <div className="btn-four" >
        Trace
        </div>
      <p  className="text-capitalize">Interoperability with your MES system to ensure visibility over your entire supply chain</p>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 mb-2 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
    <div className="btn-four" >
        Automate
        </div>
      <p  className="text-capitalize">Automatic data collection; no need for manual input</p>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
    <div className="btn-four" >
        Verify
        </div>
      <p  className="text-capitalize">Verification and certification according to EU Standards</p>
    </div>
  </div>

</div>
              </div>
            </div>
      </div>
    </>
  );
};

export default BannerOne;
