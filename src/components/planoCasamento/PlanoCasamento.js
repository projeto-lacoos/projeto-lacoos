import Botao from '../botao/Botao'

import './PlanoCasamentoModule.css'

export default function PlanoCasamento({numero, titulo, texto, imagemTexto}) {
    return (
        <div class="texto">
            <div class="conteudo-home">
                <h2>{numero}<br/>{titulo}</h2>
                <p>{texto}</p>
                <Botao to={'/sobrenos'} texto={"Saiba mais"} />
            </div>
            <img src={imagemTexto} alt="" />
        </div>
    )
}