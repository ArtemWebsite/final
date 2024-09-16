import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import vector1 from "../../../../public/assets/img/cbam/vector1.png";
import vector2 from "../../../../public/assets/img/cbam/vector2.png";

import scope1 from "../../../../public/assets/img/about/Aluminium.jpg";
import scope2 from "../../../../public/assets/img/about/steel.jpg";
import scope3 from "../../../../public/assets/img/about/cement.jpg";
import scope4 from "../../../../public/assets/img/about/electricity.jpg";
import scope5 from "../../../../public/assets/img/about/hydrogen.jpg";
import scope6 from "../../../../public/assets/img/about/fertilizer.jpg";

const About = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const openVideoModal = () => {
    setOpenVideo(true);
  };
  return (
    <>
      <div className="about__one section-padding pt-0">
        <div className="container">
          <div className="row al-center">
            <div className="col-xl-6 col-lg-5 lg-mb-25">
            <div className="row">
            <div className="col-lg-6 col-md-6 rounded mb-3">
              <div className="col-xl-12 bg-light-green-artm p-4">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector2.src} />
                  <p className="text-center">
                  Access Emission Data of your supplier and your supplier’s suppliers <span className="color-green-artm">WORLDWIDE </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 rounded mb-3">
              <div className="col-xl-12 bg-light-blue-artm p-4">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector1.src} />
                  <p className="text-center">
                  Guaranteed <span className="color-blue-artm">emission data</span> integrity through Supplier-onsite collection module. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 rounded">
              <div className="col-xl-12 bg-light-blue-artm p-4">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector2.src} />
                  <p className="text-center">
                  Producers that fail to adopt technologies that emit fewer greenhouse gases will   to their competitors.  
                  </p>
                </div>
              </div>
            </div>
			 <div className="col-lg-6 col-md-6 rounded">
              <div className="col-xl-12 bg-light-green-artm p-4">
                <div className="cbam__banner_text">
                <img className="icon-small2" src={vector1.src} />
                  <p className="text-center">
                  Guaranteed Data confidentiatliy through <span className="color-green-artm">Peer to Peer</span> data transfer channels  
                  </p>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about__one-right">
                <div className="about__scope-of-application">
                  <div className="row">
                    <span className="application-text">
                      Scope of Application
                    </span>
                    <div className="col-xl-4 col-lg-6 col-sm-6">
                      <img
                        className="rounded-circle"
                        src={scope1.src}
                        alt="about-image"
                      />
                      <h6>Aluminium</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-6">
                      <img
                        className="rounded-circle"
                        src={scope2.src}
                        alt="about-image"
                      />
                      <h6>Iron & Steel</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-6">
                      <img
                        className="rounded-circle"
                        src={scope3.src}
                        alt="about-image"
                      />
                      <h6>Cement</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-6">
                      <img
                        className="rounded-circle"
                        src={scope4.src}
                        alt="about-image"
                      />
                      <h6>Electricity</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-6">
                      <img
                        className="rounded-circle"
                        src={scope5.src}
                        alt="about-image"
                      />
                      <h6>Hydrogen</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-6">
                      <img
                        className="rounded-circle"
                        src={scope6.src}
                        alt="about-image"
                      />
                      <h6>Fertilizer</h6>
                    </div>
                  </div>
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        className="video-modal"
        channel="youtube"
        autoplay
        isOpen={openVideo}
        videoId="5HIukcumZdo"
        onClose={() => setOpenVideo(false)}
      />
    </>
  );
};

export default About;
