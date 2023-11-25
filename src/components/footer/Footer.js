import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

import "./FooterModule.css";

import LogoReduzida from '../../img/footer/oo.png'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cima">
        <div className="logo-rede-social">
          <Link
            className="link-rede-social"
            to={"https://www.instagram.com/l.acoos"}
            target="_blank"
          >
            <FaInstagram className="fa-brands fa-instagram" />
          </Link>
          <Link
            className="link-rede-social"
            to={"https://www.linkedin.com/company/projeto-laçoos/about/"}
            target="_blank"
          >
            <FaLinkedin className="fa-brands fa-linkedin" />
          </Link>
          <Link
            className="link-rede-social"
            to={"https://github.com/projeto-lacoos"}
            target="_blank"
          >
            <FaGithubSquare className="fa-brands fa-square-github" />
          </Link>
        </div>
        <div className="footer-informacoes">
          <div className="footer-informacoes-e">
            <p>Localização</p>
            <p className="footer-amarelo">São Paulo - SP</p>
          </div>
          <div className="footer-informacoes-d">
            <p>Telefone para contato</p>
            <p className="footer-amarelo">(55) 11 XXXXX-XXXX</p>
          </div>
        </div>
      </div>
      <div className="footer-baixo">
        <img src={LogoReduzida} alt="" className="footer-logo-reduzido" />
        <p className="footer-p">Laçoos Ltda. © 2023</p>
      </div>
    </footer>
  );
}
