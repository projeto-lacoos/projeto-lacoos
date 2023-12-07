import "./LoginModule.css";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import Input from "../../input/Input";
import { ApplicationContext } from "../../context/ApplicationProvider";
import { jwtDecode } from 'jwt-decode'
import Logo from "../../../img/login/Logo2.png";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

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
  const { setUser, setLocalUser, setAuth } = useContext(ApplicationContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate()

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

        if (typeof window !== undefined && response.ok) {
          const token = data.token;
          if (token) {
            window.localStorage.setItem('token', token);
            const localUser = jwtDecode(token);
            setUser(localUser)
            setAuth(true)
            navigate("/")
          }
        } else {
          alert("Usuário ou senha estão inválidos!");
        }
      } catch (error) {
        console.log(error);
        alert('Algo deu errado!');
      }
    }
  }

  return (
    <div className="header_logo">
      <ul className="nav_logo">
        <li>BEM VINDO</li>
        <li>
          <Link to={"/"}>
            <img src={Logo} alt="Logo imagem" />
          </Link>
        </li>
      </ul>
      <section className="container-login">
        <div className="form-login">
          <h2 className="title_form">LOGIN</h2>
          <label className="label_login">
            E-mail
            <Input className={"input-login"} type={"email"} placeholder={"exemplo.sac@xxxx.com"} name={"email_usuario"} onchange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label className="label_login">
            Senha
            <Input className={"input-login"} type={"password"} placeholder={"Digite sua senha"} name={"senha_usuario"} onchange={(e) => { setSenha(e.target.value) }} />
          </label>
          <button className="button_login" onClick={(e) => { onSubmit(e) }}>ENTRAR</button>
          <div className="container-links-login">
            <Link to={"/recuperacao-senha"} className="link_login_password">
              Esqueceu a senha?
            </Link>
            <Link to="/nova-conta" className="link_creat_cont">
              Não tem conta ainda? Crie agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}