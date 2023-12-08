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

import Garrett from "../../../img/sobre/garrett.png";
import GarrettPB from "../../../img/sobre/garrett-PB.svg";

import Moura from "../../../img/sobre/moura.png";
import MouraPB from "../../../img/sobre/moura-PB.svg";

import Filipe from "../../../img/sobre/filipe.png";
import FilipePB from "../../../img/sobre/filipe-PB.svg";

import Gusbic from "../../../img/sobre/gusbic.png";
import GusbicPB from "../../../img/sobre/gusbic-PB.svg";

import Ferraz from "../../../img/sobre/ferraz.png";
import FerrazPB from "../../../img/sobre/ferraz-PB.svg";

import Mason from "../../../img/sobre/mason.png";
import MasonPB from "../../../img/sobre/mason-PB.svg";

import Luiza from "../../../img/sobre/luiza.png";
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
            alt="background-images"
          />
          <p className="p-sobre">um vínculo além da visão</p>
        </div>
        <div className="img-detalhes">
          <img className="detalhes" src={getThemeDetalhes(theme)} alt="" />
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
            <img src={Limpay} className="imgParceiros" alt=""/>
            <img src={Lushe} className="imgParceiros" alt=""/>
            <img src={AliancaP} className="imgParceiros" alt=""/>
          </div>
      </section>
      <section className={`sobre-cartaolacoos ${getThemeClass(theme)}`}>
        <div className="images">
          <img className="front-img" src={theme === "A" ? CartaoVisitaPB : CartaoVisita} alt="" />
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
          <img className="imagesLacoos-sobre" src={theme === "A" ? BackgroundCelular1PB : BackgroundCelular1} alt="" />
          <img className="imagesLacoos-sobre" src={theme === "A" ? BackgroundCelular2PB : BackgroundCelular2} alt="" />
        </div>
      </section>
      <section className="sobre-idvisuallacoos">
        <div className="conteudo-id">
          <div className="cores">
            <img className="imagesCores" src={getThemeCorEsquerda(theme)} alt="" />
            <img className="imagesCores" src={getThemeCorDireita(theme)} alt="" />
          </div>
          <div className="conteudoicons">
            <div className="icons">
              <img className="imagesIcons" src={getThemeCoracao(theme)} alt="" />
              <img className="imagesIcons" src={getThemeAlianca(theme)} alt="" />
              <img className="imagesIcons" src={getThemeTrigo(theme)} alt="" />
              <img className="imagesIcons" src={theme === "A" ? PapelPB : Papel} alt="" />
            </div>
            <img className="icons-msg" src={getThemMensagen(theme)} alt="" />
            <div className="div-imageLacoos">
              <img className="imagesLacoos" src={getThemeLogoLacoos(theme)} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={`sobre-integrantelacoos ${getThemeClass(theme)}`}>
        <div className="containerIntegrantes">
          <div className="conteudointegrantes">
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? GarrettPB : Garrett} alt="" />
              <p>FullStack</p>
              <p>Product Owner</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? MouraPB : Moura} alt="" />
              <p>Back-End</p>
              <p>Scrum Master</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? FilipePB : Filipe} alt="" />
              <p>Front-End</p>
              <p>Financeiro</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? GusbicPB : Gusbic} alt="" />
              <p>Front-End</p>
              <p>Dev chatbot</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? FerrazPB : Ferraz} alt="" />
              <p>Design</p>
              <p>Social Media</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? MasonPB : Mason} alt="" />
              <p>Design</p>
            </div>
            <div className={`card ${getThemeClass(theme)}`}>
              <img className="imageIntegrante" src={theme === "A" ? LuizaPB : Luiza} alt="" />
              <p>Design</p>
              <p>Banco de Dados</p>
            </div>
          </div>
          <img className="caixaGarrafinha" src={theme === "A" ? CaixaGarrafinhaA : CaixaGarrafinha} alt="" />
        </div>
      </section>
      <section className={`sobre-footerlacoos ${getThemeClass(theme)}`}>
        <div className="redesocial">
          <div className="cardsocial">
            <img src={Instagram} alt="" />
            <p>@l.acoos</p>
          </div>
          <div className="cardsocial">
            <img src={Linkedin} alt="" />
            <p>Projeto Laçoos</p>
          </div>
          <div className="cardsocial">
            <img src={Github} alt="" />
            <p>Projeto-lacoos</p>
          </div>
          <img className="imageQRCode" src={theme === "A" ? QRCodePB : QRCode} alt="" />
        </div>
      </section>
    </div>
  );
}
