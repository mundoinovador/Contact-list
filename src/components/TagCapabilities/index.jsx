import "./styles.css";

// eslint-disable-next-line react/prop-types
function TagCapabilities({ title = "" }) {
  return (
    <div className="tag-capabilities">
      <p id="title-tag-capabilities">{title}</p>
    </div>
  );
}

export default TagCapabilities;
