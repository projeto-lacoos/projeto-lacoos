import "./RecuperacaoSenhaModule.css";


import LogoReduzida from '../../../img/recuperacaoSenha/logo-reduzida.svg'
import DPTT from "../../../img/recuperacaoSenha/oo.svg";
import M from "../../../img/recuperacaoSenha/oo-2.svg";
import PD from "../../../img/recuperacaoSenha/oo-1.svg";
import A from "../../../img/recuperacaoSenha/oo-3.svg";
import Input from "../../input/Input";
import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function RecuperacaoSenha() {
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

  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email !== '') {
      try {
        const response = await fetch('http://localhost:8080/v1/user/recover-password',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email
            })
          });
        if (typeof window !== undefined && response.ok) {
          navigate("/login");
        } else{
          alert("Email não encontrado!")
        }
      } catch (error) {
        console.log(error);
        alert('Algo deu errado! Mas enviou o email!');
      }
    }
  }

  return (
    <div className={`container-recuperacao-senha ${getThemeClass(theme)}`}>
      <div className="lado-e">
        <img src={getThemeLogo(theme)} className="logo-reduzido" alt="Logo da Laçoos, onde é uma imagem de duas alianças se entrelaçando" />
      </div>
      <div className="lado-d">
        <div className="box">
          <div className="textos">
            <h1 className={`h1-textos ${getThemeClass(theme)}`}>Recuperação de senha</h1>
            <p className="p-textos">Para recuperarmos sua senha, informe seu endereço de e-mail para que possamos enviar um link de redefinição de senha.</p>
          </div>
          <form className="form-recup-senh" action="">
            <div className="valores">
              <label className={`valor-label ${getThemeClass(theme)}`} htmlFor={"email_usuario"}>E-mail</label>
              <Input
                type={"text"}
                placeholder={"Exemplo.sac@xxxx.com"}
                name={`email_usuario`}
                className={`input-valor ${getThemeClass(theme)}`}
                onchange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div className="button-recuperacao-senha">
              <button type="submit" className={`btn-recup-senha ${getThemeClass(theme)}`} onClick={onSubmit}>Enviar</button>
            </div>
          </form>
          <Link style={{ textDecoration: "none" }} to={"/login"} className={`voltar-recuperacao-senha ${getThemeClass(theme)}`}>Voltar</Link>
        </div>
      </div>
    </div>
  );
}