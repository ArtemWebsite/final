import React from "react";
import Link from "next/link";
import OperatorSlider from "./operator-slider";
import BannerOne from "./operator-banner";
import Timeline from "../cbam-declarants/milestones";
import { P } from "react-flaticons";
import img1 from "../../../public/assets/img/cbam-operator/dashboard.png";
import img2 from "../../../public/assets/img/cbam-operator/artem-diagram.png";
import img3 from "../../../public/assets/img/cbam-operator/i3.png";
import img6 from "../../../public/assets/img/cbam-operator/i6.png";
import img7 from "../../../public/assets/img/cbam-operator/i7.png";
import icon1 from "../../../public/assets/img/cbam-operator/flag.png";
import icon2 from "../../../public/assets/img/cbam-operator/green-image.png";
import icon3 from "../../../public/assets/img/cbam-operator/guesstimate1.png";
import icon4 from "../../../public/assets/img/cbam-operator/guesstimate2.png";
import icon5 from "../../../public/assets/img/cbam-operator/flag.png";
import icon6 from "../../../public/assets/img/cbam-operator/flag.png";
import tick from "../../../public/assets/img/icon/tick.png";
import Check from "@/components/items/check";

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
                  Producers exporting to the EU will need to account for the
                  carbon emissions associated with their products.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 m-2 bg-white">
              <div className="col-xl-12 p-4">
                <p>
                  Producers that fail to adopt technologies that emit fewer GHGs
                  risk losing market share.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-2 bg-white">
              <div className="col-xl-12 p-4">
                <p>
                  Reporting Declarants importing into the European Union, and
                  their suppliers, will expect producers to comply with
                  reporting and verification obligations imposed by CBAM.
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

      <div className="pt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="text-center mb-5">
                ARTEM Integrated solution support:
              </h2>
              <p>
                Collect Emission Data onsite with our own Micro Flow NDIR Sensor
                technology to improve accuracy in assessing industrial emission
                data and minimise your importer's CBAM liability.
              </p>
            </div>
          </div>

          <div className="row d-flex align-items-stretch">
            <div className="col-lg-6 col-md-6 text-center p-4">
              <div className="col-lg-1 mx-auto mb-4">
                <img src={icon1.src} alt="icon" />
              </div>
              <h6>EU Default Calculation Method</h6>
            </div>

            <div className="col-lg-6 col-md-6 text-center p-4">
              <div className="col-lg-1 mx-auto mb-4">
                <img src={icon2.src} alt="icon" />
              </div>
              <h6>EU Default Calculation Method</h6>
            </div>

            <div className="col-lg-6 col-md-6 text-center p-4">
              <div className="col-lg-1 mx-auto mb-4">
                <img src={icon3.src} alt="icon" />
              </div>
              <p>
                <strong>Estimation of Emissions</strong>
              </p>
              <p>
                Multiply activity data (eg fuel, electricity) by appropriate
                emission factor using default value based on unfavourable
                assumption
              </p>
            </div>

            <div className="col-lg-6 col-md-6 text-center p-4">
              <div className="col-lg-1 mx-auto mb-4">
                <img src={icon4.src} alt="icon" />
              </div>
              <p>
                <strong>Knowledge of Emissions</strong>
              </p>
              <p>
                Monitor GHD Concentration and flow rate by filters and/or
                sensors resulting in precise measurements based on actual
                emissions
              </p>
            </div>

            <div className="col-lg-6 col-md-6 text-center">
              <div className="col-xl-12  bg-light-orange-artm p-4">
                <div className="col-lg-1 mx-auto mb-4">
                  <img src={icon5.src} alt="icon" />
                </div>
                <p>HIGHER CBAM LIABILITY</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 text-center">
              <div className="col-xl-12  bg-light-green-artm p-4">
                <div className="col-lg-1 mx-auto mb-4">
                  <img src={icon6.src} alt="icon" />
                </div>
                <p>OPTIMISED PRICING AND LOWER CBAM LIABILITY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h2 className="text-center mb-5">
                Emission Data Collection Based on Calculation Method
              </h2>
              <p className="text-center">
                Collect Emission Data onsite with our own Micro Flow NDIR Sensor
                technology to improve accuracy in assessing industrial emission
                data and minimise your importer's CBAM liability.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 text-center">
              <div className="col-xl-12 p-4 border rounded-5">
                <p>
                  Equipment List based on specific Production Route/Production
                  Methodology
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 text-center">
              <div className="col-xl-12 p-4 border rounded-5">
                <p>step-by-step analysis tailored to your production line</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center p-5">
        <img src={img1.src} alt="dashboard" />
      </div>
      <div className="container text-center">
        <img src={img2.src} alt="diagram" />
      </div>

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
                <p className="d-flex align-items-center">
                  <Check />
                  <strong>CBAM Compliance tool</strong>
                </p>
                <p>
                  Fully compliant with all legislative requirements, and allows
                  you to easily automate compliance obligations such as
                  compiling your Monitoring Methodology
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <Check />
                  <strong>Pricing</strong>
                </p>
                <p>
                  Lower carbon price due to emission calculation based on CEMS
                  in contrast to using default values
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <Check />
                  <strong>Bespoke</strong>
                </p>
                <p>Model ARTEM Clause for better CBAM adjusted contracting</p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <Check />
                  <strong>Cost effective</strong>
                </p>
                <p>
                  Lower carbon price due to emission calculation based on CEMS
                  in contrast to using default values
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cbam_three_tab section-padding">
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-12">
              <h2 className="mb-5 text-center">
                Industry-Tested Solutions to Meet Your Needs
              </h2>
              <p className="text-center">
                With over 30 years of experience in the manufacturing sector,
                the team at ARTEM are perfectly placed to assist you with
                complying with the CBAM requirements.
              </p>
            </div>
          </div>
          <div className="row d-flex align-items-stretch">
            <div className="col-lg-8 col-md-6">
              <div className="p-4 rounded border d-flex flex-column h-100">
                <img src={img3.src} alt="img-with-text" />
                <h6 className="color-green-artm">Liabilities</h6>
                <p>
                  Assistance with minimising your liabilities under CBAM by
                  identifying suppliers with lower emissions.
                </p>
                <Link href="/contact" className="btn-five">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded border d-flex flex-column h-100">
                <img src={img3.src} alt="img-with-text" />
                <h6 className="color-green-artm">Liabilities</h6>
                <p>
                  Assistance with minimising your liabilities under CBAM by
                  identifying suppliers with lower emissions.
                </p>
                <Link href="/contact" className="btn-five">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded border d-flex flex-column h-100">
                <img src={img3.src} alt="img-with-text" />
                <h6 className="color-green-artm">Liabilities</h6>
                <p>
                  Assistance with minimising your liabilities under CBAM by
                  identifying suppliers with lower emissions.
                </p>
                <Link href="/contact" className="btn-five">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded border d-flex flex-column h-100">
                <img src={img6.src} alt="img-with-text" />
                <h6 className="color-green-artm">Reporting</h6>
                <p>
                  A CBAM compliant and easy to use CBAM Reporting Tool that will
                  access the ARTEM database of real data from the installations
                  directly.
                </p>
                <Link href="/contact" className="btn-five">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded border d-flex flex-column h-100">
                <img src={img7.src} alt="img-with-text" />
                <h6 className="color-green-artm">Communication Support</h6>
                <p>
                  We provide assistance to help you communicating with suppliers
                  and intermediaries to get the data you need fast.
                </p>
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

export default CbamOperatorMain;
