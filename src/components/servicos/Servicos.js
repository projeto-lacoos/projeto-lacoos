import ItemPacote from "../itemPacote/ItemPacote";

import ImagemEmpresa1 from "../../img/servicos/imagemEmpresa1.svg";
import ImagemEmpresa2 from "../../img/servicos/imagemEmpresa2.svg";
import ImagemEmpresa3 from "../../img/servicos/imagemEmpresa3.svg";
// import ImagemEmpresa4 from "../../img/servicos/imagemEmpresa4.svg";
// import ImagemEmpresa5 from "../../img/servicos/imagemEmpresa5.svg";
// import ImagemEmpresa6 from "../../img/servicos/imagemEmpresa6.svg";
// import ImagemEmpresa7 from "../../img/servicos/imagemEmpresa7.svg";
// import ImagemEmpresa8 from "../../img/servicos/imagemEmpresa8.svg";
// import ImagemEmpresa9 from "../../img/servicos/imagemEmpresa9.svg";
// import ImagemEmpresa10 from "../../img/servicos/imagemEmpresa10.svg";
// import ImagemEmpresa11 from "../../img/servicos/imagemEmpresa11.svg";
// import ImagemEmpresa12 from "../../img/servicos/imagemEmpresa12.svg";
// import ImagemEmpresa13 from "../../img/servicos/imagemEmpresa13.svg";
// import ImagemEmpresa14 from "../../img/servicos/imagemEmpresa14.svg";
// import ImagemEmpresa15 from "../../img/servicos/imagemEmpresa15.svg";
// import ImagemEmpresa16 from "../../img/servicos/imagemEmpresa16.svg";
// import ImagemEmpresa17 from "../../img/servicos/imagemEmpresa17.svg";
// import ImagemEmpresa18 from "../../img/servicos/imagemEmpresa18.svg";
// import ImagemEmpresa19 from "../../img/servicos/imagemEmpresa19.svg";
// import ImagemEmpresa20 from "../../img/servicos/imagemEmpresa20.svg";
// import ImagemEmpresa21 from "../../img/servicos/imagemEmpresa21.svg";

import "./ServicosModule.css";

export default function Servicos({ tituloEmpresa }) {
  const imagens1 = [ImagemEmpresa1, ImagemEmpresa2, ImagemEmpresa3];
  //   const imagens2 = [ImagemEmpresa4, ImagemEmpresa5, ImagemEmpresa6];
  //   const imagens3 = [ImagemEmpresa7, ImagemEmpresa8, ImagemEmpresa9];
  //   const imagens4 = [ImagemEmpresa10, ImagemEmpresa11, ImagemEmpresa12];
  //   const imagens5 = [ImagemEmpresa13, ImagemEmpresa14, ImagemEmpresa15];
  //   const imagens6 = [ImagemEmpresa16, ImagemEmpresa17, ImagemEmpresa18];
  //   const imagens7 = [ImagemEmpresa19, ImagemEmpresa20, ImagemEmpresa21];
  return (
    <div className="container-servicos-pagamento">
      <h2 className="h2-servicos-pagamento">{tituloEmpresa}</h2>
      <div className="container-pacotes">
        <ItemPacote
          imagemEmpresa={imagens1[0]}
          nomeEmpresa={"Banda New Dance"}
          valor={420}
        />
        <ItemPacote
          imagemEmpresa={imagens1[1]}
          nomeEmpresa={"Banda New Dance"}
          valor={420}
        />
        <ItemPacote
          imagemEmpresa={imagens1[2]}
          nomeEmpresa={"Banda New Dance"}
          valor={420}
        />
      </div>
    </div>
  );
}
