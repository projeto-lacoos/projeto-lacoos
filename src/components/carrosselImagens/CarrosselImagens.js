import './CarrosselImagensModule.css'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import convite1 from '../../img/carrosselImagens/convite1.jpg'
import convite2 from '../../img/carrosselImagens/convite2.jpg'
import convite3 from '../../img/carrosselImagens/convite1.jpg'
import convite4 from '../../img/carrosselImagens/convite2.jpg'
import convite5 from '../../img/carrosselImagens/convite1.jpg'
import NotificacaoLogar from '../../service/notificacaoLogar/NotificacaoLogar'

const imagens = [convite1, convite2, convite3, convite4, convite5];

export default function CarrosselImagens() {
    const carroussel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carroussel.current?.scrollWidth - carroussel.current?.offsetWidth)
    }, [])

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

    return (
        <section className='container-carrossel'>
            {notificacao === true ? (<NotificacaoLogar />) : ("")}
            <h2 className='titulo-carrossel'>Modelos de Convites</h2>
            <motion.div ref={carroussel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div className='inner' drag="x" dragConstraints={{ right: 0, left: -width }}>
                    {imagens.map((imagem, id) => (
                        <motion.div className='item' key={id} onClick={HandleNotificacao}>
                            <img className='imagemItem' src={imagem} alt='Texto alternativo' />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}