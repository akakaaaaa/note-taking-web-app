import { Card } from "../components/Card";
import "./styles/Register.scss";
import { Form } from "../components/Form";

export const Register = () => {
  return (
    <Card
      header_title="Create Your Account"
      sub_title="Sign up to start organizing your notes and boost your productivity."
      footer_title="Or log in with:"
      footer_if="Already have an account?"
      footer_signOrLogin="Login"
      page="register"
    >
      <Form
        label1_title="Email Adress"
        label2_title="Password"
        forgot=""
        btn_value="Sign up"
      ></Form>
    </Card>
  );
};
