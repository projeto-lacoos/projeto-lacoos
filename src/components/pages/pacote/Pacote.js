import "./PacoteModule.css";

import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import ModalPacote from "../../modalPacote/ModalPacote";
import NotificacaoLogar from '../../../service/notificacaoLogar/NotificacaoLogar'

import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { ApplicationContext } from "../../context/ApplicationProvider";

export default function Pacote() {
  const [modalPacote, setModalPacote] = useState(false);

  const { user, setAuth, auth } = useContext(ApplicationContext);

  const handleAbrirModal = () => {
    if (modalPacote === false) {
      setModalPacote(true);
    } else {
      setModalPacote(false);
    }
  };
  return (
    <>
      {modalPacote ? <ModalPacote handleAbrirModal={handleAbrirModal} /> : ""}
      <Navbar />
      <div className="container-pacote">
        <h2 className="titulo-pacotes">
          Sua história de amor
          <br />
          começa aqui!
        </h2>
        <div className="pacotes">
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
            <p className="ver-mais" onClick={handleAbrirModal}>
              Ver mais
            </p>
            <Link to={auth ? "/pagamento" : "/login"} className="btn">
              Case Agora
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
