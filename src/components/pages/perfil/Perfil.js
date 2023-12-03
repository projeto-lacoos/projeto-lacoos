import { Link } from "react-router-dom";

import "./PerfilModule.css";

import Input from "../../input/Input";
import Footer from '../../footer/Footer'

import LogoReduzida from "../../../img/perfil/logo-reduzida.svg";
import FotoPerfil from "../../../img/perfil/foto-perfil.svg";


export default function Perfil() {

  return (
    <>
      <div className="container-perfil">
        <div className="conteudo-container-perfil">
          <div className="conteudo">
            <header className="header">
              <Link to={"/"}>
                <img className="logo-perfil" src={LogoReduzida} alt="" />
              </Link>
              <h2 className="titulo-perfil">MEU CASAMENTO</h2>
            </header>
            <div className="funcoes-perfil">
              <img className="foto-perfil" src={FotoPerfil} alt="" />
              <div class="funcoes">
                <ul>
                  <li className="nome-usuario">Oi</li>
                  <Link to={"#"}>
                    <li className="lista-perfil">Meu Formulário</li>
                  </Link>
                  <Link to={"#"}>
                    <li className="lista-perfil">Meu Pacote</li>
                  </Link>
                  <Link to={"#"}>
                    <li className="lista-perfil">Convites</li>
                  </Link>
                </ul>
                <Link to={"/"}>
                  <button className="btn">Desconectar</button>
                </Link>
              </div>
            </div>
            <div className="container-form-perfil">
              <form action="" method="post" className="form-perfil">
                <div className="inputs-form-perfil">
                  <div className="form-user-e">
                    <div className="grupo">
                      <label htmlFor="email-user">Login</label>
                      <Input
                        className={"input-perfil"}
                        type={"email"}
                        placeholder={"exemplo.sac@xxxx.com"}
                        name={"email-user"}
                        id={"email-user"}
                      />
                    </div>
                    <div className="cel-tel">
                      <div className="grupo">
                        <label htmlFor="celular">Celular</label>
                        <Input
                          className={"input-perfil"}
                          type={"tel"}
                          placeholder={"(xx) xxxxx-xxxx"}
                          name={"celular"}
                          id={"celular"}
                        />
                      </div>
                      <div className="grupo">
                        <label htmlFor="telefone">Telefone</label>
                        <Input
                          className={"input-perfil"}
                          type={"tel"}
                          placeholder={"(xx) xxxx-xxxx"}
                          name={"telefone"}
                          id={"telefone"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-user-d">
                    <div className="grupo">
                      <label htmlFor="idade">Idade</label>
                      <Input
                        className={"input-perfil"}
                        type={"number"}
                        placeholder={"Sua idade"}
                        name={"idade"}
                        id={"idade"}
                      />
                    </div>
                    <div className="grupo">
                      <label htmlFor="sexo">Sexo</label>
                      <Input
                        className={"input-perfil"}
                        type={"text"}
                        placeholder={"F, M ou outro"}
                        name={"sexo"}
                        id={"sexo"}
                      />
                    </div>
                  </div>
                </div>
                <div className="btns-form-perfil">
                  <button type="submit" className="btn-perfil">
                    Salvar alteração
                  </button>
                  <Link to={"/recuperacao-senha"} className="btn-perfil">
                    Alterar senha
                  </Link>
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
