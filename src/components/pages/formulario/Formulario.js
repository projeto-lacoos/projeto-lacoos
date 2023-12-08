import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import "./FormularioModule.css";

import LogoReduzida from "../../../img/formulario/logo-reduzida.svg";
import DPTT from "../../../img/formulario/oo.svg";
import M from "../../../img/formulario/oo-2.svg";
import PD from "../../../img/formulario/oo-1.svg";
import A from "../../../img/formulario/oo-3.svg";

export default function Formulario() {
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

  const [estilo, setEstilo] = useState('');
  const [orcamento, setOrcamento] = useState('');
  const [tipo_deficiencia, setTipo_deficiencia] = useState('');
  const [grau_visao, setGrau_visao] = useState('');
  const [sensivel_a_luz, setSensivel_a_luz] = useState('');
  const [musica_entretenimento, setMusica_entretenimento] = useState('');
  const [restricoes_alimentares, setRestricoes_alimentares] = useState('');
  const [informacoes, setInformacoes] = useState('');
  const [cadeira_de_rodas, setCadeira_de_rodas] = useState('');
  const [piso_tatil, setPiso_tatil] = useState('');
  const [cardapio_braile, setCardapio_braile] = useState('');
  const [nome_parceiro, setNome_parceiro] = useState('');
  const [data_cerimonia, setData_cerimonia] = useState('');
  const [horario_cerimonia, setHorario_cerimonia] = useState('');

  const [onde_mora, setOnde_mora] = useState('');
  const [preferencias, setPreferencias] = useState('');
  const [preferencias_decoracao, setPreferencias_decoracao] = useState('');
  const [paleta_de_cores, setPaleta_de_cores] = useState('');
  const [indicacao_tatil_danca, setIndicacao_tatil_danca] = useState('');
  const [seguranca_pista, setSeguranca_pista] = useState('');
  const [video_e_foto, setVideo_e_foto] = useState('');
  const [descricoes_fotos, setDescricoes_fotos] = useState('');
  const [assentos, setAssentos] = useState('');
  const [consideracoes_assentos, setConsideracoes_assentos] = useState('');
  const [adaptacao_programacao, setAdaptacao_programacao] = useState('');
  const [necessidades, setNecessidades] = useState('');
  const [mais_informacoes, setMais_informacoes] = useState('');


  return (
    <>
      <Navbar />
      <section className={`container-formulario ${getThemeClass(theme)}`}>
        <img
          className="logo-laçoos-formulario"
          src={getThemeLogo(theme)}
          alt="Logo da Laçoos, onde é uma imagem de duas alianças se entrelaçando"
        />
        <form className="forms_laçoos" action="#">
          <div className="title">
            <h2 className={`title_forms ${getThemeClass(theme)}`}>
              Formulário
            </h2>
          </div>

          <div className="question_one">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                1. Temos opções de decoração que variam de simples a mais
                detalhadas. Qual estilo você prefere para o seu casamento?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva qual estilo você prefere?"
                name="opc_decoracao"
              />
            </div>
          </div>

          <div className="question_two">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                2. Quanto de orçamento você tem disponivel para este evento?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="R$00,00"
                name="orcamento"
              />
            </div>
          </div>

          <div className="question_three">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                3. Qual é o tipo específico de deficiência visual? (1) cegueira
                total, (2) cegueira parcial, (3) daltonismo
              </p>
            </div>
            <div className="input_question mini">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:1"
                name="tipo_deficienciaVisu"
              />
            </div>
          </div>

          <div className="question_four">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                4. Qual é o grau de visão residual? (grau de cegueira parcial/
                tipos de daltonismo)
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="grau_residual"
              />
            </div>
          </div>

          <div className="question_five">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                5. Você é sensível a luz?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:sim"
                name="sensivel_luz"
              />
            </div>
          </div>

          <div className="question_six">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                6. Há alguma preferência específica em relação à música ou
                entretenimento durante o casamento?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="preferencia_entreterimento"
              />
            </div>
          </div>

          <div className="question_seven">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                7. Existem restrições alimentares ou preferências específicas
                que devem ser consideradas no cardápio?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="resticao_alimentar"
              />
            </div>
          </div>

          <div className="question_eight">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                8. Como você prefere receber informações (1) braille, (2) áudio,
                (3) texto ampliado?
              </p>
            </div>
            <div className="input_question mini">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:3"
                name="receber_informacao"
              />
            </div>
          </div>

          <div className="question_nine">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                9. O local precisa ser acessível para cadeira de rodas?
              </p>
            </div>
            <div className="input_question mini">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:sim"
                name="acessivel_cadeiraRodas"
              />
            </div>
          </div>

          <div className="question_ten">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                10.É necessário o uso do piso tátil?
              </p>
            </div>
            <div className="input_question mini">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:sim"
                name="piso_portatil"
              />
            </div>
          </div>

          <div className="question_eleven">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                11. É necessário o cardápio ser em braille?
              </p>
            </div>
            <div className="input_question mini">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:sim"
                name="cardapio_braille"
              />
            </div>
          </div>

          <div className="question_twelve">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                12. Qual é o nome do seu parceiro(a)?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:sim"
                name="nome_parceiro"
              />
            </div>
          </div>

          <div className="question_thirteen">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                13. Qual é a data da sua cerimonia?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="XX/XX/XXXX"
                name="data_cerimonia"
              />
            </div>
          </div>

          <div className="question_fourteen">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                14. Que horas você gostaria de realizar sua cerimônia?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:14:00"
                name="horas_cerimonia"
              />
            </div>
          </div>

          <div className="question_fiveteen">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                15. Onde você mora dentro da Grande São Paulo?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:Moema"
                name="reside"
              />
            </div>
          </div>

          <div className="question_sixteen">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                16. Como você imagina a cerimônia? Alguma preferência específica
                para a troca de votos, leituras ou rituais?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="prefencia_cerimonia"
              />
            </div>
          </div>

          <div className="question_seventeen">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                17. Você tem preferências específicas em relação à decoração que
                envolvam texturas, aromas ou elementos táteis?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="decoracao"
              />
            </div>
          </div>

          <div className="question_eighteen">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                18. Existe uma paleta de cores que você prefere ou que seja mais
                acessível para daltonianos?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="paleta_cores"
              />
            </div>
          </div>

          <div className="question_nineteen">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                19. Você gostaria de alguma indicação tátil na pista de dança?
              </p>
            </div>
            <div className="input_question mini">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:sim"
                name="indicacao_tatil"
              />
            </div>
          </div>

          <div className="question_twenty">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                20. Como podemos garantir que a pista de dança seja segura e
                acessível?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="garantia_pistaAcessivel"
              />
            </div>
          </div>

          <div className="question_twentyone">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                21. Alguma preferência para o estilo de fotografia ou
                videografia que facilite a experiência para pessoas com
                deficiência visual?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="estilo_fotografia"
              />
            </div>
          </div>

          <div className="question_twentytwo">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                22. Você gostaria de ter descrições verbais ou táteis das fotos?
              </p>
            </div>
            <div className="input_question mini">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Ex:sim"
                name="descricao_foto"
              />
            </div>
          </div>

          <div className="question_twentythree">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                23. Como você prefere organizar os assentos para garantir
                conforto e acessibilidade?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="assentos"
              />
            </div>
          </div>

          <div className="question_twentyfour">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                24. Há alguma consideração especial para os arranjos de assentos
                em relação aos convidados com deficiência visual?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="arranjos_assentos"
              />
            </div>
          </div>

          <div className="question_twentyfive">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                25. Existe alguma adaptação que gostaria de fazer na programação
                para acomodar suas necessidades?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="adpatacao_programacao"
              />
            </div>
          </div>

          <div className="question_twentysix">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                26. Durante o planejamento e organização, como podemos garantir
                que suas necessidades específicas sejam atendidas?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="garantia_necessidades"
              />
            </div>
          </div>

          <div className="question_twentyseven">
            <div className="text_question">
              <p className={`paragraph_question ${getThemeClass(theme)}`}>
                27. Gostaria de falar mais alguma coisa?
              </p>
            </div>
            <div className="input_question">
              <input
                className={`input_extend ${getThemeClass(theme)}`}
                type="text"
                placeholder="Descreva aqui"
                name="fala_final"
              />
            </div>
          </div>

          <div className="button_forms">
            <button
              className={`button_salvar ${getThemeClass(theme)}`}
              type="submit"
            >
              Salvar
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}
