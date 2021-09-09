import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { filteredProducts } from "../redux/Actions/actions";

function Search() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const filter = () => {
    const searchedProducts = [];
    products.map((prod) => {
      if (value !== "") {
        if (prod.title.toLowerCase().includes(value.toLowerCase())) {
          if (prod.title !== "") {
            searchedProducts.push(prod)
          }
        }
      }
      return null;
    });
    dispatch(filteredProducts(searchedProducts));
  };

  return (
      <Form>
        <Form.Group className="mb-2" controlId="search">
          <Form.Control
            type="search"
            placeholder="Search For..."
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
        </Form.Group>
        <i
          className="fas fa-search"
          onClick={() => {
            filter();
          }}
        ></i>
      </Form>
  );
}

export default Search;
