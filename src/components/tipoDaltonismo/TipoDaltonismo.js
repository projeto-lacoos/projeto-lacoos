import "./TipoDaltonismoModule.css";

import Input from "../input/Input";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function TipoDaltonismo({ imagem, tipos, classe }) {
  const { toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme(classe)
  }

  return (
    <div className="tipo-daltonismo">
      <div className="nome-daltonismo">
        <p className="tipos">{tipos}</p>
      </div>
      <div className="cores-alternador">
        <img className="cores-daltonismo" src={imagem} alt="" />
        <Input
          className={"input-tipoDaltonismo"}
          type={"radio"}
          name={"switch"}
          id={"switch"}
          classe={classe}
          onClick={handleToggleTheme}
        />
      </div>
    </div>
  );
}
