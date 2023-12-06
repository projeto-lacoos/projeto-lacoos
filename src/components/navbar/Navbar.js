import "./navbarModule.css";

import { Link } from "react-router-dom";

import LogoReduzida from "../../img/navbar/logo-reduzida.svg";
import FotoPerfil from "../../img/navbar/foto-perfil.svg";
import FotoUser from "../../img/navbar/foto-user.svg";

import { ApplicationContext } from "../context/ApplicationProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
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
            <span className="hamburguer" />
          </div>
        </label>
        <div className="modal-navbar">
          <div className="navbar-e" />
          <div className="navbar-d">
            <ul className="itens-menu">
              {auth ? (
                <>
                  <li>
                    <img className="logo-reduzida" src={LogoReduzida} alt="" />
                  </li>
                  <li>
                    <Link className="logar item" to={"/perfil"}>
                      <img className="user" src={FotoUser} alt="" />
                      <span>{user.name ? user.name : "Maria do Nascimento"}</span>
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
                    <img className="logo-reduzida" src={LogoReduzida} alt="" />
                  </li>
                  <li>
                    <Link className="logar item" to={"/login"}>
                      <img className="user" src={FotoUser} alt="" />
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