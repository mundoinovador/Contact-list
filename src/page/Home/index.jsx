import "./styles.scss";
import BannerPhoto from "../../assets/photo-banner.jpg";
import CardProjects from "../../components/CardProjects";
import { useState } from "react";
import LinkRedirect from "../../components/LinkRedirect";
import SubmitBtn from "../../components/SubmitBtn";
import NetworkIcons from "../../components/NetworkIcons";
import AboutMeSction from "../../components/AboutMeSection";
import { Header } from "../../components/Header";
import ProjectLiveCodeImg from "../../assets/project-livecode.png";
import ProjectContactImg from "../../assets/project-contact.png";

function Home() {
  const [listProjects] = useState([
    {
      title: "Página de destino promocional do nosso programa favorito",
      description:
        "Juntou-se a um designer para dar vida a uma página promocional do nosso querido programa, Hora de Aventura. Entregue um design totalmente responsivo com recursos de conteúdo dinâmico, integrando perfeitamente um recurso de boletim informativo para manter os fãs atualizados com as aventuras mais recentes.",
      year: "2023",
      role: "Desenvolvedor Front-end",
      countLinks: true,
      linkNames: ["Ver projeto".toUpperCase(), "veja no github".toUpperCase()],
      pathImg: ProjectContactImg,
    },

    {
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      year: "2022",
      role: "Back-end Developer",
      countLinks: false,
      linkName: "Ver projeto".toUpperCase(),
      pathLink: "https://agenciaschooltech.github.io/livecoding-inscricao/",
      pathImg: ProjectLiveCodeImg,
    },
  ]);

  return (
    <div className="home">
      <main>
        {/* Header */}
        <Header />

        {/* Hero - Section */}
        <section className="hero-home">
          {/* Banner with text's */}
          <div className="banner-welcome">
            <h1>
              Olá, eu sou
              <br />
              Nicolas Emiliano
            </h1>
            <p>
              Um desenvolvedor full-stack baseado em Node e Python, apaixonado
              <br />
              por construir sites acessíveis e fáceis de usar.
            </p>

            {/* Div with icons of social midia */}
            <NetworkIcons>
              <SubmitBtn
                titleBtn="CONTACT ME"
                pathBtn="https://wa.me/5511988717656?text=Ol%C3%A1%20Mundo%20Inovador!%20Preciso%20de%20ajuda%20tecnol%C3%B3gica.."
              />
            </NetworkIcons>
          </div>

          <div className="img-banner">
            <img
              src={BannerPhoto}
              width="100%"
              style={{
                border: "1px solid gray",
                borderRadius: "1rem",
              }}
            />
          </div>
        </section>

        {/* Projects - Section */}
        <section className="projects" id="work-sec">
          <div className="title-projects">
            <h2>Projetos em destaque</h2>
            <p>
              Aqui estão alguns dos projetos selecionados que mostram minha
              paixão para
              <br />
              desenvolvimento front-end.
            </p>
          </div>

          {/* All Projects */}
          <div className="all-projects">
            {listProjects.map((item, index) => (
              <CardProjects
                key={index}
                title={item.title}
                description={item.description}
                year={item.year}
                role={item.role}
                countLink={item.countLinks}
                linkNames={item.linkNames}
                linkName={item.linkName}
                pathLink={item.pathLink}
                imgDefault={item.pathImg}
              />
            ))}
          </div>
        </section>

        {/* About ME - Section */}
        <AboutMeSction id="about-me-sec">
          <LinkRedirect
            countLink={false}
            linksName="MAIS SOBRE MIM"
            imgDefault={false}
            pathLink="/about-me"
          />
        </AboutMeSction>
      </main>
    </div>
  );
}

export default Home;
