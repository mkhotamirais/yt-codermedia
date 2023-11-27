import { useDispatch, useSelector } from "react-redux";
import FormEditUser from "../components/FormEditUser";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getMe } from "../features/authSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin") {
      navigate("/dashboard");
    }
  }, [isError, navigate, user]);
  return (
    <Layout>
      <FormEditUser />
    </Layout>
  );
};

export default EditUser;
