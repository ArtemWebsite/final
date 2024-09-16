"use client";
import Link from "next/link";
import React, { useState } from "react";

const ResponsiveMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };

  const [activeMenus, setActiveMenus] = useState(null);
  const actives = (value) =>
      setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) =>
      value == activeMenus ? { display: "block" } : { display: "none" };
  return (
    <>
      <ul>
        <li className="menu-item ">
          <Link href="#">Why ARTEM</Link>
          <ul className="sub-menu" style={activeSubMenu("why-artem")}>
          <li>
              <Link href="/cbam-declarants">CBAM Declarants </Link>
              
            </li>
            <li>
              <Link href="/cbam-importer">CBAM Importer</Link>
            </li>
            <li>
              <Link href="/cbam-installation">CBAM Installation</Link>
            </li>
            <li>
              <Link href="/cbam-accredited-verifier">
                CBAM accredited Verifier
              </Link>
            </li>
          </ul>
          <a
            className={`mean-expand ${activeIcon("why-artem")}`}
            onClick={() => active("why-artem")}
          ></a>
        </li>
        <li className="menu-item ">
          <Link href="#">CBAM</Link>
          <ul className="sub-menu" style={activeSubMenu("cbam")}>
            <li>
              <Link href="/cbam">What is CBAM</Link>
            </li>
            <li>
              <Link href="#">CBAM Obligations</Link>
            </li>
          </ul>
          <a
            className={`mean-expand ${activeIcon("cbam")}`}
            onClick={() => active("cbam")}
          ></a>
        </li>
        <li className="menu-item ">
          <Link href="#">Product</Link>
          <ul className="sub-menu" style={activeSubMenu("product")}>
          <li>
              <Link href="#">CBAM Reporting</Link>
            </li>
            <li>
              <Link href="#">CBAM CEMS System</Link>
            </li>
            <li>
              <Link href="#">CBAM Virtual Verification</Link>
            </li>
            <li>
              <Link href="#">CBAM Studies</Link>
            </li>
          </ul>
          <a
            className={`mean-expand ${activeIcon("product")}`}
            onClick={() => active("product")}
          ></a>
        </li>
        <li className="menu-item ">
          <Link href="#">About Us</Link>
          <ul className="sub-menu" style={activeSubMenu("about-us")}>
          <li>
              <Link href="#">Company</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="#">Career</Link>
            </li>
            </ul>
          <a
            className={`mean-expand ${activeIcon("about-us")}`}
            onClick={() => active("about-us")}
          ></a>
        </li>
     
        <li className="menu-item ">
        <Link href="/">CONTACT</Link>
        </li>
      </ul>
    </>
  );
};      

export default ResponsiveMenu;
