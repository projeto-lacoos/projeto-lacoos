import "./ItemPacoteModule.css";

import Input from "../input/Input";

export default function ItemPacote({ imagemEmpresa, nomeEmpresa, valor }) {
  return (
    <>
      <div className="container-itemPacote">
        <img className="img-container-itemPacote" src={imagemEmpresa} alt="" />
        <h3 className="h3-itemPacote">{nomeEmpresa}</h3>
        <label class="label-radio-pagamento input-valor">
          <p className="p-itemPacote">R${valor},00</p>
          <Input
            className={"input-radio-pagamento"}
            type={"radio"}
            name={"musica1"}
            id={"musica"}
          />
        </label>
      </div>
    </>
  );
}
