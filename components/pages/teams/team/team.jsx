import teamData from "@/components/data/team-data";
import Link from "next/link";

const TeamMain = () => {
    return (
        <>
            <div className="team__two section-padding-three">
                <div className="container">
                <h2 className="mb-5 text-center">
                  Meet Our
                  <span className="color-green-artm"> Team </span> 
                </h2>
                    <div className="row dark_image text-center justify-content-center">
                        {teamData.map((data, id) => (
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