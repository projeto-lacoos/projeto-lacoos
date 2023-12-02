import "./RecuperacaoSenhaModule.css";

import LogoReduzido from "../../../img/recuperacaoSenha/logoReduzido.png";
import Input from "../../input/Input";
import { Link } from "react-router-dom";

export default function RecuperacaoSenha() {
  return (
    <div className="container-recuperacao-senha">
      <div className="lado-e">
        <img src={LogoReduzido} className="logo-reduzido" alt="Logo Entrelaçoos"/>
      </div>
      <div className="lado-d">
        <div className="box">
          <div className="textos">
            <h1 className="h1-textos">Recuperação de senha</h1>
            <p className="p-textos">Para recuperarmos sua senha, informe seu endereço de e-mail para que possamos enviar um link de redefinição de senha.</p>
          </div>
          <form className="form-recup-senh" action="">
            <div className="valores">
              <label className="valor-label" htmlFor={"email_usuario"}>E-mail</label>
              <Input
                type={"text"}
                placeholder={"Exemplo.sac@xxxx.com"}
                name={"email_usuario"}
                className={"input-valor"}
              />
            </div>
            <div className="button-recuperacao-senha">
              <button type="submit" className="btn-recup-senha">Enviar</button>
            </div>
          </form>
          <Link style={{ textDecoration: "none" }} to={"/login"} className="voltar-recuperacao-senha">Voltar</Link>
        </div>
      </div>
    </div>
  );
}
