import gql from 'graphql-tag';

export const queryRates = gql`
    {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

export const GET_DOGS = gql`
    {
        dogs {
            id
            breed
        }
    }
`;

export const GET_DOG_PHOTO = gql`
    query Dog($breed: String!) {
        dog(breed: $breed) {
            id
            displayImage
        }
    }
`;

export const ADD_TODO = gql`
    mutation AddTodo($type: String!) {
        addTodo(type: $type) {
            id
            type
        }
    }
`;

export const GET_TODOS = gql`
    query GetTodos {
        todos {
            id
            type
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation UpdateTodo($id: String!, $type: String!) {
        updateTodo(id: $id, type: $type) {
            id
            type
        }
    }
`;