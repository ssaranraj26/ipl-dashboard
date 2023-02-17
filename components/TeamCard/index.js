import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  console.log(details)
  return (
    <Link className="team-img-name-container" to={`/team-matches/${id}`}>
      <li className="team-list-container">
        <img className="team-img" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
