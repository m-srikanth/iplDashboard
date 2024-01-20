import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import Legend1 from '../Legend'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamImg: '',
    latestMatch: {},
    recentMatches: [],
    wonC: 5,
    drawC: 5,
    loseC: 5,
  }

  componentDidMount = () => {
    this.getData()
  }

  goBack = () => {
    const {history} = this.props
    history.push('/')
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const recentDetails = data.recent_matches.map(i => ({
      umpires: i.umpires,
      result: i.result,
      manOfTheMatch: i.man_of_the_match,
      id: i.id,
      date: i.date,
      venue: i.venue,
      competingTeam: i.competing_team,
      competingTeamLogo: i.competing_team_logo,
      firstInnings: i.first_innings,
      secondInnings: i.second_innings,
      matchStatus: i.match_status,
    }))

    const stat = data.recent_matches.map(j => j.match_status === 'Won')
    console.log(stat)

    this.setState({
      isLoading: false,
      teamImg: data.team_banner_url,
      latestMatch: latestDetails,
      recentMatches: recentDetails,
    })
  }

  loaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getClassname = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  successView = () => {
    const {teamImg, latestMatch, recentMatches, wonC, loseC, drawC} = this.state
    const b = `div11 ${this.getClassname}`

    return (
      <div className={b}>
        <img src={teamImg} alt="team banner" className="img11" />
        <LatestMatch latestMatch={latestMatch} />
        <ul className="ul2">
          {recentMatches.map(i => (
            <MatchCard each={i} key={i.id} />
          ))}
        </ul>
        <Legend1 winC={wonC} loseC={loseC} drawC={drawC} />
        <button type="button" onClick={this.goBack}>
          Back
        </button>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? this.loaderView() : this.successView()
  }
}

export default TeamMatches
