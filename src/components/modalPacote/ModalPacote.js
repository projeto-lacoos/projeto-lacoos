import "./ModelPacoteModelu.css";

import { Link } from "react-router-dom";

export default function ModalPacote({handleAbrirModal}) {
  return (
    <>
      <div className="pacotes">
        <div className="modal-pago">
          <div className="pacote">
            <h3 className="titulo-pacote">FELIZES PARA SEMPRE</h3>
            <p>Faça seu Orçamento</p>
            <ul className="lista-pacote">
              <li>PLANEJAMENTO COMPLETO</li>
              <li className="lista-sem-bola">-&gt; convidados + entrada</li>
              <li className="lista-sem-bola">-&gt; playlist</li>
              <li className="lista-sem-bola">-&gt; logística</li>
              <li>ESPAÇO COMUNITÁRIO</li>
              <li>MODELOS DE CONVITES</li>
              <li>LISTA DE PRESENTES</li>
              <li>BEBIDAS NÃO ALCOÓLICAS</li>
              <li>DOCES E SALGADOS</li>
              <li>VESTIDO DE NOIVA</li>
              <li>BUQUÊ DE FLORES</li>
              <li>DECORAÇÃO COMPLETA</li>
              <li>MODELOS DE CONVITES</li>
              <li>PISO TÁTIL</li>
            </ul>
            <Link to={"/pagamento"} className="btn">
              Case Agora
            </Link>
          </div>
          <div className="btn-modal" onClick={handleAbrirModal}>Voltar</div>
        </div>
      </div>
    </>
  );
}
