import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    firstInnings,
  } = latestMatchDetails
  return (
    <div className="latest-match">
      <div className="left-column">
        <p className="competing-team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue-result">{venue}</p>
        <p className="venue-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="right-column">
        <p className="right-column-headings">First Innings</p>
        <p className="right-column-name">{firstInnings}</p>
        <p className="right-column-headings">Second Innings</p>
        <p className="right-column-name">{secondInnings}</p>
        <p className="right-column-headings">Man Of The Match</p>
        <p className="right-column-name">{manOfTheMatch}</p>
        <p className="right-column-headings">Umpires</p>
        <p className="right-column-name">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
