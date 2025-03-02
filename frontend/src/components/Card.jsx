import "./styles/Card.scss";
import logo from "../assets/images/logo.svg";
import { SubmitButton } from "./SubmitButton";

export const Card = ({}) => {
  return (
    <div className="card">
      <div className="card-logo-container">
        <img src={logo} alt="" />
      </div>

      <div className="card-header-container">
        <p className="card-header">Welcome to Note</p>
        <p className="card-p">Please log in to continue</p>
      </div>

      <div className="card-form-container">
        <form action="">
          <div className="email-container">
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="email@example.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="password-container">
            <div className="card-form-inner-container">
              <label htmlFor="password">Password</label>
              <a href="" className="card-forgot">
                Forgot
              </a>
            </div>
            <input type="password" required />
          </div>

          <SubmitButton type={"submit"}>Login</SubmitButton>
        </form>
      </div>
      <div className="card-Oauth-container">
        <p>Or log in with:</p>
        <div>Oauth</div>
      </div>

      <div className="card-line"></div>

      <div className="card-signup">
        <p>No account Yet?</p>
        <a href="">Sign Up</a>
      </div>
    </div>
  );
};
