<script>
  export let imageUrl;
  export let alternText;
  export let imageShowing;
  export let infos;
  export let slug;
</script>

<div class="mySlides"  class:show={imageShowing} >
  <a href={slug} class="imgLink"><img src={imageUrl} alt={alternText} /></a>
  <div class="infos">
    <p><a href={slug} class="link">{infos}</a></p>
  </div>
</div>

<style>
  .mySlides {
    display: none;
    margin-right: 20px;
    margin-left: 20px;
    height: 80vh;
  }
  .show {
    display: block;
    margin-top: 65px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    height: 90%;
  }
  
 a img {
    width: 99%;
    display:block;
    margin-left:auto;
    margin-right: auto;
    max-height: 80vh;
    object-fit: contain;
  }
  .imgLink{
    margin-left:auto;
    margin-right: auto;
  }
  .infos {
    width: 100%;
    display:flex;
		justify-content:center;
		align-items:center;
		text-align:center;
    background-color: #fff;
  }
  
  a {
    color: #000;
    font-size: 1.6rem;
  }
  a:hover {
    text-decoration: underline;
    color: #ef11a1;
  }
  
  @media (max-width: 660px) {
    .mySlides {
      margin-right: 0px;
      margin-left: 0px;
    }
    .show {
      margin-top: 0px;
      padding-top: 60px;
      background-color: #fff;
    }
    img {
      width: 100%;
      max-height: 95vh;
    }
    
  }
</style>
