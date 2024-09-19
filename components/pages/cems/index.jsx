"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import FooterOne from "@/components/layout/footers/footer-one";
import ImageWithText from "../homes/home/styles/image-with-text";
import MeasurementTable from "../homes/home/measuring";
import Technology from "../homes/home/technology";
import ProductionRoutesTable from "../homes/home/production-example";
import Bayer from "../homes/home/bayer";
import BottomImage from "../homes/home/bottom-img";
import "../homes/home/home.css";

const CEMS = () => {
  return (
    <>
      <SEO pageTitle="Comming Soon" />

      <HeaderOne />
      <Technology />
      <div className="pt-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cbam__banner_text mb-5">
                <h2 className="mb-md-5 text-center">
                  <span className="color-green-artm"> System </span> Overview
                </h2>
                <p className="text-center">
                The ARTEM CEMS Modul is designed to continuously monitor multiple parameters, inlcuding the content of CO2 SO2, NO, O2 and Perfluoro carbons. It measures:  The measured parameters are transmitted to the
                  <span className="color-green-artm">
                  Data Storage System
                  </span>
                  (DSS).
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 rounded mb-4">
              <div className="col-xl-12 bg-light-green-artm p-1">
                <div className="text-center">
                    Flow Rate
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 rounded mb-4">
              <div className="col-xl-12 bg-light-blue-artm p-1">
                <div className="text-center">
                    Temperature
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 rounded mb-4">
              <div className="col-xl-12 bg-light-green-artm p-1">
                <div className="text-center">
                    Pressure
                </div>
              </div>
            </div>
			<div className="col-lg-3 col-md-6 rounded mb-4">
              <div className="col-xl-12 bg-light-blue-artm p-1">
                <div className="text-center">
                    Humidity of the flue gas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageWithText/>
      <MeasurementTable></MeasurementTable>
      <BottomImage />
     
     
      <ProductionRoutesTable></ProductionRoutesTable>
      <Bayer></Bayer>
      <FooterOne />
     
    </>
  );
};

export default CEMS;
