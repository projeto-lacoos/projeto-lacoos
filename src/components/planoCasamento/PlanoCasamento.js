import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

import Botao from '../botao/Botao'

import './PlanoCasamentoModule.css'

export default function PlanoCasamento({ numero, titulo, texto, imagemTexto, altImagem, className, classNameImage }) {
    const {theme} = useContext(ThemeContext)

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
            return "";
        }
      };
    return (
        <div className={`texto ${className}`}>
            <div className="conteudo-home">
                <h2 className={`titulo-planoCasamento ${getThemeClass(theme)}`}>{numero}<br/>{titulo}</h2>
                <p className='p-planoCasamento'>{texto}</p>
                <Botao className={classNameImage} to={'/sobre'} texto={"Saiba mais"} />
            </div>
            <img className='image-planoCasamento' src={imagemTexto} alt={altImagem} />
        </div>
    )
}