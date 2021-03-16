<script context="module">
    //image newsletter
    import ApolloClient, { gql } from "apollo-boost";

    const infoQuery = gql`
      query infoBlast {
        infoBlast(id:"1"){
            telephone
            emailcontact
        }
      }
    `;
    export async function preload() {
      const client = new ApolloClient({
        uri: "https://www.grldfaure.xyz/graphql",
        fetch: this.fetch,
      });
      const result = await client.query({
        query: infoQuery,
      });
      return { info: result.data.infoBlast};
    }    
  </script>
  
  <script>
    export let info;
  </script>
  
  <div class="container">
    <h1>Contactez-Nous!</h1>
    <img src="logo-512.png" alt="une oeuvre d'un membre de Blast" />
    <div class="info">
        <p>Thibault</p>
        <p>
            <a href="tel:+33{info.telephone}">{info.telephone}</a>
        </p>
        <p>Ou par Email</p>
        <p>
            <a href="mailto:{info.telephone}?subject=Deamnde infos">{info.emailcontact}</a>
        </p>
      </div>
  </div>
  
  <style>
    .container {
      min-height: 50vh;
      width: 50vw;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        " . titre"
        "image info";
      background-color: #000;
      margin: auto;
      margin-top: 10%;
      border: solid 2px #EF11A1;
      border-radius: 5px;
      box-shadow: 0px 6px 15px black;
    }
    h1 {
    font-family: interstate thin;
      grid-area: titre;
      text-align: center;
      color: #fff;
      padding-top: 20px;
    }
    img {
      grid-area: image;
      max-width: 90%;
      padding:0 0 10% 10%;
      filter: invert(1);
      object-fit: cover;
    }
    .info{
        text-align: center;
        padding-top: 10%;
        grid-area:info;
        color: #fff;
        font-size: 1.6rem;
    }
    a{
        text-decoration: underline;
        color: #fff
    }
    a:hover{
        text-decoration: underline #EF11A1;
    }
    @media(max-width:660px){
      .container{
      position: relative;
		  margin: 0 auto;
      top:60px;
      min-height: 0vh;
      width: 90vw;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        "titre"
        "info";
    }
    h1 {
      grid-area: titre;
      padding-top: 5px;
    }
	  
    img{
      display:none;
    }
  }
  </style>
  