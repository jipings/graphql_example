
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { ADD_TODO, GET_TODOS } from './schema';

const AddTodo = () => {
    let input;

    return (
        <Mutation
            mutation={ADD_TODO}
            update={(cache, {data: {addTodo}}) => {
                const {todos} = cache.readQuery({ query: GET_TODOS });
                cache.writeQuery({
                    query: GET_TODOS,
                    data: {todos: todos.concat([addTodo])},
                });
            }}
        >
            {
                addTodo => (<div>
                    <form
                        onSubmit={
                            e => {
                                e.preventDefault();
                                addTodo({variables: { type: input.value }})
                            }
                        }
                    >
                        <input ref={node => {input = node}} />
                        <button type="submit">Add Todo</button>
                    </form>
                </div>)
            }
        </Mutation>
    )
};

export default AddTodo;