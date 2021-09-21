import React from "react";
import { Navbar, Badge, Nav, Container } from "react-bootstrap";
import { useHistory, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.css";
import Search from "../Common/Search";

function Header({ ProductName }) {
  const history = useHistory();

  const signOut = () => {
    localStorage.clear();
    history.push("/");
  };

  const units = useSelector((state) => state.basket.numberOfUnits);
  if (localStorage.getItem("auth") === "true") {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/product">{ProductName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Search />
            </Nav>

            <Nav>
              <NavLink className="text-white text-decoration-none" to="/Cart">
                <i className="fa fa-lg fa-shopping-cart mt-2 pt-1 bg-dark text-info"></i>
                <Badge pill variant="info">
                  {units}
                </Badge>
              </NavLink>
              <Nav.Link>
                <i
                  className="fa fa-sign-out bg-dark text-secondary"
                  onClick={() => signOut()}
                >
                  Signout
                </i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
