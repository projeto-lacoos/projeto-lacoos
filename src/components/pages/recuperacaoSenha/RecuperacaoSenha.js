import "./RecuperacaoSenhaModule.css";

import LogoReduzido from "../../../img/recuperacaoSenha/logoReduzido.png"
import Input from "../../input/Input";
import { Link } from "react-router-dom";

export default function RecuperacaoSenha() {
  return (
    <div className="container-recuperacao-senha">
      <div className="white">
        <img
          src={LogoReduzido}
          className="logo-reduzido"
          alt="Logo Entrelaçoos"
        />
      </div>
      <div className="image">
        <div className="box">
          <div className="textos">
            <h1>Recuperação de senha</h1>
            <p>
              Para recuperarmos sua senha, informe seu endereço de e-mail para
              que possamos enviar um link de redefinição de senha.
            </p>
          </div>
          <div className="valores">
            <label htmlFor={"email_usuario"}>E-mail</label>
            <Input type={"text"} placeholder={"Exemplo.sac@xxxx.com"} name={"email_usuario"}/>
          </div>
          <div className="button">
            <button>Enviar</button>
          </div>
          <Link
            style={{ textDecoration: "none" }}
            to={"/login"}
            className="voltar"
          >
            <p>Voltar</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
