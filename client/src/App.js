import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

const API = "http://localhost:4000/graphql";

const client = new ApolloClient({
  link: new HttpLink({uri: API}),
  cache: new InMemoryCache(),
})
class App extends Component {
  state={breed: "affenpinscher"};
  onDogSelected = (e) => {
    const value = e.target.value;
    console.log(value, 'value');
    this.setState(() => ({breed: value}))
  }
  componentDidMount() {
    // client.query({
    //   query: gql`
    //     {
    //       rates(currency: "USD") {
    //         currency
    //       }
    //     }
    //   `
    // }).then(result => console.log(result))
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
           <AddTodo />
           <Todos />
          </header>
        </div>
      </ApolloProvider>
      
    );
  }
}

export default App;
