import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import RecuperacaoSenha from './components/pages/recuperacaoSenha/RecuperacaoSenha';
import NovaConta from './components/pages/novaConta/NovaConta';
import Perfil from './components/pages/perfil/Perfil';
import Pagamento from './components/pages/pagamento/Pagamento';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
