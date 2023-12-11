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
// import ImagemEmpresa4 from "../../../img/servicos/imagemEmpresa4.svg";
// import ImagemEmpresa5 from "../../../img/servicos/imagemEmpresa5.svg";
// import ImagemEmpresa6 from "../../../img/servicos/imagemEmpresa6.svg";
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
  //   ImagemEmpresa4,
  //   ImagemEmpresa5,
  //   ImagemEmpresa6,
  //   ImagemEmpresa7,
  //   ImagemEmpresa8,
  //   ImagemEmpresa9,
  //   ImagemEmpresa10, 
  //   ImagemEmpresa11, 
  //   ImagemEmpresa12,
  //   ImagemEmpresa13, 
  //   ImagemEmpresa14, 
  //   ImagemEmpresa15,
  //   ImagemEmpresa16, 
  //   ImagemEmpresa17, 
  //   ImagemEmpresa18,
  //   ImagemEmpresa19, 
  //   ImagemEmpresa20, 
  //   ImagemEmpresa21
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
    cerimonia: {
      option1: 520,
      option2: 515,
      option3: 533,
    },
    fotografia: {
      option1: 950,
      option2: 4200,
      option3: 2350,
    },
    cabeloMaquiagem: {
      option1: 1200,
      option2: 2500,
      option3: 1355,
    },
    decoracao: {
      option1: 4520,
      option2: 2750,
      option3: 4136,
    },
    local: {
      option1: 3120,
      option2: 2750,
      option3: 3736,
    },
  };

  const altImagens = [
    "Uma banda composta por 5 homens em um local escuro com poucas luzes. O cantor esta na frente com um microfone  prata em um suporte prata e segurando uma guitarra preta e branca. Ele é branco, com cabelos castanhos e lisos e barba longa castanha. Esta vestindo uma camiseta branca com uma jaqueta jeans com bolsos por cima e uma calça jeans preta. Ao lado esquerdo esta mostrando apenas um pequeno pedaço do tecladista, tocando um teclado preto e branco. Atras do lado esquerdo esta o baixista, um homem branco de cabelos castanhos, esta vestindo uma camiseta preta com um casaco xadrez azul por cima, uma calça jeans preta e all star preto. O baixo é preto com a corda vermelha. Atras do lado direito esta o baterista, a bateria é branca e ele é um homem branco, loiro com barba. Esta vestindo uma camiseta cinza com um casaco azul xadrez, calça jeans azul, tênis branco e meia preta. atras do lado direito esta mostrando uma pequena parte do guitarrista com uma guitarra laranja.",
    "Uma banda de 3 pessoas. Uma das vocalistas é negra com o cabelo cacheado preto. Esta segurando um microfone preto e usando um vestido branco e azul. A outra vocalista é branca, com o cabelo castanho escuro e ondulado. Esta segurando um microfone preto, usando uma camisa branca de manga curta e um chapéu de palha. O homem atrás é negro, com cabelos e barba pretos e crespos, esta sorrindo e usando óculos escuros pretos. Ele esta usando uma camisa branca e segurando um violão preto.",
    "Uma orquestra ao ar livre, as pessoas estão em cima de um palco. O maestro é um homem branco e loiro. Esta usando um terno preto, com camisa branca e gravata borboleta preta. Ele esta com os olhos fechados e segurando uma baqueta na mão esquerda. Os músicos são com compostos por  homens e mulheres brancos e loiros, todos usando preto e tocando violinos.",
    "Duas mesas com toalhas brancas, com tabuas de madeira em cima. Uma mesa esta na frente e outra no fundo. Nas tabuas tem comidas diversas, compostas por: espetinhos de queijo com tomate, torradinha com queijo e tomate, canoinhas com patê, tortinhas de carne, lanchinhos com pepinos em cima em um palito de dente, hamburgueres e tortinhas de limão.",
    "Uma mesa de mármore preto em uma sala com piso de madeira e parede branca. A mesa é composta por: 2 pilhas de pratos, um pegador dentro de um pratinho, suportes com pratos e comida diversas (pães e doces) e vasinhos com plantas dentro.",
    "Uma mesa de madeira composta por: 2 pilhas de pratos, sopas diversas, pegadores em pratinhos.",
    "Uma cerimonia de casamento acontecendo. O mestre de cerimônia é um homem asiático de cabelo preto segurando um microfone preto e prata na mão esquerda, ele esta vestindo uma camisa branca e calça preta. Em sua frente esta o casal com as mãos dadas. A mulher é branca e tem o cabelo castanho e esta usando um vestido de noiva branco de renda e alças. O homem é branco e esta usando um terno preto e um relógio preto e dourado na mão esquerda.",
    "Uma cerimônia de casamento acontecendo. Ao fundo temos uma parede de folhas e flores brancas, a frente esta o mestre de cerimônia sorrindo, um homem negro de cabelo preto, terno preto com camisa branca e gravata borboleta preta, ele esta segurando suas mãos em frente ao seu corpo. Na sua frente esta o casal, a direita esta o homem segurando um microfone preto na sua mão direita e o seu celular preto em sua mão esquerda. Ele esta lendo seus votos em seu celular com a cabeça baixa, é branco com os cabelos castanhos e esta usando um terno azul claro com camisa branca. A mulher esta olhando para baixo e sorrindo, ela é branca e esta usando seu cabelo castanho preso em um coque, esta usando um vestido de noiva branco com as mangas curtas caídas sobre os ombros, uma coroa branca brilhante, um veu preso a coroa branco e brincos brancos e brilhantes.",
    "Uma cerimonia de casamento acontecendo. É durante o dia em uma praia, ao fundo temos uma moldura com folhas enroladas, e na frente da moldura esta o padre, um homem branco de óculos e batina branca. Em sua frente tem uma mesa de madeira e um casal. O homem esta a direita, ele é branco e tem os cabelos e barba castanhos, esta usando uma boina creme e um terno branco, com uma flor branca no bolso, ele esta colocando a aliança na mão esquerda da noiva com sua mão direita, enquanto segura a mão dela com a mão esquerda. A mulher esta a esquerda, ela é branca e tem os cabelos loiros, esta usando flores no cabelo com um veu branco e um vestido branco de noiva de alças.",
    "O cenário é uma praia durante o dia, no fundo tem plantas e luzes penduradas, na frente tem um fotografo sorrindo. Ele é um homem branco careca, usando uma camisa branca e suspensórios pretos presos a calça preta. Esta segurando uma câmera fotográfica preta na mão esquerda, com a alça marrom da câmera enrolada no braço. Seu braço direito tem uma pulseira preta e ele tem tatuagens nos dois braços.",
    "O cenário é em uma rua durante a noite. O fotografo é um homem branco de cabelo castanho claro ajoelhado, usando uma camisa branca e um colete e calça azul escuro. Ele esta ajoelhado segurando uma câmera fotográfica preta com as duas mãos. A frente, sendo fotografada, esta a noiva, uma mulher branca de cabelo curto e castanho escuro. Ela esta usando um vestido branco de noiva de alças e segurando o seu veu branco e longo para o alto com a mão esquerda.",
    "O cenário é uma montanha ao ar livre durante o dia ventando. Vemos 5 mulheres. A 1ª a esquerda é uma madrinha branca e ruiva com os cabelos no rosto, ela esta usando um vestido creme de alças, a 2ª a esquerda esta abraçando a primeira mulher apenas com o braço direito, ela esta sorrindo e é outra madrinha, também branca e com o cabelo castanho, ela esta usando um vestido cinza escuro com flores e um cinto vermelho, enquanto abraça a noiva com seu outro braço. A noiva esta ao meio, é uma mulher branca sorrindo, ela tem o cabelo loiro e esta usando uma blusa curta branca e uma saia branca, segurando um buque de flores brancas com a mão direita e abraçando a 2ª madrinha com o braço esquerdo. A 4ª mulher é uma madrinha branca e loira, ela esta sorrindo e segurando os cabelos castanhos com a mão esquerda no topo da cabeça, sua outra mão esta segurando seus cabelos nas pontas, ela esta usando um vestido creme tomara que caia. A 5ª mulher é uma madrinha branca usando um vestido de alças rosa claro e segurando os cabelos loiros com a mão esquerda. Na frente delas esta a fotografa, uma mulher branca de cabelo castanho com as costas abaixadas, ela esta segurando uma câmera fotográfica preta com as duas mãos e esta vestindo uma camiseta cinza de mangas longas, uma blusa amarrada na cintura, uma calça jeans azul e uma sapatilha preta.",
    "Mulher branca, de cabelos castanhos e presos, sentada enquanto é maquiada. Ela esta usando uma sombra marrom com rosa e branco, batom rosa e blush rosa. Esta vestindo um vestido branco de noiva com renda. Do lado esquerdo, de pé, esta a maquiadora. Uma mulher branca, loira, usando uma camisa branca. Ela esta segurando um batom rosa na mão esquerda, com um relógio preto. Na mão direita ela esta passando o batom na noiva com um pincel preto, e esta usando uma aliança prata.",
    "Ao fundo tem uma mulher branca de cabelos castanhos e presos, usando um vestido preto, segurando a franja da noiva com a mão esquerda. A frente esta a maquiadora do lado esquerdo, uma mulher branca usando óculos pretos e com os cabelos ruivos. Ela esta com as costas abaixadas segurando um lápis de boca na mão esquerda na boca da noiva, na mão direita ela esta segurando um batom vermelho e usando uma pulseira prata, ela esta usando um vestido preto de mangas longas, as pontas da mangas contem uma estampa xadrez preto e branco. A noiva esta sentada do lado direito, é uma mulher branca e loira, olhando para baixo com sombra preta e cinza nos olhos, ela esta usando batom vermelho e um vestido de noiva branco de mangas longas de renda.",
    "Um maquiador branco de cabelos e barba pretos usando uma camisa branca, colete e calça pretos, esta levemente curvado para baixo, segurando um pincel de maquiagem nos olhos da noiva com a mão esquerda, sua mão direita esta segurando um lenço de papel e esta em cima dos cabelos da noiva. A noiva é uma mulher branca de olhos fechado, com o rosto virado para cima. Seus cabelos são loiros e estão enrolados com bobes. Ela esta usando um brinco azul redondo com a volta dourada, e um roupão rose.",
    "Um buffet de festas com diversas mesas compostas por uma toalha dourada, panos brancos com dois pratos em cima de cada, taças de vidro , talheres prateados, velas, plantas, sopas e cadeiras douradas. A mesa da frente esta com m número “3” em cima dentro de uma moldura. No teto temos lustres, plantas e flores brancas.",
    "Uma mesa ao ar livre durante o dia, ao fundo vemos uma arvore e à frente vemos uma grande mesa de madeira. No meio da mesa temos uma toalha branca com flores brancas e velas dentro de copos. Dos lados esquerdo e direito da mesa temos guardanapos brancos dobrados, talheres prateados e taças, copos e garrafas de vidro.",
    "Um buffet de festas com diversas mesas, podemos ver em cima delas  pratos brancos com pães dentro, taças de vidro, canecas brancas com detalhes dourados de ponta cabeça em cima de pratos brancos com detalhes dourados, uma toalha branca de renda, guardanapos azuis abertos, guardanapos brancos dobrados, talheres dourados, um grande vaso de vidro no centro com folhas enroladas em sua volta e em sua base e por dentro, flores brancas, vermelhas e rosas. Por ultimo, cada mesa tem cadeiras douradas. Ao fundo vemos o bolo de casamento branco de andares, e no teto luzes suspensas.",
    "Um cenário ao ar livre durante o dia, composto por árvores e uma construção de vidro atrás. Um casal de mãos dadas esta lá. O homem é branco com cabelo castanho e esta usando um terno preto com uma camisa branca, e no bolso do terno tem flores brancas, ele esta usando um sapato marrom. A mulher é branca com cabelo castanho e esta usando um vestido de noiva branco com mangas bufantes caindo sob os ombros, ela esta segurando um buque de flores brancas.",
    "Um cenário ao ar livre em um gramado durante o dia. Ao fundo temos uma cerca com plantas, em frente vemos um arco de casamento com panos brancos e flores brancas, à frente do lado esquerdo temos cadeiras de madeira com flores brancas em uma fita branca.",
    "Um cenário ao ar livre em um gramado durante a noite. Ao fundo temos uma porta de madeira, no meio um caminho de grama com flores vermelhas e brancas dos dois lados, as cadeiras de madeira com almofadas brancas estão tanto do lado esquerdo quanto do direito. Na frente esta uma mesa de madeira com flores brancas, papéis e canetas em cima. No teto temos estruturas que vem do chão para segurar lâmpadas suspensas e flores vermelhas e brancas."
  ]

  console.log(altImagens[20]);
  return (
    <>
      <Navbar />
      <section className="pagamento-inicial">
        <Link className="logo-reduzida" to={"/"}>
          <img src={LogoReduzida} alt="Logo da Laçoos, um sinal de infinito amarelo formado por duas letras o’s." />
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
            altImagem={altImagens}
            indice={[0, 1, 2]}
            tituloEmpresa={"Profissionais na Área de Música"}
          />
          </section>
         {/* <Servicos
            name={"cerimonia-"}
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
          <Servicos
            name={"comida"}
            valorServico={[
              prices.cerimonia.option1,
              prices.cerimonia.option2,
              prices.cerimonia.option3,
            ]}
            nomeEmpresa={["Jorge José", "Luiz Cardoso", "Pedro Mota"]}
            imagens={imagens}
            indice={[6, 7, 8]}
            tituloEmpresa={"Profissionais na Área de Cerimonia Oficiais"}
          />
          <Servicos
            name={"fotografia"}
            valorServico={[
              prices.fotografia.option1,
              prices.fotografia.option2,
              prices.fotografia.option3,
            ]}
            nomeEmpresa={["Carlos Torres", "Deivid Luiz", "Renata Souza"]}
            imagens={imagens}
            indice={[9, 10, 11]}
            tituloEmpresa={"Profissionais na Área de Fotografia"}
          />
          <Servicos
            name={"cabeloMaquiagem"}
            valorServico={[
              prices.cabeloMaquiagem.option1,
              prices.cabeloMaquiagem.option2,
              prices.cabeloMaquiagem.option3,
            ]}
            nomeEmpresa={["Luiza Vasconcelos", "Torres Eventos", "Rogerio Peregrini"]}
            imagens={imagens}
            indice={[12, 13, 14]}
            tituloEmpresa={"Profissionais na Área de Maquiagem e Cabelo Social "}
          />
          <Servicos
            name={"decoracao"}
            valorServico={[
              prices.decoracao.option1,
              prices.decoracao.option2,
              prices.decoracao.option3,
            ]}
            nomeEmpresa={["Denise Decorações", "Verrotti Eventos", "Romeus Eventos "]}
            imagens={imagens}
            indice={[15, 16, 17]}
            tituloEmpresa={"Profissionais na Área de Decoração"}
          />
          <Servicos
            name={"local"}
            valorServico={[
              prices.local.option1,
              prices.local.option2,
              prices.local.option3,
            ]}
            nomeEmpresa={["Casa das Rosas", "Gramados Eventim", "Casa Persa"]}
            imagens={imagens}
            indice={[18, 19, 20]}
            tituloEmpresa={"Lugares para Realizar seu Casamento"}
          />
        </section> */}
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
                <p className="valorFinal">Total: R$ {"00"},00</p>
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
