import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const LogMeOut = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const responseData = await res.json();

      if (responseData) {
        dispatch({ type: "USER", payload: false });
        history.push("/signin");
      } else {
        window.alert("data not found");
      }
    } catch (err) {
      console.log(err);
      history.push("/signin");
    }
  };

  useEffect(() => {
    LogMeOut();
  }, []);

  return <div></div>;
};

export default Logout;
