import "./Contato.css";

export const Contato = () => {
  return (
    <section id="Contato">
      <div>
        <h1 className="Title">Entre em contato</h1>
        <span className="esc">
          Por favor preencha o formulário abaixo para conversarmos sobre
          oportunos negócios.
        </span>
        <form className="contactForm">
          <input type="name" className="name" placeholder="Seu Nome" />
          <input type="email" className="email" placeholder="Seu email" />
          <textarea
            name="message"
            className="msg"
            placeholder="Sua Mensagem"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Enviar
          </button>
          <div className="links">
            <img src="" alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};
