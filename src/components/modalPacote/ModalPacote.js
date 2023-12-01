import "./ModelPacoteModelu.css";

import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";

export default function ModalPacote({ handleAbrirModal }) {
  return (
    <>
      <div className="pacotes">
        <div className="modal-pago">
          <div className="pacote">
            <h3 className="titulo-pacote">FELIZES PARA SEMPRE</h3>
            <p>Faça seu Orçamento</p>
            <ul className="lista-pacote">
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Convidados + Entrada
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Playlist
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Logística
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Espaço comunitário
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Modelos de convites
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Lista de presentes
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Bebidas não alcoólicas
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Doces e salgados
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Vestido de noiva
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Buquê de flores
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Decoração completa
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Modelos de convites
              </li>
              <li>
                <span className="icone">
                  <FaRegCheckCircle />
                </span>
                Piso tátil
              </li>
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
