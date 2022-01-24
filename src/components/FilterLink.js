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
      }
    }
  }
`

class FilterLink extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
  <span className="gray">{this.props.index + 1}.</span>
  {/* {authToken && (
    <Mutation
    mutation={VOTE_MUTATION}
    variables={{ linkId: this.props.link.id }}
    update={(store, { data: { vote } }) =>
      this.props.updateStoreAfterVote(store, vote, this.props.link.id)
    }
    >
    {voteMutation => (
      <div className="ml1 green f11" onClick={voteMutation}>
        ▲
      </div>
    )}
    </Mutation>  
  )} */}
</div>

        <div className="ml1">
          <div>
          <a href={this.props.link.url} target="_blank">{this.props.link.description}</a>
          {/* {this.props.link.postedBy.name} has eaten {this.props.link.postedBy.spiders_eaten} spiders */}
          </div>
          <div className="f6 lh-copy gray">
            {this.props.link.votes.length} votes | by{' '}
            {this.props.link.postedBy
              ? this.props.link.postedBy.name
              : 'Unknown'}{' '}
            {timeDifferenceForDate(this.props.link.createdAt)}  {' '}
  {/* below ternary operator check if any votes, shows last voter */}
            {this.props.link.votes[0] 
              ? ' ____ vote ids: first '+this.props.link.votes[0].id +' last '+this.props.link.votes[this.props.link.votes.length-1].id
              : ' '} 
              <div>Tags: {this.props.link.tag}</div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default FilterLink