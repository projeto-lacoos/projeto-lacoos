import "./ItemPacoteModule.css";

export default function ItemPacote({imagemEmpresa, nomeEmpresa, valor}) {
  return (
    <>
      <div className="container-itemPacote">
        <img className="img-container-itemPacote" src={imagemEmpresa} alt="" />
        <h3 className="h3-itemPacote">{nomeEmpresa}</h3>
        <p className="p-itemPacote">R${valor}</p>
      </div>
    </>
  );
}
