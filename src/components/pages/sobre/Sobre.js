import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import Navbar from "../../navbar/Navbar";

import "./SobreModule.css";


import DPTT from "../../../img/sobre/oo.svg";
import M from "../../../img/sobre/oo-2.svg";
import PD from "../../../img/sobre/oo-1.svg";
import A from "../../../img/sobre/oo-3.svg";
import LogoReduzida from "../../../img/sobre/logo-reduzida.svg";
import Detalhes from "../../../img/sobre/detalhes.png";
import DetalhesDPTT from "../../../img/sobre/detalhes-DPTT.svg";
import DetalhesPD from "../../../img/sobre/detalhes-PD.svg";
import DetalhesM from "../../../img/sobre/detalhes-M.svg";
import DetalhesA from "../../../img/sobre/detalhes-A.svg";

import CorEsquerdaDPTT from '../../../img/sobre/corEsquerda-DPTT.svg'
import CorEsquerdaPD from '../../../img/sobre/corEsquedar-PD.svg'
import CorEsquerdaM from '../../../img/sobre/corEsquerda-M.svg'
import CorEsquerdaA from '../../../img/sobre/corEsquerda-A.svg'
import CorEsquerda from "../../../img/sobre/coresquerda.png";

import CorDireitaDPTT from '../../../img/sobre/corDireita-DPTT.svg'
import CorDireitaPD from '../../../img/sobre/corDireita-PD.svg'
import CorDireitaM from '../../../img/sobre/corDireita-M.svg'
import CorDireitaA from '../../../img/sobre/corDireita-A.svg'
import CorDireita from "../../../img/sobre/cordireita.png";

import CoracaoDPTT from '../../../img/sobre/coracao-DPTT.svg'
import CoracaoPD from '../../../img/sobre/coracao-PD.svg'
import CoracaoM from '../../../img/sobre/coracao-M.svg'
import CoracaoA from '../../../img/sobre/coracao-PB.svg'
import Coracao from "../../../img/sobre/coracao.png";

import AliancaDPTT from '../../../img/sobre/alianca-DPTT.svg'
import AliancaPD from '../../../img/sobre/alianca-PD.svg'
import AliancaM from '../../../img/sobre/alianca-M.svg'
import AliancaA from '../../../img/sobre/alianca-PB.svg'
import Alianca from "../../../img/sobre/alianca.png";

import TrigoDPTT from '../../../img/sobre/trigo-DPTT.svg'
import TrigoPD from '../../../img/sobre/trigo-PD.svg'
import TrigoM from '../../../img/sobre/trigo-M.svg'
import TrigoA from '../../../img/sobre/buque-PB.svg'
import Trigo from "../../../img/sobre/trigo.png";

import CartaoVisita from "../../../img/sobre/Cartao-visita.png";
import CartaoVisitaPB from "../../../img/sobre/Cartao-visita-PB.svg";

import BackgroundCelular1 from "../../../img/sobre/background1.svg";
import BackgroundCelular1PB from "../../../img/sobre/background1-PB.svg";

import BackgroundCelular2 from "../../../img/sobre/background2.svg";
import BackgroundCelular2PB from "../../../img/sobre/background2-PB.svg";

import Papel from "../../../img/sobre/papel.png";
import PapelPB from "../../../img/sobre/papel-PB.svg";

import Mensagem from "../../../img/sobre/msg.png";
import MensagemDPTT from "../../../img/sobre/mensagem-DPTT.svg";
import MensagemPD from "../../../img/sobre/papel-PD.svg";
import MensagemM from "../../../img/sobre/mensagem-M.svg";
import MensagemA from "../../../img/sobre/mensagem-PB.svg";

import LogoLacoos from "../../../img/sobre/image_39.svg";
import LogoLacoosDPTT from "../../../img/sobre/lacoos-DPTT.svg";
import LogoLacoosPD from "../../../img/sobre/lacoos-PD.svg";
import LogoLacoosM from "../../../img/sobre/lacoos-M.svg";
import LogoLacoosA from "../../../img/sobre/lacoos-PB.svg";

