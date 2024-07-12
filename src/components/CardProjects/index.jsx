/* eslint-disable react/prop-types */
import "./styles.scss";
import ImgProject from "../../assets/work.png";
import LinkRedirect from "../LinkRedirect";

function CardProjects({
  countLink,
  title,
  description,
  year,
  role,
  linkNames,
  linkName,
  pathLink = "#",
  imgDefault = { ImgProject },
}) {
  return (
    <div className="card-projects">
      <div className="img-container">
        <img src={imgDefault} />
      </div>

      <div className="title-card">
        <div className="title-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="project-info">
          <div className="details-info-project">
            <h4>Informações do projeto</h4>
          </div>

          <div className="details-info-project">
            <p>Ano</p>
            <p>{year}</p>
          </div>

          <div className="details-info-project">
            <p>Função</p>
            <p>{role}</p>
          </div>
        </div>

        <div className="show-project">
          <LinkRedirect
            countLink={countLink}
            linkNames={linkNames}
            linksName={linkName}
            pathLink={pathLink}
          />
        </div>
      </div>
    </div>
  );
}

export default CardProjects;
