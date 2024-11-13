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
    <meta
        name="description"
        content="ARTeM supports CBAM accredited verifier with streamlined project management tools, simplifying verification processes across diverse loca"
      />
      <meta
        name="keywords"
        content="CBAM accredited verifier"
      />
      <SEO pageTitle="Streamlined Tools for CBAM Accredited Verifier - ARTeM	" />

      <HeaderOne />

      <CBAMAccreditedVerifierMain />

      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default CBAMAccreditedVerifier;
