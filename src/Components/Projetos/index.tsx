import "./Projetos.css";

export const Projetos = () => {
  return (
    <section id="Projetos">
      <h2 className="Title">Projetos</h2>
      <span className="Desc">
        Aqui estão os destaques entre os projetos já concluidos, para ver todos
        os trabalhos entre em meu GitHub{" "}
        <a href="https://github.com/kiqBueno" target="_blank">
          aqui
        </a>
        !!
      </span>
      <div className="worksImgs">
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
      <button className="workBtn">
        <a href="https://github.com/kiqBueno" target="_blank">
          Veja Mais!
        </a>
      </button>
    </section>
  );
};
