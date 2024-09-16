import img1 from "../../../../public/assets/img/home/bayer.png";
import processImage from "../../../../public/assets/img/home/alumina.jpg";
import wp1 from "../../../../public/assets/img/home/wp1.png";
import wp2 from "../../../../public/assets/img/home/wp2.png";
import wp3 from "../../../../public/assets/img/home/wp3.png";

const Bayer = () => {

    return (
        <div className="team__details">
            <div className="col-xl-12 text-center"><div className="mb-5"><h2 className="mb-5">Alumina Production Bayer Process</h2></div></div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 lg-mb-30">
                        <div className="team__details-left">
                            <div className="team__details-left-thumb dark_image">
                                <img src={img1.src} alt="image" />
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="container my-5">
                            <div className="row mb-4">
                                <div className="col-1">
                                    <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        PEP1
                                    </div>
                                </div>
                                <div className="col-11">
                                    <p>Bauxite ore is dried, crushed, and ground into a powder. It is then mixed with preheated spent solution.</p>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-1">
                                    <div className="rounded-circle bg-info text-white d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        PEP2
                                    </div>
                                </div>
                                <div className="col-11">
                                    <p>
                                        Lime is added, and the resulting mixture is pumped to digesters along with a solution of caustic soda. This operation proceeds at <strong>high-temperature steam</strong> and pressures in the digester (140°C for gibbsite and 300°C for boehmite).
                                    </p>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-1">
                                    <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        PEP3
                                    </div>
                                </div>
                                <div className="col-11">
                                    <p>
                                        Calcination of the seeded solution in a rotary kiln at temperatures around 1200-1300°C to remove water.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col rounded">
                                    <img src={processImage.src} alt="Industrial process" className="img-fluid rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact__form-area mt-40 rounded bg-light-blue-artm mb-100">
                        <div className="col-xl-12 text-center"><div className="mb-1"><h2 className="mb-1">Basic Model Environmental Condition</h2></div></div>
                        <p>The Artem CEMS Module shall run safely for a long time in the harsh environment under the following conditions: </p>
                        <ul>
                            <li>Voltage of power supply: 220 (± 10%) V AC/(50 ~ 60) Hz</li>
                            <li>Ambient temperature of system components inside the analysis cabin: (5 ~ 40) ℃</li>
                            <li>Ambient temperature of system components outside the analysis cabin: (-30 ~ 60) ℃</li>
                            <li>Humidity: (0 ~ 90%) RH</li>
                            <li>Air pressure: (86 ~ 106) kPa</li>
                            <li>Sampling environment temperature: up to 800 ℃</li>
                            <li>The system is designed with protection against dust, rain, electromagnetic radiation, lightning, low temperature, and fire.</li>

                        </ul>
                    </div>


                    <div className="container my-5">
                        <h2 className="text-center mb-4">Working Principles Measurement Method</h2>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <h6 className="text-center mb-4">UV Differential Optical Absorption Spectroscopy</h6>
                                <p>
                                    The ultraviolet light emitted by the light source converges into the optical fiber and is transmitted to the gas chamber through the optical fiber. After passing through the gas chamber, it is absorbed by the measured gas and transmitted to the spectrometer through the optical fiber. Inside the spectrometer, the light is split by a grating, after which the light signal is converted into an electrical signal by an array sensor to obtain a continuous absorption spectrum of the gas. By virtue of Differential Optical Absorption Spectroscopy (DOAS) method, the concentration of the measured gas can be obtained based on this spectral information.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h6 className="text-center mb-4">NDIR + GFC + CELL</h6>
                                <p>
                                    When infrared radiation interacts with gas molecules, infrared light is absorbed by the gas molecules at a particular wavelength, causing vibration of the gas molecules. NDIR (Non-Dispersive Infrared) gas sensors detect a decrease in transmitted infrared light, which is in proportion to gas concentration.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-center">
                                <img src={wp1.src} alt="UV Spectroscopy Diagram" className="img-fluid" />
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                                <img src={wp2.src} alt="NDIR Diagram" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <div className="container my-5">

                        <div className="row mb-5">
                            <div className="col-md-6">
                                <h6 className="text-center mb-4">FTIR Spectroscopy</h6>
                                <p>
                                    FTIR stands for Fourier transform infrared, the preferred method of infrared spectroscopy. In infrared (IR) spectroscopy, radiation in the IR region of the electromagnetic spectrum is passed through a gas sample. Some of the infrared radiation is absorbed by the sample and some of it is passed through (transmitted). The resulting spectrum represents the molecular absorption and transmission response, creating a molecular fingerprint of the sample. Like a fingerprint, no two unique molecular structures produce the same infrared spectrum. This makes infrared spectroscopy useful for a variety types of analysis.

                                </p><p>It is more costly, but can determine gasses even at low
                                    concentration. </p><p>
                                    Can detect up to 30 different gases simultaneously.
                                </p>
                            </div>
                            <div className="col-md-6">
                            <img src={wp3.src} alt="UV Spectroscopy Diagram" className="img-fluid" />
                            </div>

                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bayer;