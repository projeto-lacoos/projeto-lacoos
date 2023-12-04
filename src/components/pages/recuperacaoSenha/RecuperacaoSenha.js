import "./RecuperacaoSenhaModule.css";

import LogoReduzido from "../../../img/recuperacaoSenha/logoReduzido.png";
import Input from "../../input/Input";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

export default function RecuperacaoSenha() {

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
        console.log('passou do fetch!');
        const data = await response.json();
        console.log(data);
        if (typeof window !== undefined && response.ok) {
          // Navigate("/resetar-senha");
          navigate("/resetar-senha");
        }
      } catch (error) {
        console.log(error);
        alert('Algo deu errado! Mas enviou o email!');
      }
    }
  }

  return (
    <div className="container-recuperacao-senha">
      <div className="lado-e">
        <img src={LogoReduzido} className="logo-reduzido" alt="Logo Entrelaçoos" />
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
                onchange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div className="button-recuperacao-senha">
              <button type="submit" className="btn-recup-senha" onClick={onSubmit}>Enviar</button>
            </div>
          </form>
          <Link style={{ textDecoration: "none" }} to={"/login"} className="voltar-recuperacao-senha">Voltar</Link>
        </div>
      </div>
    </div>
  );
}
