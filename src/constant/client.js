import { createHttpLink } from 'apollo-link-http';
import {ApolloClient,} from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {customFetch} from '../helpers'

const client = new ApolloClient({
  link: createHttpLink({
      uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
      fetch: customFetch,
  }),
  cache: new InMemoryCache()
});

export default client;