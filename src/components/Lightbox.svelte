<script>
    export let imageUrl;
    export let alternText;
    export let slideNo;
    export let totalSlide;
    export let imageShowing;
    export let imgFullSize;
    export let videoPoster;
    
    let regex = /.mp4$/;
</script>
<div class="mySlides" class:show={imageShowing}>
    <div class="numbertext">{slideNo} / {totalSlide}</div>
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
.numbertext {
  color:  rgb(228, 46, 245);
  font-size: 12px;
  padding-top: 8px ;
  position: absolute;
  background-color:rgba(0,0,0,0.5);
    }
img,video{
    width: 100%;
    max-height: 90vh;
    align-self: stretch;
    justify-self: stretch;
    object-fit: contain;
}
.img-full-size {
    width: 100%;
    max-height: 100vh;
    object-fit: cover;
}

</style>