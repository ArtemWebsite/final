"use client";

import BlogSingleMain from "./blog-details";

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const BlogDetails = ({ singleData }) => {
  return (
    <>
      <SEO pageTitle={singleData?.title} />

      <HeaderOne />

      <BlogSingleMain singleData={singleData} />
      <FooterOne />
      <ScrollToTop />
    </>
  );
};

export default BlogDetails;
