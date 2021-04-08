<script context="module">
  import ApolloClient, { gql } from "apollo-boost";
  import Produit from "../../components/Produit.svelte";
  import ProduitTshirt from "../../components/ProduitTshirt.svelte";
  import SvelteSeo from "svelte-seo";

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
          lienride4life
          nameCustomOption1
          customOption1
          nameCustomOption2
          customOption2
          nameCustomOption3
          customOption3
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

<SvelteSeo
  description="Boutique du collectif Blast. Trouvez votre impression 3D préférés ou des reproductions d'oeuvres en poster 
  ou print des oeuvres de Kalouf, Romain Lardanchet et Fabe Collage"
  title="Boutique du collectif Blast où vous pouvez achetez des oeuvres originales et des reproductions"
/>

  <div class="all">
      {#each article as produit}
        {#if produit.produits.length > 0}
          {#if produit.nom === "T-SHIRTS"}
          <h2>{produit.nom} sur la boutique Ride4life</h2>
            <div class="container">
          {#each produit.produits as product}
            <ProduitTshirt 
            imgProduit={urlpApi + product.image.url}
            nomProduit={product.nom}
            descriptionProduit={product.description}
            prixProduit={product.prix}
            idProduit={product.id}
            imgModalProduit={urlpApi + product.image.url}
            lienRide4Life={product.lienride4life}
            />
            {/each}
            </div>
          {:else}
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
                  custom1={product.nameCustomOption1}
                  options1={product.customOption1}
                  custom2={product.nameCustomOption2}
                  options2={product.customOption2}
                  custom3={product.nameCustomOption3}
                  options3={product.customOption3}
                />
              {/each}
            </div>
            {/if}
          {:else}
            <span />
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
  .all {
    margin: 75px 20px;
  }
  h2 {
    width: fit-content;
    max-width: -moz-fit-content;
    border-bottom: solid 1px #ef11a1;
    margin-left: -20px;
    padding-left: 20px;
    font-weight:lighter;
    color: #3b3b38;
  }
</style>
