import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img1 from "../images/img1.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "student",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
    } else {
      window.alert("Registration Successful");
      history.push("/signin");
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
            <h1>REGISTER</h1>
            <Form>
              <Form.Group method="POST" className="mb-3" controlId="formName">
                <Form.Label>Full Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>Contact Number:</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
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

export default Signup;
