import { ApolloClient, InMemoryCache, gql, ApolloQueryResult } from "@apollo/client";

const APIURL =
  "https://api.thegraph.com/subgraphs/name/omegachads/impressions-message-requests";

const adsQuery = (to: string) => `
  query {
  requestMessages(where: { to: "${to}" }) {
    id
    requestId
    from
    to
    amount
  }
}  
`;

interface AdsQueryRes {
  requestMessages: {
    requestId: string,
    id: string,
    from: string,
    to: string,
    amount: string,
  }[],
}

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

export async function getAds(to: string) {
  const res = await client.query({
    query: gql(adsQuery(to)),
  }) as ApolloQueryResult<AdsQueryRes>;

  return res.data.requestMessages;
}
