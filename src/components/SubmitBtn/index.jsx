import "./styles.css";

// eslint-disable-next-line react/prop-types
function SubmitBtn({ pathBtn = "#", titleBtn }) {
  return (
    <a href={pathBtn} target="_blank" className="submit-btn">
      {titleBtn}
    </a>
  );
}

export default SubmitBtn;
