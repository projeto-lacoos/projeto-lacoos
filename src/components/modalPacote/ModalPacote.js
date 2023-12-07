import "./ModelPacoteModelu.css";

import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ModalPacote({ handleAbrirModal }) {
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
    <>
      <div className="pacotes">
        <div className="modal-pago">
          <div className="pacote">
            <h3 className="titulo-pacote">FELIZES PARA SEMPRE</h3>
            <p className="orcamento">faça seu orçamento</p>
            <p className="planejamento">PLANEJAMENTO COMPLETO</p>
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
            <Link to={"/pagamento"} className={`btn ${getThemeClass(theme)}`}>
              Case Agora
            </Link>
            <div className={`btn-modal ${getThemeClass(theme)}`} onClick={handleAbrirModal}>
              X
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
