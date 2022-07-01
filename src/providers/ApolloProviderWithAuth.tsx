import * as React from "react";

import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { useAuth } from "@clerk/clerk-react";
import { createClient } from "graphql-ws";

// https://stackoverflow.com/a/66662717
// https://stackoverflow.com/a/58033283
// https://www.apollographql.com/docs/react/data/subscriptions/

type ApolloProviderWithAuthProps = {
  children: React.ReactNode;
};

const ApolloProviderWithAuth = ({ children }: ApolloProviderWithAuthProps) => {
  if (
    !(
      process.env.REACT_APP_HASURA_HTTP_ENDPOINT &&
      process.env.REACT_APP_HASURA_WSS_ENDPOINT
    )
  ) {
    throw new Error(
      "REACT_APP_HASURA_HTTP_ENDPOINT and REACT_APP_HASURA_WSS_ENDPOINT must be set"
    );
  }

  const { getToken, isSignedIn } = useAuth();

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_HASURA_HTTP_ENDPOINT,
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: process.env.REACT_APP_HASURA_WSS_ENDPOINT,
      connectionParams: async () => {
        const auth = await authForWs();
        return auth;
      },
    })
  );

  const authForWs = async () => {
    // if (!isSignedIn) return {}; //TODO: fix after Clerk team response

    let token;
    try {
      token = await getToken({ template: "hasura" });
      // console.log({ token });
    } catch (error) {
      console.log(error);
    }

    if (!token) return {};

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const authLinkHttp = setContext(async (_, { headers, ...rest }) => {
    // console.log({ isSignedIn }, { getToken });

    // if (!isSignedIn) return { headers, ...rest }; //TODO: fix after Clerk team response

    let token;
    try {
      token = await getToken({ template: "hasura" });
      // console.log({ token });
    } catch (error) {
      console.log(error);
    }

    if (!token) return { headers, ...rest };

    return {
      ...rest,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    authLinkHttp.concat(httpLink)
  );

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach((error) =>
        console.log(
          `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}, Code: ${error.extensions?.code}`
        )
      );

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const client = React.useRef<ApolloClient<NormalizedCacheObject> | null>(null);

  if (!client.current) {
    client.current = new ApolloClient({
      link: from([errorLink, splitLink]),
      cache: new InMemoryCache(),
      connectToDevTools: true,
    });
  }

  return <ApolloProvider client={client.current}>{children}</ApolloProvider>;
};

export default ApolloProviderWithAuth;
