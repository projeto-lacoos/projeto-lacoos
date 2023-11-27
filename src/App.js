import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import RecuperacaoSenha from './components/pages/recuperacaoSenha/RecuperacaoSenha';
import NovaConta from './components/pages/novaConta/NovaConta';
import Perfil from './components/pages/perfil/Perfil';
import Pagamento from './components/pages/pagamento/Pagamento';
import Sobre from './components/pages/sobre/Sobre';
import Pacote from './components/pages/pacote/Pacote';
import Acessibilidade from './components/acessibilidade/Acessibilidade';
import ModoDaltonismo from './components/modoDaltonismo/ModoDaltonismo';

function App() {
  const [modoDaltonismo, setModoDaltonismo] = useState(false)

  const HandleModoDaltonismo = () => {
    if (modoDaltonismo === false){
      setModoDaltonismo(true)
    } else {
      setModoDaltonismo(false)
    }
  }

  return (
    <>
      {modoDaltonismo === true ? (<ModoDaltonismo HandleModoDaltonismo={HandleModoDaltonismo} />) : ("")}
      <Acessibilidade HandleModoDaltonismo={HandleModoDaltonismo} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/recuperacao-senha" element={<RecuperacaoSenha />} />
          <Route exact path="/nova-conta" element={<NovaConta />} />
          <Route exact path="/perfil" element={<Perfil />} />
          <Route exact path="/pagamento" element={<Pagamento />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/pacote" element={<Pacote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
