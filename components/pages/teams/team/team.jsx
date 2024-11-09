import teamData from "@/components/data/team-data";
import Link from "next/link";

const TeamMain = () => {
  return (
    <>
      <div className="team__two section-padding-three">
        <div className="container text-center">
          <div className="team__one-title t-center pb-50">
            <h3>Our Leadership Team</h3>
          </div>
          <p className="text-center width-narrow pb-50" style={{color:"#B4B4B4"}}>
            With over 30 years of experience in the manufacturing sector, the
            team at ARTEM are perfectly placed to assist you with complying with
            the CBAM requirements.
          </p>
          <div className="row dark_image text-center justify-content-center">
            {teamData.slice(0, 4).map((data, id) => (
              <div className="col-lg-3 col-md-6" key={id}>
                <div className="team__two-item">
                  <div className="team__two-item-image">
                    <img src={data.image.src} alt="team-image" />
                  </div>
                  <div className="team__two-item-content">
                    <div>
                      <h6>{data.name}</h6>
                      <span>{data.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMain;
