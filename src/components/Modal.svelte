<script>
  import { createEventDispatcher } from "svelte";

  export let imgModal;

  const dispatch = createEventDispatcher();
  
  function closeModal() {
    dispatch("fermeture");
  }
</script>

<div on:click={closeModal} class="overlay">
  <div class="card">
    <img on:click={closeModal} src={imgModal} alt="test" />
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    align-content: center;
  }
  .card {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .card img {
    border: 1px solid #ef11a1;
    width: 100%;
    max-height: 85vh;
    object-fit: contain;
    cursor: zoom-out;
    background-color: #000;
  }

  @media (max-width: 600px) {
    .card img {
      width: 100%;
      max-height: 90vh;
    }
    .card {
      top: 20%;
      left: 10%;
      transform: translate(-5%, 0%);
    }
    .card img {
      width: 100%;
      max-height: 100vh;
      object-fit: cover;
      cursor: zoom-out;
    }
  }
</style>
