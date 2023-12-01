import "./PacoteModule.css";

import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import ModalPacote from "../../modalPacote/ModalPacote";
import { useState } from "react";

export default function Pacote() {
  const [modalPacote, setModalPacote] = useState(false)

  const handleAbrirModal = () => {
    if (modalPacote === false){
      setModalPacote(true)
    } else {
      setModalPacote(false)
    }
  }
  return (
    <>
      <Navbar />
      {modalPacote ? (<ModalPacote handleAbrirModal={handleAbrirModal} />) : ("")}
      <div className="container-pacote">
        <h2 className="titulo-pacotes">
          Sua história de amor
          <br />
          começa aqui!
        </h2>
        <div className="pacotes">
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
            <p className="ver-mais" onClick={handleAbrirModal}>Ver mais</p>
            <Link to={"/pagamento"} className="btn">
              Case Agora
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
