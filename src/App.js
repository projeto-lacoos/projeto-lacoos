import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import RecuperacaoSenha from './components/pages/recuperacaoSenha/RecuperacaoSenha';
import NovaConta from './components/pages/novaConta/NovaConta';
import Perfil from './components/pages/perfil/Perfil';
import Pagamento from './components/pages/pagamento/Pagamento';
import Sobre from './components/pages/sobre/Sobre';
import Pacote from './components/pages/pacote/Pacote';

import ModoDaltonismo from './components/modoDaltonismo/ModoDaltonismo';

function App() {
  return (
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

        <Route exact path="/modo-daltonismo" element={<ModoDaltonismo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
