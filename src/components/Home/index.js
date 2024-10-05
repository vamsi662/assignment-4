import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const formattedData = teams.map(eachteam => ({
      name: eachteam.name,
      id: eachteam.id,
      teamImageUrl: eachteam.team_image_url,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, teamsList} = this.state
    return (
      <div className="bg-con">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="home-con">
            <div className="ipl-img-title-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="ipl-image"
                alt="ipl logo"
              />
              <h1 className="ipl-title">IPL Dashboard</h1>
            </div>
            <ul className="teams-con">
              {teamsList.map(eachteam => (
                <TeamCard team={eachteam} key={eachteam.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
