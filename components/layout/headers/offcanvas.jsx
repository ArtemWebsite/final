import Link from "next/link";
import logo2 from "../../../public/assets/img/logo.png";
import logo3 from "../../../public/assets/img/logo-3.png";
import logo4 from "../../../public/assets/img/logo-5.png";
import Social from "@/components/data/social";

const SideBar = ({ isOpen, setIsOpen, addClass }) => {
  return (
    <>
      <div
        className={`header__area-menubar-right-sidebar-popup ${addClass} ${
          isOpen ? "active" : ""
        }`}
      >
        <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
          <i className="fal fa-times"></i>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-logo">
          <Link href="/">
            <img className="logo_one" src={logo2.src} alt="logo" />
            <img className="logo_two" src={logo3.src} alt="logo" />
            <img className="logo_three" src={logo4.src} alt="logo" />
          </Link>
        </div>
        <p></p>
        <div className="header__area-menubar-right-sidebar-popup-contact">
          <h4 className="mb-30">Get In Touch</h4>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-phone-alt icon-animation"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Call Now</span>
              <h6>
                <Link href="tel:+49 1724817216">+49 1724817216 (EU)</Link>
                <Link href="tel:+852 67674122">+852 67674122 (HK)</Link>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-envelope"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Quick Email</span>
              <h6>
                <Link href="mailto:nanxi.ding@artem.earth">
                  nanxi.ding@artem.earth
                </Link>
              </h6>
            </div>
          </div>
          <div className="header__area-menubar-right-sidebar-popup-contact-item">
            <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
              <i className="fal fa-map-marker-alt"></i>
            </div>
            <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
              <span>Office Address</span>
              <h6>
                <Link href="https://google.com/maps" target="_blank">
                  Artem Limited
                  <br />
                  Unit C, 7/F, Queen’s Centre,
                  <br />
                  58-64 Queen’s Road East,
                  <br />
                  Hong Kong SAR
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="header__area-menubar-right-sidebar-popup-social social__icon"></div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? "show" : ""}`}></div>
    </>
  );
};

export default SideBar;
