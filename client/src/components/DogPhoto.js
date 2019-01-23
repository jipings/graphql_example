import React from 'react';
import { Query } from 'react-apollo';
import { GET_DOG_PHOTO } from './schema';

const DogPhoto = ({breed}) => (
<Query
 query={GET_DOG_PHOTO}
 variables={{breed}}
 skip={!breed}
//  pollInterval={1500}
 notifyOnNetworkStatusChange
 >
    {
        ({loading, error, data={}, refetch, networkStatus}) => {
            if(networkStatus === 4) return  <p>Refetching...</p>;
            if(loading) return <p>Loading...</p>;
            if(error) return `Error! ${error.message}`
            
            return (<div>
                {
                  data.dog &&  <img  src={data.dog.displayImage} alt="" style={{height: 100, width: 100}} />
                } 
                <br />
                <button onClick={() => refetch()}>Refetch!</button>
            </div>
            )
        }
    }
</Query>);

export default DogPhoto;