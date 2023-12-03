import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';
import './App.css';
import { Public } from './routes/Public';
import { Auth } from './routes/Auth';
import ResetarSenha from './components/pages/resetarSenha/resetarSenha';
import { ApplicationContext } from './components/context/ApplicationProvider';
import { ApplicationProvider } from './components/context/ApplicationProvider';
import ModoDaltonismo from './components/modoDaltonismo/ModoDaltonismo';
import Acessibilidade from './components/acessibilidade/Acessibilidade';

function App() {
  const [modoDaltonismo, setModoDaltonismo] = useState(false)
  const { auth } = useContext( ApplicationContext )

  const HandleModoDaltonismo = () => {
    if (modoDaltonismo === false) {
      setModoDaltonismo(true)
    } else {
      setModoDaltonismo(false)
    }
  }

  return (
    <>
      {modoDaltonismo === true ? (<ModoDaltonismo HandleModoDaltonismo={HandleModoDaltonismo} />) : ("")}
      <Acessibilidade HandleModoDaltonismo={HandleModoDaltonismo} />
      <ApplicationProvider>
        {auth ? <Auth /> : <Public />}
      </ApplicationProvider>
    </>
  );
}

export default App;