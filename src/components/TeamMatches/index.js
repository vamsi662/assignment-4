import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamBannerUrl: '', formattedLatestMatchDetails: {}}

  componentDidMount() {
    this.getMatchesDetails()
  }

  getMatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails, teamBannerUrl, recentMatches} = formattedData
    const formattedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const formattedRecentMatches = recentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))
    this.setState({
      isLoading: false,
      teamBannerUrl,
      formattedLatestMatchDetails,
      formattedRecentMatches,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const {
      isLoading,
      teamBannerUrl,
      formattedLatestMatchDetails,
      formattedRecentMatches,
    } = this.state

    return (
      <div className="team-matches-con">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="profile-con">
            <img
              src={teamBannerUrl}
              className="banner-image"
              alt="team banner"
            />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <LatestMatch latestMatchDetails={formattedLatestMatchDetails} />
            <ul className="matches-list">
              {formattedRecentMatches.map(eachMatchCard => (
                <MatchCard
                  matchCardDetails={eachMatchCard}
                  key={eachMatchCard.id}
                  altValue={id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
