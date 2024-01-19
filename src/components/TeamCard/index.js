import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {name, teamImageUrl, id} = eachItem

  return (
    <li className="li1">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="logo" />
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
