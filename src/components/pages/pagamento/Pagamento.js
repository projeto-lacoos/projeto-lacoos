import { Link } from "react-router-dom";

import "./PagamentoModule.css";

import LogoReduzida from "../../../img/pagamento/logo-reduzida.svg";

import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import Servicos from "../../servicos/Servicos";
import Input from "../../input/Input";

export default function Pagamento() {
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
          <Servicos tituloEmpresa={"Profissionais na Área de Música"} />
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
                <p className="valorFinal">Total: R$ 00,00</p>
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
