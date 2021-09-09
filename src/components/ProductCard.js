import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row } from "react-bootstrap";
import "../styles/Products.css";
import Header from "./Header";
import siteLogo from "../assets/ecomm-logo.png";
import { addToBasketItem } from "../redux/cart/BasketActions";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "./Product";

function ProductCard() {
  const products = useSelector((state) => state.allProducts.products);
  const filter = useSelector((state) => state.allProducts.filtered);
  const dispatch = useDispatch();
  Product();
  console.log(filter)

  if (filter.length < 1) {
    const renderList = products.map((product) => {
      const { id, title, image, price, category, description } = product;
      return (
        <Container style={{ marginTop: "20%" }} key={id}>
          <Card
            className="text-center bg-dark text-white"
            style={{ width: "21rem" }}
          >
            <Link to={`/product/${id}`}>
              <Card.Img variant="top" src={image} />
            </Link>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <div>{description}</div>
                <div>Category: {category}</div>
                <div>Price: ${price}</div>
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(addToBasketItem(product, parseInt(price)));
                }}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Container>
      );
    });

    return (
      <div className="ProductBgImg">
        <Header logo={siteLogo} />
        <Row xs={1} md={2} lg={3} xl={4}>
          {renderList}
        </Row>
      </div>
    );
  } else {
    const renderList = filter.map((fproduct) => {
      const { id, title, image, price, category, description } = fproduct;
      return (
        <Container style={{ marginTop: "20%" }} key={id}>
          <Card
            className="text-center bg-dark text-white"
            style={{ width: "21rem" }}
          >
            <Link to={`/product/${id}`}>
              <Card.Img variant="top" src={image} />
            </Link>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <div>{description}</div>
                <div>Category: {category}</div>
                <div>Price: ${price}</div>
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(addToBasketItem(fproduct, parseInt(price)));
                }}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Container>
      );
    });

    return (
      <div className="ProductBgImg">
        <Header logo={siteLogo} />
        <Row xs={1} md={2} lg={3} xl={4}>
          {renderList}
        </Row>
      </div>
    );
  }
}

export default ProductCard;
