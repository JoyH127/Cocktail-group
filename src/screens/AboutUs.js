import "../styles/About.css";
import teamInfo from "../data/TeamInfo";
import lance from "../img/Lance.jpg";
import Pooja from "../img/dog.jpg";
import Hee from "../img/Hee.jpg";
import normal from "../img/normal.jpg";
import { useState } from "react";
import back from "../video/back.mp4";

function AboutUs() {
  const [img, setImg] = useState(normal);
  let member_check = (e) => {
    const id = e.target.id - 1;
    if (id == 0) {
      setImg(lance);
    } else if (id == 1) {
      setImg(Pooja);
    } else if (id == 2) {
      setImg(Hee);
    } else {
      setImg(normal);
    }
  };

  return (
    <>
      <div className="cover-about"></div>
      <div className="video-box">
        <video className="video" autoPlay loop muted>
          <source src={back} type="video/mp4" />
        </video>
      </div>
      <div className="about">
        <div className="space"></div>

        <div className="About-text">
          <h1>Welcome to Our App!</h1>
          <p>
            The leather jacked showed the scars of being his favorite for years.
            It wore those scars with pride, feeling that they enhanced his
            presence rather than diminishing it. The scars gave it character and
            had not overwhelmed to the point that it had become ratty. The
            jacket was in its prime and it knew it.
          </p>
        </div>
        <section className="teamContainer">
          <h1>Team Memebers</h1>
          <hr></hr>
          <div className="imgContainer">
            <img className="mask1" src={img} />
          </div>
          <div className="Allmember">
            {teamInfo.map((team, index) => {
              index++;
              return (
                <div
                  className="member"
                  id={index}
                  onMouseEnter={(e) => {
                    member_check(e);
                  }}
                >
                  <h3> {team.name}</h3>
                  <h4>{team.location}</h4>
                  <h4> {team.email}</h4>
                  <a href={team.gitHub}> gitHub </a>
                  <a href={team.linkedIn}>LinkedIn</a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
