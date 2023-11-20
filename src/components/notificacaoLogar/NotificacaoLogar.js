import { Link } from "react-router-dom";
import "./NotificacaoLogarModelu.css";

export default function NotificacaoLogar() {
  return (
    <div className="container-notificacao-logar">
      <div className="notificacao-logar">
        <h2 className="titulo">
          VOCÊ PRECISA ESTAR
          <br />
          LOGADO PARA ACESSAR
          <br />
          NOSSOS PACOTES.
        </h2>
        <Link to={"/login"}>
          <p>
            AINDA NÃO ESTÁ CADASTRADO?
            <br />
            CRIE SUA CONTA AGORA E COMECE SUA JORNADA!
          </p>
        </Link>
      </div>
    </div>
  );
}
