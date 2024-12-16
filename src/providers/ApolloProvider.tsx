"use client";
import { ApolloClient, ApolloLink, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import Cookies from "js-cookie";
import { __DEV__ } from "@apollo/client/utilities/globals";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (__DEV__) {
  loadDevMessages();
  loadErrorMessages();
}

const back_httpLink = createHttpLink({ uri: process.env.NEXT_PUBLIC_BACKEND_URL || '',})

export const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  const token = Cookies.get('token');

  const backLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        authorization: token ? `Bearer ${token}` : "",
      }
    })
    return forward(operation)
  });

	const client = new ApolloClient({
    link: backLink.concat(back_httpLink),
		cache: new InMemoryCache(),
	});

  
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};