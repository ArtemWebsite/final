import React from "react";

import BannerOne from "./verifier-banner";
import Check from "@/components/items/check";
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
                <p className="text-center width-narrow pb-30" style={{color: "rgb(180, 180, 180)"}}>
                  ARTEM provides a one stop solution to verifiers to project
                  manage the whole verification process, especially in places
                  that are far away and have high cultural and language
                  barriers.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row row justify-content-center">
            <div className="col-lg-5 col-md-6 rounded border shadow-sm m-4 d-flex justify-content-between flex-column">
              <div className="col-xl-12 p-4">
                <p className="d-flex align-items-center">
                <Check />
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
                <Check />
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
                <Check />
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
                <Check />
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
                <Check />
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
                <Check />
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
