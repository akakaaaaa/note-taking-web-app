import { SubmitButton } from "./SubmitButton";
import "./styles/Form.scss";
import info from "../assets/images/icon-info.svg";
import { useState } from "react";
import eyeIcon from "../assets/images/icon-show-password.svg";

export const Form = ({
  label1_title,
  label2_title,
  forgot,
  btn_value,
  page,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form action="">
      <div className="email-container">
        <label htmlFor="email">{label1_title}</label>
        <input
          disabled={disabled}
          name="email"
          type="email"
          placeholder="email@example.com"
          autoComplete="off"
          required
        />
      </div>

      {page === "forgotPassword" ? null : (
        <div className="password-container">
          <div className="card-form-inner-container">
            <label htmlFor="password">{label2_title}</label>
            <a href="" className="card-forgot">
              {forgot}
            </a>
          </div>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              disabled={disabled}
              name="password"
              required
            />
            <img
              src={eyeIcon}
              alt="toggle visibility"
              className="password-toggle-icon"
              onClick={togglePassword}
            />
          </div>
          {page === "register" ? (
            <div
              className="hint"
              style={{ opacity: disabled ? "40%" : "100%" }}
            >
              <img src={info} alt="warn" />
              <p className="hint-p">At least 8 characters</p>
            </div>
          ) : null}
        </div>
      )}

      <SubmitButton type={"submit"}>{btn_value}</SubmitButton>
    </form>
  );
};
