import img1 from "../../../../../public/assets/img/home/unit.jpg";
import MeasurementTable from "../measuring";

const ImageWithText = () => {
    
    return (
        <div className="pt-60">
            <div className="container">
            <div className="row">
            <div className="col-xl-12 pb-5">
              <h2 className="text-center">Our Model’s Measurements</h2>
            </div>
          </div>
                <div className="row">
          <div className="col-md-8">
            <MeasurementTable />
          </div>
                    <div className="col-md-4 container-fluid p-0">
            <img className="p-5" src={img1.src} alt="image" />
          </div>
                </div>
            </div>
        </div>
    );
};

export default ImageWithText;