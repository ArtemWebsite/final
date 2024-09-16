import React from 'react';

const MeasurementTable = () => {
  return (
    <div className="container mt-5 section-padding">
     
      <div className="col-xl-12 text-center"><div className="mb-5"><h2 className="mb-5">Measurement Method</h2></div></div>
      <div className="table-responsive">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Measurement Object</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Flue gas</td>
              <td>Full heat tracing method</td>
            </tr>
            <tr>
              <td>NO2</td>
              <td>
                Ultraviolet-visible Differential Optical Absorption Spectroscopy (DOAS)<br />
                or<br />
                NDIR + GFC wavelength filter + L-Cell Long range filter
              </td>
            </tr>
            <tr>
              <td>CO2</td>
              <td>NDIR + GFC wavelength filter + L-Cell Long range filter</td>
            </tr>
            <tr>
              <td>SO2</td>
              <td>NDIR + GFC wavelength filter + L-Cell Long range filter</td>
            </tr>
            <tr>
              <td>Flow Rate</td>
              <td>Pitot tube method or matric method</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>Isolation Diaphragm pressure transducer</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>Platinum resistance temperature sensor</td>
            </tr>
            <tr>
              <td>PFCs</td>
              <td>Depending on density</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container mt-5">
      <div className="col-xl-12 text-center"><div className="mb-5"><h2 className="mb-5">Main Technical Specifications</h2></div></div>
      <div className="table-responsive">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>System Parameter</th>
              <th>Unit</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Gas flow</td>
              <td>L/min</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Measuring Range</td>
              <td>PPM</td>
              <td>0-1000ppm</td>
            </tr>
            <tr>
              <td>Lowest measuring limit</td>
              <td>ppb</td>
              <td>&lt; 250 ppb</td>
            </tr>
            <tr>
              <td>Precision</td>
              <td>ppb</td>
              <td>&lt;=500 ppb</td>
            </tr>
            <tr>
              <td>Reaction time</td>
              <td>second</td>
              <td>&lt;60 seconds</td>
            </tr>
            <tr>
              <td>Redundancy Rate</td>
              <td>%</td>
              <td>1 %</td>
            </tr>
            <tr>
              <td>Accuracy of Full Scale</td>
              <td>%</td>
              <td>&lt;1% full scale</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default MeasurementTable;
