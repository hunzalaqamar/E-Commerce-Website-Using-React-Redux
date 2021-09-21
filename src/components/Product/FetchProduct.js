import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setProducts } from "../../redux/Actions/actions";

export const FetchProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(setProducts(response.data));
    };
    fetchProducts();
  }, [dispatch]);
};
