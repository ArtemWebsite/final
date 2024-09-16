"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import FooterOne from "@/components/layout/footers/footer-one";

import "../homes/home/home.css";

const ComingSoon = () => {
  return (
    <>
      <SEO pageTitle="Comming Soon" />

      <HeaderOne />
      <div className="contact__form section-padding pt-0 mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 lg-mb-25">
                            <div className="contact__form-area">
                                <center><h1>Coming Soon </h1></center>
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
      <FooterOne />
     
    </>
  );
};

export default ComingSoon;
