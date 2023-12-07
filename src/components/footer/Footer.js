import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import "./FooterModule.css";

import LogoReduzida from '../../img/footer/logo-reduzida.svg'
import DPTT from "../../img/footer/oo.svg";
import M from "../../img/footer/oo-2.svg";
import PD from "../../img/footer/oo-1.svg";
import A from "../../img/footer/oo-3.svg";


export default function Footer() {
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
    <footer className={`footer ${getThemeClass(theme)}`}>
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
            <p className={`footer-amarelo ${getThemeClass(theme)}`}>São Paulo - SP</p>
          </div>
          <div className="footer-informacoes-d">
            <p>Telefone para contato</p>
            <p className={`footer-amarelo ${getThemeClass(theme)}`}>(55) 11 XXXXX-XXXX</p>
          </div>
        </div>
      </div>
      <div className="footer-baixo">
        <img src={getThemeLogo(theme)} alt="Logo da Laçoos, onde é uma imagem de duas alianças se entrelaçando" className="footer-logo-reduzido" />
        <p className="footer-p">Laçoos Ltda. © 2023</p>
      </div>
    </footer>
  );
}
