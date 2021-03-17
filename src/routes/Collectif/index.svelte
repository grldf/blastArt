<script context="module">
    import ApolloClient, { gql } from "apollo-boost";
  
    const membreQuery = gql`
      query membre {
        collectifs(sort: "id:asc") {
          id
          nom
          description
          profilimage {
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
        query: membreQuery,
      });
      return { posts: results.data.collectifs };
    }
    let urlpApi = "https://grldfaure.xyz";
  </script>
  
  <script>
    export let posts;
  </script>
  
  <svelte:head>
    <title>Le collectif</title>
    <link rel="stylesheet" href="https://use.typekit.net/ixn1cjn.css" />
  </svelte:head>
  {#if posts}
  <div class="content">
  {#each posts as post, i}
    <div class={i % 2 == 0 ? "impair" : "pair"}>
      <article>
        <h2>{post.nom}</h2>
        <p>
          {post.description}
        </p>
      </article>
      <aside>
        <img
          src={urlpApi + post.profilimage.url}
          alt={"portrait de " + post.nom}
        />
      </aside>
    </div>
  {/each}
  </div>
  {:else}
  <div class="test">FUCK</div>
{/if}
  <style>
    .test{font-size:100vw}
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
  