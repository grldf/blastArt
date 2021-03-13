<script context="module">
    import ApolloClient, { gql } from "apollo-boost";
  
    const newsQuery = gql`
      query membre {
        nouvelles(sort: "id:asc") {
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
    <title>Le collectif</title>
    <link rel="stylesheet" href="https://use.typekit.net/ixn1cjn.css" />
  </svelte:head>
  
  <div class="content">
  {#each news as newpub, i}
    <div class={i % 2 == 0 ? "impair" : "pair"}>
      <article>
        <h2>{newpub.titre}</h2>
        <p>
          {newpub.contenu}
        </p>
      </article>
      <aside>
        {#if newpub.image === null }
          <img
          src="logo-512.png"
          alt="Blast logo"
        />
    {:else} 
        <img
          src={urlpApi + newpub.image.url}
          alt={newpub.titre}
        />
       {/if}
      </aside>
    </div>
  {/each}
  </div>
  <style>
    .content{
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
      padding-left: 10rem;
      border-bottom: 2px solid #ef11a1;
      text-align: right;
    }
    
    aside {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px;
    }
    img {
      max-width: 10rem;
    }
    .pair{
      display: flex;
      flex-direction: row-reverse;
    }
    .pair h2 {
      padding-left: 0;
      text-align: left;
      margin-left: 66%;
      max-width:40rem;
    }
    @media(max-width:660px){
      .content{
         padding-top:40px;
      }
      div {
      margin: 0px;
      }
      img{
        display:none;
      }
      .pair h2 {
      margin-left: 0;
    }
    article h2 {
      padding-left: 0rem;
    }
    p{
      margin-left:20px;
    }
  }
  </style>
  