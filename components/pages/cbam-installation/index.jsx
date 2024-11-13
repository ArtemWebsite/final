"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";

import ScrollToTop from "../common/scroll/scroll-to-top";

import FooterOne from "@/components/layout/footers/footer-one";

import "../homes/home/home.css";
import CbamInstallationMain from "./cbam-installation";

const CbamInstallation = () => {
  return (
    <>
    <meta
        name="description"
        content="ARTeM simplifies CBAM installation compliance with tools for accurate carbon data reporting, helping businesses meet EU requirements effi"
      />
      <meta
        name="keywords"
        content="CBAM Installation"
      />
      <SEO pageTitle="CBAM Installation Compliance for Carbon Data Reporting" />

      <HeaderOne />

      <CbamInstallationMain />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default CbamInstallation;
