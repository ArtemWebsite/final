import React from "react";
import Link from "next/link";
import OperatorSlider from "./operator-slider";
import BannerOne from "./operator-banner";
import Timeline from "../cbam-declarants/milestones";
import { P } from "react-flaticons";
import img1 from "../../../public/assets/img/cbam-operator/dashboard.png";
import img2 from "../../../public/assets/img/cbam-operator/artem-diagram.png";
import img3 from "../../../public/assets/img/cbam-operator/p1.png";
import img6 from "../../../public/assets/img/cbam-operator/p2.png";
import img7 from "../../../public/assets/img/cbam-operator/p3.png";
import img8 from "../../../public/assets/img/cbam-operator/p4.png";
import img9 from "../../../public/assets/img/cbam-operator/p5.png";

import icon1 from "../../../public/assets/img/cbam-operator/EU.png";
import icon2 from "../../../public/assets/img/cbam-operator/ARTEM.png";
import icon3 from "../../../public/assets/img/cbam-operator/guesstimate1.png";
import icon4 from "../../../public/assets/img/cbam-operator/guesstimate2.png";
import icon5 from "../../../public/assets/img/cbam-operator/flag.png";
import icon6 from "../../../public/assets/img/cbam-operator/flag.png";
import tick from "../../../public/assets/img/icon/tick.png";
import Check from "@/components/items/check";
import Caution from "@/components/items/caution";
const CbamOperatorMain = () => {
  return (
    <div className="cbam-operator-main">
      <BannerOne />

      <div className="pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 pb-30">
              <h3 className="text-center">Operator’s Challenges</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-theme-light-orange px-5 pt-80">
        <div className="px-5 pt-80 position-relative">
          <div className="row px-5 w-100 position-absolute top-50 start-50 translate-middle z-3">
            <div className="col-lg-4 col-md-6 m-2 bg-white shadow-lg rounded-3">
              <div className="p-4 text-center">
              <Caution/>
              <p className="pt-20"> 
                  Producers exporting to the EU will need to account for the
                  carbon emissions associated with their products.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-2 bg-white shadow-lg rounded-3">
              <div className="p-4 text-center">
              <Caution/>
                <p className="pt-20"> 
                  Producers that fail to adopt technologies that emit fewer GHGs
                  risk losing market share.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 m-2 bg-white shadow-lg rounded-3">
              <div className="p-4 text-center">
              <Caution/>
              <p className="pt-20"> 
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
              <h3 className="text-center">CBAM Timeline</h3>
            </div>
          </div>
          <Timeline />
        </div>
      </div>

      <div className="pt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h3 className="text-center mb-5">
                ARTEM Integrated solution support:
              </h3>
              <p className=" text-center width-narrow pb-30" style={{color: "rgb(180, 180, 180)"}}>
                Collect Emission Data onsite with our own Micro Flow NDIR Sensor
                technology to improve accuracy in assessing industrial emission
                data and minimise your importer's CBAM liability.
              </p>
            </div>
          </div>

          <div className="row d-flex gap-3 justify-content-center">
            <div className="col-lg-5 col-md-6 text-center p-4">
              <div className="col-lg-1 mx-auto mb-4">
                <img src={icon1.src} alt="icon"  style={{width:"60px",height:"auto"}}/>
              </div>
              <h6>EU Default Calculation Method</h6>
            </div>

            <div className="col-lg-5 col-md-6 text-center p-4">
              <div className="col-lg-1 mx-auto mb-4">
                <img src={icon2.src} alt="icon" style={{width:"60px",height:"auto"}}/>
              </div>
              <h6>EU Default Calculation Method</h6>
            </div>

            <div className="col-lg-5 col-md-6 text-center p-4">
              <div className="col-lg-2 mx-auto mb-4">
                <img src={icon3.src} alt="icon" style={{width:"60px",height:"auto"}}/>
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

            <div className="col-lg-5 col-md-6 text-center p-4">
              <div className="col-lg-2 mx-auto mb-4">
                <img src={icon4.src} alt="icon" style={{width:"60px",height:"auto"}} />
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

            <div className="col-lg-5 col-md-6 text-center">
              <div className="col-xl-12 shadow-sm  bg-light-orange-artm p-4">
                <div className="col-lg-1 mx-auto mb-4">
                  
<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.6289 49.9999C52.5624 49.9999 53.7641 47.8989 52.7837 46.2323L32.1548 11.1631C31.1882 9.51985 28.8117 9.51985 27.8451 11.1631L7.21615 46.2323C6.2358 47.8989 7.43744 49.9999 9.37098 49.9999H50.6289Z" fill="#FFB800"/>
<path fillRule="evenodd" clipRule="evenodd" d="M30 20C31.3807 20 32.5 21.1193 32.5 22.5V35C32.5 36.3807 31.3807 37.5 30 37.5C28.6193 37.5 27.5 36.3807 27.5 35V22.5C27.5 21.1193 28.6193 20 30 20Z" fill="#233041"/>
<path d="M32.5 42.5C32.5 43.8807 31.3807 45 30 45C28.6193 45 27.5 43.8807 27.5 42.5C27.5 41.1193 28.6193 40 30 40C31.3807 40 32.5 41.1193 32.5 42.5Z" fill="#233041"/>
</svg>

                </div>
                <p>HIGHER CBAM LIABILITY</p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 text-center">
              <div className="col-xl-12   shadow-sm bg-light-green-artm p-4">
                <div className="col-lg-1 mx-auto mb-4">
               
<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8734 5.10347C29.9471 5.04327 30.0529 5.04327 30.1266 5.10347L34.4475 8.6356C34.4975 8.67653 34.5643 8.69073 34.6267 8.6737L40.0107 7.20441C40.1025 7.17936 40.1992 7.22242 40.242 7.30738L42.7527 12.2916C42.7817 12.3494 42.837 12.3895 42.9009 12.3993L48.417 13.2469C48.511 13.2614 48.5819 13.34 48.5864 13.435L48.8528 19.0095C48.8559 19.0741 48.89 19.1333 48.9444 19.1682L53.6389 22.1862C53.7189 22.2376 53.7516 22.3383 53.7171 22.4269L51.6931 27.6278C51.6696 27.6881 51.6768 27.756 51.7123 27.8101L54.7734 32.4765C54.8255 32.556 54.8145 32.6613 54.7469 32.7283L50.7825 36.6563C50.7365 36.7018 50.7154 36.7667 50.7258 36.8306L51.6243 42.3386C51.6396 42.4325 51.5867 42.5242 51.4977 42.5579L46.2784 44.5338C46.2179 44.5567 46.1722 44.6075 46.1558 44.67L44.7362 50.0673C44.712 50.1593 44.6264 50.2215 44.5314 50.2161L38.9596 49.8983C38.895 49.8946 38.8327 49.9224 38.7922 49.9729L35.3001 54.3262C35.2406 54.4004 35.137 54.4224 35.0525 54.3788L30.0916 51.8222C30.0341 51.7926 29.9659 51.7926 29.9084 51.8222L24.9475 54.3788C24.863 54.4224 24.7594 54.4004 24.6999 54.3262L21.2078 49.9729C21.1673 49.9224 21.105 49.8946 21.0404 49.8983L15.4686 50.2161C15.3736 50.2215 15.288 50.1593 15.2638 50.0673L13.8442 44.67C13.8278 44.6075 13.7821 44.5567 13.7216 44.5338L8.50227 42.5579C8.4133 42.5242 8.36037 42.4325 8.37569 42.3386L9.27415 36.8306C9.28456 36.7667 9.26347 36.7018 9.21753 36.6563L5.25309 32.7283C5.18552 32.6613 5.17445 32.556 5.22663 32.4765L8.28775 27.8101C8.32322 27.756 8.33036 27.6881 8.30691 27.6278L6.28288 22.4269C6.24838 22.3383 6.28109 22.2376 6.36111 22.1862L11.0556 19.1682C11.11 19.1333 11.1441 19.0741 11.1472 19.0095L11.4136 13.435C11.4181 13.34 11.489 13.2614 11.583 13.2469L17.0991 12.3993C17.163 12.3895 17.2183 12.3494 17.2473 12.2916L19.758 7.30738C19.8008 7.22242 19.8975 7.17936 19.9893 7.20441L25.3733 8.6737C25.4357 8.69073 25.5025 8.67653 25.5525 8.6356L29.8734 5.10347Z" fill="#8ED3C0"/>
<path fillRule="evenodd" clipRule="evenodd" d="M42.7946 20.5343C43.8803 21.3873 44.0689 22.959 43.2158 24.0447L30.2108 40.5966C28.8562 42.3205 26.2683 42.3889 24.8246 40.739L16.8686 31.6464C15.9594 30.6073 16.0647 29.0279 17.1038 28.1187C18.1429 27.2095 19.7223 27.3148 20.6315 28.3538L27.3965 36.0853L39.2842 20.9556C40.1373 19.8699 41.7089 19.6813 42.7946 20.5343Z" fill="white"/>
</svg>

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
              <h3 className="text-center mb-5 width-narrow pb-30">
                Emission Data Collection Based on Calculation Method
              </h3>
              <p className="text-center width-narrow pb-30" style={{color: "rgb(180, 180, 180)"}}>
                Collect Emission Data onsite with our own Micro Flow NDIR Sensor
                technology to improve accuracy in assessing industrial emission
                data and minimise your importer's CBAM liability.
              </p>
            </div>
          </div>
          <div className="row mx-auto justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="col-xl-12 p-4 border shadow-sm rounded-2 text-capitalize">
                <p>
                Equipment List based on specific Production Route/Production Methodology
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="col-xl-12 p-4 border shadow-sm rounded-2 text-capitalize">
                <p>Step-by-step analysis tailored to your production line</p>
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
                <h3 className="mb-md-5 text-center">Our Key Functionalities</h3>
              </div>
            </div>
          </div>
          <div className="row row justify-content-center">
            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <Check /> 
                  <strong>CBAM Compliance tool</strong>
                </p>
                <p  className="text-capitalize">
                  Fully compliant with all legislative requirements, and allows
                  you to easily automate compliance obligations such as
                  compiling your Monitoring Methodology
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <Check />
                  <strong>Pricing</strong>
                </p>
                <p  className="text-capitalize">
                  Lower carbon price due to emission calculation based on CEMS
                  in contrast to using default values
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <Check />
                  <strong>Bespoke</strong>
                </p>
                <p  className="text-capitalize">Model ARTEM Clause for better CBAM adjusted contracting</p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <Check />
                  <strong>Cost effective</strong>
                </p>
                <p  className="text-capitalize">
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
              <h3 className="mb-5 text-center">
                Industry-Tested Solutions to Meet Your Needs
              </h3>
              <p className="text-center width-narrow pb-30" style={{color: "rgb(180, 180, 180)"}}>
                With over 30 years of experience in the manufacturing sector,
                the team at ARTEM are perfectly placed to assist you with
                complying with the CBAM requirements.
              </p>
            </div>
          </div>
          <div className="row d-flex align-items-stretch">
            <div className="col-lg-8 col-md-6 mb-25">
              <div className="p-4 rounded border shadow-sm d-flex flex-column h-100">
                <img src={img3.src} alt="img-with-text" />
                <h6 className="color-green-artm pt-10 pb-20">Compliance</h6>
                <p>
                A CBAM compliant and easy to use CBAM Reporting Tool, customisable to your specific installation, that will guide your personnel through reporting your installations’ emissions data with a few clicks.
                </p>
               
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-25">
              <div className="p-4 rounded border shadow-sm d-flex flex-column h-100">
                <img src={img6.src} alt="img-with-text" />
                <h6 className="color-green-artm pt-10 pb-20">Communication  Support</h6>
                <p>
                Assistance with communicating the relevant information to your suppliers fast to preserve your competitive edge;
                </p>
               
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-30">
              <div className="p-4 rounded border shadow-sm d-flex flex-column h-100">
                <img src={img7.src} alt="img-with-text" />
                <h6 className="color-green-artm pt-10 pb-20">Safe</h6>
                <p>
                Our local subsidiary will ensure that your data is safely stored, and compliant with local laws.
                </p>
               
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-30">
              <div className="p-4 rounded border shadow-sm d-flex flex-column h-100">
                <img src={img8.src} alt="img-with-text" />
                <h6 className="color-green-artm pt-10 pb-20">Identification</h6>
                <p>
                Assistance in identifying and reducing your emissions with the ARTEM CEMS System.
                </p>
               
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-30">
              <div className="p-4 rounded border shadow-sm d-flex flex-column h-100">
                <img src={img9.src} alt="img-with-text" />
                <h6 className="color-green-artm pt-10 pb-20">Verification</h6>
                <p>
                Support for verifying your emissions data, including with ARTEM Virtual Verification Module.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CbamOperatorMain;
