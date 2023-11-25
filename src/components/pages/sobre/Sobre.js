import Navbar from "../../navbar/Navbar";
import "./SobreModule.css";

import LogoLacoos from "../../../img/sobre/oo.png";
import Detalhes from "../../../img/sobre/detalhes.png";
import CartaoVisita from "../../../img/sobre/Cartao-visita.png";
import BackgroundCelular from "../../../img/sobre/backgroundcelular.png";
import CorEsquerda from "../../../img/sobre/coresquerda.png";
import CorDireita from "../../../img/sobre/cordireita.png";
import Coracao from "../../../img/sobre/coracao.png";
import Alianca from "../../../img/sobre/alianca.png";
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

export default function Sobre() {
  return (
    <div id="container">
      <Navbar />
      <section className="sobre-home">
        <div className="conteudo">
          <img className="conteudo-logo" src={LogoLacoos} alt="background-images"/>
          <p>um vínculo além da visão</p>
        </div>
        <div className="img-detalhes">
          <img className="detalhes" src={Detalhes} alt="" />
        </div>
      </section>
      <section className="sobre-lacoos">
        <div className="conteudo-sobre">
          <h1>
            Sobre a<br />
            Laçoos
          </h1>
          <hr />
          <p>
            Plataforma que realiza a ponte para a realização de cerimônia de
            casamento que atenda as necessidades das pessoas com deficiência
            visual.
          </p>
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
              <button>Poppins</button>
            </div>
            <div className="btn">
              <p className="title">Poppins</p>
              <p className="p">Poppins</p>
            </div>
          </div>
          <div className="buttons">
            <div className="button">
              <button className="roboto">Roboto</button>
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
          <img src={BackgroundCelular} alt="" />
        </div>
      </section>
      <section className="sobre-idvisuallacoos">
        <div className="conteudo-id">
          <div className="cores">
            <img src={CorEsquerda} alt="" />
            <img src={CorDireita} alt="" />
          </div>
          <div className="conteudoicons">
            <div className="icons">
              <img src={Coracao} alt="" />
              <img src={Alianca} alt="" />
              <img src={Trigo} alt="" />
              <img src={Papel} alt="" />
            </div>
            <img className="icons-msg" src={Mensagem} alt="" />
            <div>
              <img src="" alt="" />
              <img src={Imagem39} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="sobre-integrantelacoos">
        <div className="containerIntegrantes">
          <div className="conteudointegrantes">
            <div className="card">
              <img src={Garrett} alt="" />
              <p>FullStack</p>
              <p>Product Owner</p>
            </div>
            <div className="card">
              <img src={Moura} alt="" />
              <p>Back-End</p>
              <p>Scrum Master</p>
            </div>
            <div className="card">
              <img src={Filipe} alt="" />
              <p>Front-End</p>
              <p>Financeiro</p>
            </div>
            <div className="card">
              <img src={Gusbic} alt="" />
              <p>Front-End</p>
              <p>Desenvolvedor chatbot</p>
            </div>
            <div className="card">
              <img src={Ferraz} alt="" />
              <p>Design</p>
              <p>Social Media</p>
            </div>
            <div className="card">
              <img src={Mason} alt="" />
              <p>Design</p>
            </div>
            <div className="card">
              <img src={Luiza} alt="" />
              <p>Design</p>
              <p>Banco de Dados</p>
            </div>
          </div>
          <div className="img">
            <img
              className="caixaGarrafinha"
              src={CaixaGarrafinha}
              alt=""
            />
          </div>
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
          <img src={QRCode} alt="" />
        </div>
      </section>
    </div>
  );
}
