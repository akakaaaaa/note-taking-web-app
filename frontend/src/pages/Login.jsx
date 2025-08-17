// Login.jsx
import { Card } from "../components/Card";
import "./styles/Login.scss";
import { Form } from "../components/Form";

export const Login = () => {
  return (
    <div className="login-page">
      <Card
        header_title="Welcome to Note"
        sub_title="Please log in to continue"
        footer_title="Or log in with:"
        footer_if="No account yet?"
        footer_signOrLogin="Sign Up"
      >
        <Form
          label1_title="Email Address"
          label2_title="Password"
          forgot="Forgot"
          btn_value="Login"
        ></Form>
      </Card>
    </div>
  );
};
