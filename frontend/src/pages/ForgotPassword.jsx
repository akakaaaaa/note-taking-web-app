import "./styles/ForgotPassword.scss";
import { Card } from "../components/Card";
import { Form } from "../components/Form";

export const ForgotPassword = () => {
  return (
    <Card
      header_title="Forgotten your password?"
      sub_title="Enter your email below, and we’ll send you a link to reset it."
      footer_title="Or log in with:"
      footer_if="Already have an account?"
      footer_signOrLogin=""
      page="forgotPassword"
    >
      <Form
        label1_title="Email Adress"
        label2_title="Password"
        page="forgotPassword"
        btn_value="Send Reset Link"
      ></Form>
    </Card>
  );
};
