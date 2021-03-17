import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { getMainDefinition } from "npm ";

const headers = {'content-type': 'application/json'};
const getHeaders = () => {
  return headers;
};

const cache = new InMemoryCache();


const httpLink = new HttpLink({
  uri: "https://grldfaure.xyz/graphql",
  headers: getHeaders()
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  httpLink
);

export const client = new ApolloClient({
  link,
  cache,
});

