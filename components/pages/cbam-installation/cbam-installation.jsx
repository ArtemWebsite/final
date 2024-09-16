import React from "react";
import Link from "next/link";
import vector1 from "../../../public/assets/img/cbam/vector1.png";
import vector2 from "../../../public/assets/img/cbam/vector2.png";
import builder3 from "../../../public/assets/img/cbam/builder3.png";
import serviceBg from "../../../public/assets/img/shape/shape-9.png";
import shape from "../../../public/assets/img/shape/shape-5.png";
import img1 from "../../../public/assets/img/cbam/text-with-image.png";
import cbamArrow from "../../../public/assets/img/icon/arrow-right.png";
import functionalitiesData from "@/components/data/functionalities-data";
import cbamBg from "../../../public/assets/img/shape/shape-15.png";
import cbamMainBg from "../../../public/assets/img/shape/shape-4.png";
import cbamMainBgnew from "../../../public/assets/img/shape/shape-1.png";

const CbamInstallationMain = () => {
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
                      Compliance for the Installation
                    </h3>
                  </div>
                </div>
                <div className="t-left mt-60">
                  <div className="dflex bg-light-green-artm mt-3 mb-4 p-4 display-7">
                    <img className="icon-small" src={cbamArrow.src} />
                    <span className="color-green-artm">Minimize</span> Price Impact of CBAM
                  </div>
                  <div className="dflex bg-light-green-artm mt-3 mb-4 p-4 display-7">
                    <img className="icon-small" src={cbamArrow.src} />
                    Support your <span className="color-green-artm">
                       suppliers to transition 
                    </span>
                    into the CBAM Era
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
                  Get in on the business of offering high-end
                  <span className="color-green-artm"> CBAM </span> Declaration
                  service to Importers
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="cbam_banner_area pt-60">
        <div className="container  bg-white rounded">
          <div className="row al-center">
            <div className="col-xl-12">
              <div className="cbam__banner_text mb-5">
                <h2 className="mb-5 text-center">
                  What is
                  <span className="color-green-artm"> CBAM </span> ?
                </h2>
                <p className="text-center">
                  From 2023 until 2025, CBAM is in the{" "}
                  <span className="color-green-artm">
                    “Transitional Period”
                  </span>
                  . This means that Reporting Declarants importing into the EU
                  are required to report on the emissions data from the
                  producers of CBAM Goods. By 2026, CBAM will require Reporting
                  Declarants to purchase emissions allowances when importing
                  CBAM Goods into the EU and to provide verified emissions
                  reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cbam_three_tab section-padding"
        style={{ backgroundImage: `url(${cbamMainBgnew.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-light-green-artm p-4">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector2.src} />
                  <p className="text-center">
                  Producers exporting to the EU will <span className="color-green-artm">need to account</span> for the carbon emissions associated with their products. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-light-blue-artm p-4">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector1.src} />
                  <p className="text-center">
                  Producers that fail to adopt technologies that emit fewer greenhouse gases will   to their competitors.  
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-light-green-artm p-4">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector2.src} />
                  <p className="text-center">
                  Reporting Declarants importing into the European Union, and their suppliers, will expect producers to <span className="color-green-artm">comply with reporting and verification obligations</span> imposed by CBAM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	  
	  
	  <div className="cbam_banner_area pt-60">
        <div className="container  bg-white rounded">
          <div className="row al-center">
            <div className="col-xl-12">
              <div className="cbam__banner_text mb-5">
                <h2 className="mb-5 text-center">
                  How can
                  <span className="color-green-artm"> artem </span> help?
                </h2>
                <p className="text-center">
                  With over{" "}
                  <span className="color-green-artm">
                    30 years of experience
                  </span>
                  . in the manufacturing sector, the team at ARTEM are perfectly
                  placed to assist you with complying with the CBAM
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cbam_three_tab section-padding"
        style={{ backgroundImage: `url(${cbamMainBgnew.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 rounded  mb-3">
              <div className="col-xl-12 bg-theme-blue text-white  p-4 rounded-5 border border-2  border-dark">
                <div className="cbam__banner_text">
                  <img className="icon-small2" src={vector2.src} />
                  <p className="text-center">
                    A CBAM compliant and easy to use CBAM Reporting Tool, customisable to your specific installation, that will guide your personnel through reporting your installations’ emissions data with a few clicks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3">
              <div className="col-xl-12 bg-theme-green p-4 rounded-5">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector1.src} />
                  <p className="text-center">
                    Assistance with communicating the relevant information to your suppliers fast to preserve your competitive edge;
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-theme-blue text-white  p-4 rounded-5">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector2.src} />
                  <p className="text-center">
                    Support for verifying your emissions data, including with ARTEM Virtual Verification Module.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-theme-green p-4 rounded-5">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector1.src} />
                  <p className="text-center">
                    Assistance in identifying and reducing your emissions with the ARTEM CEMS System.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-theme-blue text-white  p-4 rounded-5">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector2.src} />
                  <p className="text-center">
                    Our local subsidiary will ensure that your data is safely stored, and compliant with local laws.
                  </p>
                </div>
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
                  Help Importers to easily submit the CBAM Declarations with primary data
                </h3>
              </div>
            </div>
            <div className="col-xl-12 mb-5 p-4 bg-light">
              <div className="cbam__banner_text">
                <h3 className="text-center">
                  Price advantage through precise CBAM calculation
                </h3>
              </div>
            </div>
            <div className="col-xl-12 mb-5 p-4 bg-light">
              <div className="cbam__banner_text">
                <h3 className="text-center">
                  Turn CBAM into an opportunity to outcompete others
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
  {functionalitiesData?.slice(9, 15)?.map((data, id) => (
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

export default CbamInstallationMain;
