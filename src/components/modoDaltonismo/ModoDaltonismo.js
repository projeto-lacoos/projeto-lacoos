import { Link } from "react-router-dom";

import "./ModoDaltonismoModule.css";

import DPDP from '../../img/modoDaltonismo/Deuteranomalia-Protanopia-Deuteranopia-Protanomalia.svg'
import Monocromacia from '../../img/modoDaltonismo/Monocromacia.svg'
import TritanopiaTritanomalia from '../../img/modoDaltonismo/Tritanopia-Tritanomalia.svg'
import Acromatopsia from '../../img/modoDaltonismo/Acromatopsia.svg'

export default function ModoDaltonismo({HandleModoDaltonismo}) {
  return (
    <div className="container-modo-daltonismo">
      <div className="caixa">
        <div className="conteudo-caixa">
          <div className="modo-daltonismo-caixa">
            <span onClick={HandleModoDaltonismo} className="btn-voltar">Voltar</span>
            <div className="escolhas-modo-daltonismo">
              <h2 className="titulo-escolha">Escolha o modo daltonismo</h2>
              <div className="tipos-daltonismo">
                <div className="tipo-daltonismo">
                  <div className="nome-daltonismo">
                    <p>Deuteranomalia</p>
                    <p>Protanopia</p>
                    <p>Deuteranopia</p>
                    <p>Protanomalia</p>
                  </div>
                  <div className="cores-alternador">
                    <img src={DPDP} alt="" />
                    <input type="radio" name="switch" id="switch" />
                  </div>
                </div>
                <div className="tipo-daltonismo">
                  <div className="nome-daltonismo">
                    <p>Monocromacia</p>
                  </div>
                  <div className="cores-alternador">
                    <img src={Monocromacia} alt="" />
                    <input type="radio" name="switch" id="switch" />
                  </div>
                </div>
                <div className="tipo-daltonismo">
                  <div className="nome-daltonismo">
                    <p>Tritanopia</p>
                    <p>Tritanomalia</p>
                  </div>
                  <div className="cores-alternador">
                    <img src={TritanopiaTritanomalia} alt="" />
                    <input type="radio" name="switch" id="switch" />
                  </div>
                </div>
                <div className="tipo-daltonismo">
                  <div className="nome-daltonismo">
                    <p>Acromatopsia</p>
                  </div>
                  <div className="cores-alternador">
                    <img src={Acromatopsia} alt="" />
                    <input type="radio" name="switch" id="switch" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
