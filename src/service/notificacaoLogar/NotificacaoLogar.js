import "./NotificacaoLogarModelu.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../components/context/ThemeContext";

export default function NotificacaoLogar() {
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
  return (
    <div className="container-notificacao-logar">
      <div className="container-notificacao">
        <div className={`notificacao-logar ${getThemeClass(theme)}`}>
          <h2 className="titulo">
            VOCÊ PRECISA ESTAR LOGADO PARA ACESSAR NOSSOS PACOTES.
          </h2>
          <Link className="link-login" to={"/login"}>
            <p className={`notificacao-paragrafo ${getThemeClass(theme)}`}>
              AINDA NÃO ESTÁ CADASTRADO? CRIE SUA CONTA AGORA E COMECE SUA JORNADA!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
