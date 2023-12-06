import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import "./homeModule.css";

import LogoReduzida from "../../../img/home/logo-reduzida.svg";
import LogoReduzidaDPTT from "../../../img/home/oo.svg";
import LogoReduzidaM from "../../../img/home/oo-1.svg";
import LogoReduzidaA from "../../../img/home/oo-2.svg";
import LogoReduzidaPD from "../../../img/home/oo-3.svg";

import ImagemTexto1 from "../../../img/home/imagem-texto-1.jpg";
import ImagemTexto2 from "../../../img/home/imagem-texto-2.jpg";
import ImagemTexto3 from "../../../img/home/imagem-texto-3.jpg";
import DecoracaoCima from '../../../img/home/decoracao-cima.svg'
import DecoracaoBaixo from '../../../img/home/decoracao-baixo.svg'

import Navbar from "../../navbar/Navbar";
import PlanoCasamento from "../../planoCasamento/PlanoCasamento";
import Footer from "../../footer/Footer";
import CarrosselImagens from "../../carrosselImagens/CarrosselImagens";

export default function Home() {
  const {theme} = useContext(ThemeContext)

  const getThemeClass = (theme) => {
    switch (theme) {
      case "DPTT":
        return "DPTT";
      case "M":
        return "M";
      case "PD":
        return "PD";
      case "A":
        return "A";
      default:
        return "";
    }
  };

  const getThemeLogo = (theme) => {
    switch (theme) {
      case "DPTT":
        return LogoReduzidaDPTT;
      case "M":
        return LogoReduzidaM;
      case "PD":
        return LogoReduzidaPD;
      case "A":
        return LogoReduzidaA;
      default:
        return "";
    }
  };

  console.log("getThemeClass", getThemeClass(theme));
  
  return (
    <>
      <Navbar />
      <section className="home">
        <Link to={"/"}>
          <img className="logo-laçoos" src={theme === "default" ? LogoReduzida : getThemeLogo(theme)} alt="Logo da Laçoos, onde da a ilusão de duas alianças se entrelaçando" />
        </Link>
        <div className="container-home">
          <div className="textos-central">
            <h1 className="titulo-principal">
              O melhor site para planejar<span className={`css-titulo  ${getThemeClass(theme)}`}> seu casamento</span>
            </h1>
            <p className={`p-titulo`}>
              de maneira acessível e com o planejamento que você merece!
            </p>
          </div>
          <div className={`botao-home ${getThemeClass(theme)}`}>Começar agora!</div>
        </div>
      </section>
      <section className="caminho-planejamento">
        <img className="decoracao-cima" src={DecoracaoCima} alt="Uma ramo de flores no modo desenho, preto e branco" />
        <div className="caixa-textos">
          <PlanoCasamento numero={"1."} titulo={"Seu plano ideal"} imagemTexto={ImagemTexto1} texto={"Oferecemos um plano personalizado para tornar o seu casamento ideal uma realidade. Nossa abordagem é feita sob medida, levando em consideração suas preferências individuais."} />

          <PlanoCasamento classNameImage={"sumir"} className={"reverso"} numero={"2."} titulo={"Alinhamento de ideias"} imagemTexto={ImagemTexto2} texto={"Na etapa de alinhamento, estabelecemos contato para moldar, criar e alinhar suas ideias. Juntos, trabalhamos para encontrar o local perfeito que corresponda aos seus desejos e faça o seu casamento ser verdadeiramente especial."} />

          <PlanoCasamento numero={"3."} titulo={"O dia do SIM!"} texto={"Chegamos à etapa do casamento, tudo está finalizado. Agora é só desfrutar ao máximo e confiar em nossa expertise para garantir que tudo ocorra de forma perfeita e conforme planejado."} imagemTexto={ImagemTexto3} />
          
          <img className="decoracao-baixo" src={DecoracaoBaixo} alt="Uma ramo de flores no modo desenho, preto e branco" />
        </div>
      </section>
      <CarrosselImagens />
      <Footer />
    </>
  );
}
