import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql',
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;