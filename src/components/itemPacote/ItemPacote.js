import "./ItemPacoteModule.css";

export default function ItemPacote({ imagemEmpresa, handleEscolha, nomeEmpresa, valor, name, altImagem }) {

  return (
    <>
      <div className="container-itemPacote">
        <img className="img-container-itemPacote" src={imagemEmpresa} alt={altImagem} />
        <h3 className="h3-itemPacote">{nomeEmpresa}</h3>
        <label key={valor} className="label-radio-pagamento input-valor">
          <p className="p-itemPacote">R${valor},00</p>
          <input
            className={"input-radio-pagamento"}
            type={"radio"}
            name={name}
            id={name}
            onClick={() => handleEscolha()}
          />
        </label>
      </div>
    </>
  );
}
