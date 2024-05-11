// Importando o estilo CSS da seção de contato
import "./Contato.css";

// Definindo o componente Contato como uma função de componente
export const Contato = () => {
  return (
    // Definindo uma seção com o id "Contato"
    <section id="Contato">
      <div>
        {/* Título da seção de contato */}
        <h1 className="Title">Entre em contato</h1>
        {/* Texto de introdução */}
        <span className="esc">
          Por favor preencha o formulário abaixo para conversarmos sobre
          oportunos negócios.
        </span>
        {/* Formulário de contato */}
        <form className="contactForm">
          {/* Campos do formulário */}
          <input type="name" className="name" placeholder="Seu Nome" />
          <input type="email" className="email" placeholder="Seu email" />
          <textarea
            name="message"
            className="msg"
            placeholder="Sua Mensagem"
          ></textarea>
          {/* Botão de envio do formulário */}
          <button type="submit" value="send" className="submitBtn">
            Enviar
          </button>
          {/* Links adicionais */}
          <div className="links">
            <img src="" alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};
