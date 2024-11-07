"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import AboutMain from "./about";
import ScrollToTop from "../common/scroll/scroll-to-top";
import SwitchTab from "../common/dark-light";
import FooterOne from "@/components/layout/footers/footer-one";
import BannerOne from "./about-banner";
import BannerBottom from "./banner-bottom";

const AboutUs = () => {
  return (
    <>
      <SEO pageTitle="About Us" />
      <SwitchTab />
      <HeaderOne />
      <BannerOne />
      <BannerBottom />
      <AboutMain />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
