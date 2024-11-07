import React from "react";
import cbamImage2 from "../../../public/assets/img/cbam/cbam2.jpg";
const BannerBottom = () => {
  return (
    <div>
      <section className="climate-changes bg-theme-blue">
        <div className="row align-items-center conatiner outerwrapper">
          <div className="col-md-7">
            <div className="p-4 mx-auto">
              <h5 className="pb-4  text-white">
                ARTEM excels in collecting data from various jurisdictions,
                meticulously considering the unique characteristics of each
                industry and country.
              </h5>
            </div>
          </div>
          <div className="col-md-5 container-fluid p-0">
            <img
              src={cbamImage2.src}
              alt="CBAM Image 2"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerBottom;
