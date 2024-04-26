import "./Sobre.css";

interface SkillBar {
  img: string;
  alt: string;
  title: string;
  description: string;
}

interface SobreProps {
  skills: SkillBar[];
}

export const Sobre: React.FC<SobreProps> = ({ skills }) => {
  return (
    <section id="Sobre">
      <span className="skillTitle">Minhas Habilidades</span>
      <span className="skillDesc">
        Sou Kaique Bueno, um desenvolvedor vindo de Curitiba-Brasil. Minha
        aptidão está em resolver problemas de forma criativa na Web. Estou aqui
        para ajudar a transformar suas ideias em realidade digital. Vamos
        trabalhar juntos!
      </span>
      <div className="skillBars">
        {skills.map((skill, index) => (
          <div className="skillBar" key={index}>
            <img src={skill.img} alt={skill.alt} className="skillBarImg" />
            <div className="skillBarText">
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

