
<script context="module">
    import ApolloClient, { gql } from "apollo-boost";
  
    const presseQuery = gql`
      query presse {
        presses(sort:"dateParution:desc"){
            id
            commentaire
            lien
            logoSite{
                url
  	        }
        }
    }
    `;
    export async function preload({ params, query }) {
      const client = new ApolloClient({
        uri: "http://51.210.96.39:1337/graphql",
        fetch: this.fetch,
      });
      const results = await client.query({
        query: presseQuery,
      });
      return { posts: results.data.presses };
    }
    let urlpApi = "http://51.210.96.39:1337";
  </script>
  
  <script>
import { assertIdValue } from "apollo-cache-inmemory";

    export let posts;
  </script>
  <svelte:head>
    <title>Presse</title>
  </svelte:head>
<div class="container">
{#each posts as article}

<article>
      
  <img src={urlpApi + article.logoSite.url} alt={article.commentaire} />
  <p><a href={article.lien} target="_blank">{article.commentaire}<br/> <span>&#9758;</span></a></p>
 
</article>

{/each}
</div>

<style>
img{
    max-width: 100%;
}
.container{
    margin:65px 20px 0 20px;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    grid-gap: 2rem;
    grid-auto-flow: dense;
    
    }
.container > article {
    border:solid 1px #ef11a1;
    align-self: stretch;
    justify-self: stretch;
}
img{
    object-fit: cover;
    background-color: #000;
    border-bottom: 5px solid #ef11a1;
}
article{
    display:flex;
    flex-direction:column;
    justify-content: center;
    background-color: #708090;
}
p, a{
    text-align:center;
    color:#fff;
}
a:hover{
    text-decoration:none;
}
span:hover{
    text-decoration: underline #ef11a1;
}
span{
    font-size: 30px;
    color:#000;
}
.container{
        position:relative;
        
        top:60px;
      margin-top: 0;
    }
    .container{
        position:relative;
        margin: 0 auto;
        top:60px;
      min-height: 0vh;
      width: 90vw;
      margin-top: 0;
    }
</style>