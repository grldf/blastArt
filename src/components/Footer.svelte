<script>
    export let segment;
</script>
<footer>
    <a
      rel="prefetch"
      aria-current={segment === "cgvcgu" ? "page" : undefined}
      href="cgvcgu">CGV/CGU</a
    >
    <a
      rel="prefetch"
      aria-current={segment === "contact" ? "page" : undefined}
      href="contact">Contact</a
    >
    <a
      rel="prefetch"
      aria-current={segment === "newsLetter" ? "page" : undefined}
      href="newsLetter">News Letter</a
    >
</footer>

<style>
     footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    width: 100vw;
    border-top: 1px solid #ef11a1;
    font-weight: 300;
  }
  footer a{
      color: #000;
      padding: 10px;
  }
  @media (max-width: 809px) {
      footer{
          display: none;
      }
  }
</style>