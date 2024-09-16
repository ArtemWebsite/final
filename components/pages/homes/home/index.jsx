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
     

       <SEO pageTitle="Artem" />
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
