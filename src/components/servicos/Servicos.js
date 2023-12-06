import ItemPacote from "../itemPacote/ItemPacote";

import "./ServicosModule.css";

export default function Servicos({ tituloEmpresa, indice, nomeEmpresa, valorServico, name, ...imagens }) {

  return (
    <div className="container-servicos-pagamento">
      <h2 className="h2-servicos-pagamento">{tituloEmpresa}</h2>
      <div className="container-pacotes">
        <ItemPacote
          imagemEmpresa={imagens.imagens[indice[0]]}
          nomeEmpresa={nomeEmpresa[0]}
          valor={valorServico[0]}
          name={name}
        />
        <ItemPacote
          imagemEmpresa={imagens.imagens[indice[1]]}
          nomeEmpresa={nomeEmpresa[1]}
          valor={valorServico[1]}
          name={name}
        />
        <ItemPacote
          imagemEmpresa={imagens.imagens[indice[2]]}
          nomeEmpresa={nomeEmpresa[2]}
          valor={valorServico[2]}
          name={name}
        />
      </div>
    </div>
  );
}
