import "./resetarSenha.css";

import Input from "../../input/Input";

import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApplicationContext } from "../../context/ApplicationProvider";

export default function ResetarSenha() {

  const { setAuth } = useContext(ApplicationContext);

  const params = useParams();

  const navigate = useNavigate();

  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (senha === confirmaSenha) {
      try {
        let token;
        const response = await fetch(`http://localhost:8080/v1/user/reset-password/${params.token}`, // ${} | 87b6246c-35e7-4bc8-9e07-0334e79ca2f7
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

        /* console.log(`${token}`);
        const data = await response.json();
        console.log(data); */

        localStorage.clear();
        setAuth(false);
        navigate("/login");
        // window.location.reload();

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