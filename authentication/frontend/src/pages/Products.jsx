import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/ProductList";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getMe } from "../features/authSlice";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default Products;
