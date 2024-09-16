import Link from "next/link";
import { useState } from "react";

const Technology = () => {
  return (
    <>
      <div className="about__one section-padding pt-0">
        <div className="container">
          <div className="row">
		  <div className="col-xl-12 text-center">
              <div className="mb-5">
                <h2 className="mb-5">
                Technology | Hardware
                </h2>
                <p>
                ARTEM software platform in combination with developed CEMS module improves accuracy in assessing industrial emission data and is therefore saving additional carbon tax.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3">
			<div className="col-xl-12 p-4 bg-light-green-artm">
			 <i className="flaticon-project"></i>
			  <h6>Estimation of emissions</h6>
			  <p>Multiply activity data (e.g., fuel, Electricity) by appropriate emission factor using default value based on worst assumption.</p>
			  </div>
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3">
			<div className="col-xl-12 p-4  bg-light-blue-artm">
			<i className="flaticon-wall-clock"></i>
			  <h6>Direct measurement of emissions</h6>
			  <p>Monitor GHG concentration and flow rate by filters and or sensors resulting in precise measurements based on actual emissions.</p>
			  </div>
            </div>
			<div className="col-lg-6 col-md-6 rounded mb-3">
			<div className="col-xl-12 p-2 bg-light-red-artm">
			<div className="dflex align-items-baseline">
			<div className="icon-mark border-light-red-artm">X</div>
			  Leads to overall higher carbon tax
			  </div>
			  </div>
            </div>
			<div className="col-lg-6 col-md-6 rounded mb-3">
			<div className="col-xl-12 p-2 bg-light-green-artm">
			<div className="dflex align-items-baseline">
			<div className="icon-mark border-light-green-artm">✓</div>
			  Results in optimized pricing and less tax 
			  </div>
			  </div>
            </div>
			 <div className="col-lg-6 col-md-6 rounded mb-3">
			 <div className="col-xl-12 p-4  bg-light-green-artm">
			<ul>
			<li><span className="color-green-artm">Micro-flow NDIR technology</span> to measure SO2, NO, Co, CO2 and o2 simultaneously.</li>
			<li>Large and <span className="color-green-artm">easy to replace filtering area</span> for sampling gas probes</li>
			<li>Built-in PLC control system including <span className="color-green-artm">adjustable data output</span> and defect diagnosis</li>
			<li>Direct <span className="color-green-artm">data connection to ARTEM</span> for storage, analysis and presentation</li>
			</ul>
			</div> 
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3">
			<div className="col-xl-12 p-4  bg-light-blue-artm">
			<ul>
			<li>Multiple Sensors per measuring point - one sensor bench measuring one gas.</li>
			<li>Automatic temperature compensation with built-in moisture adjustment device.</li>
			<li>High stability and low maintenance.</li>
			</ul>
			</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
