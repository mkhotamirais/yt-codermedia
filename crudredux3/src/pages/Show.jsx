import { useDispatch, useSelector } from "react-redux";
import { getProducts, productSelectors } from "../features/productSlice";
import { useEffect } from "react";
import Add from "./Add";

const Show = () => {
  const products = useSelector(productSelectors.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products);
  return (
    <div>
      <Add />
    </div>
  );
};

export default Show;
