"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";

import ScrollToTop from "../common/scroll/scroll-to-top";

import FooterOne from "@/components/layout/footers/footer-one";

import "../homes/home/home.css";

import CBAMAccreditedVerifierMain from "./cbam-accredited-verifier";

const CBAMAccreditedVerifier = () => {
  return (
    <>
      <SEO pageTitle="CBAM Installation" />

      <HeaderOne />

      <CBAMAccreditedVerifierMain />

      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default CBAMAccreditedVerifier;
