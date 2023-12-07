import { Link } from 'react-router-dom'

import './botaoModules.css'

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Botao({to, texto, className}){
    const { theme } = useContext(ThemeContext);

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
    return (
        <Link className={className} to={to}>
            <div className={`btn-caminho-planejamento ${getThemeClass(theme)}`}>{texto}</div>
        </Link>
    )
}