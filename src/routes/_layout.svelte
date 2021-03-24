<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte"

  export let segment;
</script>

<Nav {segment} />
<main>
  <slot></slot>
</main>
<Footer {segment} />

<style>
  main {
    font-family: interstate;
    min-height:90vh;
  }
</style>
