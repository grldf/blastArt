<script>
      import SvelteMarkdown from 'svelte-markdown';
    
      export let source;
</script>

<div class="text">
    <SvelteMarkdown {source} />
</div>

<style>
    .text {
    grid-area: texte;
    padding-right: 20px;
    max-height:75vh;
    overflow: scroll;
    scrollbar-width: thin;
  }
</style>