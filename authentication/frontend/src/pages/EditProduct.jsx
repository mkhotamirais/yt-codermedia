import { useDispatch, useSelector } from "react-redux";
import FormEditProduct from "../components/FormEditProduct";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getMe } from "../features/authSlice";

const EditProduct = () => {
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
      <FormEditProduct />
    </Layout>
  );
};

export default EditProduct;
