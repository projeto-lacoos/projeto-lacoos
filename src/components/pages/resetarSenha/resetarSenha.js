import "./resetarSenha.css";

import Input from "../../input/Input";

export default function ResetarSenha() {
  return (
    <div className="container-resetar-senha">
      <div className="img-resetar-senha">
        <Input placeholder={"Senha"}>Senha</Input>
        <br />
        <br />
        <Input placeholder={"Confirmar senha"}>Confirmar senha</Input>
        <br />
        <br />
        <button>Salvar</button>
      </div>
    </div>
  );
}