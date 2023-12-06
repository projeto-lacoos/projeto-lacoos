import TipoDaltonismo from "../tipoDaltonismo/TipoDaltonismo";

import "./ModoDaltonismoModule.css";

import DPTT from "../../img/modoDaltonismo/DPTT.svg";
import M from "../../img/modoDaltonismo/M.svg";
import PD from "../../img/modoDaltonismo/PD.svg";
import A from "../../img/modoDaltonismo/A.svg";

export default function ModoDaltonismo({ HandleModoDaltonismo }) {
  return (
    <div className="container-modo-daltonismo">
      <div className="caixa">
        <div className="conteudo-caixa">
          <div className="modo-daltonismo-caixa">
            <span onClick={HandleModoDaltonismo} className="btn-voltar">
              Voltar
            </span>
            <div className="escolhas-modo-daltonismo">
              <h2 className="titulo-escolha">Escolha o modo daltonismo</h2>
              <div className="tipos-daltonismo">
                <TipoDaltonismo
                  imagem={DPTT}
                  tipos={"Deuteranomalia Protanomalia Tritanomalia Tritanopia"}
                  classe={"DPTT"}
                />
                <TipoDaltonismo
                  imagem={M}
                  tipos={"Monocromacia"}
                  classe={"M"}
                />
                <TipoDaltonismo
                  imagem={PD}
                  tipos={"Protanopia Deuteranopia"}
                  classe={"PD"}
                />
                <TipoDaltonismo
                  imagem={A}
                  tipos={"Acromatopsia"}
                  classe={"A"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
