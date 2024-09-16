import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/logo.png";

import footerBg from "../../../public/assets/img/shape/shape-13.png";

const FooterOne = () => {
  return (
    <>
      {/* <div className="footer__cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="footer__cta-area"
                style={{ backgroundImage: `url(${ctaBg.src})` }}
              >
                <div className="row al-center">
                  <div className="col-lg-9">
                    <div className="footer__cta-area-left">
                      <h3>Let's collaborate.</h3>
                      <div className="footer__cta-area-left-btn lg-jc-center">
                        <Link className="btn-one" href="/request-quote">
                          Start Today
                        </Link>
                        <div className="footer__cta-area-left-btn-tel author">
                          <i className="flaticon-phone-call"></i>
                          <div className="info">
                            <span>Need any help</span>
                            <h6>
                              <Link href="tel:+123(548)5256">
                                +123 (548) 5256
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 lg-mt-25">
                    <div className="footer__cta-area-right t-right lg-t-center">
                      <div className="footer__cta-area-right-image dark_image">
                        <img src={avatar.src} alt="avatar" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="footer__area"
        style={{ backgroundImage: `url(${footerBg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5 lg-mb-33">
              <div className="footer__area-widget">
                <div className="logo">
                  <Link href="/">
                    <img src={logo.src} alt="Logo-image" />
                  </Link>
                </div>
                <div className="footer__area-widget-company">
                  <p>
                   
                    Artem Technology Limited (Hong Kong)
                      <br />
                      Unit C, 7/F, Queen’s Centre,
                      <br />
                      58-64 Queen’s Road East,
                      <br />
                      Hong Kong SAR
                    <br/>
                    ARTEM Technologie AG (Switzerland)
                    <br/>
                    Sinserstraße 67, 6770 Cham Zug, Switzerland
                  </p>
                  <div className="social__icon mt-60"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="row">
                <div className="col-sm-6 col-12 sm-mt-33">
                  <div className="footer__area-widget">
                  
                    <div className="footer__area-widget-info mb-35">
                    <ul>
                        <li>
                        Impressum 
                        </li>
                        <li>
                        Data Protection
                        </li>
                        <li>
                        Downloads
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12 sm-mt-33">
                  <div className="footer__area-widget">
                    <h6>Resources</h6>
                    <div className="footer-widget-menu">
                      <ul>
                        <li>
                          <Link href="/cbam">CBAM</Link>
                        </li>
                        <li>
                          <Link href="/team">Team</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </div>
        <div className="copyright__area lg-t-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>
                  Copyright 2024 - All Rights Reserved By{" "}
                  <Link href="https://prowebcoder.com/">Prowebcoder</Link>
                </p>
              </div>
              <div className="col-lg-6">
                <div className="copyright__area-menu t-right lg-t-center lg-mt-5">
                  <ul>
                    <li>
                      <Link href="#">Privacy & Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Terms and Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;
