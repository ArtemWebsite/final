import Image from "next/image";
import bannerBg from "../../../public/assets/img/about/banner.png";
import styles from "../homes/home/styles/BannerOne.module.css";

const BannerOne = () => {
  return (
    <div className={styles.banner__one}>
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
            <div className="col-xl-12 pt-120 text-center">
              <div className={styles.banner__one_content}>
                <h2 className="text-light pb-30">
                  We Tackle Emissions Globally.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
