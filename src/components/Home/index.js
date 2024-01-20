import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, iplTeams: []}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const newData = data.teams.map(i => ({
      name: i.name,
      id: i.id,
      teamImageUrl: i.team_image_url,
    }))
    this.setState({isLoading: false, iplTeams: newData})
  }

  loaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  successView = () => {
    const {iplTeams} = this.state

    return (
      <>
        <ul className="ul1">
          {iplTeams.map(i => (
            <TeamCard eachItem={i} key={i.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="div1">
        <div className="div2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoading ? this.loaderView() : this.successView()}
      </div>
    )
  }
}

export default Home
