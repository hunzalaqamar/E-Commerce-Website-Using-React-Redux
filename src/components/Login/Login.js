import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Container, Card, CardGroup } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

import loginSideImg from "../../assets/login4.png";
import ButtonComp from "../Common/ButtonComp";
import InputField from "../Common/InputField";
import "./Login.css";

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
            emailAddress: email,
            password: password,
          },
        })
        .then((response) => {
          if (response.data.length > 0) {
            localStorage.setItem("auth", "true");
            if (localStorage.getItem("auth") === "true") {
              history.push("/product");
            }
          } else {
            alert("Invalid Username or Password");
            history.push("/");
          }
        });
    }
  };
  return (
    <div className="bgcolor">
      <Container className="containerAdjustment" fluid>
        <Row
          md={1}
          lg={2}
          className="w-100 align-items-center d-flex justify-content-center h-100"
        >
          <Col>
            <CardGroup>
              <Card className="loginSideImg">
                <img
                  className="h-100 w-100"
                  alt="loginSideImg"
                  src={loginSideImg}
                />
              </Card>
              <Card body>
                <Container className="mt-5">
                  <Card.Title>
                    <h3>Welcome To HQ</h3>
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
                  <div className="d-grid gap-2">
                    <ButtonComp
                      Variant={"outline-primary"}
                      Type={"submit"}
                      Text={"Login"}
                      OnClickHandler={formik.handleSubmit}
                    />
                    <Link to="/signup" className="btn btn-outline-primary">
                      Signup
                    </Link>
                  </div>
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
