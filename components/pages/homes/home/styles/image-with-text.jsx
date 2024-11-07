import img1 from "../../../../../public/assets/img/home/unit.jpg";

const ImageWithText = () => {
    
    return (
        <div className="team__details pt-40">
            <div className="container">
                <div className="row align-items-center rounded bg-light-green-artm">
                    <div className="col-md-6 container-fluid p-0">
            <img className="p-5" src={img1.src} alt="image" />
          </div>
          <div className="col-md-6">
            <div className="p-4">
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
    );
};

export default ImageWithText;