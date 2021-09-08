import React from "react";
import { useDispatch } from "react-redux";
import { resetBasket } from "../redux/cart/BasketActions";
import { Button } from "react-bootstrap";

function ResetButton() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetBasket());
  };

  return (
    <Button
      className="d-flex justify-content-center col-12 m-2"
      variant="warning"
      onClick={handleReset}
    >
      Empty out your Basket
    </Button>
  );
}

export default ResetButton;
