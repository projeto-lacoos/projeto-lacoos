import "./resetarSenha.css";

import Input from "../../input/Input";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ResetarSenha() {
  const API = "http://localhost:8080/v1/user/reset-password"
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const token = params.get('token');

  console.log("search", search);
  // console.log("params", params);
  
  const navigate = useNavigate();

  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (senha === confirmaSenha) {
      try {
        const response = await fetch(`${API}/${token}`,
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
        console.log(`${token}`);

        const data = await response.json();
        console.log(data);

        if (typeof window !== undefined && response.ok) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        alert('Algo deu errado! Mas enviou o email!');
      }
    } else {
      console.log("Informe as senhas iguais.");
    }

  }

  return (
    <div className="container-resetar-senha">
      <div className="img-resetar-senha">
        <Input placeholder={"Senha"} onchange={(e) => {
          setSenha(e.target.value)
        }}>Senha</Input>
        <br />
        <br />
        <Input placeholder={"Confirmar senha"} onchange={(e) => {
          setConfirmaSenha(e.target.value)
        }}>Confirmar senha</Input>
        <br />
        <br />
        <button onClick={onSubmit}>Salvar</button>
      </div>
    </div>
  );
}