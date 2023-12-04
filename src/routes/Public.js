
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/pages/home/Home';
import Login from '../components/pages/login/Login';
import RecuperacaoSenha from '../components/pages/recuperacaoSenha/RecuperacaoSenha';
import NovaConta from '../components/pages/novaConta/NovaConta';
import Perfil from '../components/pages/perfil/Perfil';
import Pagamento from '../components/pages/pagamento/Pagamento';
import Sobre from '../components/pages/sobre/Sobre';
import Pacote from '../components/pages/pacote/Pacote';
import Acessibilidade from '../components/acessibilidade/Acessibilidade';
import ModoDaltonismo from '../components/modoDaltonismo/ModoDaltonismo';
import ResetarSenha from '../components/pages/resetarSenha/resetarSenha';
import { ApplicationContext, ApplicationProvider } from '../components/context/ApplicationProvider';
import { useContext } from 'react';

export const Public = () => {

    const { auth } = useContext(ApplicationContext)

    return (
        <BrowserRouter >
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={auth ? <Home /> : <Login />} />
                <Route exact path="/recuperacao-senha" element={auth ? <Home /> : <RecuperacaoSenha />} />
                <Route exact path="/nova-conta" element={auth ? <Home /> : <NovaConta />} />
                <Route exact path="/perfil" element={auth ? <Perfil /> : <Home />} />
                <Route exact path="/sobre" element={<Sobre />} />
                <Route exact path="/pacote" element={<Pacote />} />
                <Route exact path="/resetar-senha" element={<ResetarSenha />} />
                {/* <Route exact path="/recuperacao-senha" element={auth ? <ResetarSenha /> : <Home />} /> */}
            </Routes>
        </BrowserRouter >
    )
}