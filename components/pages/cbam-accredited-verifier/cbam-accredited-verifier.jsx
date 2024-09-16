import React from "react";
import Link from "next/link";
import builder3 from "../../../public/assets/img/cbam/builder3.png";
import serviceBg from "../../../public/assets/img/shape/shape-9.png";
import shape from "../../../public/assets/img/shape/shape-5.png";
import img1 from "../../../public/assets/img/cbam/image-top.jpg";
import verifierData from "@/components/data/verifier-data";
import cbamBg from "../../../public/assets/img/shape/shape-15.png";
import cbamMainBg from "../../../public/assets/img/shape/shape-4.png";
import cbamMainBgnew from "../../../public/assets/img/shape/shape-1.png";
import cbamArrow from "../../../public/assets/img/icon/arrow-right.png";

const CBAMAccreditedVerifierMain = () => {
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
                      Compliance for Accredited Verifiers
                    </h3>
                  </div>
                </div>
                <div className="t-left mt-60">
                  <div className="dflex bg-light-green-artm mt-3 mb-4 p-4 display-7">
                    <img className="icon-small" src={cbamArrow.src} />Increase
                    <span className="color-green-artm"> efficiency</span> and reduce cost of<span className="color-green-artm">verification</span>
                  </div>
                  <div className="dflex bg-light-green-artm mt-3 mb-4 p-4 display-7">
                    <img className="icon-small" src={cbamArrow.src} />
                    Widen your <span className="color-green-artm">
                    CUSTOMER 
                    </span>
                    network on a global scale
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
                <img
                  className="position-absolute"
                  src={builder3.src}
                  alt="builder"
                  style={{ bottom: "0", width: "30%" }}
                />
              </div>
            </div>
            <div className="col-12 col-md-8 mb-3 sieze-line">
              <div>
                <h3 className="text-white pb-60 pt-60">
                How can the <span className="color-green-artm">Verifiers</span> increase their output and their <span className="color-green-artm">efficiency</span> in the verification process?
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
                Help Verifers to reduce in-person work and receive data submission virtually
                </h3>
              </div>
            </div>
            <div className="col-xl-12 mb-5 p-4 bg-light">
              <div className="cbam__banner_text">
                <h3 className="text-center">
                Allow virtual verification through acess to intangible emission data points
                </h3>
              </div>
            </div>
            <div className="col-xl-12 mb-5 p-4 bg-light">
              <div className="cbam__banner_text">
                <h3 className="text-center">
                Increase Verification numbers and ensure better CBAM Compliance
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
                <p>
                ARTEM provides a <span className="color-green-artm">one stop solution</span> to verifiers to project manage the whole verification process, especially in places that are far away and have high cultural and language barriers. 
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {verifierData?.slice(0, 6)?.map((data, id) => (
              <div className="col-lg-4 col-md-6" key={id}>
                <div
        className={`${
          id % 2 === 1 ? "bg-light-green-artm" : "bg-light-blue-artm"
        } service__one-item rounded-5`}
        style={{ backgroundImage: `url(${shape.src})` }}
      >
                  <div className="service-cols service__one-item-content">
                    <h5>{data.id}</h5>
                    <p>{data.title}</p>
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

export default CBAMAccreditedVerifierMain;
