import { Link } from "react-router-dom";

import "./PerfilModule.css";

import LogoReduzida from '../../../img/perfil/logo-reduzida.svg'
import FotoPerfil from '../../../img/perfil/foto-perfil.svg'

export default function Perfil() {
  return (
    <div className="container-perfil">
      <div className="conteudo-container-perfil">
        <Link to={"/"}>
          <img src={LogoReduzida} alt="" />
        </Link>
        <div className="conteudo">
          <h2 className="titulo">MEU CASAMENTO</h2>
          <div className="funcoes-perfil">
            <img src={FotoPerfil} alt="" />
            <div className="funcoes">
              <p className="nome-usuario">Maria do Nascimento</p>
              <Link to={"#"}>
                <p>Meu Formulário</p>
              </Link>
              <Link to={"#"}>
                <p>Meu Pacote</p>
              </Link>
              <Link to={"#"}>
                <p>Convites</p>
              </Link>
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
                    <input
                      type="email"
                      name="email-user"
                      id="email-user"
                      placeholder="exemplo.sac@xxxx.com"
                    />
                  </div>
                  <div className="cel-tel">
                    <div className="grupo">
                      <label htmlFor="celular">Celular</label>
                      <input
                        type="tel"
                        name="celular"
                        id="celular"
                        placeholder="(xx) xxxxx-xxxx"
                      />
                    </div>
                    <div className="grupo">
                      <label htmlFor="telefone">Telefone</label>
                      <input
                        type="tel"
                        name="telefone"
                        id="telefone"
                        placeholder="(xx) xxxx-xxxx"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-user-d">
                  <div className="grupo">
                    <label htmlFor="idade">Idade</label>
                    <input
                      type="number"
                      name="idade"
                      id="idade"
                      placeholder="Sua idade"
                    />
                  </div>
                  <div className="grupo">
                    <label htmlFor="sexo">Sexo</label>
                    <input
                      type="text"
                      name="sexo"
                      id="sexo"
                      placeholder="F, M ou outro"
                    />
                  </div>
                </div>
              </div>
              <div className="btns-form-perfil">
                <button type="submit" className="btn-perfil">
                  Salvar alteração
                </button>
                <Link
                  to={"/recuperacao-senha"}
                  className="btn-perfil"
                >
                  Alterar senha
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
