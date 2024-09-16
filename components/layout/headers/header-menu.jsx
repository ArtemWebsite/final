import Link from "next/link";
import React from "react";

const MainMenu = () => {
  return (
    <>
      <ul>
        <li className="menu-item-has-children">
          <Link href="#">WHY ARTEM</Link>
          <ul className="sub-menu">
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
        </li>

        <li className="menu-item-has-children">
          <Link href="/">CBAM</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/cbam">What is CBAM</Link>
            </li>
           
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="#">PRODUCT</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/contact">ARTEM Reporting Tool</Link>
            </li>
            <li>
              <Link href="/cems">ARTEM CEMS System</Link>
            </li>
            <li>
              <Link href="/coming-soon">CBAM Virtual Verification</Link>
            </li>
            <li>
              <Link href="/coming-soon">CBAM Studies</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/">ABOUT US</Link>
          <ul className="sub-menu">
            {/* <li>
              <Link href="#">Company</Link>
            </li> */}
            <li>
              <Link href="/team">Team</Link>
            </li>
           
          </ul>
        </li>

        <li className="menu-item">
          <Link href="/contact">CONTACT US</Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
