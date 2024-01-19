import './index.css'

const MatchCard = props => {
  const {each} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = each

  const a = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="div31">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="img13"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={a}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
