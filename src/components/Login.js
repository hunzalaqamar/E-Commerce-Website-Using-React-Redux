import React from "react";
import axios from "axios";
import { Row, Col, Container, Card, CardGroup } from "react-bootstrap";
import loginSideImg from "../assets/login4.png";
import { Link, useHistory } from "react-router-dom";
import Button from "./ButtonComp";
import InputField from "./InputField";
import "../styles/LoginBackgroundImage.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string().required("Required!"),
    }),
    onSubmit: (values) => {
      login(values);
    },
  });

  const history = useHistory();

  const login = ({ email, password }) => {
    if (email === null && password === null) {
      history.push("/");
    } else {
      axios
        .get("http://localhost:3001/users", {
          params: {
            Email: email,
            Password: password,
          },
        })
        .then((response) => {
          if (response.data.length > 0) {
            localStorage.setItem("auth", "true");
            if (localStorage.getItem("auth") === "true") {
              history.push("/product");
            }
          } else {
            alert("Invalid Email or Password");
            history.push("/");
          }
        });
    }
  };
  return (
    <div className="bgcolor">
      <Container style={{ height: "100vh" }} fluid>
        <Row
          sm={1}
          md={2}
          lg={2}
          className="w-100 align-items-center d-flex justify-content-center h-100"
        >
          <Col md="auto">
            <CardGroup>
              <Card>
                <Card.Img className="h-100 w-100" src={loginSideImg}></Card.Img>
              </Card>
              <Card body>
                <Container className="mt-5">
                  <Card.Title>
                    <h3>Welcome to HQ</h3>
                  </Card.Title>
                  <Card.Text>Shop Smarter Today</Card.Text>
                  <div>
                    <InputField
                      ClassName={"mb-3"}
                      Id={"email"}
                      Type={"email"}
                      PlaceHolder={"Enter Email Address"}
                      ChangeHandler={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p style={{ backgroundColor: "red", color: "white" }}>
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <InputField
                      ClassName={"mb-3"}
                      Id={"password"}
                      Type={"password"}
                      PlaceHolder={"Enter Password"}
                      ChangeHandler={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p style={{ backgroundColor: "red", color: "white" }}>
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                  <Button
                    Variant={"primary"}
                    Type={"submit"}
                    Text={"Login"}
                    loginHandler={formik.handleSubmit}
                  />{" "}
                  <Link to="/signup" className="btn btn-primary">
                    Sign up
                  </Link>
                </Container>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
