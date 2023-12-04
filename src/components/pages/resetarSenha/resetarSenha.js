import "./resetarSenha.css";

import Input from "../../input/Input";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetarSenha() {
  
  const navigate = useNavigate();

  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const onSubmit = async (e) => {

    e.preventDefault();
    if (senha == confirmaSenha) {
      try {
        const response = await fetch('http://localhost:8080/v1/user/reset-password/7a9f3876-ddcb-43a2-8a20-6e960c08a08a',
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              password: senha,
              confirmPassword: confirmaSenha
            })
          });
        console.log('passou do fetch!');
        const data = await response.json();
        console.log(data);
        if (typeof window !== undefined && response.ok) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        alert('Algo deu errado! Mas enviou o email!');
      }
    } else{
      console.log("Informe as senhas iguais.");
    }

  }

  return (
    <div className="container-resetar-senha">
      <div className="img-resetar-senha">
        <Input placeholder={"Senha"} onchange={(e) => { setSenha(e.target.value)
        }}>Senha</Input>
        <br />
        <br />
        <Input placeholder={"Confirmar senha"} onchange={(e) => { setConfirmaSenha(e.target.value)
        }}>Confirmar senha</Input>
        <br />
        <br />
        <button onClick={onSubmit}>Salvar</button>
      </div>
    </div>
  );
}