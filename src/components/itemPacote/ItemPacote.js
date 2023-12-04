import "./ItemPacoteModule.css";

import Input from "../input/Input";

export default function ItemPacote({ imagemEmpresa, nomeEmpresa, valor }) {
  return (
    <>
      <div className="container-itemPacote">
        <img className="img-container-itemPacote" src={imagemEmpresa} alt="" />
        <h3 className="h3-itemPacote">{nomeEmpresa}</h3>
        <p className="p-itemPacote">R${valor},00</p>
        <Input
          className={"radio-quadrado visually-hidden"}
          type={"radio"}
          name={"musica"}
          id={"musica"}
        />
        <label htmlFor="musica" class="custom-radio"></label>
      </div>
    </>
  );
}
