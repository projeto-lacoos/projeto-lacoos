import TipoDaltonismo from "../tipoDaltonismo/TipoDaltonismo";
import "./ModoDaltonismoModule.css";

import DPDP from "../../img/modoDaltonismo/Deuteranomalia-Protanopia-Deuteranopia-Protanomalia.svg";
import Monocromacia from "../../img/modoDaltonismo/Monocromacia.svg";
import TritanopiaTritanomalia from "../../img/modoDaltonismo/Tritanopia-Tritanomalia.svg";
import Acromatopsia from "../../img/modoDaltonismo/Acromatopsia.svg";

export default function ModoDaltonismo({HandleModoDaltonismo}) {
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
                <TipoDaltonismo imagem={DPDP} tipos={"Deuteranomalia Protanopia Deuteranopia Protanomalia"} />
                <TipoDaltonismo imagem={Monocromacia} tipos={"Monocromacia"} />
                <TipoDaltonismo imagem={TritanopiaTritanomalia} tipos={"Tritanopia Tritanomalia"} />
                <TipoDaltonismo imagem={Acromatopsia} tipos={"Acromatopsia"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
