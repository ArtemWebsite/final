import React from "react";
import Link from "next/link";
import img1 from "../../../public/assets/img/cbam-declarants/photo1.png";
import img2 from "../../../public/assets/img/cbam-declarants/photo2.png";
import img3 from "../../../public/assets/img/cbam-declarants/photo3.png";
import DeclarantSlider from "./declarant-slider";
import BannerOne from "./declarants-banner";
import Timeline from "./milestones";
import { P } from "react-flaticons";
import Check from "@/components/items/check";
const CbamDeclarantsMain = () => {
  return (
    <div className="cbam-importer-main">
      <BannerOne />

      <div className="pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h3 className="text-center">Declarant’s Challenges</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-theme-green pt-80">
        <div className="container pt-80 position-relative">
          <div className="row w-100 position-absolute top-50 start-50 translate-middle z-3">
            <div className="col-lg-5 col-md-6 m-4 bg-white rounded-2">
              <div className="col-xl-12 p-4 rounded-2">
                <p>
                  <Check /> Real data
                </p>
                <ul>
                  <li>
                    Obtain real emission data from your suppliers collected in
                    accordance with the CBAM Regulations.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 m-4 bg-white rounded-2">
              <div className="col-xl-12 p-4">
                <p>
                  <Check /> Protection from Liability
                </p>
                <ul>
                  <li>
                    Data that you can trust, gathered in accordance with the
                    CBAM Regulations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeclarantSlider />

      <div className="pt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h3 className="text-center">CBAM Timeline</h3>
            </div>
          </div>
          <Timeline />
        </div>
      </div>

      <div className="section-padding">
        <div className="container">
          <div className="row mb-35">
            <div className="col-xl-12">
              <div className="service__one-title t-center">
                <span className="subtitle-one">&nbsp;</span>
                <h3 className="mb-md-5 text-center">Key Functionalities</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column pl-0 pr-0">
              <div className="col-xl-12 p-4">
                <p>
                  <Check /> <strong>ARTEM Reporting Solution</strong>
                </p>
                <ul>
                  <li>Manage your supplier's emission reports</li>
                  <li>Seamless integration with the EU Portal</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-five">
                Learn More
              </Link>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column pl-0 pr-0">
              <div className="col-xl-12 p-4">
                <p>
                  <Check /> <strong>Data you can trust</strong>
                </p>
                <ul>
                  <li>
                    Emissions data gathered in accordance with applicable ISO
                    standards or calculated in accordance with CBAM Regulations
                  </li>
                  <li>Tamper-proof technology for peace of mind</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-five">
                Learn More
              </Link>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column pl-0 pr-0">
              <div className="col-xl-12 p-4">
                <p>
                  <Check /> <strong>World's largest Suppliers</strong>
                </p>
                <ul>
                  <li>Trusted by some of the World's largest producers</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-five">
                Learn More
              </Link>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column pl-0 pr-0">
              <div className="col-xl-12 p-4">
                <p>
                  <Check />{" "}
                  <strong>Certified emissions data verification</strong>
                </p>
                <ul>
                  <li>
                    All supporting documentation gathered to ensure that your
                    emissions reports pass verification, every time
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="btn-five">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="cbam_three_tab section-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-12">
              <h3 className="mb-5 text-center width-narrow">
                Industry-Tested Solutions to Meet Your Needs
              </h3>
              <p className="text-center width-narrow pb-50" style={{color:"#B4B4B4"}}>
                With over 30 years of experience in the manufacturing sector,
                the team at ARTEM are perfectly placed to assist you with
                complying with the CBAM requirements.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="rounded border shadow-sm d-flex justify-content-between flex-column col-xl-12">
              <div className="p-4 min-height-card">
                <img src={img1.src} alt="img-with-text" />
                <h6 className="color-green-artm mt-20 mb-10">Liabilities</h6>
                <p>
                  Assistance with minimising your liabilities under CBAM by
                  identifying suppliers with lower emissions.
                </p>
                </div>
                <Link href="/contact" className="btn-five">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="rounded border shadow-sm d-flex justify-content-between flex-column">
              <div className="p-4 min-height-card">
                <img src={img2.src} alt="img-with-text" />
                <h6 className="color-green-artm mt-20 mb-10">Reporting</h6>
                <p>
                  A CBAM compliant and easy to use CBAM Reporting Tool that will
                  access the ARTEM database of real data from the installations
                  directly.
                </p>
                </div>
                <Link href="/contact" className="btn-five">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="rounded border shadow-sm d-flex justify-content-between flex-column">
                <div className="p-4 min-height-card">
                <img src={img3.src} alt="img-with-text" />
                <h6 className="color-green-artm mt-20 mb-10">Communication Support</h6>
                <p>
                  We provide assistance to help you communicating with suppliers
                  and intermediaries to get the data you need fast.
                </p>
                </div>
                <Link href="/contact" className="btn-five">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CbamDeclarantsMain;
