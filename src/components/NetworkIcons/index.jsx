import "./styles.scss";
import InIcon from "../../assets/linkeding-icon.png";
import GhIcon from "../../assets/github-icon.png";

// eslint-disable-next-line react/prop-types
function NetworkIcons({ children }) {
  return (
    <div className="contact-me">
      {children}
      <a
        href="https://www.linkedin.com/in/nicolas-e-07390021a/"
        target="_blank"
        className="icon-button"
      >
        <img src={InIcon} />
      </a>

      <a
        href="https://github.com/nicolasnk80"
        target="_blank"
        className="icon-button"
      >
        <img src={GhIcon} />
      </a>
    </div>
  );
}

export default NetworkIcons;
