<script>
	export let status;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	.container{
		width:100%;
		height:100vh;
	}
	h1{
		position:absolute;
		color:#fff;
		font-size:60px;
		left:40px;
		top:100px;
	}
	img{
	width: 100%;
    max-height: 100vh;
	margin-top:60px;
    align-self: stretch;
    justify-self: stretch;
    object-fit: cover;
	z-index: 1;
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>
<div class="container">
	<h1>404</h1>
	<img src="/pirate.jpg" alt="Cette page n'existe pas...désolé" />
</div>