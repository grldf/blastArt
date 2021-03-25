<script>
    export let imageUrl;
    export let alternText;
    export let imageShowing;
    export let imgFullSize;
    export let videoPoster;
    
    let regex = /.mp4$/;
</script>
<div class="mySlides" class:show={imageShowing}>
    {#if imageUrl.match(regex)}
    <video class={imgFullSize} poster={videoPoster} src={imageUrl} controls  type="video/mp4">
        <track kind="captions"  />
    </video>
    {:else}
    <img class={imgFullSize} src={imageUrl}  alt={alternText} />
    {/if}
</div>

<style>
.mySlides {
  display: none;
 
    }
.show{
  display: block;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 100%;
}

img,video{
    width: 100%;
    max-height: 90vh;
    align-self: stretch;
    justify-self: stretch;
    object-fit: contain;
}
video{object-fit: cover;}
.img-full-size {
    width: 100%;
    max-height: 100vh;
    object-fit: cover;
}

</style>