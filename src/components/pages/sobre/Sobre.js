import Navbar from "../../navbar/Navbar";
import "./SobreModule.css";

import LogoLacoos from "../../../img/sobre/oo.png";
import Detalhes from "../../../img/sobre/detalhes.png";
import CartaoVisita from "../../../img/sobre/Cartao-visita.png";
import BackgroundCelular1 from "../../../img/sobre/background1.svg";
import BackgroundCelular2 from "../../../img/sobre/background2.svg";
import CorEsquerda from "../../../img/sobre/coresquerda.png";
import CorDireita from "../../../img/sobre/cordireita.png";
import Coracao from "../../../img/sobre/coracao.png";
import AliancaL from "../../../img/sobre/aliancal.png";
import Trigo from "../../../img/sobre/trigo.png";
import Papel from "../../../img/sobre/papel.png";
import Mensagem from "../../../img/sobre/msg.png";
import Imagem39 from "../../../img/sobre/image_39.svg";
import Garrett from "../../../img/sobre/garrett.png";
import Moura from "../../../img/sobre/moura.png";
import Filipe from "../../../img/sobre/filipe.png";
import Gusbic from "../../../img/sobre/gusbic.png";
import Ferraz from "../../../img/sobre/ferraz.png";
import Mason from "../../../img/sobre/mason.png";
import Luiza from "../../../img/sobre/luiza.png";
import CaixaGarrafinha from "../../../img/sobre/images-caixaGarrafinha.png";
import Instagram from "../../../img/sobre/instagram.png";
import Linkedin from "../../../img/sobre/linkedin.png";
import Github from "../../../img/sobre/github.png";
import QRCode from "../../../img/sobre/qrcode.jpg";

import Limpay from "../../../img/sobre/limpay.png";
import Lushe from "../../../img/sobre/lushe.png";
import Aliancas from "../../../img/sobre/alianca.png";

export default function Sobre() {
  return (
    <div id="container">
      <Navbar />
      <section className="sobre-home">
        <div className="conteudo">
          <img
            className="conteudo-logo"
            src={LogoLacoos}
            alt="background-images"
          />
          <p className="p-sobre">um vínculo além da visão</p>
        </div>
        <div className="img-detalhes">
          <img className="detalhes" src={Detalhes} alt="" />
        </div>
      </section>
      <section className="sobre-lacoos">
        <div className="conteudo-sobre">
          <h1 className="h1-conteudoSobre">
            Sobre a<br />
            Laçoos
          </h1>
          <hr className="hr-conteudoSobre" />
          <p className="p-conteudoSobre">
            Plataforma que realiza a ponte para a realização de cerimônia de
            casamento que atenda as necessidades das pessoas com deficiência
            visual.
          </p>
        </div>
      </section>
      <section className="sobre-bodas">
        <div className="conteudo-bodas">
          <h1 className="tituloBodas">Bodas de Casamento</h1>
          <p className="descBodas">
            Efetuaremos a organização de cerimônias de renovação de votos,
            viagens, festas especiais para que cada casal celebre sua jornada de
            uma maneira única.
          </p>
        </div>
      </section>
      <section className="sobre-bodas-parceiros">
        <div className="sobre-parceiros">
            <h1 className="tituloParceiros">Bodas de Casamento</h1>
            <hr className="hr-conteudoParceiros" />
            <img src={Limpay} className="imgParceiros"/>
            <img src={Lushe} className="imgParceiros" />
            <img src={Aliancas} className="imgParceiros"/>
          </div>
      </section>
      <section className="sobre-cartaolacoos">
        <div className="images">
          <img className="front-img" src={CartaoVisita} alt="" />
        </div>
      </section>
      <section className="sobre-fontslacoos">
        <div className="conteudo-fonts">
          <div className="buttons">
            <div className="button">
              <button className="btn-sobreNos">Poppins</button>
            </div>
            <div className="btn">
              <p className="title">Poppins</p>
              <p className="p">Poppins</p>
            </div>
          </div>
          <div className="buttons">
            <div className="button">
              <button className="btn-sobreNos">Roboto</button>
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
          <img className="imagesLacoos-sobre" src={BackgroundCelular1} alt="" />
          <img className="imagesLacoos-sobre" src={BackgroundCelular2} alt="" />
        </div>
      </section>
      <section className="sobre-idvisuallacoos">
        <div className="conteudo-id">
          <div className="cores">
            <img className="imagesCores" src={CorEsquerda} alt="" />
            <img className="imagesCores" src={CorDireita} alt="" />
          </div>
          <div className="conteudoicons">
            <div className="icons">
              <img className="imagesIcons" src={Coracao} alt="" />
              <img className="imagesIcons" src={AliancaL} alt="" />
              <img className="imagesIcons" src={Trigo} alt="" />
              <img className="imagesIcons" src={Papel} alt="" />
            </div>
            <img className="icons-msg" src={Mensagem} alt="" />
            <div className="div-imageLacoos">
              <img className="imagesLacoos" src={Imagem39} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="sobre-integrantelacoos">
        <div className="containerIntegrantes">
          <div className="conteudointegrantes">
            <div className="card">
              <img className="imageIntegrante" src={Garrett} alt="" />
              <p>FullStack</p>
              <p>Product Owner</p>
            </div>
            <div className="card">
              <img className="imageIntegrante" src={Moura} alt="" />
              <p>Back-End</p>
              <p>Scrum Master</p>
            </div>
            <div className="card">
              <img className="imageIntegrante" src={Filipe} alt="" />
              <p>Front-End</p>
              <p>Financeiro</p>
            </div>
            <div className="card">
              <img className="imageIntegrante" src={Gusbic} alt="" />
              <p>Front-End</p>
              <p>Desenvolvedor chatbot</p>
            </div>
            <div className="card">
              <img className="imageIntegrante" src={Ferraz} alt="" />
              <p>Design</p>
              <p>Social Media</p>
            </div>
            <div className="card">
              <img className="imageIntegrante" src={Mason} alt="" />
              <p>Design</p>
            </div>
            <div className="card">
              <img className="imageIntegrante" src={Luiza} alt="" />
              <p>Design</p>
              <p>Banco de Dados</p>
            </div>
          </div>
          <img className="caixaGarrafinha" src={CaixaGarrafinha} alt="" />
        </div>
      </section>
      <section className="sobre-footerlacoos">
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
          <img className="imageQRCode" src={QRCode} alt="" />
        </div>
      </section>
    </div>
  );
}
