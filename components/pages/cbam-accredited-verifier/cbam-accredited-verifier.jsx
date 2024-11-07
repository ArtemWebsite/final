import React from "react";
import Link from "next/link";
import tick from "../../../public/assets/img/icon/tick.png";
import BannerOne from "./verifier-banner";

const CBAMAccreditedVerifierMain = () => {
  return (
    <div className="cbam-verifier-main">
      <BannerOne />

      <div className="section-padding">
        <div className="container">
          <div className="row mb-35">
            <div className="col-xl-12">
              <div className="service__one-title t-center">
                <span className="subtitle-one">&nbsp;</span>
                <h2 className="mb-md-5 text-center mb-3">
                  Our Key Functionalities
                </h2>
                <p>
                  ARTEM provides a one stop solution to verifiers to project
                  manage the whole verification process, especially in places
                  that are far away and have high cultural and language
                  barriers.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <img
                    src={tick.src}
                    alt="icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <strong>Onboarding</strong>
                </p>
                <p>
                  Easy Onboarding of Installations all over the world with local
                  teams to extract primary data and provide support
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <img
                    src={tick.src}
                    alt="icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <strong>Precise</strong>
                </p>
                <p>
                  use CEMS units to accurately measure emission points at the
                  installations locally
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <img
                    src={tick.src}
                    alt="icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <strong>Security</strong>
                </p>
                <p>
                  Locally stored data to honour local data sovereignty law, with
                  sound data integrity protection
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <img
                    src={tick.src}
                    alt="icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <strong>Efficiency</strong>
                </p>
                <p>
                  Virtual verification process that allows for minimization of
                  efforts
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <img
                    src={tick.src}
                    alt="icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <strong>automation</strong>
                </p>
                <p>
                  Automatic and in person translation in-app to reduce
                  outsourcing and protect verification quality
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                  <img
                    src={tick.src}
                    alt="icon"
                    style={{ width: "32px", height: "32px" }}
                  />
                  <strong>Roles and Responsibilities</strong>
                </p>
                <p>smart contracts to clairfy legal responsibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CBAMAccreditedVerifierMain;
