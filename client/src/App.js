import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom'
import Layout from './routes/Layout';

import './style/index.css'
// http://api.githunt.com/graphiql
const API = "http://localhost:4000/graphql";

const client = new ApolloClient({
  link: new HttpLink({ uri: API, method: 'GET'}),
  cache: new InMemoryCache(),
  
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <Route  render={ props => <Layout {...props} /> } />
        </HashRouter>
      </ApolloProvider>
      
    );
  }
}

export default App;
