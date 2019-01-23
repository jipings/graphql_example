
import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { GET_DOG_PHOTO } from './schema';
class DelayedQuery extends Component {
    state = {dog: null}

    onDogFetched = dog => this.setState(() => ({dog}));

    render() {
        return (<ApolloConsumer>
            {
                client => (<div>
                    { this.state.dog && <img src={this.state.dog.displayImage} alt="" /> }
                    <button
                        onClick={
                            async () => {
                                const res = await client.query({
                                    query: GET_DOG_PHOTO,
                                    variables: { breed: "bulldog" }
                                });
                                console.log(res,);
                                this.onDogFetched(res.data.dog);
                            }
                        }
                    >Click me!</button>
                </div>)
            }
        </ApolloConsumer>)
    }
}

export default DelayedQuery;