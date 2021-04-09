<script context="module">
    import ApolloClient, { gql } from "apollo-boost";
    import SvelteSeo from "svelte-seo";
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
    <link rel="stylesheet" href="https://use.typekit.net/ixn1cjn.css" />
  </svelte:head>
  <SvelteSeo
  description= "Créé en 2014, Blast réunit plusieurs artistes urbains et porte ses projets auprès d’entités publiques et privées. Toujours plus monumentale, et toujours plus accessible, c’est avec cette devise que Blast crée sans cesse de nouveaux projets artistiques. A l’​ origine du projet comme l’​ Exposition - oeuvre in-situ « Le Terminal « ​ à Lyon en Juin 2018. Le collectif BLAST propose des œuvres artistiques atypiques grâce à la complémentarité de ces artistes."
  title= "Portrait des différents membres du collefif Blast Art. Kalouf peintre muraliste, Romain Lardanchet sculpteur et dessinateur, Fabe Collage photographe de la scène urbaine et Jean Pierre spécialisé dans le développement de productions audiovisuelles"
  openGraph={{
  type: "article",
  title: "Les membres du collectif Blast art",
    description: "Présentaion des membres du collectif Blastart. ",
    url: "https://blast-art.art/collectif",
    images: [
      {
        url: "https://blast-art.art/logo-512.png",
        width: 759,
        height: 585,
        alt: "Logo Blast art",
      },
    ],
  }}
/>
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
    .content{
        font-family: interstate ;
        padding: 60px 0 0; 
        display: flex;
        flex-direction: column;

    }
    div {
      margin: 5px;
      display: flex;
      font-family: Interstate;
    }
    h2{
      font-weight: lighter;
      color: #3b3b38;
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
  