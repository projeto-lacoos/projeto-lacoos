import "./resetarSenha.css";

import Input from "../../input/Input";

import LogoReduzida from "../../../img/resetarSenha/logo-reduzida.svg";

import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApplicationContext } from "../../context/ApplicationProvider";

export default function ResetarSenha() {
  const { setAuth } = useContext(ApplicationContext);

  const params = useParams();

  const navigate = useNavigate();

  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (senha === confirmaSenha) {
      try {
        let token;
        const response = await fetch(
          `http://localhost:8080/v1/user/reset-password/${params.token}`, // ${} | 87b6246c-35e7-4bc8-9e07-0334e79ca2f7
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              password: senha,
              confirmPassword: confirmaSenha,
            }),
          }
        );

        /* /* console.log(`${token}`);
        const data = await response.json();
        console.log(data); */

        /* localStorage.clear();
        setAuth(false);
        navigate("/login");
        // window.location.reload(); 
        const data = await response.json();
        */

        if (typeof window !== undefined && response.ok) {
          localStorage.clear();
          setAuth(false);
          navigate("/login");
        }

      } catch (error) {
        console.log(error);
        alert("Algo deu errado! Mas enviou o email!");
      }
    } else {
      console.log("Informe as senhas iguais.");
    }
  };

  return (
    <section className="container-resetar-senha">
      <img
        className="logo-reset-senha"
        src={LogoReduzida}
        alt="Logo da Laçoos, onde é uma imagem de duas alianças se entrelaçando"
      />
      <div class="container_form_reset">
        <h2 className="title_form_reset">NOVA SENHA</h2>
        <label className="label_new_password_reset">
          Senha
          <Input
            className={"input-reset-senha"}
            placeholder={"Senha"}
            onchange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </label>
        <label className="label_new_password_reset">
          Confirmação da senha
          <Input
            className={"input-reset-senha"}
            placeholder={"Confirmar senha"}
            onchange={(e) => {
              setConfirmaSenha(e.target.value);
            }}
          />
        </label>
        <button
          className="button_login_reset"
          type="submit"
          value={"SALVAR"}
          onClick={onSubmit}
        >
          Salvar
        </button>
      </div>
    </section>
  );
}
