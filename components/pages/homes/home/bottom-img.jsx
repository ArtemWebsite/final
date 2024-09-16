import Link from "next/link";
import { useState } from "react";
import img1 from "../../../../public/assets/img/cbam/home-bottom-img.png";
const BottomImage = () => {
  return (
    <>
      <div className="certificate section-padding pt-0">
        <div className="container">
          <div className="row al-center">
            <div className="col-xl-12 text-center">
            <div className="mb-5">
                <h2 className="mb-5">
                CEMS Data Collection and Monitoring System
                </h2>
              </div>
            </div>
            <div className="col-xl-12 text-center">
			<img src={img1.src} alt="img-with-text" />
            </div>
          </div>
        </div>
      </div>
	  
    </>
  );
};

export default BottomImage;
