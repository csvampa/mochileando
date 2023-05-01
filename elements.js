document.getElementById("divfooter").innerHTML = `
<style>
.Footer {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "left_f center_f rigth_f"
    "left_f center_f rigth_f"
    "left_f center_f rigth_f";
  grid-area: footer;
  background-color: var(--var-color-primario);
  color: white;
  padding: 3rem;
  margin-top: 1%;
}

.left_f { grid-area: left_f;
  border-right: solid 1px #bbb;
  padding: 0.5em 0.1em 0.5em 1em;
  box-sizing: border-box;
}

.center_f { grid-area: center_f;
  border-right: solid 1px #bbb;
  padding: 0.5em 0.1em 0.5em 1em;
  box-sizing: border-box;
}

.rigth_f { grid-area: rigth_f;
  padding: 0.5em 0.1em 0.5em 1em;
  
}

.footer-col a {
  display: block;
  margin: 0.3em 0;
}
.footer-logo-container{
display: flex;
align-items: center;
}
.text-mochileando{
  font-family:'Dancing Script', strong;
}
.icons-styles{
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  margin: 5px;
}
.ta-l {
  text-align: left;
}
.our-site{
  text-decoration: none;
  color: white;
}

@media screen and (max-width:480px){
  
  .Footer .itemFoot{  display: grid;
    grid-template-columns:  1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "center_f "
      "center_f"
      "center_f";
    grid-area: Footer;
    background-color: var(--var-color-primario);
  }
  
  .left_f { 
      grid-area: left_f;
      display: none;  
  }
  
  .center_f {grid-area: center_f;
      border-right:solid 1px var(--var-color-primario);
      align-item: center;
  }
  
  .rigth_f { grid-area: rigth_f;
  display: none;
  }

  
</style>
<div class="left_f footer-col ta-l ">
  <div class="footer-logo-container">
    <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
    <lord-icon src="https://cdn.lordicon.com/vkweisbr.json" trigger="loop-on-hover" delay="2000"
      colors="outline:#121331,primary:#646e78,secondary:#2ca58d,tertiary:#1d4e89" style="width:50px;height:50px">
    </lord-icon>
    <h3 class="text-mochileando">Mochileando</h3>
  </div>
  <p class="text-presentation">Somos la empresa de viajes líder en Latinoamérica que desde hace más de 4 años apuesta por el desarrollo tecnológico para revolucionar el mundo de las experiencias. </p>
  <p>© 1999-2023 Mochileando. All right reserved.</p>
</div>
<div class="center_f footer-col ta-l">
  <h3>Siguenos en nuestras redes</h3>
  <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab icons-styles fa-twitter"> Twitter</i></a>
  <a href="https://www.facebook.com/" target="_blank"><i class="fab icons-styles fa-facebook"> Facebook</i></a>
  <a href="https://www.instagram.com/" target="_blank"><i class="fab icons-styles fa-instagram"> Instagram</i></a>
</div>
<div class="rigth_f footer-col ta-l">
  <h3>Mapa del sitio</h3>
  <a class="our-site" href="/index.html">Home</a>
  <a class="our-site" href="/pages/suscribete.html">Suscribete</a>
  <a class="our-site" href="/pages/contacto.html">Contáctenos</a>
  <a class="our-site" href="/pages/acerca_de_nosotros.html">Acerca de nosotros</a>
</div>
`

document.getElementById('divheader').innerHTML = `
<style>
.navbar {
  grid-area: navbar;
  width: 100%;
  height: 50px;
}

.topnav .icon{
  /* background-color:var(--var-color-primario); */
  overflow: hidden;
  display: none;
  }

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 17px 16px;
  text-decoration: none;
  font-size: 17px;
  }
.topnav a:hover {
  background-color: var(--var-color-secundario);
  color: black;
  border-radius: 10px;
  }
.topnav a.active {
  color: white;
  padding:0;
  }
.topnav .icon {
  display: none;
  }

</style>
<div class="navbar">
  <div class="topnav navbar-collapse navbar-toggler" id="myTopnav">

    <a class="active">
      <lord-icon src="https://cdn.lordicon.com/vkweisbr.json" trigger="loop-on-hover" delay="2000"
        colors="outline:#121331,primary:#646e78,secondary:#2ca58d,tertiary:#1d4e89"
        style="width:50px;height:50px">
     </lord-icon>
   </a>
    <a href="/pages/suscribete.html">Suscribete</a>
    <a href="/pages/contacto.html">Contáctenos</a>
    <a href="/pages/acerca_de_nosotros.html">Acerca de nosotros</a>
    <a href="javascript:void(0);" class="icon" onclick="burguerMenu()">
    <i class="fa fa-bars"></i> 
    </a>
  </div>
  
  
  
`
