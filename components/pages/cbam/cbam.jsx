import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./cbam.css";
import BannerOne from "./cbam-banner";
import cbamImage2 from "../../../public/assets/img/cbam/cbam2.jpg";
import tick from "../../../public/assets/img/icon/tick.png";
import Check from "@/components/items/check";
const CBAM = () => {
  return (
    <div className="main-container">
      <BannerOne />

      <section className="climate-changes bg-theme-blue">
        <div className="row align-items-center conatiner outerwrapper">
          <div className="col-md-7">
            <div className="p-4 mx-auto">
              <h3 className="pb-4  text-white">
                Climate change is a global problem that needs global solutions.
              </h3>
              <h5 className="pb-4  text-white">
                CBAM is the EU’s answer to the problem of <span className="color-green-artm">“carbon leakage”.</span>
              </h5>
              <p className="mt-4 text-white">
                “Carbon leakage” occurs when companies based in the EU move
                carbon-intensive production abroad to countries with less strict
                climate actions, or when EU products get replaced by more
                carbon-intensive imports.
              </p>
            </div>
          </div>
          <div className="col-md-5 container-fluid p-0">
            <img
              src={cbamImage2.src}
              alt="CBAM Image 2"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-2 col-md-6">
                <div className="p-4 rounded border shadow d-flex justify-content-between flex-column col-xl-12">
                  <p className="d-flex align-items-center pb-20">
                  <Check/>
                    <strong>CBAM Obligations</strong>
                  </p>
                  <ul>
                    <li>Quarterly Emissions Reporting</li>
                    <li>Purchase of CBMA Certificate (Carbon Tax)</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 mb-2 col-md-6">
                <div className="p-4 rounded border shadow d-flex justify-content-between flex-column">
                  <p className="d-flex align-items-center">
                  <Check/>
                    <strong>Scope of Applications</strong>
                  </p>
                  <div className="d-flex gap-3 pb-20">
                  <ul>
          <li>Aluminium</li>
                    <li>Electricity</li>
                    <li>Cement</li>
                  </ul>
                      <ul>
          <li> Iron & Steel</li>
                    <li>Hydrogen</li>
                    <li>Hydrogen</li>
                  </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-2 col-md-6">
                <div className="p-4 rounded border shadow d-flex justify-content-between flex-column">
                  <p className="d-flex align-items-center mb-1">
                  <Check/>
                    <strong>CBAM Impact</strong>
                  </p>
                  <span style={{fontSize:"14px"}}> <strong>Increased Costs Across:</strong></span>
                  <div className="d-flex gap-3">
                  <ul>
                  <li>Imported Goods</li>
                    <li>Compliance</li>
                    <li>Offshoring</li>
                  </ul>
                  <ul>
                  <li>Capex</li>
                    <li>Compliance</li>
                    <li>Technology</li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-120">
          <div className="container">
            <div className="row mb-35">
              <div className="col-xl-12">
                <h3 className="mb-md-5 text-center mb-3">
                  How Much Goods are Affected by CBAM?
                </h3>
              </div>
            </div>
            <div className="row mb-35">
              <div
                className="col-xl-8 mx-auto p-5 border shadow rounded-2"
                style={{ background: "#EAF4F3" }}
              >
                <p>
                US $45 Billion of CBAM covered goods were exported to Europe from Asia-Pacific in 2022, representing 4 percent of total exports from the region.
                </p>
                <p>— Goldman Sachs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-120 pb-120">
          <div className="container">
            <div className="row mb-35">
              <div className="col-xl-12">
                <h3 className="mb-md-5 text-center mb-3 width-narrow  ">
                  Why is ARTEM Necessary for Everyone Affected by CBAM?
                </h3>
              </div>
            </div>
            <div className="row mb-35">
              <div className="col-xl-8 mx-auto p-5 border shadow rounded-2">
                <p>
                Starting from OCTOBER 2024, THE IMPORTERS MUST SUBMIT THEIR CBAM reports at the customs for each import based on primary data from the installation. starting from MAY 2025, wrong reporting will lead to monetary sanction ranging from EUR10-EUR50 per ton of unreported emission. {" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CBAM;
