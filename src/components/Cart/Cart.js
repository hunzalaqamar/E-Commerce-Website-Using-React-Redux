import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";

import CheckoutItem from "./CheckOutItem";
import ButtonComp from "../Common/ButtonComp";
import { resetBasket } from "../../redux/cart/BasketActions";

function Cart() {
  const dispatch = useDispatch();
  const completeOrder = useSelector((state) => state.basket);
  const emptyBasketText = "No items are in the basket yet ...";
  const history = useHistory();

  return (
    <Container className="h-100 mx-auto my-auto mt-5 pt-5">
      <Row
        sm={1}
        md={2}
        lg={2}
        className="w-100 align-items-center d-flex justify-content-center h-100"
      >
        <Col>
          <Card className="text-center">
            <Card.Header>Cart</Card.Header>
            <Card.Body>
              {completeOrder.numberOfUnits === 0 ? (
                <h5>{emptyBasketText}</h5>
              ) : (
                <ListGroup variant="flush">
                  <ListGroup.Item variant="light">
                    Sum of items: ${completeOrder.totalSum}
                  </ListGroup.Item>
                  {completeOrder.unitArray.map((p) => (
                    <CheckoutItem products={p} key={p.id} />
                  ))}
                  <ButtonComp
                    Variant={"outline-danger"}
                    Type={"submit"}
                    Text={"Empty Your Whole Cart"}
                    OnClickHandler={() => dispatch(resetBasket())}
                  />{" "}
                </ListGroup>
              )}
            </Card.Body>
            <ButtonComp
              Variant={"outline-primary"}
              Type={"submit"}
              Text={"Continue Shopping"}
              OnClickHandler={() => history.push("/product")}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
