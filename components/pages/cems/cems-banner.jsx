
import bannerBg from "../../../public/assets/img/cems/banner.jpg";
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

<div className="col-xl-12 pt-120 text-center">
                    <div className={styles.banner__one_content}>
                      <h2 className="text-light pb-30">
                      We Help Operators Globally to Measure and Calculate Emissions
                      </h2>
                    </div>
                  </div>

  <div className="col-lg-3 col-md-6 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
      <Link className="btn-four" href="/contact">
        Track
      </Link>
      <p>Track Carbon Certificate Price according to Current emission levels</p>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
      <Link className="btn-four" href="/contact">
        Trace
      </Link>
      <p>Interoperability with your MES system to ensure visibility over your entire supply chain</p>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
      <Link className="btn-four" href="/contact">
        Automate
      </Link>
      <p>Automatic data collection; no need for manual input</p>
    </div>
  </div>

  <div className="col-lg-3 col-md-6 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
      <Link className="btn-four" href="/contact">
        Verify
      </Link>
      <p>Verification and certification according to EU Standards</p>
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
