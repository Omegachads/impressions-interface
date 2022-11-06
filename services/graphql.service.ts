import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const APIURL =
  "https://api.thegraph.com/subgraphs/name/omegachads/impressions-message-requests";

const adsQuery = (to: string) => `
  query {
  requestMessages(where: { to: ${to} }) {
    id
    requestId
    from
    to
    amount
  }
}  
`;

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

export async function getAds(to: string) {
  try {
    const data = await client.query({
      query: gql(adsQuery(user)),
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
