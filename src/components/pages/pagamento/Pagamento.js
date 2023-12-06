import { Link } from "react-router-dom";

import "./PagamentoModule.css";

import LogoReduzida from "../../../img/pagamento/logo-reduzida.svg";

import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import Servicos from "../../servicos/Servicos";
import Input from "../../input/Input";

import ImagemEmpresa1 from "../../../img/servicos/imagemEmpresa1.svg";
import ImagemEmpresa2 from "../../../img/servicos/imagemEmpresa2.svg";
import ImagemEmpresa3 from "../../../img/servicos/imagemEmpresa3.svg";
import ImagemEmpresa4 from "../../../img/servicos/imagemEmpresa4.svg";
import ImagemEmpresa5 from "../../../img/servicos/imagemEmpresa5.svg";
import ImagemEmpresa6 from "../../../img/servicos/imagemEmpresa6.svg";
// import ImagemEmpresa7 from "../../../img/servicos/imagemEmpresa7.svg";
// import ImagemEmpresa8 from "../../../img/servicos/imagemEmpresa8.svg";
// import ImagemEmpresa9 from "../../../img/servicos/imagemEmpresa9.svg";
// import ImagemEmpresa10 from "../../../img/servicos/imagemEmpresa10.svg";
// import ImagemEmpresa11 from "../../../img/servicos/imagemEmpresa11.svg";
// import ImagemEmpresa12 from "../../../img/servicos/imagemEmpresa12.svg";
// import ImagemEmpresa13 from "../../../img/servicos/imagemEmpresa13.svg";
// import ImagemEmpresa14 from "../../../img/servicos/imagemEmpresa14.svg";
// import ImagemEmpresa15 from "../../../img/servicos/imagemEmpresa15.svg";
// import ImagemEmpresa16 from "../../../img/servicos/imagemEmpresa16.svg";
// import ImagemEmpresa17 from "../../../img/servicos/imagemEmpresa17.svg";
// import ImagemEmpresa18 from "../../../img/servicos/imagemEmpresa18.svg";
// import ImagemEmpresa19 from "../../../img/servicos/imagemEmpresa19.svg";
// import ImagemEmpresa20 from "../../../img/servicos/imagemEmpresa20.svg";
// import ImagemEmpresa21 from "../../../img/servicos/imagemEmpresa21.svg";

export default function Pagamento() {
  const imagens = [
    ImagemEmpresa1,
    ImagemEmpresa2,
    ImagemEmpresa3,
    ImagemEmpresa4,
    ImagemEmpresa5,
    ImagemEmpresa6,
  ];

  const prices = {
    musica: {
      option1: 420,
      option2: 356,
      option3: 992,
    },
    comida: {
      option1: 1707,
      option2: 1857,
      option3: 2100,
    },
  };

  //   const imagens3 = [ImagemEmpresa7, ImagemEmpresa8, ImagemEmpresa9];
  //   const imagens4 = [ImagemEmpresa10, ImagemEmpresa11, ImagemEmpresa12];
  //   const imagens5 = [ImagemEmpresa13, ImagemEmpresa14, ImagemEmpresa15];
  //   const imagens6 = [ImagemEmpresa16, ImagemEmpresa17, ImagemEmpresa18];
  //   const imagens7 = [ImagemEmpresa19, ImagemEmpresa20, ImagemEmpresa21];
  return (
    <>
      <Navbar />
      <section className="pagamento-inicial">
        <Link className="logo-reduzida" to={"/"}>
          <img src={LogoReduzida} alt="" />
        </Link>

        <div className="container-titulo-desc">
          <h2 className="text-shadow h2-pagamento-inicial">
            Chegou a hora das escolhas para{" "}
            <span className="span-pagamento-inicial">seu casamento</span>
          </h2>
          <p className="p-pagamento-inicial text-shadow2">
            Fique a vontade e se divirta nas escolhas para compor seu casamento
          </p>
        </div>
      </section>
      <form action="" method="post" className="form-escolhas-pacotes">
        <section className="container-escolhas-pacotes">
          <Servicos
            name={"musica"}
            valorServico={[
              prices.musica.option1,
              prices.musica.option2,
              prices.musica.option3,
            ]}
            nomeEmpresa={["Banda New Dance", "Jona’s", "Violinist Eventos"]}
            imagens={imagens}
            indice={[0, 1, 2]}
            tituloEmpresa={"Profissionais na Área de Música"}
          />
          <Servicos
            name={"comida"}
            valorServico={[
              prices.comida.option1,
              prices.comida.option2,
              prices.comida.option3,
            ]}
            nomeEmpresa={["Buffet Esperança", "Rocha’s Eventos", "MW Eventos"]}
            imagens={imagens}
            indice={[3, 4, 5]}
            tituloEmpresa={"Profissionais na Área de Buffet (Alimentação)"}
          />
        </section>
        <section className="container-tela-pagamento">
          <div className="container-pagamento">
            <h2 className="titulo-pagamento">PAGAMENTO</h2>
            <form action="" method="post" className="form-pagamento">
              <div className="nome-titular">
                <label className="label-pagamento" htmlFor="nome">
                  Nome do titular
                </label>
                <Input
                  className="input-pagamento"
                  type={"text"}
                  name={"nome"}
                  id={"nome"}
                  placeholder={"Nome como exibido no cartão"}
                />
              </div>
              <div className="validade-cvv-dataNascimento">
                <div className="container-inputs">
                  <label className="label-pagamento" htmlFor="validade">
                    Validade
                  </label>
                  <Input
                    className="input-pagamento"
                    type={"datetime"}
                    name={"validade"}
                    id={"validade"}
                    placeholder={"MM/AA"}
                  />
                </div>
                <div className="container-inputs">
                  <label className="label-pagamento" htmlFor="cvv">
                    CVV
                  </label>
                  <Input
                    className="input-pagamento"
                    type={"number"}
                    name={"cvv"}
                    id={"cvv"}
                    placeholder={"CVV"}
                  />
                </div>
                <div className="container-inputs">
                  <label className="label-pagamento" htmlFor="dataNascimento">
                    Data de nascimento
                  </label>
                  <Input
                    className="input-pagamento"
                    type={"datetime"}
                    name={"dataNascimento"}
                    id={"dataNascimento"}
                    placeholder={"DD/MM/AA"}
                  />
                </div>
              </div>
              <div className="numeroCartao">
                <label className="label-pagamento" htmlFor="numeroCartao">
                  Número do Cartão
                </label>
                <Input
                  className="input-pagamento"
                  type={"number"}
                  name={"numeroCartao"}
                  id={"numeroCartao"}
                  placeholder={"xxxx.xxxx.xxxx.xxxx"}
                />
              </div>
              <div className="cpf-telefone">
                <div className="container-inputs">
                  <label className="label-pagamento" htmlFor="cpf">
                    CPF (dono do cartão)
                  </label>
                  <Input
                    className="input-pagamento"
                    type={"number"}
                    name={"cpf"}
                    id={"cpf"}
                    placeholder={"xxx.xxx.xxx-xx"}
                  />
                </div>
                <div className="container-inputs">
                  <label className="label-pagamento" htmlFor="telefone">
                    Telefone (dono do cartão)
                  </label>
                  <Input
                    className="input-pagamento"
                    type={"tel"}
                    name={"telefone"}
                    id={"telefone"}
                    placeholder={"(xx) xxxx-xxxx"}
                  />
                </div>
              </div>
              <div className=" finalizar">
                <p className="valorFinal">Total: R$ {},00</p>
                <button className="btn-finalizar-pagamento" type="submit">
                  Finalizar
                </button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </form>
    </>
  );
}
