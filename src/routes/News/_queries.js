import ApolloClient, { gql } from "apollo-boost";
  
const newsQuery = gql`
    query membre {
      nouvelles(sort: "id:desc") {
        id
        titre
        contenu
        datePublication
        image {
          url
        }
      }
    }
  `;
  export async function preload({ params, query }) {
    const client = new ApolloClient({
      uri: "https://www.grldfaure.xyz/graphql",
      fetch: this.fetch,

    });
    const results = await client.query({
      query: membre,
    });
    return { membre: results.data.collectifs };
  }
  export default membre;