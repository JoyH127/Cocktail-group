import teamInfo from "../data/TeamInfo";
import TeamCard from './TeamCard'

function AboutUs() {
  return (
    <div className="about">
      <h3>Welcome to Our App!</h3>
      <p></p>
      <p>Team Memebers</p>
      <div>
      {
        teamInfo.map((team, index)=> {
          return <TeamCard team={team} key={index}/>
        })
      }
      </div>
    </div>
  );
}

export default AboutUs;
