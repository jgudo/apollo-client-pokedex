import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.less';
import FilterProvider from './provider/FilterProvider';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://graphql-pokemon2.vercel.app'
  })
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
