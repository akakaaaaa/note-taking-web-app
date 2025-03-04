import "./styles/SubmitButton.scss";

export const SubmitButton = ({ children, type }) => {
  return (
    <button className="submitBtn" type={type}>
      {children}
    </button>
  );
};
