import TeamMain from "../teams/team/team";
import map from "../../../public/assets/img/about/map.png";
import f1 from "../../../public/assets/img/about/switzerland.png";
import f2 from "../../../public/assets/img/about/germany.png";
import f3 from "../../../public/assets/img/about/HK.png";
import f4 from "../../../public/assets/img/about/china.png";
import f5 from "../../../public/assets/img/about/us.png";
import f6 from "../../../public/assets/img/about/australia.png";

const AboutMain = () => {
  return (
    <>
      <div className="section-padding pb-0">
        <section>
          <div className="container">
            <div className="row mb-35">
              <div className="col-xl-12 text-center">
                <h2 className="mb-md-5 text-center mb-5">About us</h2>
                <p>ARTEM is about more than just compliance</p>
              </div>
            </div>
            <div className="row mb-35">
              <div
                className="col-xl-8 mx-auto p-5 border rounded-2"
                style={{ background: "#EAF4F3" }}
              >
                <p>
                  We aim to provide a comprehensive technological solution that
                  combats carbon leakage, enables CBAM compliance and
                  facilitates the transition to net zero manufacturing on a
                  global scale
                </p>
                <p>— Nanxi Ding, CEO</p>
              </div>
            </div>
          </div>
        </section>
        <TeamMain />
        <section className="border shadow">
          <div className="container mx-auto">
            <div className="row d-flex m-2">
              <div className="col-lg-2 col-md-6">
                <div className="d-flex align-items-center">
                  <img src={f1.src} alt="img-with-text" />
                  <h6 className="">Switzerland</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="d-flex align-items-center">
                  <img src={f2.src} alt="img-with-text" />
                  <h6 className="">Germany</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="d-flex align-items-center">
                  <img src={f3.src} alt="img-with-text" />
                  <h6 className="">Hong Kong</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="d-flex align-items-center">
                  <img src={f4.src} alt="img-with-text" />
                  <h6 className="">China</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="d-flex align-items-center">
                  <img src={f5.src} alt="img-with-text" />
                  <h6 className="">United States</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="d-flex align-items-center">
                  <img src={f6.src} alt="img-with-text" />
                  <h6 className="">Australia</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto pt-60">
            <div className="row">
              <div className="col-xl-8 mx-auto">
                <img className="w-100" src={map.src} alt="img-with-text" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto pt-120">
            <div className="row d-flex align-items-stretch">
              <div className="col-xl-8 mx-auto">
                <div className="row">
                  <div className="col-lg-5 col-md-6 mx-4 border shadow rounded-2 mb-5">
                    <div className="row">
                      <div className="col-lg-10 col-md-6">
                        <p>
                          <strong>ARTEM Technologie AG </strong>
                        </p>
                        <p>Sinserstraße 67 6770 Cham, Zug Switzerland</p>
                      </div>
                      <div className="col-lg-2 col-md-6">
                        <img src={f1.src} alt="img-with-text" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6 mx-4 border shadow rounded-2 mb-5">
                    <div className="row">
                      <div className="col-lg-10 col-md-6">
                        <p>
                          <strong>ARTEM Technology Limited </strong>
                        </p>
                        <p>
                          Queen’s Road East 68 Queen’s Centre, Wanchai Hong
                          Kong, China
                        </p>
                      </div>
                      <div className="col-lg-2 col-md-6">
                        <img src={f3.src} alt="img-with-text" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6 mx-4 border shadow rounded-2 mb-5">
                    <div className="row">
                      <div className="col-lg-10 col-md-6">
                        <p>
                          <strong>ARTEM Niderlassun </strong>
                        </p>
                        <p>Carl-Zeiss Straße 3 72175 Dornhan Germany</p>
                      </div>
                      <div className="col-lg-2 col-md-6">
                        <img src={f2.src} alt="img-with-text" />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6 mx-4 border shadow rounded-2 mb-5">
                    <div className="row">
                      <div className="col-lg-10 col-md-6">
                        <p>
                          <strong>ARTEM Technology Co.Ltd </strong>
                        </p>
                        <p>
                          Province Shaanxi, Xianyang City Qindu District, Xixian
                          District SME Industrial Park Fenqi Road 24
                        </p>
                      </div>
                      <div className="col-lg-2 col-md-6">
                        <img src={f4.src} alt="img-with-text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMain;
