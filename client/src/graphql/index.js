
import gql from 'graphql-tag';
export const CommentsPageComment = gql`
fragment CommentsPageComment on Comment { # ?
    id
    postedBy {
      login
      html_url
    }
    createdAt
    content
  }`

export const COMMENT_QUERY = gql`
query Comment($repoName: String!) {
  currentUser {
    login
    html_url
  }
  entry(repoFullName: $repoName) {
    id
    postedBy {
      login
      html_url
    }
    createdAt
    comments {
      ...CommentsPageComment
    }
    repository {
      full_name
      html_url
      description
      open_issues_count
      stargazers_count
    }
  }
}
`;
export const FeedEntry = gql`
   fragment FeedEntry on Entry {  # ?
     id
     commentCount
     repository {
       full_name
       html_url
       owner {
         avatar_url
       }
     }
     ...VoteButtons
     ...RepoInfo
   }

   fragment VoteButtons on Entry {
     score
     vote {
       vote_value
     }
   }

   fragment RepoInfo on Entry {
     createdAt
     repository {
       description
       stargazers_count
       open_issues_count
     }
     postedBy {
       html_url
       login
     }
   }
`;
// export const FEED_QUERY = gql`
//   query Feed($type: FeedType!, $offset: Int, $limit: Int) { # ?
//     feed(type: $type, offset: $offset, limit: $limit) {
//       ...FeedEntry
//     } 
//   }
// `;
export const FEED_QUERY = gql`
    query Feed { # ?
      feed(type: TOP, offset: 0, limit: 10) {
        ...FeedEntry
      } 
    }
  
`;

export const CURRENT_USER_QUERY = gql`
  query CurrentUserForLayout {
    currentUser {
      login
      avatar_url
    }
  }
`;

export const VOTE_MUTATION = gql`
  mutation vote($repoFullName: String!, $type: VoteType!) {
    vote(repoFullName: $repoFullName, type: $type) {
      score
      id
      vote {
        vote_value
      }
    }
  }
`;