import Input from "../../input/Input";
import Logo from "../../../img/contaNova/logo.png";
import { Link, useNavigate } from "react-router-dom";

import "./NovaContaModule.css";

import Footer from "../../footer/Footer";
import { useState } from "react";

export default function NovaConta() {

  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if(nome !== "" && dataNasc !== "" && celular !== "" && telefone !== "" && sexo !== "" && email !== "" && senha !== ""){
      try{
        const response = await fetch("http://localhost:8080/v1/auth/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: nome,
            birthdate: dataNasc,
            phone: celular,
            telephone: telefone,
            sexo: sexo,
            email: email,
            password: senha
          })
        });

        console.log("Cadastrado com sucesso!");
        const data = await response.json();
        console.log(data);
        navigate("/");

      } catch(error){
        console.log(error);
        console.log("Algo deu errado! Formatação da data!");
      }
    } else {
      console.log("Insira um valor para todos os campos!");
    }
  }

  return (
    <>
      <div className="body-conta-nova">
        <header className="header_logo_nova_conta">
          <Link to="/">
            <img src={Logo} alt="Logo aliança" />
          </Link>
        </header>
        <div className="container-conta-nova">
          <form className="form-conta-nova" action="post">
            <header className="title_forms">
              <h3 className="title">Seu Cadastro</h3>
            </header>
            <div className="row_form">
              <div className="form_dados">
                <div className="form_dados_line">
                  <label className="form_dados_label01">
                    Nome
                    <Input
                      className={"input input_name"}
                      type={"text"}
                      placeholder={"Nome e sobrenome"}
                      name={"nome_cliente"}
                      onchange={(e) => { setNome(e.target.value)}}
                    />
                  </label>
                  <label className="form_dados_label02">
                    Data de nascimento
                    <Input
                      className={"input input_idade"}
                      type={"date"}
                      placeholder={"Sua idade"}
                      name={"idade_cliente"}
                      onchange={(e) => { setDataNasc(e.target.value)}}
                    />
                  </label>
                </div>
                <div className="form_dados_line">
                  <label className="form_dados_label01">
                    Celular
                    <Input
                      className={"input input_celular"}
                      type={"tel"}
                      placeholder={"(xx) xxxxx-xxxx"}
                      name={"celular_cliente"}
                      onchange={(e) => { setCelular(e.target.value)}}
                    />
                  </label>
                  <label className="form_dados_label02 ">
                    Telefone
                    <Input
                      className={"input input_telefone"}
                      type={"tel"}
                      placeholder={"(xx) xxxxx-xxxx"}
                      name={"telefone_cliente"}
                      onchange={(e) => { setTelefone(e.target.value)}}
                    />
                  </label>
                </div>
                <div className="form_dados_line">
                  <label className="form_dados_label01">
                    E-mail
                    <Input
                      className={"input input_email"}
                      type={"email"}
                      placeholder={"Exemplo.sac@xxxx.com"}
                      name={"email_cliente"}
                      onchange={(e) => { setEmail(e.target.value)}}
                    />
                  </label>
                  <label className="form_dados_label02">
                    Sexo
                    <Input
                      className={"input input_sexo"}
                      type={"text"}
                      placeholder={"F, M ou outro"}
                      name={"sexo_cliente"}
                      onchange={(e) => { setSexo(e.target.value)}}
                    />
                  </label>
                </div>
                <div className="form_dados_line">
                  <label className="form_dados_label01">
                    Senha
                    <Input
                      className={"input input_senha"}
                      type={"password"}
                      placeholder={"Digite sua senha"}
                      name={"senha_cliente"}
                      onchange={(e) => { setSenha(e.target.value)}}
                    />
                  </label>
                  <label className="form_dados_label02">
                    Confirmação Senha
                    <Input
                      className={"input input_confirmacao"}
                      type={"password"}
                      placeholder={"Digite novamente a senha"}
                      name={"confirmacao_senha"}
                    />
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
                  onClick={(e) => { onSubmit(e) }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}