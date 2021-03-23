<template>
  <footer>
    <div class="muleiro"></div>
    <div class="redRibbon">
      <div class="wrapper">
        <div class="footer-content">
          <div class="footer-top">
            <a href="">HOME</a>
            <a href="">FOTOS</a>
            <a href="">CONTATOS</a>
            <a href="">EVENTOS</a>
            <a href="">VIDEOS</a>
            <a href="">LIVROS</a>
          </div>

          <div class="footer-down">
            <div class="parceiros">
              <div class="footer-title"><span>Parceiros</span></div>
                <a href="http://www.campolina.org.br/portal/"><img src="@/assets//images/graphic/publi/campolino.png" alt=""></a>
                <a href="http://www.abcjpega.com.br/"><img src="@/assets//images/graphic/publi/abcjpega.png" alt="" class="w100"></a>
                <a href="http://www.revistahorse.com.br/RevistaHorse/WebSite/Home/Default.aspx"><img src="@/assets//images/graphic/publi/revistahorse.png" alt="" class="w100"></a>
                <a href="/"><img src="@/assets/images/graphic/publi/abccm.png" alt=""></a>
              </div>

            <div class="criadouros">
              <div class="footer-title"><span>Criadouros</span></div>
              <a href=""><img src="@/assets/images/graphic/publi/sm.png" alt=""></a>
              <a href="http://www.jumentosraf.com.br/"><img src="@/assets/images/graphic/publi/raf.png" alt=""></a>
              <a href="http://leilao.fazendadovau.com.br/"><img src="@/assets/images/graphic/publi/fazendadovau.png" alt=""></a>
              <a href="http://www.fazendapaodeacucar.com.br/"><img src="@/assets/images/graphic/publi/fazendapaodeacucar.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style>
  .w100 {
  width: 100px;
}

a{
  color: #fff;
}

footer {
  width: 100%;
  background-image: url(../../assets/images/graphic/layout/footer_mountain.png);
}

.footer-title {
  margin-bottom: 5px;
}

.footer-title span {

  border-bottom: #fff 1px solid;
}

.footer-top img ,
.footer-down img {
  margin-right: 10px ;
}

footer .muleiro {
  background: url(../../assets/images/graphic/layout/footer_muladeiro.png) no-repeat center;
  width: 100%;
  height: 68vh;
  margin: 0 auto;
  margin-bottom: 2px;
}

.redRibbon {
  height: 230px;
  background: url(../../assets/images/graphic/layout/footer_red_ribbon.jpg) repeat-x;
  padding: 20px 20px;
  color: #fff;
}

.redRibbon .footer-content {
  display: flex;
  height: 100%;
  border-left: 5px solid #fff;
  border-right: 5px solid #fff;
}

footer .redRibbon .footer-content .footer-top {
  width:50%;
  float: left;
  display: grid;
  align-content: space-around;
  justify-items: center;
  grid-template-columns: 2fr 2fr;

}

footer .redRibbon .footer-content .footer-down {
  width: 50%;
  height: 100%;
  float: right;
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: center;
}

</style>
