import Link from "next/link";
import React from "react";

const MainMenu = () => {
  return (
    <>
      <ul>
        <li className="menu-item-has-children">
          <Link className="text-white" href="#">
            ARTEM Solution
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/cbam-declarants">CBAM Declarants </Link>
            </li>
            <li>
              <Link href="/cbam-operator">CBAM Operator</Link>
            </li>
            <li>
              <Link href="/cbam-accredited-verifier">
                CBAM accredited Verifier
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link className="text-white" href="/">
            Emission Monitoring Equipment
          </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/cbam">What is CBAM</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link className="text-white" href="#">
            Regulations
          </Link>
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
          <Link className="text-white" href="/">
            About Us
          </Link>
          <ul className="sub-menu">
            {/* <li>
              <Link href="#">Company</Link>
            </li> */}
            <li>
              <Link href="/team">Team</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
