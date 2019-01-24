import React from 'react';
import { Query, Mutation } from 'react-apollo';

import { FEED_QUERY, CURRENT_USER_QUERY, VOTE_MUTATION } from '../graphql';

export default class FeedList extends React.Component { 
    
    render() {
        return (<Query query={FEED_QUERY}>
            {({loading, data, error,}) => {
                if(loading) return <p>loading...</p>
                if(error) return <p>{error.message}</p>
                return <p>{JSON.stringify(data)}</p>
            }}
        </Query>)
    }
}