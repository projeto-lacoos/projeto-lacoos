import "./resetarSenha.css";

import Input from "../../input/Input";

import LogoReduzida from "../../../img/resetarSenha/logo-reduzida.svg";
import DPTT from "../../../img/resetarSenha/oo.svg";
import M from "../../../img/resetarSenha/oo-2.svg";
import PD from "../../../img/resetarSenha/oo-1.svg";
import A from "../../../img/resetarSenha/oo-3.svg";

import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ApplicationContext } from "../../context/ApplicationProvider";
import { ThemeContext } from "../../context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";

export default function ResetarSenha() {
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
  const { setAuth } = useContext(ApplicationContext);

  const params = useParams();

  const navigate = useNavigate();

  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  const [notificacao, setNotificacao] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (senha === confirmaSenha) {
      try {
        const response = await fetch(
          `http://localhost:8080/v1/user/reset-password/${params.token}`, {
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

        if (response.ok) {
          setTimeout(() => {
            setNotificacao(
              toast.success('Senha recuperada com sucesso!', {
                position: toast.POSITION.TOP_CENTER
              })
            )
          }, 250);
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        alert("Rode a API!");
      }
    } else {
      setTimeout(() => {
        setNotificacao(
          toast.error('Informe as senhas iguais.', {
            position: toast.POSITION.TOP_CENTER
          })
        )
      }, 250);
    }
  };

  return (
    <section className={`container-resetar-senha ${getThemeClass(theme)}`}>
      <img
        className="logo-reset-senha"
        src={getThemeLogo(theme)}
        alt="Logo da Laçoos, um sinal de infinito amarelo formado por duas letras o’s."
      />
      <div className="container_form_reset">
        <h2 className={`title_form_reset ${getThemeClass(theme)}`}>Nova Senha</h2>
        <label className={`label_new_password_reset ${getThemeClass(theme)}`}>
          Senha
          <Input
            type={"password"}
            className={`input-reset-senha ${getThemeClass(theme)}`}
            placeholder={"Senha"}
            onchange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </label>
        <label className={`label_new_password_reset ${getThemeClass(theme)}`}>
          Confirmação da senha
          <Input
            type={"password"}
            className={`input-reset-senha ${getThemeClass(theme)}`}
            placeholder={"Confirmar senha"}
            onchange={(e) => {
              setConfirmaSenha(e.target.value);
            }}
          />
        </label>
        <button
          className={`button_login_reset ${getThemeClass(theme)}`}
          type="submit"
          value={"SALVAR"}
          onClick={onSubmit}>
          Salvar
        </button>
        <ToastContainer />
      </div>
    </section>
  );
}
