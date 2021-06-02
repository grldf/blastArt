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
  export async function preload() {
	const client = new ApolloClient({
	  uri: "https://www.grldfaure.xyz/graphql",
	    fetch: this.fetch,
	});
	const results = await client.query({
	  query: cgvQuery,
	});
	return { cgu: results.data.ccvCgu };
}
</script>

<script>
    export let cgu;
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
  <title>CGV/CGU</title>
</svelte:head>

<div class="content">
  <h1>{cgu.titre}</h1>
  {@html snarkdown(cgu.conditions)}
</div>
<style>
    h1{
        font-size:50px;
    }
    .content{
      padding: 30px 20px;
    } 
     
</style>