
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import LRU from 'lru-cache';
import { generate } from 'shortid';

import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs, resolvers } from './src/resolvers';

const PORT = 4000;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
    cacheControl: true,
    engine: false,
});
app.use('*', cors({ origin: 'http://localhost:3000' }));

server.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})