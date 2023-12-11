import "./ConvitesModule.css";

import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import convite1 from "../../../img/convites/convite-1.svg";
import convite2 from "../../../img/convites/convite-2.svg";
import convite3 from "../../../img/convites/convite-3.svg";
import convite4 from "../../../img/convites/convite-4.svg";
import convite5 from "../../../img/convites/convite-5.svg";
import convite6 from "../../../img/convites/convite-6.svg";
import convite7 from "../../../img/convites/convite-7.svg";
import convite8 from "../../../img/convites/convite-8.svg";
import convite9 from "../../../img/convites/convite-9.svg";
import convite1PB from "../../../img/convites/convite-1-PB.svg";
import convite2PB from "../../../img/convites/convite-2-PB.svg";
import convite3PB from "../../../img/convites/convite-3-PB.svg";
import convite4PB from "../../../img/convites/convite-4-PB.svg";
import convite5PB from "../../../img/convites/convite-5-PB.svg";
import convite6PB from "../../../img/convites/convite-6-PB.svg";
import convite7PB from "../../../img/convites/convite-7-PB.svg";
import convite8PB from "../../../img/convites/convite-8-PB.svg";
import convite9PB from "../../../img/convites/convite-9-PB.svg";

export default function Convites() {
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
  const convites = [
    convite1,
    convite2,
    convite3,
    convite4,
    convite5,
    convite6,
    convite7,
    convite8,
    convite9,
  ];
  const convitesPB = [
    convite1PB,
    convite2PB,
    convite3PB,
    convite4PB,
    convite5PB,
    convite6PB,
    convite7PB,
    convite8PB,
    convite9PB,
  ];
  return (
    <>
      <Navbar />
      <section className={`container-convites ${getThemeClass(theme)}`}>
        <h2 className={`h2-convites ${getThemeClass(theme)}`}>Convites</h2>
        <div class="container-todas-convites">
            {theme === "A" ? convitesPB.map((convite, id) => (
                <img className="cada-convite" key={id} src={convite} alt="Convite de casamento, onde vai o nome dos casados, enderço onde vai acontecer a cerimônia, uma decoração de acordo com o tema da decoração do casamento, horário de início e um texto de boas vindas." />
            )) : convites.map((convite, id) => (
                <img className="cada-convite" key={id} src={convite} alt="Convite de casamento, onde vai o nome dos casados, enderço onde vai acontecer a cerimônia, uma decoração de acordo com o tema da decoração do casamento, horário de início e um texto de boas vindas." />
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
