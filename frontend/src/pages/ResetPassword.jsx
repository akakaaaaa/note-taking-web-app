import "./styles/ResetPassword.scss";
import { Form } from "../components/Form";
import { Card } from "../components/Card";

export const ResetPassword = () => {
  return (
    <Card
      header_title="Reset Your Password"
      sub_title="Choose a new password to secure your account."
      footer_title=""
      footer_if=""
      footer_signOrLogin=""
    >
      <Form
        label1_title="New Password"
        label2_title="Confirm New Password"
        forgot="Forgot"
        btn_value="Reset Password"
        page="reset"
      ></Form>
    </Card>
  );
};
