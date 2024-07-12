import { useEffect } from "react";
import AboutMeSction from "../../components/AboutMeSection";
import NetworkIcons from "../../components/NetworkIcons";
import SubmitBtn from "../../components/SubmitBtn";
import TagCapabilities from "../../components/TagCapabilities";
import "./styles.scss";

function AboutMe() {
  const all_capabilities = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "PYTHON",
    "FLASK",
    "NODE.JS",
    "API REST",
    "FIREBASE",
    "REACT.JS",
  ];

  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="about-me-page">
      <AboutMeSction stylePaddingBottom="200px">
        <NetworkIcons>
          <SubmitBtn titleBtn="BAIXAR CURRICULO" />
        </NetworkIcons>
      </AboutMeSction>

      <section className="my-capabilities">
        <h2 style={{ textTransform: "uppercase" }}>CAPACIDADES</h2>
        <div className="desc-capabilities">
          <p>
            Estou sempre buscando agregar mais habilidades. Sempre estou
            estudando e praticando meus conhecimentos em projetos, dessa forma
            mooldo meu conhecimento ajudando empresas em projetos e aumentando
            minha capacidade de desenvolvimento pessoal e profissional.
          </p>

          <div className="capabilities">
            {all_capabilities.map((cap, index) => (
              <TagCapabilities title={cap} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="my-experience">
        <h2 style={{ textTransform: "uppercase" }}>experiências</h2>

        <div className="experiences">
          <div className="experience">
            <div className="title-experience">
              <h3>Desenvolvedor Freelance</h3>
              <p>Set 2020 — Out 2023 </p>
            </div>

            <div className="corp">
              <p>DiamondLog</p>
            </div>

            <p>
              Passei 3 anos envoluindo constantemente, junto com o time da
              DiamondLog consegui conhecer o trabalho em equipe e tive uma
              evolução maior do que eu podia esperar, foi uma jornada de
              desafios que superamos juntos, com ideias criativas que fizeram a
              diferença no meu pontencial.
            </p>
          </div>

          <div className="experience">
            <div className="title-experience">
              <h3>Fundador e Desenvolvedor - SchoolTech</h3>
              <p>Mar 2024 — Atual </p>
            </div>

            <p>
              A SchoolTech é um projeto focado em ensinar programação pra quem
              ainda não conhece, mostrar todas as possibilidades que a
              tecnologia disponibiliza para nós hoje em dia e abrir portas para
              alunos que dejesam criar uma carreira como desenvolvedor.
              Trabalhamos em um sub projeto chamado <b>LiveCode</b>. A{" "}
              <b>LiveCode</b> é um evento gratuito de 4 dias que faz uma imersão
              para demonstrar a capacidade da programação para leigos,
              desenvolvedores e curiosos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
