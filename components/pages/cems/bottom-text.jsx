import React from "react";
import Link from "next/link";
import img1 from "../../../public/assets/img/cems/fig1.png";
import img2 from "../../../public/assets/img/cems/fig2.png";
import img3 from "../../../public/assets/img/cems/fig3.png";
const BottomText = () => {
  return (
    <div>
      <div className="pt-60 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="p-4 rounded border shadow col-xl-12">
                <p><strong>UV Differential Optical Absorption Spectroscopy</strong></p>
                <p>
                  The ultraviolet light emitted by the light source converges
                  into the optical fiber and is transmitted to the gas chamber
                  through the optical fiber. After passing through the gas
                  chamber, it is absorbed by the the measured gas and
                  transmitted to the spectrometer through the optical fiber.
                  Inside the spectrometer, the light is split by a grating,
                  after which the light signal is converted into an electrical
                  signal by an array sensor to obtain continuous absorption
                  spectrum of the gas. By virtue of Differential Optical
                  Absorption Spectroscopy (DOAS) method, the concentration of
                  the measured gas can be obtained based on this spectral
                  information.{" "}
                </p>
                <img src={img2.src} alt="img-with-text" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="p-4 rounded border shadow col-xl-12">
                <p><strong>NDIR + GFC + CELL </strong></p>
                <p>
                  When infrared radiation interacts with gas molecules, infrared
                  light is absorbed by the gas molecules at a particular
                  wavelength, causing vibration of the gas molecules. NDIR
                  (Non-Dispersive Infrared) gas sensors detect decrease in
                  transmitted infrared light which is in proportion to gas
                  concentration.{" "}
                </p>
                <img src={img1.src} alt="img-with-text" />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 pt-60">
              <div className="p-4 rounded border shadow d-flex justify-content-between flex-column col-xl-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <p><strong>NDIR + GFC + CELL</strong> </p>
                    <p>
                      When infrared radiation interacts with gas molecules,
                      infrared light is absorbed by the gas molecules at a
                      particular wavelength, causing vibration of the gas
                      molecules. NDIR (Non-Dispersive Infrared) gas sensors
                      detect decrease in transmitted infrared light which is in
                      proportion to gas concentration.{" "}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <img src={img3.src} alt="img-with-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomText;
