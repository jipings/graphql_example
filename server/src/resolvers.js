
import { gql } from 'apollo-server-express';
import LRU from 'lru-cache';
import { generate } from 'shortid';

const API = "https://dog.ceo/api";

export const typeDefs = gql`
type Query {
    todos: [Todo]
    todo(id: String!): Todo
}

type Todo {
    id: String!
    type: String!
}

type Mutation {
    addTodo(type: String!): Todo
    updateTodo(id: String!, type: String!): Todo
}
`;
const cache = new LRU({max: 50, maxAge: 1000 * 60 * 60});

export const resolvers = {
    Query: {
        todos: () => {
            const todos = [];
            cache.forEach((type, id) => todos.push({type, id}));
            return todos
        },
        todo: (root, {id}) => {
            return {id, type: cache.get(id)};
        }
    },
    Mutation: {
        addTodo: (root, {type}) => {
            const id = generate();
            const todo = {type, id};
            cache.set(id, type);
            return todo;
        },
        updateTodo: (root, {type, id}) => {
            const todo = {type, id};
            cache.set(id, type);
            return todo;
        }
    },
};

