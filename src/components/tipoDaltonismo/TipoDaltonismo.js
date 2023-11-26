import "./TipoDaltonismoModule.css";

import Input from "../input/Input";

export default function TipoDaltonismo({imagem, tipos}) {
  return (
    <div className="tipo-daltonismo">
      <div className="nome-daltonismo">
        <p>{tipos}</p>
      </div>
      <div className="cores-alternador">
        <img src={imagem} alt="" />
        <Input type={"radio"} name={"switch"} id={"switch"}/>
      </div>
    </div>
  );
}
