// import { useSelector } from "react-redux";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "./roleSlice";

const Welcome = () => {
  const { user } = useSelector((state) => state.roles);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError } = useSelector((state) => state.roles);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/rolesProducts/login");
    }
  }, [isError, navigate]);
  return (
    <div>
      <h1 className="title">dashboard</h1>
      <h2 className="subtitle">
        Welcome Back <strong>{user && user.name}</strong>
      </h2>
    </div>
  );
};

export default Welcome;
