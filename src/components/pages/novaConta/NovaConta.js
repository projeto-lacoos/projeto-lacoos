import Input from "../../input/Input";
import { Link, useNavigate } from "react-router-dom";

import "./NovaContaModule.css";

import LogoReduzida from '../../../img/login/logo-reduzida.svg'
import DPTT from "../../../img/login/oo.svg";
import M from "../../../img/login/oo-2.svg";
import PD from "../../../img/login/oo-1.svg";
import A from "../../../img/login/oo-3.svg";

import Footer from "../../footer/Footer";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";

export default function NovaConta() {
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
            birthDate: dataNasc,
            phone: celular,
            telephone: telefone,
            sexo: sexo,
            email: email,
            password: senha
          })
        });

        alert("Cadastrado com sucesso!");
        const data = await response.json();
        console.log(data);
        navigate("/");

      } catch(error){
        console.log(error);
        alert("Algo deu errado!");
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
            <img src={getThemeLogo(theme)} alt="Logo da Laçoos, onde é uma imagem de duas alianças se entrelaçando" />
          </Link>
        </header>
        <div className="container-conta-nova">
          <form className="form-conta-nova" action="post">
            <header className="title_forms">
              <h3 className={`title ${getThemeClass(theme)}`}>Seu Cadastro</h3>
            </header>
            <div className="row_form">
              <div className="form_dados">
                <div className="form_dados_line">
                  <label className={`form_dados_label01 ${getThemeClass(theme)}`}>
                    Nome
                    <Input
                      className={`input input_name ${getThemeClass(theme)}`}                      type={"text"}
                      placeholder={"Nome e sobrenome"}
                      name={"nome_cliente"}
                      onchange={(e) => { setNome(e.target.value)}}
                    />
                  </label>
                  <label className={`form_dados_label02 ${getThemeClass(theme)}`}>
                    Data de nascimento
                    <Input
                      className={`input input_idade ${getThemeClass(theme)}`}
                      type={"date"}
                      placeholder={"Sua idade"}
                      name={"idade_cliente"}
                      onchange={(e) => {
                        setDataNasc(e.target.value)
                      }}
                    />
                  </label>
                </div>
                <div className="form_dados_line">
                  <label className={`form_dados_label01 ${getThemeClass(theme)}`}>
                    Celular
                    <Input
                      className={`input input_celular ${getThemeClass(theme)}`}
                      type={"tel"}
                      placeholder={"(xx) xxxxx-xxxx"}
                      name={"celular_cliente"}
                      onchange={(e) => { setCelular(e.target.value)}}
                    />
                  </label>
                  <label className={`form_dados_label02 ${getThemeClass(theme)}`}>
                    Telefone
                    <Input
                      className={`input input_telefone ${getThemeClass(theme)}`}
                      type={"tel"}
                      placeholder={"(xx) xxxxx-xxxx"}
                      name={"telefone_cliente"}
                      onchange={(e) => { setTelefone(e.target.value)}}
                    />
                  </label>
                </div>
                <div className="form_dados_line">
                  <label className={`form_dados_label01 ${getThemeClass(theme)}`}>
                    E-mail
                    <Input
                      className={`input input_email ${getThemeClass(theme)}`}
                      type={"email"}
                      placeholder={"Exemplo.sac@xxxx.com"}
                      name={"email_cliente"}
                      onchange={(e) => { setEmail(e.target.value)}}
                    />
                  </label>
                  <label className={`form_dados_label02 ${getThemeClass(theme)}`}>
                    Sexo
                    <Input
                      className={`input input_sexo ${getThemeClass(theme)}`}
                      type={"text"}
                      placeholder={"F, M ou outro"}
                      name={"sexo_cliente"}
                      onchange={(e) => { setSexo(e.target.value)}}
                    />
                  </label>
                </div>
                <div className="form_dados_line">
                  <label className={`form_dados_label01 ${getThemeClass(theme)}`}>
                    Senha
                    <Input
                      className={`input input_senha ${getThemeClass(theme)}`}
                      type={"password"}
                      placeholder={"Digite sua senha"}
                      name={"senha_cliente"}
                      onchange={(e) => { setSenha(e.target.value)}}
                    />
                  </label>
                  <label className={`form_dados_label02 ${getThemeClass(theme)}`}>
                    Confirmação Senha
                    <Input
                      className={`input input_confirmacao ${getThemeClass(theme)}`}
                      type={"password"}
                      placeholder={"Digite novamente a senha"}
                      name={"confirmacao_senha"}
                    />
                  </label>
                </div>
              </div>
              <div className="form_termos">
                <p className={`title_termos ${getThemeClass(theme)}`}>Termos de uso</p>
                <textarea className={`box_termos ${getThemeClass(theme)}`} defaultValue={""} />
                <input
                  className={`input input_submit ${getThemeClass(theme)}`}
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