import React from "react";
import Link from "next/link";
import serviceBg from "../../../public/assets/img/shape/shape-9.png";
import shape from "../../../public/assets/img/shape/shape-5.png";
import img1 from "../../../public/assets/img/cbam-declarants/text-with-image.jpg";
import builder from "../../../public/assets/img/cbam-declarants/builder.png";
import builder2 from "../../../public/assets/img/cbam-declarants/builder2.png";
import vector1 from "../../../public/assets/img/cbam/vector1.png";
import vector2 from "../../../public/assets/img/cbam/vector2.png";
import icon from "../../../public/assets/img/cbam/Icon.png";
import icon2 from "../../../public/assets/img/cbam/Icon2.png";
import functionalitiesData from "@/components/data/functionalities-data";
import cbamBg from "../../../public/assets/img/shape/shape-15.png";
import cbamArrow from "../../../public/assets/img/icon/arrow-right.png";
import cbamMainBg from "../../../public/assets/img/shape/shape-4.png";
import cbamMainBgnew from "../../../public/assets/img/shape/shape-1.png";
import slideOne from "../../../public/assets/img/banner/cbam-declarent.jpg";
import slideTwo from "../../../public/assets/img/banner/banner-4.jpg";

const CbamDeclarantsMain = () => {
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
                      Compliance for the Declarant
                    </h3>
                  </div>
                </div>
                <div className="t-left mt-60">
                  <div className="dflex bg-light-green-artm mt-3 mb-4 p-4 display-7">
                    <img className="icon-small" src={cbamArrow.src} />
                    Fulfill your CBAM{" "}
                    <span className="color-green-artm">Obligations</span>
                  </div>
                  <div className="dflex bg-light-green-artm mt-3 mb-4 p-4 display-7">
                    <img className="icon-small" src={cbamArrow.src} />
                    Offer Your <span className="color-green-artm">
                      Clients
                    </span>{" "}
                    A New CBAM service
                  </div>
                  <div className="dflex bg-light-green-artm mt-3 mb-4 p-4 display-7">
                    <img className="icon-small" src={cbamArrow.src} />
                    Verify Your{" "}
                    <span className="color-green-artm">Emissions</span> Data
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
                    Reporting Declarants importing into the EU will need to
                    account for the carbon emissions associated with any CBAM
                    Goods imported.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-light-blue-artm p-4">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector1.src} />
                  <p className="text-center">
                    Reporting Declarants will need to have the data in their
                    reports verified. Non-compliant reporting, or a failure to
                    verify data may lead to penalties.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-light-green-artm p-4">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector2.src} />
                  <p className="text-center">
                    Reporting Declarants may be able to lower their costs by
                    switching to a producer that emits fewer emissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cbam_banner_area pt-60 pb-120">
        <div className="container  bg-white rounded">
          <div className="row al-center">
            <div className="col-xl-12">
              <div className="cbam__banner_text mb-5">
                <h2 className="mb-5 text-center">
                  What
                  <span className="color-green-artm"> Goods </span> are covered?
                </h2>
              </div>
              <div className="container">
                <div className="my-2">
                  <div
                    className="carousel slide"
                    data-bs-ride="carousel"
                    id="myCarousel"
                  >
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        data-bs-interval="5000"
                      >
                        <img src={slideOne.src} alt="image1" />
                      </div>
                      <div className="carousel-item" data-bs-interval="5000">
                        <img src={slideTwo.src} alt="image2" />
                      </div>
                      <div className="carousel-item" data-bs-interval="5000">
                        <img src={slideOne.src} alt="image3" />
                      </div>
                    </div>

                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#myCarousel"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                    </button>

                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#myCarousel"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cbam_banner_area pt-60 pb-120">
        <div className="container  bg-white rounded">
          <div className="row al-center">
            <div className="col-xl-12">
              <div className="cbam__banner_text mb-5">
                <h2 className="mb-5 text-center">
                  <span className="color-green-artm"> Penalties </span> for
                  Non-Compliance
                </h2>
                <p className="text-center">
                  Failure to comply with the Carbon Border Adjustment Mechanism
                  (CBAM) can result in significant penalties.
                </p>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 mb-5 p-4 bg-light-blue-artm">
                    <div className="cbam__banner_text dflex align-items-baseline">
                    <img className="icon-small2" src={icon2.src} />
                      <p className="text-center">
                        From <span className="color-theme-blue">1 August 2024</span>, Reporting Declarants must report
                        primary emissions data from the installations that
                        produce CBAM Goods.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-12 mb-5 p-4 bg-light-green-artm">
                    <div className="cbam__banner_text dflex align-items-baseline">
                    <img className="icon-small2" src={icon.src} />
                      <p className="text-center">
                        From{" "}
                        <span className="color-green-artm">1 January 2026</span>
                        , a Reporting Declarant that fails to submit a CBAM
                        report or submits an incorrect or incomplete report, may
                        receive a fine ranging from €10 to €50 per tonne of
                        unreported or incorrectly reported emissions.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-12 mb-5 p-4 bg-light-blue-artm">
                    <div className="cbam__banner_text dflex align-items-baseline">
                    <img className="icon-small2" src={icon2.src} />
                      <p className="text-center">
                        Penalties are subject to indexation and can be higher if
                        there are repeated failures or prolonged non-compliance.
                      </p>
                    </div>
                  </div>
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
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-theme-blue text-white  p-4 rounded-5 border border-2  border-dark">
                <div className="cbam__banner_text">
                  <img className="icon-small2" src={vector2.src} />
                  <p className="text-center">
                    A CBAM compliant and easy to use CBAM Reporting Tool that
                    will access the ARTEM database of real data from the
                    installations directly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-theme-green p-4 rounded-5">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector1.src} />
                  <p className="text-center">
                    Assistance with communicating with suppliers and
                    intermediaries to get the data you need fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 bg-theme-blue text-white  p-4 rounded-5">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector2.src} />
                  <p className="text-center">
                    Assistance with minimising your liabilities under CBAM by
                    identifying suppliers with lower emissions.
                  </p>
                </div>
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
                <p className="text-center">
                  ARTEM provides a clear and easy system to the CBAM Declarant
                  to manage their importers and improve their service at{" "}
                  <span className="color-green-artm">low cost. </span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
  {functionalitiesData?.slice(0, 3)?.map((data, id) => (
    <div className="col-lg-4 col-md-6" key={id}>
      <div
        className={`${
          id === 1 ? "bg-light-green-artm" : "bg-light-blue-artm"
        } service__one-item rounded-5`}
        style={{ backgroundImage: `url(${shape.src})` }}
      >
        <div className="service-cols service__one-item-content">
          <h5>{data.id}</h5>
          <p>{data.title}</p>
          <Link
            href={data.link}
            className={`mt-3 btn-one text-white ${
              id === 1 ? "bg-theme-green" : "bg-theme-blue"
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
        className="cbam_advantage-sec"
        style={{ backgroundImage: `url(${cbamMainBg.src})` }}
      >
        <div className="custom__container container position-relative">
          <div className="row align-items-end">
            <div className="col-12 col-md-8 mb-3 sieze-line">
              <div>
                <h3 className="text-white pb-60 pt-60">
                  Use
                  <span className="color-green-artm"> ARTEM </span> to shield
                  yourself from legal responsibility of wrong reporting
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3 licences">
              <div className="">
                <img
                  className="position-absolute"
                  src={builder.src}
                  alt="builder"
                  style={{ bottom: "0", width: "30%" }}
                />
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
        className="cbam_advantage-sec"
        style={{ backgroundImage: `url(${cbamMainBg.src})` }}
      >
        <div className="custom__container container position-relative">
          <div className="row align-items-end">
            <div className="col-12 col-md-4 mb-3 licences">
              <div className="">
                <img
                  className="position-absolute"
                  src={builder2.src}
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
    </div>
  );
};

export default CbamDeclarantsMain;
