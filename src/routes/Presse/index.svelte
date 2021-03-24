<script context="module">
  import ApolloClient, { gql } from "apollo-boost";

  const presseQuery = gql`
    query presse {
      presses(sort: "dateParution:desc") {
        id
        commentaire
        lien
        logoSite {
          url
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
      query: presseQuery,
    });
    return { liens: results.data.presses };
  }
  let urlpApi = "https://www.grldfaure.xyz";
</script>

<script>
  export let liens;
</script>

<svelte:head>
  <meta description="Retrouvez un ensemble de liens vers des articles de presse sur le collectif Blast et ces membres.
  Découvrez également des vidéos et des reportages sur les oeuvres du collectif"/>
  <title>La Presse parle de nous. Découvrez des reportages articles, vidéos et interviews de Blast</title>
</svelte:head>
<h1>Reportages, interviews...</h1>
<div class="container">
  {#each liens as article}
  <a href={article.lien} target="_blank"><article>
      <img src={urlpApi + article.logoSite.url} alt={article.commentaire} />
      <p>
          {article.commentaire}
        
      </p>
    </article>
  </a>
  {/each}
</div>

<style>
  h1{
    margin-top:60px;
    padding-left: 20px;
  }
  img {
    max-width: 100%;
  }
  .container {
    margin: 15px 20px 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
    grid-auto-flow: dense;
  }
  .container > a >article {
    border: solid 1px #ef11a1;
    align-self: stretch;
    justify-self: stretch;
    height:200px;
  }
  img {
    flex:start;
    object-fit: cover;
    background-color: #000;
    border-bottom: 5px solid #ef11a1;
    width:100%;
    max-height:125px;
  }
  article {
    
    background-color:#ef11a165;

  }
  p,
  a {
    color: #000;
    text-align: center;
  }
  a:hover {
    text-decoration: none;
  }
  
</style>
