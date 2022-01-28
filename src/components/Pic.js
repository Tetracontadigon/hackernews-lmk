import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'
//I don't think i need this //
// import { Mutation } from 'react-apollo'
// import gql from 'graphql-tag'
// const VOTE_MUTATION = gql`
//   mutation VoteMutation($linkId: ID!) {
//     vote(linkId: $linkId) {
//       id
//       pic {
//         votes {
//           id
//           user {
//             id
//           }
//         }
//         id
//       }
//       user {
//         id
//       }
//     }
//   }
// `
// end //

class Pic extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
  <span className="gray">{this.props.index + 1}.</span>
  {/* {authToken} */}
</div>

        <div className="ml1">
          <div>
          <a href={this.props.pic.url} target="_blank">{this.props.pic.description}</a>
          {/* {this.props.link.postedBy.name} has eaten {this.props.link.postedBy.spiders_eaten} spiders */}
          </div>
          {/* DISPLAY IMAGE */}
          <p><img src={this.props.pic.url} alt="error"></img></p>
          <div className="f6 lh-copy gray">
            by{' '}
            {this.props.pic.postedBy
              ? this.props.pic.postedBy.name
              : 'Unknown'}{' '}
            {timeDifferenceForDate(this.props.pic.createdAt)}  {' '}
  {/* below ternary operator check if any votes, shows last voter */}
              <div>Tags: {this.props.pic.tag}</div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Pic