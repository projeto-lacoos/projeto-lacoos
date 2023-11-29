import './CarrosselImagensModule.css'

import { useEffect, useRef, useState } from 'react'

import convite1 from '../../img/carrosselImagens/convite1.jpg'
import convite2 from '../../img/carrosselImagens/convite2.jpg'
import convite3 from '../../img/carrosselImagens/convite1.jpg'
import convite4 from '../../img/carrosselImagens/convite2.jpg'
import convite5 from '../../img/carrosselImagens/convite1.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import NotificacaoLogar from '../../service/notificacaoLogar/NotificacaoLogar'

const imagens = [convite1, convite2, convite3, convite4, convite5]


export default function CarrosselImagens() {

    const [notificacao, setNotificacao] = useState(false)

    const HandleNotificacao = () => {
        if (notificacao === false) {
            setNotificacao(true)
            console.log("teste", notificacao);
        } else {
            setNotificacao(false)
            console.log("teste", notificacao);
        }
    }

    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <section className='container-carrossel'>
            {notificacao ? (<NotificacaoLogar />) : ("")}
            <button className="btn-arrow">
                <FaArrowLeft onClick={handleLeftClick} className='arrows' />
            </button>
            <div className='carrossel-image' ref={carousel} onClick={HandleNotificacao}>
                {imagens.map((image, id) => (
                    <img className='slide-item' src={image} alt='Convite' />
                ))}
            </div>
            <button className="btn-arrow">
                <FaArrowRight onClick={handleRightClick} className='arrows' />
            </button>
        </section>
    )
}