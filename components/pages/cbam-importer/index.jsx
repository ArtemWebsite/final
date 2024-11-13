"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import CbamImporterMain from "./cbam-importer";
import ScrollToTop from "../common/scroll/scroll-to-top";
import SwitchTab from "../common/dark-light";
import FooterOne from "@/components/layout/footers/footer-one";

import "../homes/home/home.css";

const CbamImporter = () => {
  return (
    <>
    <meta
        name="description"
        content="ARTeM provides a clear and easy system to the CBAM Importers to manage the CBAM Data collection along the whole supply chain. Acess AR"
      />
      <meta
        name="keywords"
        content="CBAM Importers"
      />
      <SEO pageTitle="CBAM Importers - CBAM Data collection | ARTeM" />

      <HeaderOne />
      <CbamImporterMain />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default CbamImporter;
