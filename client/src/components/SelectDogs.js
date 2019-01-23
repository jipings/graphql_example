import React from 'react';
import { Query } from 'react-apollo';
import { GET_DOGS } from './schema';

const Dogs = ({ onDogSelected }) => (
    <Query query={GET_DOGS}>
        {
            ({ loading, error, data }) => {
                if(loading) return "Loading..."
                if(error) return `Error! ${error.message}`;

                return (
                    <select name="dog" onChange={onDogSelected}>
                        {
                            data.dogs.map(dog => (<option key={dog.id}>
                                {dog.breed}
                                </option>))
                        }
                    </select>
                )
            }
        }
    </Query>
);

export default Dogs;