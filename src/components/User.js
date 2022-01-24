import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
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

class User extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return(
      <div className="flex mt2 items-start">
      <div className="flex items-center"><span className="gray">{this.props.index+1}</span></div>
      <div className="ml1">{this.props.user.name}</div>
      </div>
    )
  }
  
}

export default User