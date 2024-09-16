"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";

import ScrollToTop from "../common/scroll/scroll-to-top";

import FooterOne from "@/components/layout/footers/footer-one";
import "./page-style.css";
import "../homes/home/home.css";

import CBAM from "./cbam";

const CbamTemplate = () => {
  return (
    <>
      <SEO pageTitle="CBAM" />

      <HeaderOne />

      <CBAM></CBAM>
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default CbamTemplate;
