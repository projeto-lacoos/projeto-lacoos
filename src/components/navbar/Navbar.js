import "./navbarModule.css";

import { Link } from "react-router-dom";

import LogoReduzida from "../../img/navbar/logo-reduzida.svg";
import DPTT from "../../img/navbar/oo.svg";
import M from "../../img/navbar/oo-2.svg";
import PD from "../../img/navbar/oo-1.svg";
import A from "../../img/navbar/oo-3.svg";

import FotoUserDPTT from "../../img/navbar/foto-user-DPTT.svg";
import FotoUserM from "../../img/navbar/foto-user-M.svg";
import FotoUserPD from "../../img/navbar/foto-user-PD.svg";
import FotoUserA from "../../img/navbar/foto-user-A.svg";
import FotoUser from "../../img/navbar/foto-user.svg";

import { ApplicationContext } from "../context/ApplicationProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
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

  const getFotoUser = (theme) => {
    switch (theme) {
      case "DPTT":
        return FotoUserDPTT;
      case "M":
        return FotoUserM;
      case "PD":
        return FotoUserPD;
      case "A":
        return FotoUserA;
      default:
        return FotoUser;
    }
  };
  const { user, setAuth, auth } = useContext(ApplicationContext);

  const navigate = useNavigate();

  const logoutUser = () => {
    /* navigate("/"); */
    localStorage.clear();
    setAuth(false);
    /* window.location.reload(); */
  };

  return (
    <div className="home-navbar">
      <nav className="navbar">
        <input type="checkbox" name="" id="menu-hamburguer" />
        <label className="menu-label" htmlFor="menu-hamburguer">
          <div className="menu">
            <span className={`hamburguer ${getThemeClass(theme)}`} />
          </div>
        </label>
        <div className="modal-navbar">
          <div className="navbar-e" />
          <div className={`navbar-d ${getThemeClass(theme)}`}>
            <ul className="itens-menu">
              {auth ? (
                <>
                  <li>
                    <img className="logo-reduzida" src={getThemeLogo(theme)} alt="Logo da Laçoos, onde é uma imagem de duas alianças se entrelaçando" />
                  </li>
                  <li>
                    <Link className="logar item" to={"/perfil"}>
                      <img className="user" src={getFotoUser(theme)} alt="" />
                      {/* {user.name ? user.name : "Maria do Nascimento"} */}
                    </Link>
                  </li>
                  <li>
                    <Link className="item" to={"/"}>
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link className="item" to={"/perfil"}>
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <Link className="item" to={"/pacote"}>
                      Pacote
                    </Link>
                  </li>
                  <li>
                    <Link className="item" to={"/"}>
                      Convites
                    </Link>
                  </li>
                  <li>
                    <Link className="item" to={"/sobre"}>
                      Sobre nós
                    </Link>
                  </li>
                  <li>
                    <Link className="item">
                      <button
                        onClick={() => {
                          logoutUser();
                        }}
                      >
                        Desconectar
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <img className="logo-reduzida" src={getThemeLogo(theme)} alt="Logo da Laçoos, onde é uma imagem de duas alianças se entrelaçando" />
                  </li>
                  <li>
                    <Link className="logar item" to={"/login"}>
                      <img className="user" src={getFotoUser(theme)} alt="" />
                      <span>Login / Registrar-se</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="item" to={"/"}>
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link className="item" to={"/pacote"}>
                      Pacote
                    </Link>
                  </li>
                  <li>
                    <Link className="item" to={"/"}>
                      Convites
                    </Link>
                  </li>
                  <li>
                    <Link className="item" to={"/sobre"}>
                      Sobre nós
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}