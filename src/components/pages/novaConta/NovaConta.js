import Input from "../../input/Input";
import Logo from '../../../img/contaNova/logo.png'
import { Link } from "react-router-dom";

import './NovaContaModule.css'

export default function NovaConta() {
  return (
    <div className="body-conta-nova">
      <header className="header_logo_nova_conta">
        <Link to="/">
          <img src={Logo} alt="Logo aliança" />
        </Link>
      </header>
      <div className="container-conta-nova">
        <form className="form-conta-nova" action="post">
          <header className="title_forms">
            <h3>Seu Cadastro</h3>
          </header>
          <div className="row_form">
            <div className="form_dados">
              <div className="form_dados_line">
                <label className="form_dados_label01">
                  Nome
                  <Input className={"input input_name"} type={"text"} placeholder={"Nome e sobrenome"} name={"nome_cliente"} />
                </label>
                <label className="form_dados_label02">
                  Idade
                  <Input className={"input input_idade"} type={"text"} placeholder={"Sua idade"} name={"idade_cliente"} />
                </label>
              </div>
              <div className="form_dados_line">
                <label className="form_dados_label01">
                  Celular
                  <Input className={"input input_celular"} type={"tel"} placeholder={"(xx) xxxxx-xxxx"} name={"celular_cliente"} />
                </label>
                <label className="form_dados_label02 ">
                  Telefone
                  <Input className={"input input_telefone"} type={"tel"} placeholder={"(xx) xxxxx-xxxx"} name={"telefone_cliente"} />
                </label>
              </div>
              <div className="form_dados_line">
                <label className="form_dados_label01">
                  E-mail
                  <Input className={"input input_email"} type={"email"} placeholder={"Exemplo.sac@xxxx.com"} name={"email_cliente"} />
                </label>
                <label className="form_dados_label02">
                  Sexo
                  <Input className={"input input_sexo"} type={"text"} placeholder={"F, M ou outro"} name={"sexo_cliente"} />
                </label>
              </div>
              <div className="form_dados_line">
                <label className="form_dados_label01">
                  Senha
                  <Input className={"input input_senha"} type={"password"} placeholder={"Digite sua senha"} name={"senha_cliente"} />
                </label>
                <label className="form_dados_label02">
                  Confirmação Senha
                  <Input className={"input input_confirmacao"} type={"password"} placeholder={"Digite novamente a senha"} name={"confirmacao_senha"} />
                </label>
              </div>
            </div>
            <div className="form_termos">
              <p className="title_termos">Termos de uso</p>
              <textarea className="box_termos" defaultValue={""} />
              <input
                className="input input_submit"
                type="submit"
                defaultValue="SALVAR"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
