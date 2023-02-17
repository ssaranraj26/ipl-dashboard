import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = details

  const status = matchStatus === 'Won' ? 'win' : 'loss'

  return (
    <li className="recent-match-list-container">
      <img
        className="recent-match-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="recent-list-title">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${status}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
