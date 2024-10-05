import './index.css'

const MatchCard = props => {
  const {matchCardDetails, altValue} = props
  console.log(matchCardDetails)
  const {competingTeam, competingTeamLogo, matchStatus, result} =
    matchCardDetails
  const classname = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card-con">
      <img
        src={competingTeamLogo}
        className="match-card-competing-team-logo-img"
        alt={`competing team ${altValue}`}
      />
      <p className="match-card-competing-name">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={`${classname}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
