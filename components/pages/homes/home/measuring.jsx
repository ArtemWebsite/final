import React from 'react';

const MeasurementTable = () => {
  return (
    <div className="measuring-table">
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
    </div>
  );
};

export default MeasurementTable;
