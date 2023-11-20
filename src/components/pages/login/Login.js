import "./LoginModule.css";

import Logo from "../../../img/login/Logo2.png";

import { Link } from "react-router-dom";
import Input from "../../input/Input";

export default function Login() {
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
        <form className="form-login" method="post">
          <h2 className="title_form">LOGIN</h2>
          <label className="label_login">
            E-mail
            <Input className={"input-login"} type={"email"} placeholder={"exemplo.sac@xxxx.com"} name={"email_usuario"} />
          </label>
          <label className="label_login">
            Senha
            <Input className={"input-login"} type={"password"} placeholder={"Digite sua senha"} name={"senha_usuario"} />
          </label>
          <p>
            <Link to={"/recuperacao-senha"} className="link_login_password">
              Esqueceu a senha?
            </Link>
          </p>
          <input className="button_login" type="submit" defaultValue="ENTRAR" />
          <p>
            <Link to="/nova-conta" className="link_creat_cont">
              Não tem conta ainda? Crie agora
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}
