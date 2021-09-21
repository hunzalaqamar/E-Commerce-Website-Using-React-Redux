import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { filteredProducts } from "../../redux/Actions/actions";
import InputField from "../Common/InputField";
import ButtonComp from "../Common/ButtonComp";

function Search() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.allProducts.products);

  const filter = () => {
    if (value !== "") {
      history.push("/product");
      const searchedProducts = [];
      products.map((prod) => {
        if (prod.title.toLowerCase().includes(value.toLowerCase())) {
          if (prod.title !== "") {
            searchedProducts.push(prod);
          }
        }
        return null;
      });
      dispatch(filteredProducts(searchedProducts));
    }
  };

  return (
    <div className="d-flex">
      <div>
        <InputField
          Id={"search"}
          Type={"search"}
          PlaceHolder={"Search For..."}
          ChangeHandler={(event) => {
            setValue(event.target.value);
          }}
        />
      </div>
      <div>
        <ButtonComp
          Variant={"outline-primary"}
          Type={"submit"}
          Text={"Search"}
          OnClickHandler={() => {
            filter();
          }}
        />
      </div>
    </div>
  );
}

export default Search;
