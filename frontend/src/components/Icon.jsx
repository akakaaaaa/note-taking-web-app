import "./styles/Icon.scss";

export const Icon = ({ source, children, isActive, onPress }) => {
  return (
    <div
      className={`icon-container ${isActive ? "pressed" : ""}`}
      onClick={onPress}
    >
      <img src={source} alt={children} className="icon" />
      <p className="icon-name">{children}</p>
    </div>
  );
};
