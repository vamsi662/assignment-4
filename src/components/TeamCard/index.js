import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {name, id, teamImageUrl} = team
  return (
    <Link className="nav-link" to={`/team-matches/${id}`}>
      <li className="card-con">
        <img src={teamImageUrl} className="team-logo-image" alt={`${name}`} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
