import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import "../styles.css";
function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email === "" || password === "") {
      return;
    }
    navigate("/profile", { state: { email: email } });
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit} className="form">
        <Form.Group size="lg" controlId="email">
          <label>Email</label>

          <input
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        {/* <Link to="/profile">Login</Link> */}
      </Form>
    </div>
  );
}
export default Login;
