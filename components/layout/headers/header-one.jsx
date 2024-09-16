"use client";
import Social from "@/components/data/social";
import Link from "next/link";
import MainMenu from "./header-menu";
import Search from "./search";
import { useState } from "react";
import SideBar from "./offcanvas";
import logo1 from "../../../public/assets/img/logo.png";
import logo from "../../../public/assets/img/logo-main.png";
import logo2 from "../../../public/assets/img/logo-2.png";
import MobileMenuPopup from "./mobile-menu/menu-area";

const HeaderOne = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <>
   
      <div className="header__area">
        <div className="custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left one">
              <div className="header__area-menubar-left-logo">
                <Link href="/">
                  <img src={logo.src} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="header__area-menubar-center">
              <div className="header__area-menubar-center-menu">
                <MainMenu />
              </div>
            </div>
            <div className="header__area-menubar-right">
             
              <div className="header__area-menubar-right-btn">
                <Link className="btn-one" href="/contact">
                  Request a Demo
                </Link>
              </div>
              <div className="header__area-menubar-right-responsive-menu menu__bar">
                <i
                  className="flaticon-menu-2"
                  onClick={() => setMenuSidebar(true)}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <MobileMenuPopup
        isOpen={menuSidebar}
        setIsOpen={setMenuSidebar}
        popupLogo={logo1}
        addClass=""
      />
      <Search isOpen={search} setIsOpen={setSearch} />
    </>
  );
};

export default HeaderOne;
