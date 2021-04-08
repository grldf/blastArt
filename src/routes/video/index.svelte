<script context="module">
    import ApolloClient, { gql } from "apollo-boost";

const videoQuery = gql`
  query video {
        jpvideos(sort:"ordre:desc") {
            titre
            cover{
                url
            }
  	        video{
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
    query: videoQuery,
  });
  return { videos: results.data.jpvideos };
}
let urlpApi = "https://www.grldfaure.xyz";
</script>
<script>
    export let videos;
</script>
<div class="container">

{#each videos as video}
<div>
    <h3>{video.titre}</h3>
    <video src= {urlpApi + video.video.url} controls poster={urlpApi + video.cover.url} type="video/mp4" preload="none">
      <track kind="captions"  />
    </video>
</div>
{/each}
</div>
<style>
.container {
    margin: 60px 20px 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 2rem;
    grid-auto-flow: dense;
  }
  h3{
  font-weight: lighter;
}
  video{
    max-width: fit-content;
    max-width: -moz-fit-content;
    max-height:200px;
  }
</style>