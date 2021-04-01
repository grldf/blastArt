<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte"

  export let segment;
</script>
<svelte:head>
  <meta
    description="Toujours plus monumentale, et toujours plus accessible, c'est avec cette devise que Blast crée sans cesse de nouveaux projets artistiques.
	A l' origine du projet comme l' Exposition - oeuvre in-situ Le Terminal  à Lyon en Juin 2018. Le collectif BLAST propose des œuvres artistiques atypiques grâce à la complémentarité des 4 artistes.
	En mutualisant les talents d'un peintre graffeur muraliste,d'un sculpteur, d'un photographe et d'un vidéaste. L'imagination devient facilement réalité."
  />
  <title
    >Blastart collectif d'artistes aux multiples talenst. Kalouf grapheur
    muraliste, Romain Lardanchet sculpteur monumental, FabeCollage photographe
    créatif et Jean-Pierre(staffvidéo) vidéaste créatif.</title
  >
</svelte:head>
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
