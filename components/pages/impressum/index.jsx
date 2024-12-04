"use client";
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterOne from "@/components/layout/footers/footer-one";

const Impressum = () => {
  return (
    <>
      <SEO pageTitle="Impressum" />

      <HeaderOne />
      <div
        className="container"
        style={{
          margin: "0 auto",
          marginTop: "30px",
          marginBottom: "30px",
          display: "block",
        }}
      >
        <h3 className="mb-md-5 text-center mb-3">Impressum</h3>
        <div className="container py-1">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="mb-4">
                <h6>ARTEM Technology AG</h6>
                <p className="mb-1">Sinserstrasse 67</p>
                <p className="mb-1">6330 Cham, Canton of Zug</p>
                <p className="mb-0">
                  Commercial Register Number: CHE-170.944.591
                </p>
                <p>Registry Office: Canton of Zug</p>
              </div>

              <div className="mb-4">
                <h6>Represented By</h6>
                <p className="mb-0">
                  Nanxi Ding (President of the Board of Directors)
                </p>
              </div>

              <div>
                <h6>Contact</h6>
                <p className="mb-1">
                  Phone: <a href="tel:+491724817216">+49 1724817216</a>
                </p>
                <p className="mb-0">
                  E-Mail:{" "}
                  <a href="mailto:website@artem.earth">website@artem.earth</a>
                </p>
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

export default Impressum;
