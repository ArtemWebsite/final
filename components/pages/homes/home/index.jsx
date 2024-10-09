"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import About from "./about";
import Certificate from "./certificate";
import Services from "./services";
import Portfolio from "./portfolio";
import Blog from "./blog";
import FooterOne from "@/components/layout/footers/footer-one";
import BannerOne from "./banner";
import Technology from "./technology";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Head from "next/head";
import Features from "./features";
import ArtemPioneer from "./pioneers";
import BottomImage from "./bottom-img";
import bgImage from "../../../../public/assets/img/shape/shape-9.png";
import "./home.css";
import styles from "./UnderConstruction.module.css";
import ImageWithText from "./styles/image-with-text";
import MeasurementTable from "./measuring";
import ProductionRoutesTable from "./production-example";
import Bayer from "./bayer";
const HomeOne = () => {
  return (
    <div>
      <meta
        name="description"
        content="ARTEM’s CBAM reporting tool & carbon reporting software ensure CBAM compliance, combat carbon leakage and facilitates the transition to net-zero manufacturing."
      />
      <meta
        name="keywords"
        content="CBAM reporting tool, carbon reporting software, cbam fertilizer, cbam aluminium, cbam iron and steel, hydrogen cbam, cbam hydrogen, cbam electricity, cbam reporting tool, methane reporting tool, cbam reporting software, carbon reporting software"
      />
      <meta name="author" content="Artem Team" />
      <meta
        property="og:title"
        content="ARTEM - CBAM Reporting Tool | Carbon Reporting Software"
      />
      <meta
        property="og:description"
        content="ARTEM’s CBAM reporting tool & carbon reporting software ensure CBAM compliance, combat carbon leakage and facilitates the transition to net-zero manufacturing."
      />
      <meta property="og:image" content="/img/logo-main.png" />
      <meta property="og:url" content="https://artem.earth" />
      <meta
        name="google-site-verification"
        content="eiIyJqIsNB_K_sqBmrANL4RNrjhvkZCd--QP4TwDCQ4"
      />

      <SEO pageTitle="Artem - CBAM Reporting Tool | Carbon Reporting Software" />
      <HeaderOne />
      <BannerOne />
      <Features />
      <About />
      <Certificate />
      <Technology />

      <ArtemPioneer />
      <BottomImage />

      <FooterOne />
      <ScrollToTop />
    </div>
  );
};

export default HomeOne;
