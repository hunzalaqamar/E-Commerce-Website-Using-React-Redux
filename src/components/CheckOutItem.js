import React from "react";
import { removeRow } from "../redux/cart/BasketActions";
import { useDispatch } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import "../styles/CheckOutItem.css"

function CheckoutItem({ products }) {
  const dispatch = useDispatch();
  const handleRemoveRow = () => {
    dispatch(removeRow(products));
  };

  return (
      <ListGroup.Item className="listItems">
        <p>
          {products.title} - ${products.price}
        </p>
        <Button
          variant="outline-danger"
          onClick={handleRemoveRow}
        >
          Remove
        </Button>
      </ListGroup.Item>
  );
}

export default CheckoutItem;
