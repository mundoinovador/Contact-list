/* eslint-disable react/prop-types */
import OLIcon from "../../assets/open-link.png";
import GhIcon from "../../assets/github-icon.png";
import "./styles.scss";

function LinkRedirect({
  countLink,
  linkNames,
  linksName = "",
  imgDefault = true,
  pathLink = "#",
}) {
  return (
    <>
      {countLink ? (
        <div className="show-project">
          <a href="#" target="_blank">
            <span>{linkNames[0]}</span>
            <img src={OLIcon} />
          </a>
          <a href="#" target="_blank">
            <span>{linkNames[1]}</span>
            <img src={GhIcon} />
          </a>
        </div>
      ) : (
        <div className="show-project">
          {imgDefault ? (
            <a href={pathLink} target="_blank">
              <span>{linksName}</span>
              <img src={OLIcon} />
            </a>
          ) : (
            <a href={pathLink} target="_blank">
              <span>{linksName}</span>
            </a>
          )}
        </div>
      )}
    </>
  );
}

export default LinkRedirect;
