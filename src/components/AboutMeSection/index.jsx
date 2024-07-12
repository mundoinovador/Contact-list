import "./styles.scss";

// eslint-disable-next-line react/prop-types
function AboutMeSction({ children }) {
  return (
    <section className="about-me" id="about-me-sec">
      <h2>Sobre mim</h2>
      <div className="description">
        <h4>Sou um desenvolvedor full-stack baseado em Node.js e Python</h4>
        <p id="desc-about-me">
          Sou um desenvolvedor full-stack baseado em Node.js e Python em busca
          de oportunidades interessantes. Gosto de focar na acessibilidade
          durante o desenvolvimento. Apaixonado e curioso em resolver problemas.
          Atualmente estou explorando Reactjs, Next e um pouco de Firebase.
          Enquanto não estou programando, gosto de jogar futebol, sair com
          amigos e tocar violão. Aprendendo sempre mais para melhorar a
          habilidade.
        </p>
        {children}
      </div>
    </section>
  );
}

export default AboutMeSction;
