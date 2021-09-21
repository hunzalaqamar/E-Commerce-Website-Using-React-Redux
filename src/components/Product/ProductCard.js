import React from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

import "./Products.css";
import { addToBasketItem } from "../../redux/cart/BasketActions";
import ButtonComp from "../Common/ButtonComp";

function ProductCard({ productArray }) {
  const dispatch = useDispatch();
  const renderList = productArray.map((product) => {
    const { id, title, image, price, category, description } = product;
    return (
      <div key={id}>
        <div className="card productCard mx-auto col-md-3 col-10 mt-5">
          {" "}
          <Link to={`/product/${id}`}>
            <img alt="productImage" className="img-thumbnail" src={image} />
          </Link>
          <div>
            <div>
              <h5>{title}</h5>
              <p>Price: ${price}</p>
              <p>Category: {category}</p>
              <div className="productDescription mb-3">{description}</div>
              <ButtonComp
                Variant={"outline-primary"}
                Type={"submit"}
                Text={"Add to Cart"}
                OnClickHandler={() => {
                  dispatch(addToBasketItem(product));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="col-11 mx-auto">
      <Row sm={1} md={2} lg={3} xl={4}>
        {renderList}
      </Row>
    </div>
  );
}

export default ProductCard;
