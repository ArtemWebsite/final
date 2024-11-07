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
          <Link className="text-white" href="/cems">
            Emission Monitoring Equipment
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link className="text-white" href="/cbam">
            Regulations
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link className="text-white" href="/about-us">
            About Us
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
