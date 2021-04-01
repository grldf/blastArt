<script context="module">
  import ApolloClient, { gql } from "apollo-boost";
  import snarkdown from "snarkdown";
  import Lightbox from "../../components/Lightbox.svelte";
  import SvelteSeo from "svelte-seo";
 
  const projetQuery = gql`
    query Projets($Slug: String!) {
      projets: projets(where: { Slug: $Slug }) {
        id
        titre
        description
        galery {
          id
          url
        }
        cover {
          url
        }
        lien {
          id
          projets {
            Slug
            titre
          }
        }
      }
    }
  `;
  export async function preload(page) {
    const client = new ApolloClient({
      uri: "https://www.grldfaure.xyz/graphql",
      fetch: this.fetch,
    });
    const results = await client.query({
      query: projetQuery,
      variables: { Slug: page.params.slug },
    });
    return { projets: results.data.projets };
  }
  const urlpApi = "https://www.grldfaure.xyz";
  const urlSlug = "projet/";
</script>

<script>
  export let projets;
  let imageShowIndex = 1;
  const firstImage = () => {
    imageShowIndex = 1;
  };
  const prevSlide = () => {
    if (imageShowIndex === 1 || imageShowIndex > projets[0].galery.length) {
      imageShowIndex = projets[0].galery.length;
    } else {
      imageShowIndex -= 1;
    }
  };

  const nextSlide = () => {
    if (imageShowIndex === projets[0].galery.length) {
      imageShowIndex = 1;
    } else {
      imageShowIndex += 1;
    }
  };
const posScrollFullSize=()=>{
  if (window.scrollY) {
  window.scroll(0, 0);
}
}
  let fullSize;
</script>



