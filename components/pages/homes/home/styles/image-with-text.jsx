import img1 from "../../../../../public/assets/img/cems/small-image-banner.png";
import img2 from "../../../../../public/assets/img/cems/unit.jpg";
import MeasurementTable from "../measuring";

const ImageWithText = () => {
    
    return (
        <div className="team__details pt-60">
            <div className="container">
            <div className="row">
            <div className="col-xl-12 pb-5">
              <h3 className="text-center">Our Model’s Measurements</h3>
            </div>
          </div>
                <div className="row">
          <div className="col-md-7">
                            <MeasurementTable />
          </div>
                    <div className="col-md-5">
                    <div className="col-xl-12">
                    <div className="row">
                    <div className="col-md-6">
            <img className="" src={img1.src} alt="image" />
            </div>
            <div className="col-md-6">
            <img className="" src={img2.src} alt="image" />
            </div>
            </div>
</div>
          </div>
                </div>
            </div>
        </div>
    );
};

export default ImageWithText; 