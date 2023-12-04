import "./ItemPacoteModule.css";

import Input from "../input/Input";

export default function ItemPacote({ imagemEmpresa, nomeEmpresa, valor }) {
  return (
    <>
      <div className="container-itemPacote">
        <label htmlFor="musica">
          <img
            className="img-container-itemPacote"
            src={imagemEmpresa}
            alt=""
          />
          <h3 className="h3-itemPacote">{nomeEmpresa}</h3>
          <p className="p-itemPacote">R${valor},00</p>
        </label>
        <Input className={""} type={"radio"} name={"musica"} id={"musica"} />
      </div>
    </>
  );
}
