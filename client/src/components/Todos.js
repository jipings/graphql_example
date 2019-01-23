import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { UPDATE_TODO, GET_TODOS } from './schema';

const Todos = () => (
    <Query query={GET_TODOS}>
        {
            ({loading, error, data}) => {
                if(loading) return <p>Loading...</p>
                if(error) return <p>Error: {error.message}</p>

                return data.todos.map(({id, type}) => {
                    let input;

                    return (<Mutation mutation={UPDATE_TODO} key={id}>
                        {
                            (updateTodo, {loading, error}) => (<div>
                                <p>{type}</p>
                                <form
                                    onSubmit={e => {
                                        e.preventDefault();
                                        updateTodo({variables: {id, type: input.value}});
                                        input.value = "";
                                    }}
                                >
                                    <input ref={node => {input = node}} />
                                    <button type="submit">Update Todo</button>
                                    
                                </form>
                                {loading && <p>Loading...</p>}
                                {error && <p>Error :( Please try again</p>}
                            </div>)
                        }
                    </Mutation>)
                })
            }
        }
    </Query>
)

export default Todos;