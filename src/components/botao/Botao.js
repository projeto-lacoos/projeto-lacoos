import { Link } from 'react-router-dom'

import './botaoModules.css'

export default function Botao({to, texto}){
    return (
        <Link to={to}>
            <div className="btn-caminho-planejamento">{texto}</div>
        </Link>
    )
}