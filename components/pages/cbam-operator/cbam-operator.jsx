import React from "react";
import Link from "next/link";
import OperatorSlider from "./operator-slider";
import BannerOne from "./operator-banner";
import Timeline from "../cbam-declarants/milestones";
import { P } from "react-flaticons";
import img1 from "../../../public/assets/img/cbam-operator/dashboard.png";
import img2 from "../../../public/assets/img/cbam-operator/artem-diagram.png";

const CbamOperatorMain = () => {
  return (
    <div className="cbam-operator-main">
      <BannerOne />

      <div className="pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="text-center">Operator’s Challenges</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-theme-light-orange pt-80">
      <div className="container pt-80 position-relative">
        <div className="row w-100 position-absolute top-50 start-50 translate-middle z-3">
          <div className="col-lg-4 col-md-6 m-2 bg-white">
            <div className="col-xl-12 p-4">
              <p>
              Producers exporting to the EU will need to account for the carbon emissions associated with their products.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 m-2 bg-white">
            <div className="col-xl-12 p-4">
            <p>
            Producers that fail to adopt technologies that emit fewer GHGs risk losing market share.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 m-2 bg-white">
            <div className="col-xl-12 p-4">
            <p>
            Reporting Declarants importing into the European Union, and their suppliers, will expect producers to comply with reporting and verification obligations imposed by CBAM.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <OperatorSlider />

      <div className="pt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="text-center">CBAM Timeline</h2>
            </div>
          </div>
          <Timeline />
        </div>
      </div>
      <div className="container text-center p-5">
      <img src={img1.src} alt="dashboard" /></div>
      <div className="container text-center">
      <img src={img2.src} alt="diagram" /></div>

      <div className="section-padding">
        <div className="container">
          <div className="row mb-35">
            <div className="col-xl-12">
              <div className="service__one-title t-center">
                <span className="subtitle-one">&nbsp;</span>
                <h2 className="mb-md-5 text-center">Our Key Functionalities</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6 rounded border m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p>ARTEM Reporting Solution</p>
                <ul>
                  <li>Manage your supplier's emission reports</li>
                  <li>Seamless integration with the EU Portal</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-five">
                Learn More
              </Link>
            </div>

            <div className="col-lg-5 col-md-6 rounded border m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p>Data you can trust</p>
                <ul>
                  <li>Emissions data gathered in accordance with applicable ISO standards or calculated in accordance with CBAM Regulations</li>
                  <li>Tamper-proof technology for peace of mind</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-five">
                Learn More
              </Link>
            </div>

            <div className="col-lg-5 col-md-6 rounded border m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p>World's largest Suppliers</p>
                <ul>
                  <li>Trusted by some of the World's largest producers</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-five">
                Learn More
              </Link>
            </div>

            <div className="col-lg-5 col-md-6 rounded border m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p>Certified emissions data verification</p>
                <ul>
                  <li>All supporting documentation gathered to ensure that your emissions reports pass verification, every time</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-five">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CbamOperatorMain;
