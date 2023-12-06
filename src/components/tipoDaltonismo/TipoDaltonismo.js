import "./TipoDaltonismoModule.css";

import Input from "../input/Input";

export default function TipoDaltonismo({imagem, tipos}) {
  return (
    <div className="tipo-daltonismo">
      <div className="nome-daltonismo">
        <p className="tipos">{tipos}</p>
      </div>
      <div className="cores-alternador">
        <img className="cores-daltonismo" src={imagem} alt="" />
        <Input className={"input-tipoDaltonismo"} type={"radio"} name={"switch"} id={"switch"}/>
      </div>
    </div>
  );
}
