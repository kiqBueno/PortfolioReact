import UIDesign from "./assets/ui-design.png";
import WebDesign from "./assets/website-design.png";
import WebDevelopment from "./assets/webDevelopment.png";
import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { PaginaInicio } from "./Components/Inicio";
import { Sobre } from "./Components/Sobre";
import { Projetos } from "./Components/Projetos";

export const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <PaginaInicio />
      <Sobre
        skills={[
          {
            img: UIDesign,
            alt: "Icone de Design Ui",
            title: "Ui/Ux Design",
            description: "Descrição da habilidade 1",
          },
          {
            img: WebDesign,
            alt: "Icone de Design Web",
            title: "Design Web",
            description: "Descrição da habilidade 2",
          },
          {
            img: WebDevelopment,
            alt: "Icone de Desenvolvimento Web",
            title: "Desenvolvimento Web",
            description: "Descrição da habilidade 3",
          },
        ]}
      />
      <Projetos />
    </div>
  );
};
