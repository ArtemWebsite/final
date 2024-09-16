"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import SwitchTab from "../common/dark-light";
import Link from "next/link";
import FormArea from "./form";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contact Us" />        
          
            <HeaderOne />
          
            <div className="contact__form section-padding pt-0 mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 lg-mb-25">
                            <div className="contact__form-area">
                                <h3>Get In touch</h3>
                                <FormArea />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;