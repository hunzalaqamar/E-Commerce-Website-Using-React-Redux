import React from "react";
import { Container, Col, Row, Card, CardGroup } from "react-bootstrap";
import InputField from "./InputField";
import ButtonComp from "./ButtonComp";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/SignupBackgroundImage.css";
import "../styles/LoginBackgroundImage.css";
import signupSideImage from "../assets/signup1.png";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(2, "Minimum 2 Characters")
        .max(30, "Maximum 30 Characters")
        .required("Required!"),
      email: Yup.string().email("Invalid Email Address").required("Required!"),
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
        .min(9, "Minimum 9 Characters")
        .max(13, "Maximum 13 Characters")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 Characters")
        .required("Required!"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not match")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      signup(values);
    },
  });

  const signup = ({ fullname, email, phone, password, confirmpassword }) => {
    axios
      .post("http://localhost:3001/users", {
        id: Math.floor(Math.random()*100),
        fullName: fullname,
        emailAddress: email,
        phoneNo: phone,
        password: password,
        confirmPassword: confirmpassword,
      })
      .then((response) => {
        alert("User Data Added Successfully");
      });
  };

  return (
    <div className="bgcolor">
      <Container style={{ height: "100vh" }}>
        <Row
          sm={1}
          md={2}
          lg={2}
          className="w-100 align-items-center d-flex justify-content-center h-100"
        >
          <Col md="auto">
            <CardGroup>
              <Card body>
                <Card.Title>
                  <h3>Create an account</h3>
                </Card.Title>
                <Card.Text>
                  And access the richest collection of products
                </Card.Text>
                <div>
                  <InputField
                    ClassName={"mb-3"}
                    Id={"fullname"}
                    Type={"text"}
                    PlaceHolder={"Enter Full Name"}
                    ChangeHandler={formik.handleChange}
                  />
                  {formik.errors.fullname && formik.touched.fullname && (
                    <p style={{ backgroundColor: "red", color: "white" }}>
                      {formik.errors.email}
                    </p>
                  )}
                </div>
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
                    Id={"phone"}
                    Type={"text"}
                    PlaceHolder={"Enter Phone #"}
                    ChangeHandler={formik.handleChange}
                  />
                  {formik.errors.phone && formik.touched.phone && (
                    <p style={{ backgroundColor: "red", color: "white" }}>
                      {formik.errors.phone}
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
                  {formik.errors.password && formik.touched.password && (
                    <p style={{ backgroundColor: "red", color: "white" }}>
                      {formik.errors.password}
                    </p>
                  )}
                </div>
                <div>
                  <InputField
                    ClassName={"mb-3"}
                    Id={"confirmpassword"}
                    Type={"password"}
                    PlaceHolder={"Confirm Password"}
                    ChangeHandler={formik.handleChange}
                  />
                  {formik.errors.confirmpassword && formik.touched.confirmpassword && (
                    <p style={{ backgroundColor: "red", color: "white" }}>
                      {formik.errors.confirmpassword}
                    </p>
                  )}
                </div>
                <ButtonComp
                  Variant={"primary"}
                  Type={"submit"}
                  Text={"Sign me up"}
                  loginHandler={formik.handleSubmit}
                />{" "}
                <Link to="/" className="btn btn-primary">
                  Back to Login
                </Link>
              </Card>
              <Card>
                <Card.Img
                  className="h-100 w-100"
                  src={signupSideImage}
                ></Card.Img>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
