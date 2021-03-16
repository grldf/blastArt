<script context="module">
  import ApolloClient, { gql } from "apollo-boost";
  import Produit from "../../components/Produit.svelte";
  
  const produitsQuery = gql`
    query produit {
      categories(sort: "ordre") {
        nom
        ordre
        produits {
          id
          nom
          description
          prix
          image {
            url
          }
        }
      }
    }
  `;
  export async function preload() {
    const client = new ApolloClient({
      uri: "https://www.grldfaure.xyz/graphql",
      fetch: this.fetch,
    });
    const results = await client.query({
      query: produitsQuery,
    });
    return { article: results.data.categories };
  }
  let urlpApi = "https://www.grldfaure.xyz";
</script>
<script>
  export let article;
  
</script>

<svelte:head>
  <title>Blast Shop</title>
</svelte:head>
  <div class="all">
    
  {#each article as produit}
  {#if produit.produits.length >0}
  <h2>{produit.nom}</h2>

  <div class="container">
    {#each produit.produits as product}
    <Produit 
    itemGategorie={produit.nom}
    imgProduit={urlpApi + product.image.url}
    nomProduit={product.nom}
    descriptionProduit={product.description}
    prixProduit={product.prix}
    idProduit={product.id}
    imgModalProduit={urlpApi + product.image.url}
    />
    
    {/each}
  </div>
  {:else}
  <span></span>
  {/if}
  {/each}
</div>

<style>
  .container {
    margin: 0px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    grid-auto-flow: dense;
  }
  .all{
    margin: 75px 20px;
  }

  h2{
    width:fit-content;
    max-width: -moz-fit-content;
    border-bottom: solid 1px #ef11a1;
    margin-left:-20px;
    padding-left: 20px;
  }
</style>
