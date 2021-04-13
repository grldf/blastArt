<script>
  export let imgProduit;
  export let nomProduit;
  export let prixProduit;
  export let descriptionProduit;
  export let itemGategorie;
  export let lienRide4Life;
</script>

<article>
  <header>
    <h2>{nomProduit}</h2>
    <p>
      {descriptionProduit}<br />
      <span>Prix : {prixProduit} €</span>
    </p>
  </header>

  <img src={imgProduit} alt={nomProduit} />
  <div class="btns">
    <button
      data-item-price={prixProduit}
      data-item-categories={itemGategorie}
      data-item-image={imgProduit}
      data-item-name={nomProduit}
    >
      <a href={lienRide4Life} alt={nomProduit} target="_blank">
        <img src="/logo_R4L.webp" alt="logo ride 4 life" />
      </a>
    </button>
  </div>
</article>

<style>
  h2{
    font-weight:lighter;
    color: #3b3b38;
  }
  article header {
    border-bottom: 1px solid #ef11a1;
  }
  article {
    display: flex;
    flex-direction: column;
    border: 1px solid #ef11a1;
    text-align: center;
    justify-content: contain;
  }
  article img {
    margin-top: 20px;
    max-width: 95%;
    max-height: 300px;
    align-self: center;
  }
  .btns {
    align-self: center;
    margin-top: auto;
    display: flex;
    justify-content: space-around;
  }

  button {
    height:80px;
    width:80px;
    background-color: #fff;
    border: 1px solid #000;
  }

  button:hover {
    color: #ef11a1;
    border: 1px solid #ef11a1;
  }
  span {
    font-weight: lighter;
  }
  a img {
      width:50px;
      height:50px;
      margin:auto;
      }
</style>
