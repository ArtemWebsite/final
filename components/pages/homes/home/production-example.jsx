import React from 'react';

const ProductionRoutesTable = () => {
  return (
    <div className="container mt-5 mb-100">
        <div className="col-xl-12 text-center"><div className="mb-5"><h2 className="mb-5">Example Alumina Production under CBAM Rules</h2></div></div>
      <div className="table-responsive">
        <table className="table custom-table text-center">
          <thead>
            <tr>
              <th>Production Routes</th>
              <th>PEP</th>
              <th>Accounted Emission must include</th>
              <th>Required Input from User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="4">Primary Electrolytic Smelting</td>
              <td><span className="circle blue-circle"></span></td>
              <td>CO2 emissions from the consumption of electrodes or electrode pastes</td>
              <td><a href="#" className="custom-link">Calculation-based Methodology or Measurement-based Methodology</a></td>
            </tr>
            <tr>
              <td><span className="circle red-circle"></span></td>
              <td>CO2 Emissions from any fuels used (e.g. for drying and pre-heating of raw materials, heating of electrolysis cells, heating required for casting)</td>
              <td><a href="#" className="custom-link">Calculation-based Methodology or Measurement-based Methodology</a></td>
            </tr>
            <tr>
              <td><span className="circle cyan-circle"></span></td>
              <td>CO2 emissions from any flue gas treatment, from soda ash or limestone if relevant</td>
              <td><a href="#" className="custom-link">Calculation-based Methodology or Measurement-based Methodology</a></td>
            </tr>
            <tr>
              <td><span className="circle orange-circle"></span></td>
              <td>Perfluorocarbon emissions caused by anode effects monitored in accordance with Section B.7 of Annex III</td>
              <td><a href="#" className="custom-link">Calculation-based Methodology or Measurement-based Methodology</a></td>
            </tr>
            <tr>
              <td>Relevant Precursors</td>
              <td></td>
              <td>none</td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
      <div className="contact__form-area mt-20 rounded bg-light-blue-artm">
      <h6>PEP: Possible Emission Point</h6>
      <h6>CBAM defines the points of emission for each production route that needs to be accounted for in the emission calculation and the reporting</h6>
                            </div>
    </div>
  );
};

export default ProductionRoutesTable;
