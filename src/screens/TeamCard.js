
function TeamCard(props){
   console.log(props)
    return(
       <div>
          <h4> {props.team.name}</h4>
          <h4>{props.team.location}</h4>
          <h4> {props.team.email}</h4>
          <h4> {props.team.gitHub}</h4>
          <h4>{props.team.linkedIn}</h4>
       </div>
    )
}

export default TeamCard