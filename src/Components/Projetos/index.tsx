import "./Projetos.css";

export const Projetos = () => {
    return (
        <section id="Projetos">
            <h2 className="worksTitle">Projetos</h2>
            <span className="worksDesc">
                Aqui estão os destaques entre os projetos já concluidos, para ver todos os
                trabalhos entre em meu GitHub <a href="https://github.com/kiqBueno" target="_blank">aqui</a>!!
            </span>
            <div className="works">
                <div className="work">
                    <img src="https://via.placeholder.com/150" alt="Imagem do projeto" className="worksImg" />
                    <img src="https://via.placeholder.com/150" alt="Imagem do projeto" className="worksImg" />
                    <img src="https://via.placeholder.com/150" alt="Imagem do projeto" className="worksImg" />
                    <img src="https://via.placeholder.com/150" alt="Imagem do projeto" className="worksImg" />
                </div>
            </div>
        </section>
    );
};
