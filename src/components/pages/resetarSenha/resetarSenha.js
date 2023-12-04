import "./resetarSenha.css";

import Input from "../../input/Input";

import { useState } from "react";
<<<<<<< HEAD
import { useNavigate, useParams } from "react-router-dom";

export default function ResetarSenha() {

  const params = useParams();

=======
import { useNavigate, useLocation } from "react-router-dom";

export default function ResetarSenha() {
  const API = "http://localhost:8080/v1/user/reset-password"
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const token = params.get('token');

  console.log("search", search);
  // console.log("params", params);
  
>>>>>>> 15eb2587dcc35985d2d9646fcf560df7a259313a
  const navigate = useNavigate();

  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (senha === confirmaSenha) {
      try {
<<<<<<< HEAD
        let token;
        const response = await fetch(`http://localhost:8080/v1/user/reset-password/${params.token}`, // ${} | 87b6246c-35e7-4bc8-9e07-0334e79ca2f7
=======
        const response = await fetch(`${API}/${token}`,
>>>>>>> 15eb2587dcc35985d2d9646fcf560df7a259313a
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