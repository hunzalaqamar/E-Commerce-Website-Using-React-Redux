import React from "react";
import { useSelector } from "react-redux";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import Alerts from "../components/Alerts";
import ResetButton from "./ResetButton";
import CheckoutItem from "../components/CheckOutItem";
import Header from "./Header";
import siteLogo from "../assets/ecomm-logo.png";
import "../styles/Products.css";


function Checkout() {
  const completeOrder = useSelector((state) => state.basket);
  const emptyBasketText = "No items are in the basket yet ...";

  return (
    <div className="ProductBgImg">
    <Container style={{ height: "100vh"}}>
      <Row
        sm={1}
        md={2}
        lg={2}
        className="w-100 align-items-center d-flex justify-content-center h-100"
      >
        <Col md="auto">
          <Header logo={siteLogo} />
          <Card className="text-center">
            <Card.Header>Cart</Card.Header>
            <Card.Body>
              {completeOrder.numberOfUnits === 0 ? (
                <Alerts mess={emptyBasketText} />
              ) : (
                <ListGroup variant="flush">
                  <ListGroup.Item variant="light">
                    Sum of items: {completeOrder.totalSum}
                  </ListGroup.Item>
                  {completeOrder.unitArray.map((p) => (
                    <CheckoutItem products={p} />
                  ))}
                  <ResetButton />
                </ListGroup>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Checkout;
