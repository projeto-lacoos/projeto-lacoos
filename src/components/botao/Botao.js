import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import './botaoModules.css'

export default function Botao({to, texto, className}){
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
        <Link className={className} to={to}>
            <div className={`btn-caminho-planejamento ${getThemeClass(theme)}`}>{texto}</div>
        </Link>
    )
}