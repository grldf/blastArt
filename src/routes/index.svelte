<script context="module">
	 import ApolloClient, { gql } from "apollo-boost";
	 import Slide from "./../components/Slide.svelte";
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
  export async function preload({ params, query }) {
	const client = new ApolloClient({
	  uri: "https://www.grldfaure.xyz/graphql",
	    fetch: this.fetch,
	});
	const results = await client.query({
	  query: imageQuery,
	});
	return { posts: results.data.projets };
}

  const urlpApi = "https://www.grldfaure.xyz";
  const urlSlug = "Projet/";
	
</script>

<script>
	export let posts;
// slideshow change image	
 let imageShowIndex = 1;
  const prevSlide = () => {
	  if(imageShowIndex === 1 ){
		 imageShowIndex = posts.length;
	  }else{
		imageShowIndex -= 1;
	  }
	};
  
  const nextSlide = () => {
	  if (imageShowIndex === posts.length){
		  imageShowIndex = 1
	  }else{
		imageShowIndex += 1;
	  }
	} ;

</script>

<svelte:head>
  <title>BlastART</title>
</svelte:head>
<div>
<div class="container">
{#each posts as post}
  <Slide imageUrl={urlpApi + post.cover.url} 
		   alternText={post.titre} 
		   slideNo={imageShowIndex}
		   totalSlide={posts.length}
		   imageShowing={(post.idP * -1) + posts.length + 1 === imageShowIndex}
		   infos={post.titre}
		   slug={urlSlug + post.Slug}
		   />
{/each}
</div>
 <!-- Next and previous buttons -->
 <a href="#arrowL" class="prev" on:click={prevSlide}>&#10094;</a>
 <a href="#arrowR" class="next" on:click={nextSlide}>&#10095;</a>
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
  color: rgb(228, 46, 245);
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
