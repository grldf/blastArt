<script>
  export let imageUrl;
  export let alternText;
  export let slideNo;
  export let totalSlide;
  export let imageShowing;
  export let infos;
  export let slug;
</script>

<div class="mySlides" class:show={imageShowing}>
  <div class="numbertext">{slideNo} / {totalSlide}</div>
  <img src={imageUrl} alt={alternText} />
  <div class="infos">
    <p><a href={slug} class="link">{infos}</a></p>
  </div>
</div>

<style>
  .mySlides {
    display: none;
    margin-right: 20px;
    margin-left: 20px;
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
  .numbertext {
    color: rgb(228, 46, 245);
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
  }
  img {
    width: 100%;
    max-height: 85vh;
    object-fit: contain;
  }
  .infos {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    background-color: #fff;
  }
  .infos p {
    padding-top: 0;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;
    margin-right: 15%;
  }
  a {
    color: #000;
    font-size: 1.6rem;
    text-decoration: underline;
    padding:5px;
  }
  a:hover {
    text-decoration: none;
    color: rgb(228, 46, 245);
  }
  .link {
    position: absolute;
    margin-top: 2px;
    border-left:  solid  rgb(228, 46, 245);
    border-right:  solid  rgb(228, 46, 245);
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
    .infos {
    max-width: 100%;
    text-align:center;
  }
  .infos p{
    margin-right: 0%;
  }
  .link{
    position:relative;
  }
  a{
    font-size:1.2rem;
  }
  }
</style>
