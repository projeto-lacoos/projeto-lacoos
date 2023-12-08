import './CarrosselImagensModule.css'

import { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from '../context/ThemeContext'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ApplicationContext } from '../context/ApplicationProvider'

import convite1 from '../../img/carrosselImagens/convite1.jpg'
import convite2 from '../../img/carrosselImagens/convite2.jpg'
import convite3 from '../../img/carrosselImagens/convite1.jpg'
import convite4 from '../../img/carrosselImagens/convite2.jpg'
import convite5 from '../../img/carrosselImagens/convite1.jpg'
import convite1PB from '../../img/carrosselImagens/convite1PB.jpeg'
import convite2PB from '../../img/carrosselImagens/convite2PB.jpeg'
import convite3PB from '../../img/carrosselImagens/convite1PB.jpeg'
import convite4PB from '../../img/carrosselImagens/convite2PB.jpeg'
import convite5PB from '../../img/carrosselImagens/convite1PB.jpeg'

import NotificacaoLogar from '../../service/notificacaoLogar/NotificacaoLogar'

const imagens = [convite1, convite2, convite3, convite4, convite5]
const imagensPB = [convite1PB, convite2PB, convite3PB, convite4PB, convite5PB]


export default function CarrosselImagens() {
    const { auth } = useContext(ApplicationContext);
    const { theme } = useContext(ThemeContext);

    const navigate = useNavigate()
  
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
            <button className={`btn-arrow ${getThemeClass(theme)}`}>
                <FaArrowLeft onClick={handleLeftClick} className='arrows' />
            </button>
            <div className='carrossel-image' ref={carousel} onClick={HandleNotificacao}>
                {theme !== "A" ? (imagens.map((image, id) => (
                    <Link to={"/convites"}
                    >
                        <img key={id} className='slide-item' src={image} alt='Convite' />
                    </Link>
                ))) : (imagensPB.map((image, id) => (
                    <Link to={"/convites"}><img key={id} className='slide-item' src={image} alt='Convite' /></Link>
                )))}
            </div>
            <button className={`btn-arrow ${getThemeClass(theme)}`}>
                <FaArrowRight onClick={handleRightClick} className='arrows' />
            </button>
        </section>
    )
}