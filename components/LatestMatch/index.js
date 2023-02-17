import './index.css'

const LatestMatch = props => {
  const {details} = props
  console.log(details)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = details

  console.log(date)
  return (
    <div>
      <h1 className="latest-match-title">Latest Matches</h1>
      <div className="latest-match-card-container">
        <div className="first-container">
          <div>
            <p className="team-title">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="details-value">{venue}</p>
            <p className="details-value">{result}</p>
          </div>
          <div className="competing-img-container">
            <img
              className="competing-team-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
        </div>
        <hr className="line" />
        <div>
          <p className="details-topic">First Innings</p>
          <p className="details-value">{firstInnings}</p>
          <p className="details-topic">Seconds Innings</p>
          <p className="details-value">{secondInnings}</p>
          <p className="details-topic">Man of the Match</p>
          <p className="details-value">{manOfTheMatch}</p>
          <p className="details-topis">Umpires</p>
          <p className="details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
