<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import chevronUp from 'svelte-awesome/icons/chevron-up';
  import BackToTop from 'svelte-backtotop/src/index';

  export let segment;
</script>

<Nav {segment} />
<main>
  <slot></slot>
</main>
<br class="last-br" />
  {#if process.browser}
    <BackToTop>
      <button  type="button">
        <Icon data={chevronUp} />
      </button>
    </BackToTop>
  {/if}
<Footer {segment} />

<style>
  main {
    font-family: interstate;
    min-height:90vh;
  }
  .last-br {
    padding-bottom: 10rem;
  }
  button{
    color:#ef11a1;
    border: 1px solid #ef11a1;
  }
</style>
