<script>
  import BurgerMenu from "./../../node_modules/svelte-burger-menu/src";
  export let segment;
  let navBurger;
</script>

<svelte:window bind:innerWidth={navBurger} />
{#if navBurger > 660}
  <nav>
    <img src="logo-192.png" alt="Blast Art Logo" />
    <a 
		aria-current={segment === undefined ? "page" : undefined} 
		href=".">Projets</a
	>
    <a
      rel="prefetch"
      aria-current={segment === "Collectif" ? "page" : undefined}
      href="Collectif">Collectif</a
    >
    <a
      rel="prefetch"
      aria-current={segment === "Presse" ? "page" : undefined}
      href="Presse">Presse</a
    >
    <a
      rel="prefetch"
      aria-current={segment === "News" ? "page" : undefined}
      href="News">News</a
    >
    <a
      rel="prefetch"
      aria-current={segment === "Shop" ? "page" : undefined}
      href="Shop">Shop</a
    >
    <a
      rel="prefetch"
      aria-current={segment === "cgvcgu" ? "page" : undefined}
      href="cgvcgu">CGV/CGU</a
    >
    <a
      rel="prefetch"
      aria-current={segment === "Contact" ? "page" : undefined}
      href="Contact">Contact</a
    >
    <a
      rel="prefetch"
      aria-current={segment === "NewsLetter" ? "page" : undefined}
      href="NewsLetter">News Letter</a
    >
  </nav>
{:else}
<div class="burger">
  <h1>BLAST ART LYON</h1>
  <BurgerMenu padding={"25px"}
              backgroundColor={"#000"}
              menuColor={"#ef11a1"}
  >
    
      <a aria-current={segment === undefined ? "page" : undefined} href="."
        >Projets</a
      >
      <a
        rel="prefetch"
        aria-current={segment === "Collectif" ? "page" : undefined}
        href="Collectif">Collectif</a
      >
      <a
        rel="prefetch"
        aria-current={segment === "Presse" ? "page" : undefined}
        href="Presse">Presse</a
      >
      <a
        rel="prefetch"
        aria-current={segment === "News" ? "page" : undefined}
        href="News">News</a
      >
      <a
        rel="prefetch"
        aria-current={segment === "Shop" ? "page" : undefined}
        href="Shop">Shop</a
      >
      <a
        rel="prefetch"
        aria-current={segment === "cgvcgu" ? "page" : undefined}
        href="cgvcgu">CGV/CGU</a
      >
      <a
        rel="prefetch"
        aria-current={segment === "Contact" ? "page" : undefined}
        href="Contact">Contact</a
      >
      <a
        rel="prefetch"
        aria-current={segment === "NewsLetter" ? "page" : undefined}
        href="NewsLetter">News Letter</a
      >
  </BurgerMenu>
</div>
{/if}

<style>
  nav {
    position: fixed;
    display: flex;
    justify-content: space-around;
    top: 0px;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0px 5px 5px #fff;
    width: 100vw;
    height: 55px;
    border-bottom: 1px solid #ef11a1;
    font-weight: 300;
    padding-right: 20px;
  }
  nav img {
    position: relative;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #ef11a1;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    color: #000;
    font-family: interstate;
  }
  a:hover {
    text-decoration: underline #ef11a1;
  }
  .burger{
	  position: relative;
	  z-index: 500;
	  background-color: #000;
	  text-align: center;
  }
  .burger a{
	  color: #fff;
  }
  @media(max-width:660px){
	  nav{
		  display: none;
	  }
    h1{
      position:absolute;
      left:25%;
      color: #000;
      font-size:20px;
    }
    a{
      font-size:22px;
    }
  }
</style>
