import './AcessibilidadeModule.css'

import { FaUniversalAccess } from "react-icons/fa";

export default function Acessibilidade({HandleModoDaltonismo}){
    return(
        <div onClick={HandleModoDaltonismo} className='container-acessibilidade'>
            <div className="icone-acessibilidade">
                <span className="icone">
                    <FaUniversalAccess />
                </span>
            </div>
        </div>
    )
}