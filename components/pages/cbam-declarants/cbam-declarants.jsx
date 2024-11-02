import React from "react";
import Link from "next/link";
import BannerOne from "./declarants-banner";
//import img1 from "../../../public/assets/img/cbam-declarants/text-with-image.jpg";


const CbamDeclarantsMain = () => {
  return (
    <div className="cbam-importer-main">
      <BannerOne />

      <div className="pt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
                <h2 className="text-center">
                Declarant’s Challenges
                </h2>
            </div>
          </div>
        </div>
      </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 rounded">
              <div className="col-xl-12 p-4">
                  <p className="text-center">
                    Reporting Declarants importing into the EU will need to
                    account for the carbon emissions associated with any CBAM
                    Goods imported.
                  </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 rounded">
              <div className="col-xl-12 p-4">
                  <p className="text-center">
                    Reporting Declarants will need to have the data in their
                    reports verified. Non-compliant reporting, or a failure to
                    verify data may lead to penalties.
                  </p>
              </div>
            </div>
          </div>
        </div>

      
      <div className="pt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
                <h2 className="text-center">
                CBAM Timeline
                </h2>
            </div>
          </div>
        </div>
      </div>


      <div className="pt-60">
        <div className="container  bg-white rounded">
          <div className="row al-center">
            <div className="col-xl-12">
                <h2 className="mb-5 text-center">
                Industry-Tested Solutions to Meet Your Needs.
                </h2>
                <p className="text-center">
                With over 30 years of experience in the manufacturing sector, the team at ARTEM are perfectly placed to assist you with complying with the CBAM requirements.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-padding">
        <div className="container">
          <div className="row mb-35">
            <div className="col-xl-12">
              <div className="service__one-title t-center">
                <span className="subtitle-one">&nbsp;</span>
                <h2 className="mb-md-5 text-center">
                   Key  Functionalities
                </h2>
              </div>
            </div>
          </div>
          <div className="row">

    <div className="col-lg-5 col-md-6 rounded border p-4 m-4">
      <p>ARTEM Reporting Solution</p>
      <ul>
        <li>Manage your supplier's emission reports</li>
        <li>Seamless integration with the EU Portal</li>
      </ul>
      <Link className="btn-five" href="/contact">
                          Learn More
                        </Link>
    </div>

    <div className="col-lg-5 col-md-6 rounded border p-4 m-4">
      <p>Data you can trust</p>
      <ul>
        <li>Emissions data gathered in accordance with applicable ISO standards or calculated in accordance with CBAM Regulations</li>
        <li>Tamper-proof technology for peace of mind</li>
      </ul>
      <Link className="btn-five" href="/contact">
                          Learn More
                        </Link>
    </div>

    <div className="col-lg-5 col-md-6 rounded border p-4 m-4">
      <p>World's largest Suppliers</p>
      <ul>
        <li>Trusted by some of the World's largest producers</li>
      </ul>
      <Link className="btn-five" href="/contact">
                          Learn More
                        </Link>
    </div>

    <div className="col-lg-5 col-md-6 rounded border p-4 m-4">
      <p>Certified emissions data verification</p>
      <ul>
        <li>All supporting documentation gathered to ensure that your emissions reports passes verification, every time</li>
      </ul>
      <Link className="btn-five" href="/contact">
                          Learn More
                        </Link>
    </div>

</div>
        </div>
      </div>

      <div
        className="cbam_three_tab section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12  p-4 rounded-5 border border-2  border-dark">
                <div className="cbam__banner_text">
                  <p className="text-center">
                    A CBAM compliant and easy to use CBAM Reporting Tool that
                    will access the ARTEM database of real data from the
                    installations directly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 p-4 rounded-5">
                <div className="cbam__banner_text">
                  <p className="text-center">
                    Assistance with communicating with suppliers and
                    intermediaries to get the data you need fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 rounded">
              <div className="col-xl-12 p-4 rounded-5">
                <div className="cbam__banner_text">
                  <p className="text-center">
                    Assistance with minimising your liabilities under CBAM by
                    identifying suppliers with lower emissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default CbamDeclarantsMain;
