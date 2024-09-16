import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./cbam.css";
import cbamImage from "../../../public/assets/img/cbam/What-is-CBAM.png";

import shipImage from "../../../public/assets/img/cbam/data.jpg";
import cbamImage2 from "../../../public/assets/img/cbam/CBAM-2.png"
import cbamaim from "../../../public/assets/img/cbam/CBAM-aim.png";
import builder3 from "../../../public/assets/img/cbam/builder3.png";
import cbamMainBg from "../../../public/assets/img/shape/shape-4.png";
import TestimonialMain from "../testimonial/testimonial";
import CbamTimeline from "./cbam-timeline";

const CBAM = () => {
  return (
    <div className="main-container">
      <div className="pt-100  container top-container">
        <section className="why-cbam row container-fluid p-0 m-0">
          <div className="row mx-auto">
            <div className="col-md-12 text-center">
			  <h2 className="mb-5">
                      What is
                      <span className="color-green-artm"> CBAM </span>
                    </h2>
              <p className="lead">Carbon Border Adjustment Mechanism</p>
              <p>Effective since <span className="color-green-artm">October 2023</span></p>
              <p>Transitional Period: 2023-2025</p>
            </div>
          </div>
          <div className="row align-items-center justify-content-between mx-auto p-0">
            <div className="col-md-12 container-fluid p-0">
              <Image
                src={cbamImage}
                alt="CBAM Image"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="climate-changes  container p-0">
        <div className="row align-items-center conatiner outerwrapper w-100 p-0 m-0">
          <div className="col-md-6 pt-100 pb-100 ">
            <div className="p-4 mx-auto">
              <h2 className="pb-4">
                Climate change is a global <span className="color-green-artm">problem</span> that needs global <span className="color-green-artm">solutions.</span>
              </h2>
              <h5 className="pb-4">
                CBAM is the EU’s answer to the problem of “carbon leakage”.
              </h5>
              <p className="mt-4">
                “Carbon leakage” occurs when companies based in the EU move
                carbon-intensive production abroad to countries with less strict
                climate actions, or when EU products get replaced by more
                carbon-intensive imports.
              </p>
            </div>
          </div>
          <div className="col-md-6 container-fluid p-0">
            <img
              src={cbamImage2.src}
              alt="CBAM Image 2"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </section>

      <section className="cbam-legal section-padding container">
        <div className="row mb-70">
          <div className="col-xl-12">
            <div className="work__process-title t-center pb-30">
              <h2><span className="color-green-artm">CBAM</span>-legal complications and impact</h2>
            </div>
            <div className="choose__us-area-list-work jc-center">
              <div className="choose__us-area-list-item bg-light-green-artm">
                <i className="flaticon-deal"></i>
                <div className="choose__us-area-list-item-bottom">
                  <h6>CBAM Obligations</h6>
                  <div>
                    <div className="lineItem">
                      <span className="header">
                        Quarterly Emission Reporting
                      </span>
                    </div>

                    <div className="lineItem">
                      <span className="header">
                        Purchase of CBAM certificates (carbon tax)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="choose__us-area-list-item bg-light-blue-artm">
                <i className="flaticon-talk"></i>
                <div className="choose__us-area-list-item-bottom">
                  <h6>Scope of applications</h6>
                  <div>
                    <div className="lineItem">
                      <span className="header">Aluminum</span>
                    </div>

                    <div className="lineItem">
                      <span className="header">Electricity</span>
                    </div>

                    <div className="lineItem">
                      <span className="header">Cement</span>
                    </div>
                    <div className="lineItem">
                      <span className="header">Iron & Steel</span>
                    </div>
                    <div className="lineItem">
                      <span className="header">Hydrogen</span>
                    </div>
                    <div className="lineItem">
                      <span className="header">Fertilizer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="choose__us-area-list-item bg-light-green-artm">
                <i className="flaticon-global-shipping"></i>
                <div className="choose__us-area-list-item-bottom">
                  <h6>CBAM Impact</h6>
                  <div>
                    <div className="lineItem">
                      <span className="header">Increase of costs</span>
                      <p className="textdata">
                        Increase of Cost of Imported goods{" "}
                      </p>
                      <p className="textdata">Increase of Cost of Compliance</p>
                      <p className="textdata">Increase of Cost of Offshoring</p>
                    </div>
                    <div className="lineItem">
                      <span className="header">Increase of Capex</span>
                    </div>
                    <div className="lineItem">
                      <span className="header">
                        Increase of Cost of Technology
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	  
	   <div
        className="cbam_advantage-sec"
        style={{ backgroundImage: `url(${cbamMainBg.src})` }}
      >
        <div className="custom__container position-relative">
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
                How much <span className="color-green-artm">goods</span> are affected by CBAM?
                </h3>
                <p>“US$ 45 billion of CBAM-covered goods were exported to Europe from Asia-Pacific in 2022, representing 4 percent of total exports from the region”</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <section
        className="cbam-exported section-padding">
        <div className="cbam-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-12">
                <h2 className="text-center">
                  {" "}
                  <span className="color-green-artm">CBAM</span> Good Exported to EU?
                </h2>
              </div>
            </div>
            <div className="row mt-4 align-items-center ">
              <div className="row col-lg-6">
                <div className="emptytext">&nbsp;</div>
                <div className="row col-lg-12 justify-content-center">
                  <div className="col-6">
                    <div
                      className="card text-center"
                    >
                      <h3>CHINA</h3>
                      <p>US$ 25,000,000,000</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="card text-center"
                    >
                      <h3>INDIA</h3>
                      <p>US$ 8,700,000,000</p>
                    </div>
                  </div>
                  <div className="col-6 mt-3">
                    <div
                      className="card text-center"
                    >
                      <h3>USA</h3>
                      <p>US$ 4,000,000,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-75 col-lg-6">
                <Image src={shipImage} alt="Ship Image" layout="responsive" />
              </div>
            </div>
          </div>
        </div>
      </section>
	  
	  <section className="section-padding artem-necessary artem-section"
      style={{ backgroundImage: `url(${cbamMainBg.src})` }}
      >
        <div className="p-5">
          <div className="container">
            <h2 className="text-white pb-5">
              Why is <span className="color-green-artm">ARTEM</span> necessary for everyone affected by{" "}
              CBAM?
            </h2>
            <p className="artem-description pb-3">
              Starting from October 2024, the importers must submit their CBAM
              reports at the customs for each import based on{" "}
              <Link href="https://example.com" legacyBehavior>
                <a>primary data</a>
              </Link>{" "}
              from the installation. Starting from May 2027, wrong reporting
              will lead to monetary sanction ranging from{" "}
              <Link href="https://example.com" legacyBehavior>
                <a>EUR 10-EUR 50</a>
              </Link>{" "}
              per ton of unreported emission.
            </p>
            <div className="artem-perspective">
              <p>
                <em>To put it into perspective:</em>
              </p>
              <p>
                For 1 ton of Unwrought Aluminium, a installation emits 4,06
                t/Co2. A primary smelter produces 500.000 to 1 Million Tons Al
                per year.
              </p>
            </div>
          </div>
        </div>
      </section>
	  
	  <section className="cbam-legal section-padding container">
        <div className="row mb-70">
          <div className="col-xl-12">
            <div className="work__process-title t-center pb-30">
              <h2>
			  CBAM aims to put a price on <span className="color-green-artm">carbon intensive</span> goods entering the European Union, Hence preventing <span className="color-green-artm">carbon Leakage</span>
			  </h2>
            </div>
            <div className="choose__us-area-list-work jc-center">
              <div className="choose__us-area-list-item bg-light-green-artm">
                <div className="choose__us-area-list-item-bottom">
                  <h5>Purpose</h5>
                  <div>
                    <p>Avoiding “carbon leakage” and reducing global GHG emissions.</p>
					 <h6>Key Objective</h6>
					 <p>Enviornmental Purpose</p>
					 <p>Economic Fairness</p>
					 <p>Global Climate Regulations</p>
                  </div>
                </div>
              </div>
              <div className="choose__us-area-list-item bg-light-blue-artm">
                <div className="choose__us-area-list-item-bottom">
                  <h5>Mechanism</h5>
                  <div>
                    <p>Reporting and accountingof extra-EU imported goods emissions</p>
					 <h6>Requirements</h6>
					 <p>Quaterly Disclosure of emissions </p>
					 <p>CBAM Certificates</p>
					 <p>Deduction of Carbon Prices</p>
					 
					 <h6>Product Categorie</h6>
					 <p>Aluminium</p>
					 <p>Iron & Steel</p>
					 <p>Cement</p>
					 <p>Electricity</p>
					 <p>Hydrogen</p>
					 <p>Fertilizer</p>
                  </div>
                </div>
              </div>
              <div className="choose__us-area-list-item bg-light-green-artm">
                <div className="choose__us-area-list-item-bottom">
                  <h5>Impact</h5>
                  <div>
                    <p>Same price for carbon emission related to production activities</p>
					 <h6>Direct Impacts</h6>
					 <p><strong>CBAM Compilance</strong> CBAM data and certificates</p>
					 <h6>Indirect Impacts</h6>
					 <p><strong>Carbon Costs</strong> Carbon content of imported goods.</p>
					 <p><strong>Price Adjustments</strong> Higher prices for high carbon content.</p>
					 <p><strong>Competitive Advantage</strong> Green technologies and sustainable supply-chain.</p>
					 <p><strong>Offshoring and purchasing strategies</strong> Decarbonization of purchasing and intercompany trades.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CbamTimeline/>
	  
    </div>
  );
};

export default CBAM;
