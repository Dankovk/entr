import { ApolloClient, createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: "`${GRAPH_API_BASE_URL}`",
		// opts: {
		// 	credentials: 'same-origin',
		// },
	}),
});

export function getApolloClient(): ApolloClient {
	return client;
}
