
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import LRU from 'lru-cache';
import { generate } from 'shortid';
import proxy from 'http-proxy-middleware';

import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs, resolvers } from './src/resolvers';

const PORT = 4000;
const app = express();
const apiProxy = proxy({ target: 'http://api.githunt.com', changeOrigin: true });

const server = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
    cacheControl: true,
    engine: false,
});
app.use('*', cors({ origin: 'http://localhost:3000' }));
// app.use("*", function(req, res, next) {
//     console.log(req.url);
//     next();
// })
// server.applyMiddleware({ app, path: '/graphql' }); 

app.use('/graphql',  apiProxy);
app.use('/graphiql', apiProxy);
app.use('/login', apiProxy);
app.use('/logout', apiProxy);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})