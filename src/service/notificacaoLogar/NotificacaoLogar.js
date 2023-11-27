import { Link } from "react-router-dom";
import "./NotificacaoLogarModelu.css";

export default function NotificacaoLogar() {
  return (
    <div className="container-notificacao-logar">
      <div className="container-notificacao">
        <div className="notificacao-logar">
          <h2 className="titulo">
            VOCÊ PRECISA ESTAR LOGADO PARA ACESSAR NOSSOS PACOTES.
          </h2>
          <Link to={"/login"}>
            <p className="notificacao-paragrafo">
              AINDA NÃO ESTÁ CADASTRADO? CRIE SUA CONTA AGORA E COMECE SUA JORNADA!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
