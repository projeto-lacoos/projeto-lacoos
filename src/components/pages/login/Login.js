import "./LoginModule.css";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import Input from "../../input/Input";
import { ApplicationContext } from "../../context/ApplicationProvider";
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

import LogoReduzida from '../../../img/login/logo-reduzida.svg'
import DPTT from "../../../img/login/oo.svg";
import M from "../../../img/login/oo-2.svg";
import PD from "../../../img/login/oo-1.svg";
import A from "../../../img/login/oo-3.svg";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

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

  const { setUser, setLocalUser, setAuth } = useContext(ApplicationContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [notificacao, setNotificacao] = useState(null);

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email !== '' && senha !== '') {
      try {
        const response = await fetch('http://localhost:8080/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
          },
          body: JSON.stringify({
            email: email,
            password: senha
          })
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          const token = data.token;
          if (token) {
            window.localStorage.setItem('token', token);
            const localUser = jwtDecode(token);
            setUser(localUser);
            setAuth(true);
          }
          navigate("/");
          setTimeout(() => {
            setNotificacao(
              toast.success(`Olá, você logou :)`, {
                position: toast.POSITION.TOP_RIGHT,
              })
            )
          }, 3500);
        } else {
          toast.error('Usuário ou senha estão inválidos!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3500
          });
        }
      } catch (error) {
        console.log(error);
        alert('Algo deu errado!');
      }
    }
  }

  return (
    <div className={`header_logo ${getThemeClass(theme)}`}>
      <ul className="nav_logo">
        <li className={`${getThemeClass(theme)}`}>BEM VINDO</li>
        <li>
          <Link to={"/"}>
            <img src={getThemeLogo(theme)} alt="Logo da Laçoos, um sinal de infinito amarelo formado por duas letras o’s." />
          </Link>
        </li>
      </ul>
      <section className="container-login">
        <div className="form-login">
          <h2 className={`title_form ${getThemeClass(theme)}`}>LOGIN</h2>
          <label className={`label_login ${getThemeClass(theme)}`}>
            E-mail
            <Input className={`input-login ${getThemeClass(theme)}`} type={"email"} placeholder={"exemplo.sac@xxxx.com"} name={"email_usuario"} onchange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label className={`label_login ${getThemeClass(theme)}`}>
            Senha
            <Input className={`input-login ${getThemeClass(theme)}`} type={"password"} placeholder={"Digite sua senha"} name={"senha_usuario"} onchange={(e) => { setSenha(e.target.value) }} />
          </label>
          <button className={`button_login ${getThemeClass(theme)}`} onClick={onSubmit}>ENTRAR</button>
          <ToastContainer />
          <div className={`container-links-login`}>
            <Link to={"/recuperacao-senha"} className={`link_login_password ${getThemeClass(theme)}`}>
              Esqueceu a senha?
            </Link>
            <Link to="/nova-conta" className={`link_creat_cont ${getThemeClass(theme)}`}>
              Não tem conta ainda? Crie agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}