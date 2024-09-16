import React from "react";
import Link from "next/link";
import cbamArrow from "../../../public/assets/img/icon/arrow-right.png";
import builder2 from "../../../public/assets/img/cbam-declarants/builder2.png";
import serviceBg from "../../../public/assets/img/shape/shape-9.png";
import shape from "../../../public/assets/img/shape/shape-5.png";
import img1 from "../../../public/assets/img/cbam-importer/text-with-image.png";
import functionalitiesData from "@/components/data/functionalities-data";
import cbamBg from "../../../public/assets/img/shape/shape-15.png";
import cbamMainBg from "../../../public/assets/img/shape/shape-4.png";
import cbamMainBgnew from "../../../public/assets/img/shape/shape-1.png";
//import Checklist from "./checklist";

const CbamImporterMain = () => {
  return (
    <div className="cbam-importer-main">
      <div
        className="cbam_img_with_text pt-100 pb-80"
        style={{ backgroundImage: `url(${cbamBg.src})` }}
      >
        <div className="container">
          <div className="row al-center">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cbam_img_with_text-left">
                  <div className="cbam_img_with_text-left-title">
                    <h3 className="mb-5">
                      Pioneer cross-border
                      <span className="color-green-artm"> CBAM </span>{" "}
                      Compliance for the Importer
                    </h3>
                  </div>
                </div>
                <div className="t-left mt-60">
                  <div className="dflex bg-light-green-artm mt-3 mb-4 p-4 display-7">
                    <img className="icon-small" src={cbamArrow.src} />
                    Comply with CBAM{" "}
                    <span className="color-green-artm">Obligations</span>
                  </div>
                  <div className="dflex bg-light-green-artm mt-3 mb-4 p-4 display-7">
                    <img className="icon-small" src={cbamArrow.src} />
                    Optimize the CBAM  <span className="color-green-artm">
                    Price you Pay
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="cbam_img_with_text-right t-right dark_image">
                  <img src={img1.src} alt="img-with-text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cbam_advantage-sec"
        style={{ backgroundImage: `url(${cbamMainBg.src})` }}
      >
        <div className="custom__container container position-relative">
          <div className="row align-items-end">
            <div className="col-12 col-md-4 mb-3 licences">
              <div className="">
			  <img className="position-absolute" src={builder2.src} alt="builder" style={{ bottom: "0", width:"30%" }} />
              </div>
            </div>
            <div className="col-12 col-md-8 mb-3 sieze-line">
              <div>
              <h3 className="text-white pb-60 pt-60">
              Get in on the business of offering high-end 
                  <span className="color-green-artm"> CBAM </span> Declaration service to Importers 
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cbam_banner_area section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 mb-5 p-4 bg-light">
                      <div className="cbam__banner_text">
                        <h3 className="text-center">
                          Traceability of Emission Data from Installation
                        </h3>
                      </div>
                  </div>
                  <div className="col-xl-12 mb-5 p-4 bg-light">
                      <div className="cbam__banner_text">
                        <h3 className="text-center">
                          Transparent Process of Data collection.
                        </h3>
                      </div>
                  </div>
                  <div className="col-xl-12 mb-5 p-4 bg-light">
                      <div className="cbam__banner_text">
                        <h3 className="text-center">
                          Clear Allocation of Reporting Responsibilites
                        </h3>
                      </div>
                  </div>
                </div>
              </div>
      </div>

      <div
        className="cbam_service service__one section-padding"
        style={{
          backgroundImage: `url(${serviceBg.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row mb-35">
            <div className="col-xl-12">
              <div className="service__one-title t-center">
                <span className="subtitle-one">&nbsp;</span>
                <h2 className="mb-5 text-center">
                  <span className="color-green-artm"> Key </span>{" "}
                  Functionalities
                </h2>
                <p class="display-6">
                  ARTEM provides a <span className="color-green-artm">clear and easy</span> system to the CBAM Importer to
                  manage the CBAM Data collection along the whole supply chain.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
  {functionalitiesData?.slice(3, 9)?.map((data, id) => (
    <div className="col-lg-4 col-md-6" key={id}>
      <div
        className={`${
          id % 2 === 1 ? "bg-light-green-artm" : "bg-light-blue-artm"
        } service__one-item rounded-5`}
        style={{ backgroundImage: `url(${shape.src})` }}
      >
        <div className="service-cols service__one-item-content">
          <h5>{data.no}</h5>
          <h6>{data.title}</h6>
          <Link
            href={data.link}
            className={`mt-3 btn-one text-white ${
              id % 2 === 1 ? "bg-theme-green" : "bg-theme-blue"
            }`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
      
      <div
        className="">
        
          <div className="row">
            <div className="col-12 col-md-4 sieze-line bg-theme-green p-5">
            <div className="container">
                <h2>
                  SEIZE THE ADVANTAGE
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-8 licences bg-theme-light-green p-5">
            <div className="container">
                <h2 className=" mb-2">Licenses</h2>
                <p className="custom-font-lead p-0 m-0">
                  Acess ARTEM today and gain CBAM clients worldwide
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CbamImporterMain;
