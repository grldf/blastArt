<script>
  

  const regex = "{2,}";
  // send infos
</script>

<div class="container">
  <h1>Inscrivez vous à notre News Letter</h1>
  <img src="logo-512.png" alt="une oeuvre d'un membre de Blast" />

  <form id="formcontact" accept-charset="UTF-8">
    <label for="lastname">Nom</label>
    <input name="nom" required="true" placeholder="Votre nom" id="lastname"/>

    <label for="name">Prénom</label>
    <input name="prenom" required="true" placeholder="Votre prénom" id="name" />

    <label for="email">E-mail</label>
    <input
      required="true"
      id="email"
      class="input"
      type="text"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{regex}$"
      placeholder="Votre Email"
    />

    <button type="submit">Envoyer</button>
  </form>
</div>

<style>
  .container {
    min-height: 50vh;
    width: 50vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "titre titre"
      "image form";
    background-color: #000;
    margin: auto;
    margin-top: 10%;
    border: solid 2px #ef11a1;
    border-radius: 5px;
    box-shadow: 0px 6px 15px black;
  }
  h1 {
    font-family: interstate thin;
    grid-area: titre;
    text-align: center;
    color: #fff;
    padding-top: 15px;
  }
  img {
    grid-area: image;
    max-width: 90%;
    margin: auto;
    margin-bottom: 20px;
    filter: invert(1);
  }

  form {
    color: #fff;
    margin: auto;
    grid-area: form;
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  label {
    margin: 5px;
  }
  input {
    height: 20px;
    margin: 5px;
  }
  button {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 660px) {
    .container {
      position: relative;
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-template-areas:
        "titre"
        "form";
      top: 60px;
      min-height: 0vh;
      width: 90vw;
    }
    img {
      display: none;
    }
  }
</style>
