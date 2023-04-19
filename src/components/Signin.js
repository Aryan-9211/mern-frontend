import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img1 from "../images/img1.png";

const Signin = () => {
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
            <Form action="http://localhost:4000/register" method="POST">
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
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

export default Signin;
