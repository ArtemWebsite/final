
import bannerBg from "../../../public/assets/img/cems/banner.jpg";
import img1 from "../../../public/assets/img/cems/small-image-banner.png";

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
              <div className="row d-flex align-items-stretch">

<div className="col-xl-12 pt-120 pb-60 text-center">
                    <div className={styles.banner__one_content}>
                      <h2 className="text-light pb-30">
                      We Help Operators Globally to Measure and Calculate Emissions
                      </h2>
                      <h6>The ARTEM CEMS Modul is designed to continuously monitor multiple parameters, including the content of CO2 SO2, NO, O2 and Perfluoro carbons.  It measures: </h6>
                    </div>
                  </div>

  <div className="col-lg-3 col-md-6 text-center">
      <Link className="btn-four" href="/contact">
      Flow Rate
      </Link>
  </div>

  <div className="col-lg-3 col-md-6 text-center">
      <Link className="btn-four" href="/contact">
      Pressure
      </Link>
  </div>

  <div className="col-lg-3 col-md-6 text-center">
      <Link className="btn-four" href="/contact">
      Humidity of the Flue Gas
      </Link>
  </div>

  <div className="col-lg-3 col-md-6 text-center">
      <Link className="btn-four" href="/contact">
      Temperature
      </Link>
  </div>

  <div className="col-xl-12 pt-120 text-center">
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
            </div>
      </div>
    </>
  );
};

export default BannerOne;
