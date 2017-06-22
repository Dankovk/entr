import { ApolloClient, createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: "https://api.graph.cool/simple/v1/cj2xr9uma7xa20133jfpk4dsq",
		// opts: {
		// 	credentials: 'same-origin',
		// },
	}),
});

export function getApolloClient(): ApolloClient {
	return client;
}
