import "./Navbar.css";
import day from "../../assets/day.png";
import night from "../../assets/night.png";
import logo from "../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import contact from "../../assets/contact.png";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const toggleMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <header className={`navbar ${theme}`}>
      <img src={logo} alt="logo" className="logo" />
      <div className="ul">
        <ScrollLink to="Intro" className="desktopMenuListItem">
          Inicio
        </ScrollLink>
        <ScrollLink to="Sobre" className="desktopMenuListItem">
          Sobre
        </ScrollLink>
        <ScrollLink to="Projetos" className="desktopMenuListItem">
          Projetos
        </ScrollLink>
      </div>
      <div className="buttons">
        <button className={`desktopMenuBtn ${theme}`}>
          <img src={contact} alt="Icone de contato" /> Contato
        </button>
        <img
          onClick={toggleMode}
          src={theme === "light" ? night : day}
          alt=""
          className="toggleIcon"
        />
      </div>
    </header>
  );
};
