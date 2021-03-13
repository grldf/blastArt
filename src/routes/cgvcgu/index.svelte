<script context="module">
import ApolloClient, { gql } from "apollo-boost";
import snarkdown from 'snarkdown';  

const cgvQuery = gql`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;
  export async function preload({ params, query }) {
	const client = new ApolloClient({
	  uri: "https://www.grldfaure.xyz/graphql",
	    fetch: this.fetch,
	});
	const results = await client.query({
	  query: cgvQuery,
	});
	return { posts: results.data.ccvCgu };
}
</script>

<script>
    export let posts;
</script>
<svelte:head>
  <title />
</svelte:head>
<div class="content">
  <h1>{posts.titre}</h1>
  {@html snarkdown(posts.conditions)}
</div>
<style>
    h1{
        font-size:50px;
    }
    .content{
      padding: 30px 20px;
    } 
     
</style>