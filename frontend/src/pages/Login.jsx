import Card from "../components/Card";
import { SubmitButton } from "../components/SubmitButton";
import "./styles/Login.scss";

export const Login = () => {
  return (
    <Card title="Welcome to Note" subtitle="Please log in to continue">
      <form>
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

        <SubmitButton type="submit">Login</SubmitButton>
      </form>

      <div className="card-Oauth-container">
        <p>Or log in with:</p>
        <div>Oauth</div>
      </div>

      <div className="card-signup">
        <p>No account Yet?</p>
        <a href="">Sign Up</a>
      </div>
    </Card>
  );
};
