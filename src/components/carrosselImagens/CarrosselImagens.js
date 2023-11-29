import './CarrosselImagensModule.css'

import {motion} from 'framer-motion'
import Carousse
import { useEffect, useRef, useState } from 'react'

import convite1 from '../../img/carrosselImagens/convite1.jpg'
import convite2 from '../../img/carrosselImagens/convite2.jpg'
import convite3 from '../../img/carrosselImagens/convite1.jpg'
import convite4 from '../../img/carrosselImagens/convite2.jpg'
import convite5 from '../../img/carrosselImagens/convite1.jpg'
import NotificacaoLogar from '../../service/notificacaoLogar/NotificacaoLogar'

const imagens = [convite1, convite2, convite3, convite4, convite5]

export default function CarrosselImagens(){

    const [notificacao, setNotificacao] = useState(false)

    const HandleNotificacao = () => {
      if (notificacao === false){
        setNotificacao(true)
        console.log("teste",notificacao);
    } else {
        setNotificacao(false)
        console.log("teste",notificacao);
      }
    }

    return(
        <section className='container-carrossel'>
        </section>
    )
}