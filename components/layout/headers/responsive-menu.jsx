"use client";
import Link from "next/link";
import React, { useState } from "react";

const ResponsiveMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  // Toggle for individual dropdown
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const isMenuActive = (menu) => activeMenu === menu;
  const activeSubMenuStyle = (menu) =>
    isMenuActive(menu) ? { display: "block" } : { display: "none" };

  return (
    <ul>
      {/* Why ARTEM Menu */}
      <li className="menu-item">
        <Link href="#">Why ARTEM</Link>
        <ul className="sub-menu" style={activeSubMenuStyle("why-artem")}>
          <li>
            <Link href="/cbam-declarants">CBAM Declarants</Link>
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
        {/* This button toggles the dropdown */}
        <a
          href="#"
          className={`mean-expand ${isMenuActive("why-artem") ? "mean-clicked" : ""}`}
          onClick={() => toggleMenu("why-artem")}
        >
          &#x25BC;
        </a>
      </li>

      {/* CBAM Menu */}
      <li className="menu-item">
        <Link href="#">CBAM</Link>
        <ul className="sub-menu" style={activeSubMenuStyle("cbam")}>
          <li>
            <Link href="/cbam">What is CBAM</Link>
          </li>
        </ul>
        <a
          href="#"
          className={`mean-expand ${isMenuActive("cbam") ? "mean-clicked" : ""}`}
          onClick={() => toggleMenu("cbam")}
        >
          &#x25BC;
        </a>
      </li>

      {/* Product Menu */}
      <li className="menu-item">
        <Link href="#">Product</Link>
        <ul className="sub-menu" style={activeSubMenuStyle("product")}>
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
          href="#"
          className={`mean-expand ${isMenuActive("product") ? "mean-clicked" : ""}`}
          onClick={() => toggleMenu("product")}
        >
          &#x25BC;
        </a>
      </li>

      {/* About Us Menu */}
      <li className="menu-item">
        <Link href="#">About Us</Link>
        <ul className="sub-menu" style={activeSubMenuStyle("about-us")}>
          <li>
            <Link href="/team">Team</Link>
          </li>
        </ul>
        <a
          href="#"
          className={`mean-expand ${isMenuActive("about-us") ? "mean-clicked" : ""}`}
          onClick={() => toggleMenu("about-us")}
        >
          &#x25BC;
        </a>
      </li>

      {/* Contact Menu */}
      <li className="menu-item">
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default ResponsiveMenu;
