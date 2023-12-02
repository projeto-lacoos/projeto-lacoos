import Botao from '../botao/Botao'

import './PlanoCasamentoModule.css'

export default function PlanoCasamento({ numero, titulo, texto, imagemTexto, altImagem, className, classNameImage }) {
    return (
        <div className={`texto ${className}`}>
            <div className="conteudo-home">
                <h2>{numero}<br/>{titulo}</h2>
                <p>{texto}</p>
                <Botao className={classNameImage} to={'/sobre'} texto={"Saiba mais"} />
            </div>
            <img src={imagemTexto} alt={altImagem} />
        </div>
    )
}