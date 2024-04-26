import "./PaginaInicio.css";
import { Link as ScrollLink } from "react-scroll";
import btnimg from '../../assets/hireme.png'

export const PaginaInicio = () => {
  return (
    <section id="Intro">
      <div className="introContent">
        <span className="hello">Olá,</span>
        <span className="introText">
          Me chamo <span className="introName">Kaique</span>
          <br />
          Desenvolvedor Web
        </span>
        <p className="introPara">
          Sou um desenvolvedor web flexível, com experiência voltada para
          <br />
          páginas interativas e responsivas.
        </p>
        <ScrollLink to="contato">
          <button className="btn"><img src={btnimg} alt="Icone Maleta" />Vamos trabalhar juntos!</button>
        </ScrollLink>
      </div>
      <img src="" alt="Minha Foto" className="bg" />
    </section>
  );
};
