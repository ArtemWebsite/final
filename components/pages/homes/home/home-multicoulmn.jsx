import React from "react";
import multicoulmnData from "@/components/data/home-multicoulmn-data";

const HomeMulticoulmn = () => {
  return (
    <section className="home-multicoulmn">
      <div className="container pt-100">
        <div className="row">
          <h3 className="pb-4 text-center width-narrow">
            Are you part of the supply chain of one of the following industries?
          </h3>
          {multicoulmnData.slice(0, 6).map((data, id) => (
            <div className="col-lg-4 col-md-6 rounded" key={id}>
              <div className="multi-cols pb-40 position-relative overlay-container">
                <img
                  src={data.image}
                  alt={`multicolumn-image-${id}`}
                  className="img-fluid rounded"
                />
                <div className="overlay-text">
                  {/* <h5 className="text-center text-white">{data.title}</h5> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMulticoulmn;
