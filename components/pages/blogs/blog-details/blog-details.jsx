import Link from "next/link";
import Social from "@/components/data/social";
import blogData from "@/components/data/blog-data";
import BlogSidebar from "../blog-sidebar/blog-sidebar";
import image1 from "../../../../public/assets/img/blog/details.jpg";
import avatar1 from "../../../../public/assets/img/avatar/avatar-1.jpg";
import avatar2 from "../../../../public/assets/img/avatar/avatar-2.jpg";
import avatar3 from "../../../../public/assets/img/avatar/avatar-3.jpg";

const BlogSingleMain = ({ singleData }) => {
  const category = singleData?.title.split(" ").slice(0, 2).join(" ") + "..";

  return (
    <>
      <div className="blog__details dark__image pt-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 lg-mb-50">
              <div className="blog__details-left dark_image">
                <img
                  className="img__full"
                  src={singleData.image.src}
                  alt="blog-details-image"
                />
                <div className="blog__details-left-meta">
                  <div className="blog__details-left-meta-left">
                    <div className="author">
                      <div className="author-avatar">
                        <img src={singleData.avatar.src} alt="avatar" />
                      </div>
                      <div className="author-info">
                        <span>{singleData.position}</span>
                        <h6>{singleData.name}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="blog__details-left-meta-content">
                    <span>Date :</span>
                    <h6>April {singleData.date}, 2024</h6>
                  </div>
                  <div className="blog__details-left-meta-content">
                    <span>Category</span>
                    <h6>{category}</h6>
                  </div>
                </div>
                <h3 className="mb-20">{singleData.title}</h3>
                <p>
                  Discover the latest innovations in solar technology that are
                  driving a wave of positive change across the globe. From
                  photovoltaic advancements to smart grid integration, we delve
                  into the cutting-edge solutions that make solar energy an
                  increasingly viable and accessible option. Learn how solar
                  power not only reduces our dependence on traditional energy
                  sources but also,
                </p>
                <p>
                  Our blog goes beyond the technical aspects, offering insights
                  into the economic and societal impact of widespread solar
                  adoption. Explore success stories, case studies, and
                  real-world applications that showcase how solar energy is not
                  just an eco-friendly choice but a practical and economically
                  sound investment.
                </p>
                <div className="blog__details-left-box">
                  <i className="fa-sharp fa-solid fa-ditto"></i>
                  <div>
                    <h5>
                      Design is a comprehensive approach to creating digital
                      products that are both visually
                    </h5>
                    <span>Kristin Watson</span>
                  </div>
                </div>
                <h4 className="mb-20">Sunrise Choices Solar Voices</h4>
                <p>
                  Embark on a journey through the sunrise of possibilities as we
                  delve into sustainable practices, energy-efficient
                  technologies, and the myriad choices available to individuals
                  and businesses seeking a greener path. From residential solar
                  installations to large-scale solar farms, our blog sheds light
                  on the diverse ways solar energy is making its mark on the
                  world.
                </p>
                <div className="row mt-35 mb-30">
                  <div className="col-12">
                    <img
                      className="img__full"
                      src={image1.src}
                      alt="blog-image"
                    />
                  </div>
                </div>
                <p>
                  Discover the voices advocating for solar solutions – from
                  industry experts and environmental enthusiasts to the
                  communities benefitting from solar initiatives. We share
                  stories that inspire change, emphasizing the importance of
                  collective voices in shaping a sustainable future.
                </p>
                <p>
                  Join us on a journey through the sunrise of possibilities as
                  we explore the various choices available in the realm of solar
                  energy. From residential solar solutions to innovative
                  technologies,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleMain;
