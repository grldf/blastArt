<svelte:head>
  
<title>My E-Book Shop</title>
</svelte:head>


<h1>My E-Book Shop</h1>
<h2>Learn Tech 1</h2>
<img  src="https://placeimg.com/200/300/tech" alt="test" />
<p>$19.99</p>
<button on:click={console.log("coucou")}
  class="snipcart-add-item"
  data-item-id="learn-tech"
  data-item-price="19.99"
  data-item-url="/learn-tech"
  data-item-image="https://placeimg.com/200/300/tech"
  data-item-name="Learn Tech 1"
>
  Add to cart
</button>

<hr />


