import React from "react";
import { Navbar, Badge, Nav, Row } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Header.css";
import Search from "./Search";

function Header({ logo, productName }) {

  const history = useHistory();

  const signOut = () =>{
    localStorage.clear()
    history.push("/")
  }

  const units = useSelector((state) => state.basket.numberOfUnits);
  return (
    <Row md={1} lg={1}>
        <Navbar className="color-nav" expand="sm" fixed="top" variant="light">
          <Nav className="me-auto"></Nav>
          <Nav className="me-auto">
            <Navbar.Brand href="/product">
              <img
                width="15%"
                className="d-inline-block align-top"
                src={logo}
                alt="logo"
              />
            </Navbar.Brand>
          </Nav>
          <Nav className="me-auto">
            <Navbar.Text>{productName}</Navbar.Text>
          </Nav>
          <Nav className="me-auto">
            <Search />
          </Nav>
          <Nav className="me-auto">
            <NavLink
              className="text-white text-decoration-none pr-3"
              to="/Checkout"
            >
              <i
                className="fa fa-lg fa-shopping-cart"
                style={{ color: "darkcyan" }}
              ></i>
              <Badge pill variant="info">
                {units}
              </Badge>
            </NavLink>
          </Nav>
          <Nav className="me-auto">
              <i className="fa fa-sign-out" onClick={()=>signOut()} style={{ color: "darkcyan" }}>
                {" "}
                Signout
              </i>
          </Nav>
        </Navbar>
    </Row>
  );
}

export default Header;
