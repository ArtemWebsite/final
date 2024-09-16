import React from "react";

const Checklist = () => {
  return (
    <div className="container my-5">
      <div class="service__one-title t-center pb-50">
        <span class="subtitle-one">&nbsp;</span>
        <h2>Checklist</h2>
      </div>
      <div className="row">
        <div className="col-12 text-center mb-4">
          <p className="bg-light display-6 p-3">
            This checklist will help importers of goods covered under the CBAM
            make sure they are aware of and in compliance with the new rules.
            The steps below can also be taken by the customs representative or
            declarant, on behalf of the importer.
          </p>
        </div>
        <div className="col-12 text-center mb-4">
          <h2 className="text-primary">5 steps you need to take:</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-center text-center align-items-center flex-wrap flex-gap-30">
            <div
              className="d-flex flex-column align-items-center step-box p-4 m-3 bg-light rounded justify-content-center align-items-center"
              style={{ width: "350px" }}
            >
              <h4 className="bg-success text-white rounded-circle d-inline-block px-3 py-1">
                1
              </h4>
              <p>
                <strong>CHECK</strong> if goods you import are listed in Annex I
                to the
                <a href="#" className="text-primary">
                  CBAM Regulation
                </a>
                and
                <a href="#" className="text-primary">
                  GET IN TOUCH
                </a>
                with the
                <a href="#" className="text-primary">
                  National CBAM Competent Authority (NCA)
                </a>
                in the country where you are established.
              </p>
            </div>
            <div
              className="d-flex flex-column align-items-center step-box p-4 m-3 bg-light rounded"
              style={{ width: "350px" }}
            >
              <h4 className="bg-warning text-white rounded-circle d-inline-block px-3 py-1">
                2
              </h4>
              <p>
                <strong>REGISTER</strong> through your NCA for the
                <a href="#" className="text-primary">
                  CBAM transitional registry
                </a>
                where you or your representative will upload quarterly reports
                on emissions embedded in imported goods.
              </p>
            </div>
            <div
              className="d-flex flex-column align-items-center step-box p-4 m-3 bg-light rounded"
              style={{ width: "350px" }}
            >
              <h4 className="bg-info text-white rounded-circle d-inline-block px-3 py-1">
                3
              </h4>
              <p>
                <strong>ENSURE</strong> your trading partners outside the EU are
                aware of the
                <a href="#" className="text-primary">
                  detailed guidance
                </a>
                provided by the European Commission on the goods in scope and
                how to calculate embedded emissions.
              </p>
            </div>
            <div
              className="d-flex flex-column align-items-center step-box p-4 m-3 bg-light rounded"
              style={{ width: "350px" }}
            >
              <h4 className="bg-primary text-white rounded-circle d-inline-block px-3 py-1">
                4
              </h4>
              <p>
                <strong>FOLLOW</strong> the
                <a href="#" className="text-primary">
                  general and sector-specific training material and modules
                </a>
                made available by the European Commission to make sure you know
                what to expect from the new reporting rules & tools.
              </p>
            </div>
            <div
              className="d-flex flex-column align-items-center step-box p-4 m-3 bg-light rounded"
              style={{ width: "350px" }}
            >
              <h4 className="bg-danger text-white rounded-circle d-inline-block px-3 py-1">
                5
              </h4>
              <p>
                <strong>SUBMIT</strong> your first quarterly CBAM report by 31
                January 2024 covering your imports in the fourth quarter of 2023
                and <strong>STAY TUNED</strong> to our
                <a href="#" className="text-primary">
                  dedicated website
                </a>
                for the latest developments as we prepare for the definitive
                phase in 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
