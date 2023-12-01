import "./ModelPacoteModelu.css";

import { Link } from "react-router-dom";

export default function ModalPacote({ handleAbrirModal }) {
  return (
    <>
      <div className="pacotes">
        <div className="modal-pago">
          <div className="pacote">
            <h3 className="titulo-pacote">FELIZES PARA SEMPRE</h3>
            <p>Faça seu Orçamento</p>
            <ul className="lista-pacote">
              <li>Planejamento completo</li>
              <li>Convidados + Entrada</li>
              <li>Playlist</li>
              <li>Logística</li>
              <li>Espaço comunitário</li>
              <li>Modelos de convites</li>
              <li>Lista de presentes</li>
              <li>Bebidas não alcoólicas</li>
              <li>Doces e salgados</li>
              <li>Vestido de noiva</li>
              <li>Buquê de flores</li>
              <li>Decoração completa</li>
              <li>Modelos de convites</li>
              <li>Piso tátil</li>
            </ul>
            <Link to={"/pagamento"} className="btn">
              Case Agora
            </Link>
            <div className="btn-modal" onClick={handleAbrirModal}>
              X
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