import Garrett from "../../../img/sobre/garrett.svg";
import GarrettPB from "../../../img/sobre/garrett-PB.svg";

import Moura from "../../../img/sobre/moura.svg";
import MouraPB from "../../../img/sobre/moura-PB.svg";

import Filipe from "../../../img/sobre/filipe.svg";
import FilipePB from "../../../img/sobre/filipe-PB.svg";

import Gusbic from "../../../img/sobre/gusbic.svg";
import GusbicPB from "../../../img/sobre/gusbic-PB.svg";

import Ferraz from "../../../img/sobre/ferraz.svg";
import FerrazPB from "../../../img/sobre/ferraz-PB.svg";

import Mason from "../../../img/sobre/mason.svg";
import MasonPB from "../../../img/sobre/mason-PB.svg";

import Luiza from "../../../img/sobre/luiza.svg";
import LuizaPB from "../../../img/sobre/luiza-PB.svg";

import CaixaGarrafinha from "../../../img/sobre/images-caixaGarrafinha.png";
import CaixaGarrafinhaA from "../../../img/sobre/caixaGarrafinha-PB.svg";

import Instagram from "../../../img/sobre/instagram.png";
import Linkedin from "../../../img/sobre/linkedin.png";
import Github from "../../../img/sobre/github.png";
import QRCode from "../../../img/sobre/qrcode.jpg";
import QRCodePB from "../../../img/sobre/qrcode-PB.svg";

import Limpay from "../../../img/sobre/limpay.png";
import Lushe from "../../../img/sobre/lushe.png";
import AliancaP from "../../../img/sobre/aliancaPrimicias.png";

