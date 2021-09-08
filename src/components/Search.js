import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { filteredProducts } from "../redux/Actions/actions";

function Search() {
  let flag = false;
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const filter = () => {
    products.map((prod) => {
      if (value !== "") {
        if (prod.title.toLowerCase().includes(value.toLowerCase())) {
          if (prod.title !== "") {
            flag = true;
            dispatch(filteredProducts(prod, prod.id));
            console.log(prod);
          }
        }
      }
      if (flag === false) {
        dispatch(filteredProducts("", ""));
      }
    });
  };

  return (
    <div>
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
          class="fas fa-search"
          onClick={() => {
            filter();
          }}
        ></i>
      </Form>
    </div>
  );
}

export default Search;
