// Importando o estilo CSS da seção de projetos
import "./Projetos.css";

// Definindo o componente Projetos
export const Projetos = () => {
  return (
    // Estrutura da seção de projetos
    <section id="Projetos">
      {/* Título da seção */}
      <h2 className="Title">Projetos</h2>
      
      {/* Descrição da seção com um link para o GitHub */}
      <span className="Desc">
        Aqui estão os destaques entre os projetos já concluídos, para ver todos
        os trabalhos entre em meu GitHub{" "}
        <a href="https://github.com/kiqBueno" target="_blank">
          aqui
        </a>
        !!
      </span>
      
      {/* Container para imagens dos projetos */}
      <div className="worksImgs">
        {/* Imagens dos projetos */}
        <img
          src="https://via.placeholder.com/150"
          alt="Imagem do projeto"
          className="worksImg"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Imagem do projeto"
          className="worksImg"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Imagem do projeto"
          className="worksImg"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Imagem do projeto"
          className="worksImg"
        /> 
      </div>
      
      {/* Botão para ver mais projetos no GitHub */}
      <button className="workBtn">
        <a href="https://github.com/kiqBueno" target="_blank">
          Veja Mais!
        </a>
      </button>
    </section>
  );
};
