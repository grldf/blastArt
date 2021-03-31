<script>
  import Modal from "./Modal.svelte"
  export let imgProduit;
  export let nomProduit;
  export let prixProduit;
  export let idProduit;
  export let imgModalProduit;
  export let descriptionProduit;
  export let itemGategorie;
  export let custom1;
  export let options1;
  export let custom2;
  export let options2;
  export let custom3;
  export let options3;

  let selected =0;
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
    data-item-custom1-name={custom1}
    data-item-custom1-options={options1}
    data-item-custom1-required="true"
    data-item-custom2-name={custom2}
    data-item-custom2-options={options2}
    data-item-custom3-name={custom3}
    data-item-custom3-options={options3}
    data-item-min-price="15"
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
    margin-top:auto;
    display:flex;
    justify-content: space-around;
  }

  button{
    margin:5px;
    border: 1px solid #000;
  }
  button:hover{
    color:#ef11a1;
    border: 1px solid #ef11a1;
  }
 span{
   font-weight:bold;
 }
</style>
