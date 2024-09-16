import img1 from "../../../../../public/assets/img/home/unit.jpg";

const ImageWithText = () => {
    
    return (
        <div className="team__details">
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
                        <div className="team__details-right ml-20 xl-ml-0">
                            <div className="team__details-right-experience">
                                <h3>System Overview</h3>
                                <p>The ARTEM CEMS Modul is designed to continuously monitor multiple parameters, inlcuding the content of CO2 SO2, NO, O2 and Perfluoro carbons. It measures: 
                                </p>
                                <ul>
                                    <li>flow rate,</li>
                                    <li>temperature,</li>
                                    <li>pressure and</li>
                                    <li>humidity of the flue gas</li>
                                 </ul>
                                <p>The measured parameters are transmitted to the Data Storage System (DSS).</p>
                            </div>
                            <div className="team__details-right-skill">
                                <h3>Applicable Use Case</h3>
                                
                              
                            </div>
                            <div className="contact__form-area mt-40 rounded bg-light-blue-artm">
                            <ul>
                                    <li>Industrial production process monitoring  under CBAM </li>
                                    <li>Industrial combustion efficiency monitoring</li>
                                    <li>Industrial Furnaces in different CBAM industries</li>
                                    <li>Adopt to multiple Potential Emission Points (“PEP”) in one production line</li>
                                    <li>Cement Fuel Gas</li>
                                    <li>Industrial Coal Boiler</li>
                                    <li>Atmosphere monitoring during heat treatment of steel</li>
                                    <li>Incinerators</li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageWithText;