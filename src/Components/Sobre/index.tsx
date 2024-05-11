// Importando o estilo CSS da seção "Sobre"
import "./Sobre.css";

// Definindo a interface para a barra de habilidade
interface SkillBar {
  img: string;
  alt: string;
  title: string;
  description: string;
}

// Definindo a interface para as props da seção "Sobre"
interface SobreProps {
  skills: SkillBar[];
}

// Definindo o componente Sobre
export const Sobre: React.FC<SobreProps> = ({ skills }) => {
  return (
    // Estrutura da seção "Sobre"
    <section id="Sobre">
      {/* Título da seção */}
      <span className="Title">Minhas Habilidades</span>
      
      {/* Descrição da seção */}
      <span className="Desc">
        Sou Kaique Bueno, um desenvolvedor vindo de Curitiba-Brasil. Minha
        aptidão está em resolver problemas de forma criativa na Web. Estou aqui
        para ajudar a transformar suas ideias em realidade digital. Vamos
        trabalhar juntos!
      </span>
      
      {/* Container para as barras de habilidade */}
      <div className="skillBars">
        {/* Mapeando as habilidades e renderizando as barras de habilidade */}
        {skills.map((skill, index) => (
          <div className="skillBar" key={index}>
            {/* Imagem representando a habilidade */}
            <img src={skill.img} alt={skill.alt} className="skillBarImg" />
            
            {/* Texto da habilidade */}
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

