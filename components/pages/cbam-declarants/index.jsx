"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import CbamDeclarantsMain from "./cbam-declarants";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";
import "./page-style.css";
import "../homes/home/home.css";

const CbamDeclarants = () => {
  return (
    <>
    <meta
        name="description"
        content="Effortlessly manage CBAM declarant responsibilities with ARTeM's tools for precise carbon emission data reporting, helping you comply with"
      />
      <meta
        name="keywords"
        content="cbam declarant, carbon emission data"
      />
      <SEO pageTitle="CBAM Declarant | Carbon Emission Data - ARTeM" />

      <HeaderOne />
      <CbamDeclarantsMain />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default CbamDeclarants;
