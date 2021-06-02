<!-- Begin Mailchimp Signup Form -->
<svelte:head>
  <meta name="robots" content="noindex" />
  <title>NewsLetter inscription</title>
  <link
    href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
    rel="stylesheet"
    type="text/css"
  />
</svelte:head>
<div class="container">
  <div id="mc_embed_signup">
    <form
      action="https://blast-art.us1.list-manage.com/subscribe/post?u=2d9d55f1ccc764f7d5a16dc0f&amp;id=9cddddb892"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <h2>Inscription à notre Newsletter</h2>
        <div class="indicates-required">
          <span class="asterisk">*</span> information requise
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">Email <span class="asterisk">*</span> </label>
          <input
            type="email"
            value=""
            name="EMAIL"
            class="required email"
            id="mce-EMAIL"
          />
        </div>
        <div class="mc-field-group">
          <label for="mce-FNAME">Nom </label>
          <input type="text" value="" name="FNAME" class="" id="mce-FNAME" />
        </div>
        <div class="mc-field-group">
          <label for="mce-MMERGE2">Prénom </label>
          <input
            type="text"
            value=""
            name="MMERGE2"
            class=""
            id="mce-MMERGE2"
          />
        </div>
        <div
          id="mergeRow-gdpr"
          class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
        >
          <div class="content__gdpr">
            <h4>Autorisations de marketing</h4>
            <p>
              Veuillez choisir comment vous souhaitez avoir des nouvelles de
              blast:
            </p>
            <fieldset
              class="mc_fieldset gdprRequired mc-field-group"
              name="interestgroup_field"
            >
              <label class="checkbox subfield" for="gdpr_42778"
                ><input
                  type="checkbox"
                  id="gdpr_42778"
                  name="gdpr[42778]"
                  value="Y"
                  class="av-checkbox "
                /><span>E-mail</span>
              </label>
            </fieldset>
            <div class="clear">
              <input
                type="submit"
                value="Inscrivez-vous"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
            <p>
              Vous pouvez vous désabonner à tout moment en cliquant sur le lien
              dans le bas de page de nos e-mails. Pour obtenir plus
              d'informations sur nos pratiques de confidentialité, rendez-vous
              sur la page CGV/CGU de notre site Web.
            </p>
          </div>
          <div class="content__gdprLegal">
            <p>
              We use Mailchimp as our marketing platform. By clicking below to
              subscribe, you acknowledge that your information will be
              transferred to Mailchimp for processing. <a
                href="https://mailchimp.com/legal/"
                target="_blank"
                >Learn more about Mailchimp's privacy practices here.</a
              >
            </p>
          </div>
        </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none" />
          <div
            class="response"
            id="mce-success-response"
            style="display:none"
          />
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input
            type="text"
            name="b_2d9d55f1ccc764f7d5a16dc0f_9cddddb892"
            tabindex="-1"
            value=""
          />
        </div>
        
      </div>
    </form>
  </div>
</div>

<style type="text/css">
  .container {
    color: #fff;
    min-height: 50vh;
    width: 60vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: " . titre .";
    background-color: #000;
    margin: auto;
    margin-top: 5%;
    border: solid 2px #ef11a1;
    border-radius: 5px;
    box-shadow: 0px 6px 15px black;
	background-repeat: no-repeat;
    background-size: cover;
  }
  

  #mc-embedded-subscribe-form input[type="checkbox"] {
    display: inline;
    width: auto;
    margin-right: 10px;
  }
  #mergeRow-gdpr {
    margin-top: 20px;
  }
  #mergeRow-gdpr fieldset label {
    font-weight: normal;
  }
  #mc-embedded-subscribe-form .mc_fieldset {
    border: none;
    min-height: 0px;
    padding-bottom: 0px;
  }
  .clear{
    padding:10px;
  }
  #mc-embedded-subscribe{
    background-color:#ef11a1;
    padding-bottom: 40px;
    width:200px;
  }
  #mc-embedded-subscribe:hover{
    background-color:#7e1258;
  }
  @media (max-width: 809px){
    .container{
      width:90vw;
      margin-top:60px;
    }
  }
</style>
