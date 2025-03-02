import "./styles/SubmitButton.scss";

export const SubmitButton = ({ children, type }) => {
  return <button type={type}>{children}</button>;
};
