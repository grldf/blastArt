<script context="module">
    import ApolloClient, { gql } from "apollo-boost";
    import Slide from "./../../components/Slide.svelte";
 const imageQuery = gql`
   query cover{
     projets(sort:"date:desc"){
       id
       idP
       titre
       cover {
         url
       }
       Slug
     }
   }
 `;
 export async function preload() {
   const client = new ApolloClient({
     uri: "https://grldfaure.xyz/graphql",
       fetch: this.fetch,
   });
   const results = await client.query({
     query: imageQuery,
   });
   return { presentation: results.data.projets };
}

 const urlpApi = "https://grldfaure.xyz";
 const urlSlug = "projet/";
   
</script>

<script>
   export let presentation;
// slideshow change image	
let imageShowIndex = 1;
 const prevSlide = () => {
     if(imageShowIndex === 1 ){
        imageShowIndex = presentation.length;
     }else{
       imageShowIndex -= 1;
     }
   };
 
 const nextSlide = () => {
     if (imageShowIndex === presentation.length){
         imageShowIndex = 1
     }else{
       imageShowIndex += 1;
     }
   } ;
</script>

<svelte:head>
  <meta description="Présentaion des différents projets réalisés par le collectif Blastart, comme l'expositions unique le
  terminal, le dinosaure Gustave de Romain Lardanchet et la fresque monumentale Gorilla urbaine réalisé par Kalouf. Ces 
  travaux sont rendus au travers des photos de FabeCollage et des vidéos de Jean-Pierre(staffvidéo)" />
  <title>Projets réalisés par le collectif Blastart. Fresques, graphes sculptures les artistes relèvent tous les défis</title>
</svelte:head>

<div>
<div class="container">
{#each presentation as post}
 <Slide imageUrl={urlpApi + post.cover.url} 
          alternText={post.titre} 
          slideNo={imageShowIndex}
          totalSlide={presentation.length}
          imageShowing={(post.idP * -1) + presentation.length + 1 === imageShowIndex}
          infos={post.titre}
          slug={urlSlug + post.Slug}
          />
{/each}
</div>
<!-- Next and previous buttons -->
<a href="blast/#arrowL" class="prev" on:click={prevSlide}>&#10094;</a>
<a href="blast/#arrowR" class="next" on:click={nextSlide}>&#10095;</a>
</div>

<style>
.container {
 position: relative;
}


/* Next & previous buttons */
.prev,
.next {
 cursor: pointer;
 position: absolute;
 top: 40%;
 width: auto;
 padding: 20px;
 margin-left: 20px;
 color: #ef11a1;
 font-weight: bold;
 font-size: 25px;
 border-radius: 0 3px 3px 0;
 user-select: none;
 -webkit-user-select: none;
} 

/* Position the "next button" to the right */
.next {
 right: 0;
 margin-right: 20px;
 border-radius: 3px 0 0 3px;
} 

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
   font-size: 30px;
} 
@media(max-width:660px){
    .prev{
        margin-left:0px;
        background-color:rgba(0, 0, 0, 0.267);
    }
    .next{
        margin-right:0px;
        background-color:rgba(0, 0, 0, 0.267);
    }
}
</style>