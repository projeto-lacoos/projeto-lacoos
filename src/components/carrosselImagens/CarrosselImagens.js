import './CarrosselImagensModule.css'

import {motion} from 'framer-motion'
import { useRef } from 'react'

import convite1 from '../../img/carrosselImagens/convite1.jpg'
import convite2 from '../../img/carrosselImagens/convite2.jpg'
import convite3 from '../../img/carrosselImagens/convite1.jpg'
import convite4 from '../../img/carrosselImagens/convite2.jpg'

const imagens = [convite1, convite2, convite3, convite4]

export default function CarrosselImagens(){
    const carroussel = useRef()

    return(
        <section className='container-carrossel'>
            <motion.div className='carousel'>
                <motion.div className='inner'>
                    {imagens.map((imagem, id) => (
                        <motion.div className='item' key={id}>
                            <img src={imagem} alt='Texto alternativo'  />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}