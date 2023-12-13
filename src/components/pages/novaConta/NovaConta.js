import Input from "../../input/Input";
import { Link, useNavigate } from "react-router-dom";

import "./NovaContaModule.css";

import LogoReduzida from '../../../img/login/logo-reduzida.svg'
import DPTT from "../../../img/login/oo.svg";
import M from "../../../img/login/oo-2.svg";
import PD from "../../../img/login/oo-1.svg";
import A from "../../../img/login/oo-3.svg";

import Footer from "../../footer/Footer";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

export default function NovaConta() {
  const { theme } = useContext(ThemeContext);

  const getThemeClass = (theme) => {
    switch (theme) {
      case "DPTT":
        return "DPTT";
      case "M":
        return "M";
      case "PD":
        return "PD";
      case "A":
        return "A";
      default:
        return "default";
    }
  };

  const getThemeLogo = (theme) => {
    switch (theme) {
      case "DPTT":
        return DPTT;
      case "M":
        return M;
      case "PD":
        return PD;
      case "A":
        return A;
      default:
        return LogoReduzida;
    }
  };

  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [notificacao, setNotificacao] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (nome !== "" && dataNasc !== "" && celular !== "" && telefone !== "" && sexo !== "" && email !== "" && senha !== "") {
      try {
        const response = await fetch("http://localhost:8080/v1/auth/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            birthDate: dataNasc,
            email: email,
            name: nome,
            password: senha,
            phone: celular,
            sexo: sexo,
            telephone: telefone
          })
        });

        if (response.ok) {
          navigate("/login");
          setTimeout(() => {
            setNotificacao(
              toast.success('Cadastro realizado com sucesso!', {
                position: toast.POSITION.TOP_RIGHT,
              })
            )
          }, 3500);
          navigate("/login");
        } else {
          alert("Error");
        }

      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <div className="body-conta-nova">
        <header className="header_logo_nova_conta">
          <Link to="/">
            <img src={getThemeLogo(theme)} alt="Logo da Laçoos, um sinal de infinito amarelo formado por duas letras o’s." />
          </Link>
        </header>
        <div className="container-conta-nova">
          <form className="form-conta-nova" action="post">
            <header className="title_forms">
              <h3 className={`title ${getThemeClass(theme)}`}>Seu Cadastro</h3>
            </header>
            <div className="row_form">
              <div className="form_dados">
                <div className="form_dados_line">
                  <label className={`form_dados_label01 ${getThemeClass(theme)}`}>
                    Nome
                    <Input
                      className={`input input_name ${getThemeClass(theme)}`} type={"text"}
                      placeholder={"Nome e sobrenome"}
                      name={"nome_cliente"}
                      onchange={(e) => {
                        setNome(e.target.value)
                      }}
                    />
                  </label>
                  <label className={`form_dados_label02 ${getThemeClass(theme)}`}>
                    Data de nascimento
                    <Input
                      className={`input input_idade ${getThemeClass(theme)}`}
                      type={"date"}
                      placeholder={"Sua idade"}
                      name={"idade_cliente"}
                      onchange={(e) => { setDataNasc(e.target.value) }}
                    />
                  </label>
                </div>
                <div className="form_dados_line">
                  <label className={`form_dados_label01 ${getThemeClass(theme)}`}>
                    Celular
                    <Input
                      className={`input input_celular ${getThemeClass(theme)}`}
                      type={"tel"}
                      placeholder={"(xx) xxxxx-xxxx"}
                      name={"celular_cliente"}
                      onchange={(e) => { setCelular(e.target.value) }}
                    />
                  </label>
                  <label className={`form_dados_label02 ${getThemeClass(theme)}`}>
                    Telefone
                    <Input
                      className={`input input_telefone ${getThemeClass(theme)}`}
                      type={"tel"}
                      placeholder={"(xx) xxxxx-xxxx"}
                      name={"telefone_cliente"}
                      onchange={(e) => { setTelefone(e.target.value) }}
                    />
                  </label>
                </div>
                <div className="form_dados_line">
                  <label className={`form_dados_label01 ${getThemeClass(theme)}`}>
                    E-mail
                    <Input
                      className={`input input_email ${getThemeClass(theme)}`}
                      type={"email"}
                      placeholder={"Exemplo.sac@xxxx.com"}
                      name={"email_cliente"}
                      onchange={(e) => { setEmail(e.target.value) }}
                    />
                  </label>
                  <label className={`form_dados_label02 ${getThemeClass(theme)}`}>
                    Sexo
                    <Input
                      className={`input input_sexo ${getThemeClass(theme)}`}
                      type={"text"}
                      placeholder={"F, M ou outro"}
                      name={"sexo_cliente"}
                      onchange={(e) => { setSexo(e.target.value) }}
                    />
                  </label>
                </div>
                <div className="form_dados_line">
                  <label className={`form_dados_label01 ${getThemeClass(theme)}`}>
                    Senha
                    <Input
                      className={`input input_senha ${getThemeClass(theme)}`}
                      type={"password"}
                      placeholder={"Digite sua senha"}
                      name={"senha_cliente"}
                      onchange={(e) => { setSenha(e.target.value) }}
                    />
                  </label>
                  <label className={`form_dados_label02 ${getThemeClass(theme)}`}>
                    Confirmação Senha
                    <Input
                      className={`input input_confirmacao ${getThemeClass(theme)}`}
                      type={"password"}
                      placeholder={"Digite novamente a senha"}
                      name={"confirmacao_senha"}
                    />
                  </label>
                </div>
              </div>
              <div className="form_termos">
                <p className={`title_termos ${getThemeClass(theme)}`}>Termos de uso</p>
                <textarea className={`box_termos ${getThemeClass(theme)}`} value="1. Autorização de Uso de Imagem:
Ao fornecer imagens à empresa Laçoos, você concede permissão irrevogável e não exclusiva para o uso dessas imagens em materiais promocionais, publicitários, digitais e impressos.
2. Propriedade Intelectual:
Você declara ser o detentor dos direitos autorais ou possuir permissão adequada para conceder o uso das imagens à Laçoos. A empresa respeitará os direitos autorais existentes e não reivindicará a propriedade das imagens fornecidas.
3. Uso Responsável:
A Laçoos compromete-se a utilizar as imagens de maneira ética e profissional, evitando qualquer uso que possa difamar, desacreditar ou prejudicar a reputação do provedor das imagens.
4. Modificações e Edições:
A Laçoos reserva o direito de realizar edições ou modificações nas imagens fornecidas, desde que essas alterações não comprometam a integridade ou intenção original das imagens.
5. Vigência:
Esta autorização permanecerá em vigor enquanto a empresa Laçoos continuar a utilizar as imagens fornecidas, a menos que seja revogada por escrito pelo provedor das imagens.
6. Compensação:
Esta autorização é concedida de forma voluntária e gratuita, sem qualquer expectativa de compensação financeira.
Ao fornecer suas imagens à Laçoos, você concorda com os termos acima descritos. A empresa compromete-se a utilizar as imagens de maneira ética e responsável.
São Paulo, 12 de Dezembro de 2023" />
                <input
                  className={`input input_submit ${getThemeClass(theme)}`}
                  type="submit"
                  defaultValue="SALVAR"
                  onClick={(e) => { onSubmit(e) }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}