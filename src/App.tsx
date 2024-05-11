// Importando as imagens necessárias
import UIDesign from "./assets/ui-design.png";
import WebDesign from "./assets/website-design.png";
import WebDevelopment from "./assets/webDevelopment.png";

// Importando o useState de React
import { useState } from "react";

// Importando os componentes filhos
import { Navbar } from "./Components/Navbar";
import { PaginaInicio } from "./Components/Inicio";
import { Sobre } from "./Components/Sobre";
import { Projetos } from "./Components/Projetos";
import { Contato } from "./Components/Contato";

// Definindo o componente App
export const App = () => {
  // Estado para controlar o tema
  const [theme, setTheme] = useState("dark");

  return (
    // Estrutura principal da aplicação
    <div className={`container ${theme}`}>
      {/* Barra de navegação */}
      <Navbar theme={theme} setTheme={setTheme} />
      
      {/* Página inicial */}
      <PaginaInicio />
      
      {/* Seção "Sobre" com habilidades */}
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
      
      {/* Seção de Projetos */}
      <Projetos />
      
      {/* Seção de Contato */}
      <Contato />
    </div>
  );
};
