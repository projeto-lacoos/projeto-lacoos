import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Home from '../components/pages/home/Home';
import Perfil from '../components/pages/perfil/Perfil';
import { ApplicationContext } from '../components/context/ApplicationProvider';

export const Auth = () => {

<<<<<<< HEAD
    const { auth } = useContext(ApplicationContext);
=======
    const { auth } = useContext(ApplicationContext)
    console.log(auth);
>>>>>>> 15eb2587dcc35985d2d9646fcf560df7a259313a

    return (
        <BrowserRouter >
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/perfil" element={auth ? <Perfil /> : <Home />} />
<<<<<<< HEAD
                {/* <Route exact path='/resetar-senha' element={ auth ? <ResetarSenha/> : <Home />}  /> */}
=======
                <Route exact path='/resetar-senha/#/:token' element={ auth ? <ResetarSenha/> : <Home />} />
>>>>>>> 15eb2587dcc35985d2d9646fcf560df7a259313a
            </Routes>
        </BrowserRouter>
    )
}