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
