import React from "react";
import { useDispatch } from "react-redux";

import { auth } from "../../actions";

const Container = () => {
  const dispatch = useDispatch();
  const handleClick = () =>
    dispatch({
      type: auth.login.start,
      payload: "some",
    });

  console.log(auth.login.error);
  return (
    <div>
      <button onClick={handleClick}>container</button>
    </div>
  );
};

export default Container;
