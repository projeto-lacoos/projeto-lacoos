import { Link } from 'react-router-dom'

import './botaoModules.css'

export default function Botao({to, texto, className}){
    return (
        <Link className={className} to={to}>
            <div className="btn-caminho-planejamento">{texto}</div>
        </Link>
    )
}