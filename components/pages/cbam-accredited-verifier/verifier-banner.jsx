
import bannerBg from "../../../public/assets/img/cbam-verifier/banner.jpg";
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
                      Widen your Customer  Network on a Global Scale
                      </h2>
                    </div>
                  </div>

  <div className="col-lg-4 col-md-6 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
    <div className="btn-four">
      Remote
      </div>
      <p>reduce in-person work and receive data submission virtually</p>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
    <div className="btn-four">
      Virtual Verification
      </div>
      <p>Allow virtual verification through acess to intangible emission data points</p>
    </div>
  </div>

  <div className="col-lg-4 col-md-6 text-center">
    <div className={`${styles.banner__one_bg_content} h-100`}>
    <div className="btn-four">
      Compliance
      </div>
      <p>Increase Verification numbers and ensure better CBAM Compliance</p>
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
