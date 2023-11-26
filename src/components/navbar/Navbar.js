import "./navbarModule.css";

import { Link } from "react-router-dom";

import LogoReduzida from '../../img/navbar/logo-reduzida.svg'
import FotoPerfil from '../../img/navbar/foto-perfil.svg'

export default function Navbar() {
  return (
    <div className="home-navbar">
      <nav className="navbar">
        <input type="checkbox" name="" id="menu-hamburguer" />
        <label className="menu-label" htmlFor="menu-hamburguer">
          <div className="menu">
            <span className="hamburguer" />
          </div>
        </label>
        <div className="modal-navbar">
          <div className="navbar-e" />
          <div className="navbar-d">
            <ul className="itens-menu">
              <li>
                <img className="logo-reduzida" src={LogoReduzida} alt=""/>
              </li>
              <li>
                <Link className="logar item" to={"/perfil"}>
                  <img className="user" src={FotoPerfil} alt="" />
                  <span>Maria do Nascimento</span>
                </Link>
              </li>
              <li>
                <Link className="item" to={"/"}>
                  Início
                </Link>
              </li>
              <li>
                <Link className="item" to={"/pacote"}>
                  Pacotes
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
              {/* <li>
                <Link id="modo-daltonismo" className="item">
                  Modo Daltonismo
                </Link>
              </li> */}
              <li>
                <Link id="notificacao-logar" className="item" to={"/notificacao-logar"}>
                  Notificação Logar
                </Link>
              </li>
              <li>
                <Link className="item" to={"/"}>
                  Desconectar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
