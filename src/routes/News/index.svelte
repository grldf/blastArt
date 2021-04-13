<script context="module">
import ApolloClient, { gql } from "apollo-boost";
import snarkdown from "snarkdown";

  const newsQuery = gql`
      query news {
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
        query: newsQuery,
      });
      return { news: results.data.nouvelles };
    }
  let urlpApi = "https://www.grldfaure.xyz";
    
</script>

<script>
  
  export let news;
</script>

<svelte:head>
  <meta description="Retrouvez les news du collectifs Blast. A travers de courts textes et de photos 
  apprenez qu'elles sont les avancées de nos projets artistiques et les rencontres que nous faisons 
  et ce qui a pu nous faire vibrer"/>
  <title>News du collectif sur les projets et les rencontres que nous faisons</title>
  <link rel="stylesheet" href="https://use.typekit.net/ixn1cjn.css" />
</svelte:head>
<div class="content">
  {#each news as newpub, i}
    <div class="impair">
      <article>
        <h2>{newpub.titre}</h2>
        <p>
          {@html snarkdown (newpub.contenu)}
        </p>
      </article>
      <aside>
        {#if newpub.image === null}
          <img src="logo-512.png" alt="Blast logo" />
        {:else}
          <img src={urlpApi + newpub.image.url} alt={newpub.titre} />
        {/if}
      </aside>
    </div>
  {/each}
</div>
<style>
  
  .content {
    font-family: interstate;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
  }
  div {
    margin: 5px;
    display: flex;
    font-family: Interstate;
  }
  article h2 {
    max-width: 22rem;
    border-bottom: 2px solid #ef11a1;
    text-align: left;
    font-weight:lighter;
    color: #3b3b38;
  }
  p{
    max-width: 100%;
  }
  aside {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }
  img {
    max-width: 20rem;
  }

  
  @media (max-width: 660px) {
    .content {
      padding-top: 40px;
    }
    div {
      margin: 0px;
    }
    img {
      display: none;
    }
    
    article h2 {
      padding-left: 0rem;
    }
    
    p {
      margin-left: 20px;
    }
  }
</style>
