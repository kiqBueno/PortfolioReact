// Importando o estilo CSS da página inicial
import "./PaginaInicio.css";

// Importando o componente Link renomeado como ScrollLink de react-scroll
import { Link as ScrollLink } from "react-scroll";

// Importando a imagem do botão
import btnimg from '../../assets/hireme.png'

// Definindo o componente PaginaInicio como uma função de componente
export const PaginaInicio = () => {
  return (
    // Definindo uma seção com o id "Intro"
    <section id="Intro">
      {/* Div para o conteúdo da introdução */}
      <div className="introContent">
        {/* Saudação */}
        <span className="hello">Olá,</span>
        {/* Texto de introdução com o nome do desenvolvedor */}
        <span className="introText">
          Me chamo <span className="introName">Kaique</span>
          <br />
          Desenvolvedor Web
        </span>
        {/* Parágrafo com descrição do desenvolvedor */}
        <p className="introPara">
          Sou um desenvolvedor web flexível, com experiência voltada para
          <br />
          páginas interativas e responsivas.
        </p>
        {/* Botão de rolagem para a seção de contato */}
        <ScrollLink to="contato">
          <button className="btn"><img src={btnimg} alt="Icone Maleta" />Vamos trabalhar juntos!</button>
        </ScrollLink>
      </div>
      {/* Imagem de fundo */}
      <img src="" alt="Minha Foto" className="bg" />
    </section>
  );
};
