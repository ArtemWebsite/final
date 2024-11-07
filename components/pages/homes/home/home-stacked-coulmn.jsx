import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Using Font Awesome icons

const HomeStackedColumn = () => {
  // State to keep track of open sections
  const [openSections, setOpenSections] = useState([]);

  // Toggle the open state for each section independently
  const toggleSection = (index) => {
    setOpenSections(
      (prevOpenSections) =>
        prevOpenSections.includes(index)
          ? prevOpenSections.filter((i) => i !== index) // Close the section if open
          : [...prevOpenSections, index] // Open the section if closed
    );
  };

  return (
    <section className="home-multicoulmn">
      <div className="container pt-100 pb-80">
        <div className="row">
          <h3 className="pb-4 text-center width-narrow">
            Are you operating in one of the following roles?
          </h3>

          {/* CBAM Declarant Section */}
          <div className="col-lg-12 col-md-6 border rounded p-4 mb-2 shadow-sm">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleSection(0)}
              style={{ cursor: "pointer" }}
            >
              <h6 className="brand-color">CBAM Declarant</h6>
              <div className="d-flex align-items-center">
                <p className="stack_paragraph">What is a CBAM Declarant?</p>
                {openSections.includes(0) ? (
                  <FaChevronUp style={{ fill: "#189472" }} />
                ) : (
                  <FaChevronDown style={{ fill: "#189472" }} />
                )}
              </div>
            </div>
            {openSections.includes(0) && (
              <div className="col-lg-12 col-md-6 bg-theme-green p-4 rounded-2">
                <p>
                  <strong>A Declarant is either:</strong>
                </p>
                <ul>
                  <li>
                    The importer who lodges a customs declaration for release
                    for free circulation of goods in its own name (e.g.
                    Importing company in the EU).
                  </li>
                  <li>
                    The authorised customs representative (Art. 162(1)EU
                    Regulation No 952/2013) (e.g. Forwarder who handles
                    customs).
                  </li>
                  <li>
                    The indirect customs representative when the importer is
                    outside of the EU.
                  </li>
                </ul>
                <a
                  href="/cbam-declarants"
                  className="d-flex justify-content-center align-items-center brand-color center"
                >
                  Learn more
                </a>
              </div>
            )}
          </div>

          {/* Operator Outside of EU Section */}
          <div className="col-lg-12 col-md-6 border rounded p-4 mb-2 shadow-sm">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleSection(1)}
              style={{ cursor: "pointer" }}
            >
              <h6 className="brand-color">Operator Outside of EU</h6>
              <div className="d-flex align-items-center">
                <p className="stack_paragraph">What is an Operator?</p>
                {openSections.includes(1) ? (
                  <FaChevronUp style={{ fill: "#189472" }} />
                ) : (
                  <FaChevronDown style={{ fill: "#189472" }} />
                )}
              </div>
            </div>
            {openSections.includes(1) && (
              <div className="col-lg-12 col-md-6 bg-theme-green p-4 rounded-2">
                <p>
                  An Operator is any legal person or entity that operates or
                  controls an installation (production) in a country outside of
                  the EU.
                </p>
                <a
                  href="/cbam-operator"
                  className="d-flex justify-content-center align-items-center brand-color center"
                >
                  Learn more
                </a>
              </div>
            )}
          </div>

          {/* CBAM Verifier Section */}
          <div className="col-lg-12 col-md-6 border rounded p-4 mb-2 shadow-sm">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleSection(2)}
              style={{ cursor: "pointer" }}
            >
              <h6 className="brand-color">CBAM Verifier</h6>
              <div className="d-flex align-items-center">
                <p className="stack_paragraph">What is a CBAM Verifier?</p>
                {openSections.includes(2) ? (
                  <FaChevronUp style={{ fill: "#189472" }} />
                ) : (
                  <FaChevronDown style={{ fill: "#189472" }} />
                )}
              </div>
            </div>
            {openSections.includes(2) && (
              <div className="col-lg-12 col-md-6 bg-theme-green p-4 rounded-2">
                <p>
                  A CBAM Verifier is an institution or legal person who is
                  accredited by the competent National Accreditation Body to
                  verify CBAM Emission Reports.
                </p>
                <a
                  href="/cbam-accredited-verifier"
                  className="d-flex justify-content-center align-items-center brand-color center"
                >
                  Learn more
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStackedColumn;
