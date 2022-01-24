import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
const VOTE_MUTATION = gql`
  mutation VoteMutation($videoId: ID!) {
    vidVote(videoId: $videoId) {
      id
      video {
        votes {
          id
          user {
            id
          }
        }
        id
      }
      user {
        id
        votes
      }
    }
  }
`

class Video extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return(
      <div className="flex mt2 items-start">
      <div className="flex items-center"><span className="gray">{this.props.index+1}</span></div>
      <div className="ml1">{this.props.video.description}</div>
      <div className="ml1"><video width="320" height="~" controls>
          <source src={this.props.video.url} type="video/mp4"></source>
          Your browser does not support the video tag.</video></div>
        hiapsodhfjgaprwougufbvcixhlviuhjagowrsfx8oiclkjhfb
      </div>
    )
  }
  
}

export default Video