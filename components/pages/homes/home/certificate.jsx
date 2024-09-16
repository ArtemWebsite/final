import Link from "next/link";
import { useState } from "react";
import img1 from "../../../../public/assets/img/cbam/home-img.jpg";
// import img2 from "../../../../public/assets/img/cbam/certi.png";
import maintop from "../../../../public/assets/img/home/maintop.png";

const Certificate = () => {
  return (
    <>
      <div className="certificate section-padding pt-0">
        <div className="container">
          <div className="row al-center">
            <div className="col-xl-8 col-lg-5 lg-mb-25">
              {/* Image with overlay text */}
              <div className="image-container rounded ">
                <img src={img1.src} alt="img-with-text" />
                <div className="overlay rounded">
                  <h2 className="overlay-text">
                    Collect Emission Data onsite with our own Micro Flow NDIR sensor technology
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-7 rounded">
              <img src={maintop.src} alt="certi-img" className="rounded"/>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
        }
          
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .overlay-text {
          color: white;
          text-align: center;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default Certificate;
