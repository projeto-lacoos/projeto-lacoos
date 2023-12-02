import Botao from '../botao/Botao'

import './PlanoCasamentoModule.css'

export default function PlanoCasamento({ numero, titulo, texto, imagemTexto, altImagem, className, classNameImage }) {
    return (
        <div className={`texto ${className}`}>
            <div className="conteudo-home">
                <h2 className='titulo-planoCasamento'>{numero}<br/>{titulo}</h2>
                <p className='p-planoCasamento'>{texto}</p>
                <Botao className={classNameImage} to={'/sobre'} texto={"Saiba mais"} />
            </div>
            <img className='image-planoCasamento' src={imagemTexto} alt={altImagem} />
        </div>
    )
}