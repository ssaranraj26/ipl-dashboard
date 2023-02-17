import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import './index.css'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, latestMatchDetails: {}, recentMatchDetails: []}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    this.teamImageUrl = data.team_banner_url
    console.log(this.teamImageUrl)
    const latestMatch = data.latest_match_details
    const updatedLatestMatch = {
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      date: latestMatch.date,
      firstInnings: latestMatch.first_innings,
      id: latestMatch.id,
      manOfTheMatch: latestMatch.man_of_the_match,
      matchStatus: latestMatch.match_status,
      result: latestMatch.result,
      secondInnings: latestMatch.second_innings,
      umpires: latestMatch.umpires,
      venue: latestMatch.venue,
    }

    const recentMatches = data.recent_matches
    const updatedRecentMacthes = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    this.setState({
      isLoading: false,
      latestMatchDetails: updatedLatestMatch,
      recentMatchDetails: updatedRecentMacthes,
    })
  }

  renderTeamMatches = () => {
    const {latestMatchDetails, recentMatchDetails} = this.state
    console.log(latestMatchDetails.id)
    return (
      <div className="team-matches-content-container">
        <img
          className="team-banner"
          src={this.teamImageUrl}
          alt="team banner"
        />
        <LatestMatch details={latestMatchDetails} />
        <ul className="recent-match-all-list-container">
          {recentMatchDetails.map(each => (
            <MatchCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-matches-bg-container">
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
