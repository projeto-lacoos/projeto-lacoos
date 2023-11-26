import { Link } from "react-router-dom";

import "./homeModule.css";

import LogoReduzida from "../../../img/home/logo-reduzida.svg";
import ImagemTexto1 from "../../../img/home/imagem-texto-1.jpg";
import ImagemTexto2 from "../../../img/home/imagem-texto-2.jpg";
import ImagemTexto3 from "../../../img/home/imagem-texto-3.jpg";
import DecoracaoCima from '../../../img/home/decoracao-cima.svg'
import DecoracaoBaixo from '../../../img/home/decoracao-baixo.svg'

import Navbar from "../../navbar/Navbar";
import PlanoCasamento from "../../planoCasamento/PlanoCasamento";
import Footer from "../../footer/Footer";
import { useState } from "react";
import ModoDaltonismo from "../../modoDaltonismo/ModoDaltonismo";

export default function Home() {
  const [modoDaltonismo, setModoDaltonismo] = useState(false)

  const HandleModoDaltonismo = () => {
    if (modoDaltonismo === false){
      setModoDaltonismo(true)
    } else {
      setModoDaltonismo(false)
    }
  }

  return (
    <>
      {modoDaltonismo === true ? (<ModoDaltonismo HandleModoDaltonismo={HandleModoDaltonismo} />) : ("")}
      <Navbar HandleModoDaltonismo={HandleModoDaltonismo} />
      <section className="home">
        <Link to={"/"}>
          <img className="logo-laçoos" src={LogoReduzida} alt="" />
        </Link>
        <div className="container-home">
          <div className="textos-central">
            <h1 className="titulo-principal">
              O melhor
              <br />
              site para
              <br />
              planejar
              <span className="css-titulo"> seu</span>
              <br />
              <span className="css-titulo">casamento</span>
            </h1>
            <p>
              de maneira acessível e com o<br />
              planejamento que você merece!
            </p>
          </div>
          <div className="botao-home">Começar agora!</div>
        </div>
      </section>
      <section className="caminho-planejamento">
        <img className="decoracao-cima" src={DecoracaoCima} alt="" />
        <div className="caixa-textos">
          <PlanoCasamento numero={"1."} titulo={"Seu plano ideal"} imagemTexto={ImagemTexto1} texto={"Oferecemos um plano personalizado para tornar o seu casamento ideal uma realidade. Nossa abordagem é feita sob medida, levando em consideração suas preferências individuais."} />

          <div className="texto">
            <img src={ImagemTexto2} alt="" />
            <div className="conteudo-home">
              <h2>2.<br />Alinhamento de ideias</h2>
              <p>Na etapa de alinhamento, estabelecemos contato para moldar,
                criar e alinhar suas ideias. Juntos, trabalhamos para encontrar
                o local perfeito que corresponda aos seus desejos e faça o seu
                casamento ser verdadeiramente especial.</p>
            </div>
          </div>

          <PlanoCasamento numero={"3."} titulo={"O dia do SIM!"} texto={"Chegamos à etapa do casamento, tudo está finalizado. Agora é só desfrutar ao máximo e confiar em nossa expertise para garantir que tudo ocorra de forma perfeita e conforme planejado."} imagemTexto={ImagemTexto3}/>
        </div>
        <img className="decoracao-baixo" src={DecoracaoBaixo} alt="" />
      </section>
      <Footer />
    </>
  );
}
