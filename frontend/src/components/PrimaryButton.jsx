import "./styles/PrimaryButton.scss";

export const PrimaryButton = ({ children, handleClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={handleClick} className="primaryBtn">
      {children}
    </button>
  );
};
