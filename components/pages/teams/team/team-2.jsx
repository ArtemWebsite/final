import React from "react";
import Image from "next/image";

import team2 from "../../../../public/assets/img/team/team1.png";
import styles from "./Team.module.css"; // Import custom styles if needed

const teamMembers = [
  {
    name: "Nanxi Ding, CEO",
    description:
      "Experienced founder and entrepreneur in manufacturing, supply chain, trading. Trained lawyer with background in German law and international arbitration. Many years working experience managing productions in China and Germany. State Exam at Humboldt University Berlin and Master of Law and Finance at Oxford University.",
    image: team2, // Update with the actual path to the image
  },
  {
    name: "Leo Rees-Murphy, CLO",
    description:
      "Experience acting for multiple Global 500 energy and transport companies, advising on regulatory issues, disputes, and transactions. Admitted as a solicitor in England & Wales, and as a legal practitioner in Australia. Bachelor of Laws from University of Queensland and MSc in Law and Finance from University of Oxford.",
    image: team2, // Update with the actual path to the image
  },
  {
    name: "Jürgen Schneider, Head of CEMS",
    description:
      "One of the most renown German equipment maker with 40 years of experience in designing, assembling, programming and installing high-end CNC precision machinery for the automotive and aerospace industry.",
    image: team2, // Update with the actual path to the image
  },
  {
    name: "Ofir Weinstock, CTO",
    description:
      "Ofir is an experienced FullStack Web Developer with a strong background in leading teams. He is proficient in Full-Stack JavaScript development, including React, Vue, Node, TypeScript, and CSS. Skilled in working with various databases solutions like MySQL, PostgreSQL, MongoDB, and Redis. Experienced Full Stack Developer and CTO with over 14 years of experience. Enthusiast.",
    image: team2, // Update with the actual path to the image
  },
  {
    name: "Maggie Sung, CEO",
    description:
      "Engaged in green consulting, certification and has funded the “Green Union Initiative” across multiple cities in China. Has vast experience servicing governmental entities, state-owned entities and private companies.",
    image: team2, // Update with the actual path to the image
  },
  {
    name: "Uschie Wu, President",
    description:
      "Director at the Chinese Ministry of Metallurgy over 10 years until 1997. Founder of successful automotive and equipment making company with 5 factories across Germany and China. Fluent in German, English and Chinese",
    image: team2, // Update with the actual path to the image
  },
  {
    name: "Dylan Zhang, CTO",
    description:
      "Master of computer science at University of Pennsylvania. Experienced full stack developer.",
    image: team2, // Update with the actual path to the image
  },
  {
    name: "Neil Liu, COO",
    description: "Experienced in advancing carbon compliance since 2012",
    image: team2, // Update with the actual path to the image
  },
];

const TeamTwo = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">
        <span className="text-success">Our</span> Core Team
      </h2>
      <div className="row mt-4">
        {teamMembers.map((member, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 border-0">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="img-fluid rounded-circle p-2"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">{member.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTwo;
