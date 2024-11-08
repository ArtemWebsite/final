"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import FooterOne from "@/components/layout/footers/footer-one";
import ImageWithText from "../homes/home/styles/image-with-text";
import ProductionRoutesTable from "../homes/home/production-example";
import BottomImage from "../homes/home/bottom-img";
import "../homes/home/home.css";
import BannerOne from "./cems-banner";
import BottomText from "./bottom-text";

const CEMS = () => {
  return (
    <>
      <SEO pageTitle=" Emission Monitoring Equipment" />

      <HeaderOne />
      <BannerOne />
      <ImageWithText/>
      <div className="pt-60">
      <div className="container">
      <div className="row">
            <div className="col-xl-12 pb-5">
              <h3 className="text-center">Specifications and Conditions</h3>
            </div>
          </div>
		  
          <div className="row">
      <div className="table-responsive col-xl-8 mx-auto">
        <table className="table custom-table custom-table-green">
          <thead>
            <tr>
              <th>System Parameter</th>
              <th>Unit</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Gas flow</td>
              <td>L/min</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Measuring Range</td>
              <td>PPM</td>
              <td>0-1000ppm</td>
            </tr>
            <tr>
              <td>Lowest measuring limit</td>
              <td>ppb</td>
              <td>&lt; 250 ppb</td>
            </tr>
            <tr>
              <td>Precision</td>
              <td>ppb</td>
              <td>&lt;=500 ppb</td>
            </tr>
            <tr>
              <td>Reaction time</td>
              <td>second</td>
              <td>&lt;60 seconds</td>
            </tr>
            <tr>
              <td>Redundancy Rate</td>
              <td>%</td>
              <td>1 %</td>
            </tr>
            <tr>
              <td>Accuracy of Full Scale</td>
              <td>%</td>
              <td>&lt;1% full scale</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      <div className="row">
            <div className="col-xl-12 pb-5">
              <p className="text-center width-narrow"style={{color:"#B4B4B4"}}>The Artem CEMS Module shall run safely for a long time in the harsh environment under the following conditions:</p>
            </div>
          </div>
		  
<div className="row">
      <div className="table-responsive col-xl-8 mx-auto">
        <table className="table custom-table">
          <tbody>
            <tr>
              <td>Voltage of power supply:</td>
              <td> 220 (± 10%) V AC/(50 ~ 60) Hz</td>
            </tr>
            <tr>
              <td>Ambient temperature of system components 
inside the analysis cabin:</td>
              <td>
                (5 ~ 40) ℃
              </td>
            </tr>
            <tr>
              <td>Ambient temperature of system components 
outside the analysis cabin:</td>
              <td>(-30 ~ 60) ℃</td>
            </tr>
            <tr>
              <td>Humidity:</td>
              <td>(0 ~ 90%) RH</td>
            </tr>
            <tr>
              <td>Air pressure:</td>
              <td>(86 ~ 106) kPa</td>
            </tr>
          </tbody>
        </table>
      </div>
	  </div>
	  
<div className="row">
            <div className="col-xl-12 pb-5">
              <p className="text-center width-narrow"style={{color:"#B4B4B4"}}>Sampling environment temperature: up to 800 ℃
The system is designed with protection against dust, rain, electromagnetic radiation, lightning, low temperature, and fire.</p>
            </div>
          </div> 
    </div>
    </div>
      <BottomImage />
     <BottomText />
     
      <FooterOne />
     
    </>
  );
};

export default CEMS;
