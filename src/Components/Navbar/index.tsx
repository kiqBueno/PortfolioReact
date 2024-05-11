// Importando o estilo CSS da barra de navegação
import "./Navbar.css";

// Importando as imagens necessárias
import day from "../../assets/day.png";
import night from "../../assets/night.png";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import menuImg from "../../assets/menuIcon.svg";

// Importando ScrollLink de react-scroll
import { Link as ScrollLink } from "react-scroll";

// Importando o useState de React
import { useState } from "react";

// Definindo a interface para as props da barra de navegação
interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

// Definindo o componente Navbar
export const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  // Estado para controlar a exibição do menu responsivo
  const [showMenu, setShowMenu] = useState(false);

  // Função para alternar entre os temas claro e escuro
  const toggleMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    // Estrutura da barra de navegação
    <header className={`navbar ${theme}`}>
      {/* Logo */}
      <img src={logo} alt="logo" className="logo" />

      {/* Lista de itens de menu para desktop */}
      <div className="ul">
        {/* Links para rolar para diferentes seções */}
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="Intro"
          className="desktopMenuListItem"
        >
          Início
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="Sobre"
          className="desktopMenuListItem"
        >
          Sobre
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="Projetos"
          className="desktopMenuListItem"
        >
          Projetos
        </ScrollLink>
      </div>

      {/* Botões */}
      <div className="buttons">
        {/* Botão de contato */}
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="Contato"
        >
          <button
            className={`desktopMenuBtn ${theme}`}
            onClick={() => {
              // Focar no elemento de contato quando clicar no botão
              const contactElement = document.getElementById("Contato");
              if (contactElement) {
                contactElement.focus();
              }
            }}
          >
            <img src={contact} alt="Icone de contato" /> Contato
          </button>
        </ScrollLink>

        {/* Botão de alternar entre temas claro e escuro */}
        <img
          onClick={toggleMode}
          src={theme === "light" ? night : day}
          alt=""
          className="toggleIcon"
        />
      </div>

      {/* Ícone do menu responsivo para dispositivos móveis */}
      <img
        src={menuImg}
        alt="menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />

      {/* Menu responsivo */}
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        {/* Links para rolar para diferentes seções */}
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="Intro"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Início
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="Sobre"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Sobre
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="Projetos"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projetos
        </ScrollLink>
        {/* Link de contato */}
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="Contato"
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contato
        </ScrollLink>

        {/* Botão de alternar entre temas claro e escuro */}
        <nav className="listItem" onClick={toggleMode}>
          Mudar Tema
        </nav>
      </div>
    </header>
  );
};
