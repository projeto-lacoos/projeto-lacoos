import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "./homeModule.css";

import LogoReduzida from "../../../img/home/logo-reduzida.svg";
import DPTT from "../../../img/home/oo.svg";
import M from "../../../img/home/oo-2.svg";
import PD from "../../../img/home/oo-1.svg";
import A from "../../../img/home/oo-3.svg";
import ImagemTexto1 from "../../../img/home/imagem-texto-1.jpg";
import ImagemTexto2 from "../../../img/home/imagem-texto-2.jpg";
import ImagemTexto3 from "../../../img/home/imagem-texto-3.jpg";
import ImagemTexto1PB from "../../../img/home/imagem1-preto-branco.svg"
import ImagemTexto2PB from "../../../img/home/imagem2-preto-branco.svg"
import ImagemTexto3PB from "../../../img/home/imagem3-preto-branco.svg"
import DecoracaoCima from "../../../img/home/decoracao-cima.svg";
import DecoracaoBaixo from "../../../img/home/decoracao-baixo.svg";

import Navbar from "../../navbar/Navbar";
import PlanoCasamento from "../../planoCasamento/PlanoCasamento";
import Footer from "../../footer/Footer";
import CarrosselImagens from "../../carrosselImagens/CarrosselImagens";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const { theme } = useContext(ThemeContext);

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
        return "default";
    }
  };

  const getThemeLogo = (theme) => {
    switch (theme) {
      case "DPTT":
        return DPTT;
      case "M":
        return M;
      case "PD":
        return PD;
      case "A":
        return A;
      default:
        return LogoReduzida;
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <section className={`home ${getThemeClass(theme)}`}>
        <Link to={"/"}>
          <img
            className="logo-laçoos"
            src={getThemeLogo(theme)}
            alt="Logo da Laçoos, um sinal de infinito amarelo formado por duas letras o’s."
          />
        </Link>
        <div className="container-home">
          <div className="textos-central">
            <h1 className="titulo-principal">
              O melhor site para planejar
              <span className={`css-titulo ${getThemeClass(theme)}`}> seu casamento</span>
            </h1>
            <p className="p-titulo">
              de maneira acessível e com o planejamento que você merece!
            </p>
          </div>
          <Link to={"/pacote"}>
            <div className={`botao-home ${getThemeClass(theme)}`}>
              Começar agora!
            </div>
          </Link>
        </div>
      </section>
      <section className="caminho-planejamento">
        <img className="decoracao-cima" src={DecoracaoCima} alt="Uma imagem de um ramo de flores, em preto e branco." />
        <div className="caixa-textos">
          <PlanoCasamento
            numero={"1."}
            titulo={"Seu plano ideal"}
            imagemTexto={theme === "A" ? ImagemTexto1PB : ImagemTexto1}
            altImagem={"Entrada de um casamento ao ar livre de dia em um gramado com cadeiras brancas com flores vermelhas e rosas ao lado, amarradas com um barbante marrom."}
            texto={
              "Oferecemos um plano personalizado para tornar o seu casamento ideal uma realidade. Nossa abordagem é feita sob medida, levando em consideração suas preferências individuais."
            }
          />

          <PlanoCasamento
            classNameImage={"sumir"}
            className={"reverso"}
            numero={"2."}
            titulo={"Alinhamento de ideias"}
            imagemTexto={theme === "A" ? ImagemTexto2PB : ImagemTexto2}
            altImagem={"Casal abraçado e sorrindo composto por uma mulher branca de cabelos castanho, segurando um buque de flores para cima, usando um vestido de noiva branco de manga longa e um homem com o cabelo raspado e barba castanha, usando um terno preto. Eles estão ao ar livre de dia."}
            texto={
              "Na etapa de alinhamento, estabelecemos contato para moldar, criar e alinhar suas ideias. Juntos, trabalhamos para encontrar o local perfeito que corresponda aos seus desejos e faça o seu casamento ser verdadeiramente especial."
            }
          />

          <PlanoCasamento
            numero={"3."}
            titulo={"O dia do SIM!"}
            texto={
              "Chegamos à etapa do casamento, tudo está finalizado. Agora é só desfrutar ao máximo e confiar em nossa expertise para garantir que tudo ocorra de forma perfeita e conforme planejado."
            }
            imagemTexto={theme === "A" ? ImagemTexto3PB : ImagemTexto3}
            altImagem={"Foto onde mostra apenas a parte do ombro até os cotovelos de um casal composto por uma mulher branca, segurando um buque de flores brancas, rosas e amarelas, usando um vestido de noiva branco, com as unhas pintadas de rosa e dando a mão esquerda para o seu parceiro, um homem branco usando um terno azul-marinho, com uma flor rosa-clara no bolso, um relogio preto no pulso esquerdo e colocando uma aliança na mão da noiva com a mão direita."}
          />

          <img className="decoracao-baixo" src={DecoracaoBaixo} alt="Uma imagem de um ramo de flores, em preto e branco." />
        </div>
      </section>
      <CarrosselImagens />
      <Footer />
    </>
  );
}