<div class="projet {fullSize}">
  {#each projets as info}
    <div class="post-info">
      <nav>
        {#each info.lien as projet}
          {#each projet.projets as slug}
            <a
              sapper:prefetch
              class="link{projet.id}"
              href={urlSlug + slug.Slug}
              on:click={firstImage}>{slug.titre}</a
            >
          {/each}
        {/each}
        <h5 class="linkText">&#10094; Projet &#10095;</h5>
      </nav>
    </div>

    <SvelteSeo
    description={info.description}
    title={info.titre}
    />
    
    <h2>{info.titre}</h2>
    <div class="text">
      {@html snarkdown(info.description)}
    </div>
    <svg
      class="btn-full-size"
      on:click={() => (fullSize = "full-size")
    }
    on:click={()=>(posScrollFullSize())}
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="41"
      viewBox="0 0 41 41"
    >
      <g id="full-screen-button" transform="translate(0.806 5.308)">
        <circle
          id="Ellipse_12"
          data-name="Ellipse 12"
          cx="20.5"
          cy="20.5"
          r="20.5"
          transform="translate(-0.806 -5.308)"
          fill="rgba(0,0,0,0.1)"
        />
        <g
          id="Groupe_1"
          data-name="Groupe 1"
          transform="translate(6.662 2.192)"
        >
          <path
            id="Tracé_80"
            data-name="Tracé 80"
            d="M12.817,9.357c-1.213-1.213-3.072-3.074-4.2-4.2l-.8-.8s1.3-1.3,1.834-1.835-.423-.509-.423-.509L2.04,1.339s-.582-.047-.582.512c0,.773.909,7.221.909,7.221s0,.982.648.33,1.7-1.7,1.7-1.7l.717.719,4.25,4.249A4.943,4.943,0,0,1,12.817,9.357Z"
            transform="translate(-1.392 -1.308)"
            fill="#e42ef5"
          />
          <path
            id="Tracé_81"
            data-name="Tracé 81"
            d="M324.952,323.169s0-.981-.649-.329-1.7,1.7-1.7,1.7-.284-.283-.717-.718c-1.153-1.153-3.242-3.243-4.437-4.436a4.948,4.948,0,0,1-3.408,3.045l4.651,4.654.8.8s-1.3,1.3-1.835,1.837.425.509.425.509l7.193.681a.515.515,0,0,0,.579-.515C325.858,329.62,324.952,323.169,324.952,323.169Z"
            transform="translate(-299.794 -304.922)"
            fill="#e42ef5"
          />
          <path
            id="Tracé_82"
            data-name="Tracé 82"
            d="M8.361,315.848c-1.179,1.18-3.3,3.3-4.535,4.537-.483.483-.8.8-.8.8l-1.837-1.837c-.536-.537-.509.423-.509.423L0,326.967a.514.514,0,0,0,.514.581c.773,0,7.222-.907,7.222-.907s.98,0,.327-.653S6.373,324.3,6.373,324.3l.72-.721c1.2-1.2,3.4-3.4,4.565-4.566A4.954,4.954,0,0,1,8.361,315.848Z"
            transform="translate(-0.003 -301.548)"
            fill="#e42ef5"
          />
          <path
            id="Tracé_83"
            data-name="Tracé 83"
            d="M328.183,12.17,332.5,7.854c.484-.483.8-.8.8-.8s1.3,1.3,1.837,1.835.507-.423.507-.423l.678-7.2a.512.512,0,0,0-.515-.58c-.772,0-7.22.907-7.22.907s-.981,0-.33.65,1.694,1.7,1.694,1.7-.281.284-.717.718c-1.057,1.057-2.9,2.894-4.118,4.116A4.946,4.946,0,0,1,328.183,12.17Z"
            transform="translate(-310.364 -0.692)"
            fill="#e42ef5"
          />
        </g>
      </g>
    </svg>
    <div class="galery">
      {#each info.galery as image, i}
        <Lightbox
          imageUrl={urlpApi + image.url}
          imageShowing={i + 1 === imageShowIndex}
          alternText={i}
          imgFullSize={"img-" + fullSize}
          videoPoster={urlpApi + info.cover.url}
        />
      {/each}

      <svg
        class="btn-small-size"
        on:click={() => (fullSize = "")}
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        viewBox="0 0 41 41"
      >
        <g id="exit-fullscreen" transform="translate(1.729 2.178)">
          <circle
            id="Ellipse_13"
            data-name="Ellipse 13"
            cx="20.5"
            cy="20.5"
            r="20.5"
            transform="translate(-1.729 -2.178)"
            fill="rgba(0,0,0,0.1)"
          />
          <path
            id="Tracé_87"
            data-name="Tracé 87"
            d="M29.024,13.474l-2.232-2.439,6.781-6.583L29.024.031l-6.2,6.431L20,4.452v9.022Z"
            transform="translate(1.696 3.031)"
            fill="#ef11a1"
          />
          <path
            id="Tracé_88"
            data-name="Tracé 88"
            d="M9.024,13.443,6.792,11l6.781-6.583L9.024,0l-6.2,6.431L0,4.421v9.022Z"
            transform="translate(35.139 20.139) rotate(90)"
            fill="#ef11a1"
          />
          <path
            id="Tracé_89"
            data-name="Tracé 89"
            d="M9.024,13.443,6.792,11l6.781-6.583L9.024,0l-6.2,6.431L0,4.421v9.022Z"
            transform="translate(16.422 33.712) rotate(180)"
            fill="#ef11a1"
          />
          <path
            id="Tracé_90"
            data-name="Tracé 90"
            d="M9.024,13.443,6.792,11l6.781-6.583L9.024,0l-6.2,6.431L0,4.421v9.022Z"
            transform="translate(2.979 16.506) rotate(-90)"
            fill="#ef11a1"
          />
        </g>
      </svg>
      <button class="prev" on:click={prevSlide}>&#10094;</button>
      <button class="next" on:click={nextSlide}>&#10095;</button>
    </div>
  {/each}
</div>

<style>
  .full-size {
    position: absolute;
    top: -65px;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    left: -40px;
  }
  .full-size nav,
  .full-size .post-info {
    display: none;
  }
  .full-size .galery {
    max-height: 100vh;
    align-items: center;
    background-color: #000;
    width: 100vw;
    margin: 0 0 0 20px;
    display: block;
  }
  .full-size .prev {
    position: absolute;
    left: 58px;
  }
  .full-size .next {
    position: absolute;
    right: 20px;
  }
  .full-size .btn-small-size {
    display: block;
  }
  .full-size .btn-full-size {
    display: none;
  }

  .btn-small-size {
    display: none;
  }
  
  .btn-small-size {
    position: absolute;
    right: 20px;
    margin-top: 0px;
    border: 1px solid #ef11a1;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .btn-small-size {
    right: 20px;
    top: 20px;
    margin-top: 0px;
  }
  .btn-small-size:hover {
    scale: 0.8;
    width: 35px;
    height: 35px;
  }
  .btn-full-size:hover {
    scale: 1.2;
    width: 60px;
    height: 60px;
  }
  .projet {
    margin-top: 65px;
    padding: 0 20px 30px 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "nav"
      "btnFullsize"
      "colRight"
      "titre"
      "texte";
  }
  
  .btn-full-size{
    grid-area:btnFullsize;
    display:grid;
    margin-left:auto;
    z-index:1;
  }
  
  nav {
    grid-area:nav;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "prev linkText next";
    border: 2px solid #ef11a1;
    margin-right: auto;
    margin-left:auto;
    margin-bottom: 20px;
    align-items: center;
    text-align: center;
    height:40px;
    width:100%;
  }
  .linkText {
    grid-area: linkText;
    text-align: center;
    font-family: "interstate";
    font-size: 18px;
  }

  .link1 {
    font-size: 14px;
    grid-area: prev;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: black;
    text-decoration: underline;
    text-align: center;
  }
  .link2 {
    font-size: 14px;
    grid-area: next;
    display: flex;
    align-items: center;
    color: black;
    justify-content: flex-start;
    text-decoration: underline;
    text-align: center;
  }
  .projet a:hover {
    color: #ef11a1;
  }
  a{
    color:#000;
  }
  h2 {
    grid-area:titre;
    text-align: center;
    padding: 0;
    margin: 15px 0;
  }
  .text {
    grid-area: texte;
   
    padding-top: 10px;
    margin-right:auto;
    margin-left: auto;
  }
  .full-size .text{
    display:none;
  }
  .galery {
    grid-area: colRight;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 50fr 1fr;
    grid-template-areas: "btnG  . btnD";
    grid-row-start: 2;
  }
  button {
    color: #ef11a1;
    background-color: #000;
    border: 1px solid grey;
    top: 40vh;
  }
  button:hover {
    border: 1px solid #ef11a1;
  }
  .prev {
    grid-area: btnG;
  }
  .next {
    grid-area: btnD;
  }
  h5{
    padding:0;
    margin:0;
  }
  /* @media (max-width: 1080px) {
    .projet {
      margin-top: 0;
      padding: 60px 20px;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        "titre"
        "btnfull"
        "slider"
        "texte";
      max-height: 100%;
    }
    .full-size .galery {
      background-color: #000;
      max-height: 101vh;
    }
    .galery {
      grid-area: slider;
      grid-row-start: 2;
      align-items: center;
    }
    .post-info {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
        "title"
        "description"
        "navprojet";
    }
    h2 {
      grid-area: title;
    }
    .text {
      grid-area: description;
      margin-bottom: 10px;
    }
    nav {
      grid-area: navprojet;
      margin: 10px 0;
    }
    .btn-small-size {
      position: absolute;
      right: 20px;
      top: 80px;
    }
    .btn-full-size {
      position: relative;
      left: 90%;
      grid-area: btnfull;
      margin-top: 20px;
    }
  } */
</style>
