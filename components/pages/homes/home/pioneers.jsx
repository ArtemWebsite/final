import Link from "next/link";
import { useState } from "react";

const ArtemPioneer = () => {
  return (
    <>
      <div className="section-padding pt-0">
        <div className="container">
          <div className="row justify-content-space-around">
		  <div className="col-xl-12 text-center">
              <div className="mb-5">
                <h2 className="mb-5">
                ARTEM pioneers 
cross-border CBAM Compliance
                </h2>
                <p>
                CBAM aims to put a price on carbon intensive goods entering the European Union, hence preventing carbon leakage
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3">
			<div className="col-xl-12 p-4 bg-light-blue-artm">
			 <i className="flaticon-power"></i>
			  <h6>CBAM Compilance Tool</h6>
			  <ul>
                <li>Quarterly Carbon Reporting</li>
                <li>Optimized pricing of carbon certificate</li>
                <li>Local UI and App and special VPN data transfer channel to overcome the “Great Firewall”</li>
              </ul>
			  </div>
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3">
			<div className="col-xl-12 p-4 bg-light-green-artm">
			<i className="flaticon-loupe"></i>
			  <h6>CEMS Monitoring </h6>
			  <ul>
                <li>Micro-flow NDIR technology to measure SO2, NO, CO, C2 and O2 simultaneously.</li>
                <li>Optimized pricing of carbon certificate.</li>
                <li>Tamper Proof technology to ensure veracity.</li>
              </ul>
			  </div>
            </div>
			
			 <div className="col-lg-6 col-md-6 rounded mb-3">
			 <div className="col-xl-12 p-4 bg-light-green-artm">
             <i className="
flaticon-menu"></i>
             <h6>Carbon Database using actual local data</h6>
			<ul>
			<li>Long term goal is to establish a database using verifiable CEMS data collected in the production to create a database for easier calculation.</li>
			</ul>
			</div>
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3">
			<div className="col-xl-12 p-4 bg-light-blue-artm">
            <i className="flaticon-placeholder"></i>
            <h6>Certified Emission Data Verification</h6>
			<ul>
			<li>CEMS system will be certified according to EU Regulation, and can service the accredited third party verifiers in EU to efficiently verify the data.</li>
			</ul>
			</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtemPioneer;
