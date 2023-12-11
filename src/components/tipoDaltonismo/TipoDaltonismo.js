import "./TipoDaltonismoModule.css";

import InputComFuncao from "../input/InputComFuncao";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function TipoDaltonismo({ imagem, tipos, classe }) {

  const { toggleTheme, theme } = useContext(ThemeContext);

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

  const handleToggleTheme = () => {
    toggleTheme(classe);
  }

  return (
    <div className="tipo-daltonismo">
      <div className="nome-daltonismo">
        <p className="tipos">{tipos}</p>
      </div>
      <div className="cores-alternador">
        <img className={`cores-daltonismo ${getThemeClass(theme)}`} src={imagem} alt="Um circulo divido em pedaços igual a pedaços de pizza e cada pedaço é uma cor que a pessoa com daltonismo consegue enxergar" />
        <InputComFuncao
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
