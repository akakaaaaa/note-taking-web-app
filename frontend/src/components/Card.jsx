import "./styles/Card.scss";
import logo from "../assets/images/logo.svg";
import GoogleOAuth from "./GoogleOauth";

export const Card = ({
  children,
  header_title,
  sub_title,
  footer_title,
  footer_if,
  footer_signOrLogin,
  page,
}) => {
  return (
    <div className="card">
      <div className="card-logo-container">
        <img src={logo} alt="Logo" />
      </div>

      <div className="card-header-container">
        <p className="card-header">{header_title}</p>
        <p className="card-p">{sub_title}</p>
      </div>

      <div className="card-form-container">{children}</div>

      {page === "forgotPassword" || "reset" ? null : (
        <>
          <div className="card-Oauth-container">
            <p>{footer_title}</p>
            <GoogleOAuth />
          </div>

          <div className="card-line"></div>

          <div className="card-signup">
            <p>{footer_if}</p>
            <a href="">{footer_signOrLogin}</a>
          </div>
        </>
      )}
    </div>
  );
};
