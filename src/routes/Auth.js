import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Home from '../components/pages/home/Home';
import Perfil from '../components/pages/perfil/Perfil';
import Pagamento from '../components/pages/pagamento/Pagamento';
import { ApplicationContext } from '../components/context/ApplicationProvider';
import ResetarSenha from '../components/pages/resetarSenha/resetarSenha';

export const Auth = () => {

    const { auth } = useContext(ApplicationContext)

    return (
        <BrowserRouter >
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/perfil" element={auth ? <Perfil /> : <Home />} />
                <Route exact path="/pagamento" element={auth ? <Pagamento /> : <Home />} />
                {/* <Route exact path="/recuperacao-senha" element={auth ? <ResetarSenha /> : <Home />} /> */}
            </Routes>
        </BrowserRouter>
    )
}