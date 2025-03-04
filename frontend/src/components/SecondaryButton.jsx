import "./styles/SecondaryButton.scss";

export const SecondaryButton = ({ children, disabled, handleClick }) => {
  return (
    <button disabled={disabled} onClick={handleClick} className="secondaryBtn">
      {children}
    </button>
  );
};
