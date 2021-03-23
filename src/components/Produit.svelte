<script>
  import Modal from "./Modal.svelte"
  export let imgProduit;
  export let nomProduit;
  export let prixProduit;
  export let idProduit;
  export let imgModalProduit;
  export let descriptionProduit;
  export let itemGategorie;

  let toggle = false;
  function toggleFunc(){
    toggle = !toggle;
  }
</script>

<article>
<header>
  <h2>{nomProduit}</h2>
  <p>{descriptionProduit}<br />
    <span>Prix : {prixProduit} €</span></p>
  </header>

  <img on:click={toggleFunc} src={imgProduit} alt="test" />
  <div class="btns">
  <button
    class="snipcart-add-item"
    data-item-id={idProduit}
    data-item-price={prixProduit}
    data-item-categories={itemGategorie}
    data-item-url="/shop"
    data-item-image={imgProduit}
    data-item-name={nomProduit}
  >
    Ajouter au Panier
  </button>
</div>
    {#if toggle}
        <Modal 
        imgModal={imgModalProduit}
        on:fermeture={toggleFunc}/>
    {/if}
</article>
<style>
  article header{
    border-bottom:1px solid #ef11a1;
  }
  article{
    display:flex;
    flex-direction: column;
    border: 1px solid #ef11a1;
    text-align: center;
    justify-content: contain;
  }
  article img{
    margin-top:20px;
    max-width:95%;
    max-height: 300px;
    align-self: center;
    cursor: zoom-in;
  }
  .btns{
    align-self: center;
    margin-top:10px;
    display:flex;
    justify-content: space-around;

  }
  button{
    margin:5px;
    border: 1px solid #000;
  }
 span{
   font-weight:bold;
 }
</style>
