import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img1 from "../images/img1.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      window.alert("Login Successful");
      history.push("/");
    }
  };
  return (
    <>
      <section className="signup">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            width: "80vw",
            margin: "40px auto auto auto",
            boxShadow: "2px 2px 8px black",
            borderRadius: "25px",
          }}
        >
          <div style={{ width: "25%" }}>
            <h1>LOGIN</h1>
            <Form method="POST">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={submitUser}>
                Submit
              </Button>
            </Form>
          </div>
          <div>
            <img
              style={{ marginLeft: "100px", height: "350px" }}
              src={img1}
              alt="image description"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
