// eslint-disable-next-line
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import '../css/style_home.css';
import { motion } from 'framer-motion';
import Footer from "../componentes/Footer/Footer";
import NavBar from "../componentes/NavBar/NavBar";

// Imagens utilizadas no carrossel.
import carrossel_1 from '../imagens/carrossel_1.jpg';
import carrossel_2 from '../imagens/carrossel_2.jpg';
import carrossel_3 from '../imagens/carrossel_3.jpg';
import carrossel_4 from '../imagens/carrossel_4.jpg';
import carrossel_5 from '../imagens/carrossel_5.jpg';
import carrossel_6 from '../imagens/carrossel_6.jpg';
import carrossel_7 from '../imagens/carrossel_7.jpg';
import carrossel_8 from '../imagens/carrossel_8.jpg';
import icon_chevron from '../imagens/right_chevron_icon.png';


const imagens = [carrossel_1, carrossel_2, carrossel_3, carrossel_4, carrossel_5, carrossel_6, carrossel_7, carrossel_8];
const icon = [icon_chevron];

function AppHome() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  
  // Hook utilizado para que o carrossel tenha uma largura definida.
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);
  
  // Funções utilizadas para funcionalidade dos botões do carrossel.
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (

    <main className='home'>
      {/* Cabeçalho */}
      <>
        <NavBar />
      </>
       
      {/* Carrossel */}
      <div>
        <motion.div ref={carousel} className='carousel' whileTop={{ cursor: "grabbing" }}>
          <motion.div
            className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -width }}>
            {imagens.map(imagem => (
              <motion.div className='item' key={imagem}>
                <img src={imagem} alt="Imóvel" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className='buttons'>
          <button className='button-home' onClick={handleLeftClick}><img src={icon} alt="Scroll Left" /></button>
          <button className='button-home' onClick={handleRightClick}><img src={icon} alt="Scroll Rigth" /></button>
        </div>
      </div>
      <hr />
  
      {/* Apresentação da empresa */}
      <div className='quem-somos'>
        <h2 className='text-home-h2'>QUEM SOMOS</h2>
        <h4 className='text-home-h4'>HISTÓRIA</h4>
        <p className='text-home-p'>A Dreams Imobiliária é a maior construtora da América Latina e investe permanentemente no aprimoramento e na gestão da qualidade de seus produtos. Ao longo de sua existência, a empresa sempre esteve sintonizada com o mercado e suas melhores práticas, além de priorizar sempre as necessidades de seus clientes. Assim, a Dreams Imobiliária conquistou duas importantes certificações em 2014: a ISO 14.001, que estabelece padrões rigorosos na gestão de meio ambiente e a OHSAS 18.001, que estabelece padrões rígidos na gestão de segurança e saúde das empresas.</p>
        <p className='text-home-p'>Desde 2005 no mercado imobiliário, a Dreams Imobiliária é a maior construtora do país no segmento de imóveis para a classe média e média baixa, além de ser a única que oferece casas e apartamentos em mais de 160 cidades do Brasil.</p>
        <h4 className='text-home-h4'>CIDADES ATENDIDAS</h4>
        <p className='text-home-p'>A Dreams Imobiliária é a única construtora presente em 160 cidades brasileiras. Hoje, é líder no mercado de construção civil no segmento de imóveis residenciais e já possui mais de 4 mil casas e apartamentos lançados em 22 estados brasileiros e no Distrito Federal. Além de construir empreendimentos direcionados à classe média, que possibilita a realização do sonho da casa própria a milhares de brasileiros, a empresa gera seis mil postos de trabalho por ano nos locais em que atua.</p>
        <hr />
      </div>

      {/* Cards com imóveis disponíveis */}
      <div id="App" className="App">

        <h1 className='text-home-h1'>DREAMS IMOBILIÁRIA</h1>
        <h2 className='slogan'>REALIZANDO SONHOS DESDE 2005</h2>

        <div class="row">
          <div class="card green">
            <h1>R$1.000,00/mês</h1>
            <h3>Rua Conde de Bonfim, RJ</h3>
            <h4>4 Quartos | 3 Banheiros | 2 Garagens</h4>
            <h4>Falar com Orlando: (21) 99040-6500</h4>
            <br></br>

            <img class="imagem-card" src="https://imgbr.imovelwebcdn.com/avisos/2/29/72/81/99/28/720x532/3588585487.jpg" alt="money" />
          </div>

          <div class="card green">
            <h1>R$209,00/mês</h1>
            <h3>Rua Oswaldo Lussac, RJ</h3>
            <h4>2 Quartos | 3 Banheiros | 1 Garagem</h4>
            <h4>Falar com Mariana: (21) 97980-1221</h4>
            <br></br>

            <img class="imagem-card" src="https://system.soprojetos.com.br/files/1335/medium/projeto-de-casa-terrea-para-terrenos-de-10-metros-com-3-quartos-e-1-suite-cod-175-fachada-1.jpg?1576186538" alt="money" />
          </div>

          <div class="card green">
            <h1>R$660,00/mês</h1>
            <h3>Almirante Ary Parreiras, RJ</h3>
            <h4>1 Quarto | 1 Banheiro | 1 Garagem</h4>
            <h4>Falar com Lara: (21) 98356-6482</h4>
            <br></br>

            <img class="imagem-card" src="https://system.soprojetos.com.br/files/996/medium/modelo_de_casa__versao_do_cod_99-cod_136-foto-1.jpg?1491503841" alt="money_1" />
          </div>

          <div class="card green">

            <h1>R$1.610,00/mês</h1>
            <h3>Avenida Atlântica, RJ</h3>
            <h4>3 Quartos | 2 Banheiros | 1 Garagem</h4>
            <h4>Falar com Yasmin: (21) 97205-4101</h4>
            
            <br></br>

            <img class="imagem-card" src="https://system.soprojetos.com.br/files/1491/medium/PAD-COD43-FOTO-1-WEB.jpg?1659015535" alt="money" />
            
          </div>

          <div class="card green">
            <h1>R$1.750,00/mês</h1>
            <h3>Rua Porto Amazonas, RJ</h3>
            <h4>3 Salas | 2 Banheiros | 2 Garagens</h4>
            <h4>Falar com Brian: (21) 99255-0986</h4>

           <br></br>

            <img class="imagem-card" src="https://system.soprojetos.com.br/files/615/medium/casa_popular_cod100_2quartos.jpg?1491510183" alt="money" />
          </div>

          <div class="card green">

            <h1>R$1.200,00/mês</h1>
            <h3>Rua Fernando Jr, RJ</h3>
            <h4>2 Salas | 2 Banheiros | 0 Garagem</h4>
            <h4>Falar com Gabrielly: (21) 99483-5925</h4>

            <br></br>
            <img class="imagem-card" src="https://system.soprojetos.com.br/files/597/medium/primeira_obra_da_madrugada.jpg?1491504043" alt="money" />
          
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <>
        <Footer />
      </>
    </main>


  );
}

export default AppHome;
