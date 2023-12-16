import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

import { ApplicationContext } from "../../context/ApplicationProvider";

import "./PerfilModule.css";

import Input from "../../input/Input";
import Footer from '../../footer/Footer'

import LogoReduzida from "../../../img/perfil/logo-reduzida.svg";
import DPTT from "../../../img/perfil/oo.svg";
import M from "../../../img/perfil/oo-2.svg";
import PD from "../../../img/perfil/oo-1.svg";
import A from "../../../img/perfil/oo-3.svg";

import FotoUserDPTT from "../../../img/perfil/foto-user-DPTT.svg";
import FotoUserM from "../../../img/perfil/foto-user-M.svg";
import FotoUserPD from "../../../img/perfil/foto-user-PD.svg";
import FotoUserA from "../../../img/perfil/foto-user-A.svg";
import FotoUser from "../../../img/perfil/foto-user.svg";

import { ThemeContext } from "../../context/ThemeContext";


export default function Perfil() {
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

  const { user, setAuth } = useContext(ApplicationContext);

  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/");
    localStorage.clear();
    setAuth(false);
    window.location.reload();
  }

  const logoutUserAlterarSenha = () => {
    navigate("/recuperacao-senha");
    localStorage.clear();
    setAuth(false);
    window.location.reload();
  }

  return (
    <>
      <div className={`container-perfil ${getThemeClass(theme)}`}>
        <div className="conteudo-container-perfil">
          <div className="conteudo">
            <header className="header">
              <Link to={"/"}>
                <img className="logo-perfil" src={getThemeLogo(theme)} alt="Logo da Laçoos, um sinal de infinito amarelo formado por duas letras o’s." />
              </Link>
              <h2 className={`titulo-perfil ${getThemeClass(theme)}`}>MEU CASAMENTO</h2>
            </header>
            <div className="funcoes-perfil">
              <img className={`foto-perfil ${getThemeClass(theme)}`} src={getFotoUser(theme)} alt="Foto de uma imagem em forma de humanoide sem feição, sem roupa, de apenas uma cor" />
              <div className="funcoes">
                <ul>
                  <li className="nome-usuario">Olá, {user?.name}</li>
                  <Link to={"/formulario"}>
                    <li className="lista-perfil">Meu Formulário</li>
                  </Link>
                  <Link to={"/convites"}>
                    <li className="lista-perfil">Convites</li>
                  </Link>
                  <Link to={"/sobre"}>
                    <li className="lista-perfil">Sobre Nós</li>
                  </Link>
                </ul>
                <Link to={"/"}>
                  <button onClick={logoutUser} className="btn">Desconectar</button>
                </Link>
              </div>
            </div>
            <div className={`container-form-perfil ${getThemeClass(theme)}`}>
              <form className={`form-perfil ${getThemeClass(theme)}`}>
                <div className="inputs-form-perfil">
                  <div className={`form-user-e ${getThemeClass(theme)}`}>
                    <div className="grupo">
                      <label htmlFor="email-user">Login</label>
                      <Input
                        className={`input-perfil ${getThemeClass(theme)}`}
                        type={"email"}
                        placeholder={user?.email}
                        name={"email-user"}
                        id={"email-user"}
                      />
                    </div>
                    <div className="cel-tel">
                      <div className="grupo">
                        <label htmlFor="celular">Celular</label>
                        <Input
                          className={`input-perfil ${getThemeClass(theme)}`}
                          type={"tel"}
                          placeholder={user?.phone ? user?.phone : "Informe um telefone"}
                          name={"celular"}
                          id={"celular"}
                        />
                      </div>
                      <div className="grupo">
                        <label htmlFor="telefone">Telefone</label>
                        <Input
                          className={`input-perfil ${getThemeClass(theme)}`}
                          type={"tel"} 
                          placeholder={user.telephone ? user.telephone : "Informe um telefone"}
                          name={"telefone"}
                          id={"telefone"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`form-user-d ${getThemeClass(theme)}`}>
                    <div className="grupo">
                      <label htmlFor="idade">Data de Nascimento</label>
                      <Input
                        className={`input-perfil ${getThemeClass(theme)}`}
                        type={"text"}
                        placeholder={user.birthDate ? user.birthDate : "Sua data de nascimento"}
                        name={"idade"}
                        id={"idade"}
                      />
                    </div>
                    <div className="grupo">
                      <label htmlFor="sexo">Sexo</label>
                      <Input
                        className={`input-perfil ${getThemeClass(theme)}`}
                        type={"text"}
                        placeholder={user?.sexo ? user?.sexo : "F, M ou outro"}
                        name={"sexo"}
                        id={"sexo"}
                      />
                    </div>
                  </div>
                </div>
                <div className="btns-form-perfil">
                  <Link to={"/"}>
                    <button type="submit" className={`btn-perfil ${getThemeClass(theme)}`}>
                      Voltar ao início
                    </button>
                  </Link>
                  <button onClick={logoutUserAlterarSenha}
                    className={`btn-perfil ${getThemeClass(theme)}`}>
                    Recuperar senha
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
