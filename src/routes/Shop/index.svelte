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
  <meta
    description="Vous avez aimez une peinture de Kalouf, une sculpture de Romain Lardanchet. Achetez sur la boutique un poster de cette oeuvre ou pourquoi pas une sculpture en impression 3D.
  Quel que soit votre budget vous trouverez une oeuvre Blast qui vous correspond  
	 "
  />
  <title
    >Boutique du collectif Blast avec des posters et autres produits dérivés et
    des oeuvres originales</title
  >
</svelte:head>

<div class="all">
  <h1>BLAST SHOP</h1>
  {#each article as produit}
    {#if produit.produits.length > 0}
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
      <span />
    {/if}
  {/each}
</div>

<style>
  h1 {
    margin-top: 60px;
  }
  .container {
    margin: 0px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    grid-auto-flow: dense;
  }
  .all {
    margin: 75px 20px;
  }
  h2 {
    width: fit-content;
    max-width: -moz-fit-content;
    border-bottom: solid 1px #ef11a1;
    margin-left: -20px;
    padding-left: 20px;
  }
</style>
