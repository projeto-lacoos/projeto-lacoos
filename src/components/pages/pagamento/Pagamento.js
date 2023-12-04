import { Link } from "react-router-dom";

import "./PagamentoModule.css";

import LogoReduzida from "../../../img/pagamento/logo-reduzida.svg";

<<<<<<< Updated upstream
=======
import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import Servicos from "../../servicos/Servicos";

>>>>>>> Stashed changes
export default function Pagamento() {
  return (
    <>
      <div className="container-tela-pagamento">
        <Link className="sumir" to={"/"}>
          <img src={LogoReduzida} alt="" />
        </Link>
<<<<<<< Updated upstream
        <div className="container-pagamento">
=======

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
          {/* <div className="container-pagamento">
>>>>>>> Stashed changes
          <div className="header-pagamento">
          <h2 className="titulo-pagamento">PAGAMENTO</h2>
          <Link to={"/"}>
          <img src={LogoReduzida} alt="" />
          </Link>
          </div>
          <form action="" method="post" className="form-pagamento">
<<<<<<< Updated upstream
            <div className="nome-titular">
              <label htmlFor="nome">Nome do titular</label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome como exibido no cartão"
              />
            </div>
            <div className="validade-cvv-dataNascimento">
              <div className="container-inputs">
                <label htmlFor="validade">Validade</label>
                <input
                  type="datetime"
                  name="validade"
                  id="validade"
                  placeholder="MM/AA"
                />
              </div>
              <div className="container-inputs">
                <label htmlFor="cvv">CVV</label>
                <input type="number" name="cvv" id="cvv" placeholder="CVV" />
              </div>
              <div className="container-inputs">
=======
          <div className="nome-titular">
          <label htmlFor="nome">Nome do titular</label>
          <Input type={"text"} name={"nome"} id={"nome"} placeholder={"Nome como exibido no cartão"}  />
          </div>
          <div className="validade-cvv-dataNascimento">
          <div className="container-inputs">
          <label htmlFor="validade">Validade</label>
          <Input type={"datetime"} name={"validade"} id={"validade"} placeholder={"MM/AA"}  />
          </div>
          <div className="container-inputs">
          <label htmlFor="cvv">CVV</label>
          <Input type={"number"} name={"cvv"} id={"cvv"} placeholder={"CVV"}  />
          </div>
          <div className="container-inputs">
>>>>>>> Stashed changes
                <label htmlFor="dataNascimento">Data de nascimento</label>
                <input
                  type="datetime"
                  name="dataNascimento"
                  id="dataNascimento"
                  placeholder="DD/MM/AA"
                />
              </div>
            </div>
            <div className="numeroCartao">
              <label htmlFor="numeroCartao">Número do Cartão</label>
              <input
                type="number"
                name="numeroCartao"
                id="numeroCartao"
                placeholder="xxxx.xxxx.xxxx.xxxx"
              />
            </div>
            <div className="cpf-telefone">
              <div className="container-inputs">
                <label htmlFor="cpf">CPF (dono do cartão)</label>
                <input
                  type="number"
                  name="cpf"
                  id="cpf"
                  placeholder="xxx.xxx.xxx-xx"
                />
              </div>
              <div className="container-inputs">
                <label htmlFor="telefone">Telefone (dono do cartão)</label>
                <input
                  type="tel"
                  name="telefone"
                  id="telefone"
                  placeholder="(xx) xxxx-xxxx"
                />
              </div>
            </div>
            <div className=" finalizar">
              <p className="valorFinal">Total: R$12.700,00</p>
              <button className="btn-finalizar-pagamento" type="submit">
                Finalizar
              </button>
            </div>
          </form>
<<<<<<< Updated upstream
        </div>
      </div>
=======
        </div> */}
        </section>
      </form>
>>>>>>> Stashed changes
      <Footer />
    </>
  );
}