export default function Sobre() {
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

  const getThemeDetalhes = (theme) => {
    switch (theme) {
      case "DPTT":
        return DetalhesDPTT;
      case "M":
        return DetalhesM;
      case "PD":
        return DetalhesPD;
      case "A":
        return DetalhesA;
      default:
        return Detalhes;
    }
  };

  const getThemeCorEsquerda = (theme) => {
    switch (theme) {
      case "DPTT":
        return CorEsquerdaDPTT;
      case "M":
        return CorEsquerdaM;
      case "PD":
        return CorEsquerdaPD;
      case "A":
        return CorEsquerdaA;
      default:
        return CorEsquerda;
    }
  };

  const getThemeCorDireita = (theme) => {
    switch (theme) {
      case "DPTT":
        return CorDireitaDPTT;
      case "M":
        return CorDireitaM;
      case "PD":
        return CorDireitaPD;
      case "A":
        return CorDireitaA;
      default:
        return CorDireita;
    }
  };

  const getThemeCoracao = (theme) => {
    switch (theme) {
      case "DPTT":
        return CoracaoDPTT;
      case "M":
        return CoracaoM;
      case "PD":
        return CoracaoPD;
      case "A":
        return CoracaoA;
      default:
        return Coracao;
    }
  };

  const getThemeAlianca = (theme) => {
    switch (theme) {
      case "DPTT":
        return AliancaDPTT;
      case "M":
        return AliancaM;
      case "PD":
        return AliancaPD;
      case "A":
        return AliancaA;
      default:
        return Alianca;
    }
  };

  const getThemeTrigo = (theme) => {
    switch (theme) {
      case "DPTT":
        return TrigoDPTT;
      case "M":
        return TrigoM;
      case "PD":
        return TrigoPD;
      case "A":
        return TrigoA;
      default:
        return Trigo;
    }
  };

  const getThemMensagen = (theme) => {
    switch (theme) {
      case "DPTT":
        return MensagemDPTT;
      case "M":
        return MensagemM;
      case "PD":
        return MensagemPD;
      case "A":
        return MensagemA;
      default:
        return Mensagem;
    }
  };

  const getThemeLogoLacoos = (theme) => {
    switch (theme) {
      case "DPTT":
        return LogoLacoosDPTT;
      case "M":
        return LogoLacoosM;
      case "PD":
        return LogoLacoosPD;
      case "A":
        return LogoLacoosA;
      default:
        return LogoLacoos;
    }
  };
  return (
    <div id="container">
      <Navbar />
      <section className={`sobre-home ${getThemeClass(theme)}`}>
        <div className="conteudo">
          <img
            className="conteudo-logo"
            src={getThemeLogo(theme)}
            alt="Foto onde mostra apenas a parte dos ombros até os cotovelos de um casal composto por um homem branco usando uma aliança prata na mão direita seguranda uma taça transparte de champagne e uma mulher branca segurando um buque de flores brancas na mão esquerda, segurando uma taça transparente de champagne na mão direita com unhas longas pintadas de rosa claro e uma aliança prata. A roupa do homem é composta de um terno marrom com linhas vermelhas, amarelas e brancas, com 3 botões pretos e 1 amarelo, com um colete preto em baixo com uma camisa branca e uma gravata borboleta preta e a da mulher é composta por um vestido de noiva branco coma  as mangas caidas sobre os ombros."
          />
          <p className="p-sobre">um vínculo além da visão</p>
        </div>
        <div className="img-detalhes">
          <img className="detalhes" src={getThemeDetalhes(theme)} alt="3 adesivos redondos, 1 com o fundo amarelo e um coração branco e 2 com o fundo verde, um com um par de alianças brancas e um coração branco em cima e o outro com o controno de um buque de flores branco." />
        </div>
      </section>
      <section className="sobre-lacoos">
        <div className="conteudo-sobre">
          <h1 className={`h1-conteudoSobre ${getThemeClass(theme)}`}>
            Sobre a<br />
            Laçoos
          </h1>
          <hr className={`hr-conteudoSobre ${getThemeClass(theme)}`} />
          <p className="p-conteudoSobre">
            Plataforma que realiza a ponte para a realização de cerimônia de
            casamento que atenda as necessidades das pessoas com deficiência
            visual.
          </p>
        </div>
      </section>
      <section className={`sobre-bodas ${getThemeClass(theme)}`}>
        <div className="conteudo-bodas">
          <h1 className={`tituloBodas ${getThemeClass(theme)}`}>Bodas de Casamento</h1>
          <p className="descBodas">
            Efetuaremos a organização de cerimônias de renovação de votos,
            viagens, festas especiais para que cada casal celebre sua jornada de
            uma maneira única.
          </p>
        </div>
      </section>
      <section className="sobre-bodas-parceiros">
        <div className="sobre-parceiros">
            <h1 className={`tituloParceiros ${getThemeClass(theme)}`}>Bodas de Casamento</h1>
            <hr className={`hr-conteudoParceiros ${getThemeClass(theme)}`} />
            <img src={Limpay} className="imgParceiros" alt="Logo de nossa parceria “Limpay”, na cor preta, onde a letra L é representada por um aspirador de pó, e a letra Y por um espanador."/>
            <img src={Lushe} className="imgParceiros" alt="Logo de nossa parceria “Lushe Festas e Balões”, com o fundo em preto e a parte escrita em branco, com balões cinzas por cima."/>
            <img src={AliancaP} className="imgParceiros" alt="Logo de nossa parceria “Primicias Alianças”, onde o nome esta escrito em volta de um par de alianças pretas."/>
          </div>
      </section>
      <section className={`sobre-cartaolacoos ${getThemeClass(theme)}`}>
        <div className="images">
          <img className="front-img" src={theme === "A" ? CartaoVisitaPB : CartaoVisita} alt="Foto demonstrativa de nosso cartão, onde a parte da frente é composta pelo nosso nome “Laçoos”, onde na parte dos o’s fica a nossa logo de um sinal de infinito amarelo feito com as letras. Na parte de trás temos um qr code amarelo, as logos do instagram, linkedin e github com nossos respectivos nomes e na parte inferior direita esta os nossos 3 adesivos amarelos e redondos com um coração, um par de alianças com um coração em cima e um buque de flores. Tanto a parte da frente quanto a de trás contem o fundo verde." />
        </div>
      </section>
      <section className="sobre-fontslacoos">
        <div className="conteudo-fonts">
          <div className="buttons">
            <div className="button">
              <button className={`btn-sobreNos ${getThemeClass(theme)}`}>Poppins</button>
            </div>
            <div className="btn">
              <p className="title">Poppins</p>
              <p className="p">Poppins</p>
            </div>
          </div>
          <div className="buttons">
            <div className="button">
              <button className={`btn-sobreNos ${getThemeClass(theme)}`}>Roboto</button>
            </div>
            <div className="btn">
              <p className="title roboto">Roboto</p>
              <p className="p roboto">Roboto</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sobre-imageslacoos">
        <div className="images">
          <img className="imagesLacoos-sobre" src={theme === "A" ? BackgroundCelular1PB : BackgroundCelular1} alt="Foto de um celular em cima de um notebook cinza com o instagram da Laçoos aberto." />
          <img className="imagesLacoos-sobre" src={theme === "A" ? BackgroundCelular2PB : BackgroundCelular2} alt="Foto de uma sacola de tecido branca com revistas e flores roxas dentro. Os detalhes da sacola são compostos por adesivos redondos, amarelos e verdes com corações, alianças e buques de flores; Com nossa logo amarela e algumas com contorno verde, composta por um sinal de infinito feito com duas letras o’s e com uma frase que diz “Estamos aqui para fazer seus sonhos se tornarem realidade” em um fundo amarelo espalhados." />
        </div>
      </section>
      <section className="sobre-idvisuallacoos">
        <div className="conteudo-id">
          <div className="cores">
            <img className="imagesCores" src={getThemeCorEsquerda(theme)} alt="Um retângulo de cor verde, com a cor em  hexadecimal escrita nele: '#c9b920'" />
            <img className="imagesCores" src={getThemeCorDireita(theme)} alt="Um retângulo de cor verde, com a cor em  hexadecimal escrita nele: '#658955'" />
          </div>
          <div className="conteudoicons">
            <div className="icons">
              <img className="imagesIcons" src={getThemeCoracao(theme)} alt="Nosso adesivo redondo, com o fundo verde e um coração branco." />
              <img className="imagesIcons" src={getThemeAlianca(theme)} alt="Nosso adesivo redondo, com o fundo amarelo e um par de alianças brancas com um coração branco em cima." />
              <img className="imagesIcons" src={getThemeTrigo(theme)} alt="Nosso adesivo redondo, com o fundo amarelo e o contorno de um buque de flores branco." />
              <img className="imagesIcons" src={theme === "A" ? PapelPB : Papel} alt="Nosso adesivo redondo, com o fundo branco e o contorno de uma folha de papel com uma lista de afazeres e um coraçãozinho em cima amarelo." />
            </div>
            <img className="icons-msg" src={getThemMensagen(theme)} alt="Um adesivo com pontas circular e no meio tem um texto escrito 'Estamos aqui para fazer seus sonhos se tornarem realidade'" />
            <div className="div-imageLacoos">
              <img className="imagesLacoos" src={getThemeLogoLacoos(theme)} alt="Logo da Laçoos, composta por um jogo da velha no início, em seguida com nosso nome e um sinal de infinito amarelo formado por duas letras o’s no lugar das letras em si, com o contorno em verde." />
            </div>
          </div>
        </div>
      </section>
      <section className={`sobre-integrantelacoos ${getThemeClass(theme)}`}>
        <div className="containerIntegrantes">
          <div className="conteudointegrantes">
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? GarrettPB : Garrett} alt="Foto do nosso PO e programador Fullstack Nathan Garret com um contorno amarelo em volta e o fundo branco. Um homem branco, sorrindo, de óculos e cabelos castanhos, olhos castanhos, usando o uniforme do instituto PROA (azul com os detalhes em branco.)" />
              <p>FullStack</p>
              <p>Product Owner</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? MouraPB : Moura} alt="Foto da nossa scrum master e programadora Back End Gabriella Moura com um contorno amarelo em volta e o fundo branco. Uma mulher branca, sorrindo, com cabelos castanhos e lisos, olhos castanhos, usando o uniforme do instituto PROA (azul com os detalhes em branco.)" />
              <p>Back-End</p>
              <p>Scrum Master</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? FilipePB : Filipe} alt="Foto do nosso programador Front End Filipe Rocha com um contorno amarelo em volta e o fundo branco. Um homem branco, sorrindo, com cabelos e barba castanhos, olhos castanhos, usando o uniforme do instituto PROA (azul com os detalhes em branco.)" />
              <p>Front-End</p>
              <p>Financeiro</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? GusbicPB : Gusbic} alt="Foto do nosso programador Front End e ChatBot Gustavo Maia com um contorno amarelo em volta e o fundo branco. Um homem branco, sorrindo, com cabelo raspado castanho, olhos castanhos, usando o uniforme do instituto PROA (azul com os detalhes em branco.) " />
              <p>Front-End</p>
              <p>Dev chatbot</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? FerrazPB : Ferraz} alt="Foto da nossa Designer Gabriela Ferraz com um contorno amarelo em volta e o fundo branco. Uma mulher branca, sorrindo, de óculos, com cabelos castanhos e cacheados, olhos castanhos, usando o uniforme do instituto PROA (azul com os detalhes em branco.)" />
              <p>Design</p>
              <p>Social Media</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? MasonPB : Mason} alt="Foto da nossa Designer Nicole Felix com um contorno amarelo em volta e o fundo branco. Uma mulher branca, sorrindo, com cabelos castanhos e lisos raspado do lado, olhos castanhos, usando o uniforme do instituto PROA (azul com os detalhes em branco.)" />
              <p>Design</p>
              <p>Design Gráfico</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? LuizaPB : Luiza} alt="Foto da nossa Designer e Banco de Dados Luiza Muniz com um contorno amarelo em volta e o fundo branco. Uma mulher branca, sorrindo, com cabelos castanhos e cacheados com tranças do lado presas com piranhas azuis, olhos castanhos, usando o uniforme do instituto PROA (azul com os detalhes em branco.)" />
              <p>Design</p>
              <p>Banco de Dados</p>
            </div>
          </div>
          <img className="caixaGarrafinha" src={theme === "A" ? CaixaGarrafinhaA : CaixaGarrafinha} alt="Uma caixa quadrada e uma garrafa d’água com tampa, ambas brancas, contendo nossos adesivos redondos, amarelos e verdes com corações, alianças e buques de flores; Com nossa logo amarela e algumas com contorno verde, composta por um sinal de infinito feito com duas letras o’s e com uma frase que diz “Estamos aqui para fazer seus sonhos se tornarem realidade” em um fundo amarelo espalhados sobre as mesmas." />
        </div>
      </section>
      <section className={`sobre-footerlacoos ${getThemeClass(theme)}`}>
        <div className="redesocial">
          <div className="cardsocial">
            <img src={Instagram} alt="Instagram Icon" />
            <p>@l.acoos</p>
          </div>
          <div className="cardsocial">
            <img src={Linkedin} alt="Linkedin Icon" />
            <p>Projeto Laçoos</p>
          </div>
          <div className="cardsocial">
            <img src={Github} alt="GitHub Icon" />
            <p>Projeto-lacoos</p>
          </div>
          <img className="imageQRCode" src={theme === "A" ? QRCodePB : QRCode} alt="QR Code Bentome Laçoos" />
        </div>
      </section>
    </div>
  );
}