import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [data, setData] = useState("");

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(responseData.message);
      } else {
        setData(responseData);
      }
    } catch (err) {
      console.log(err);
      history.push("/signin");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "15%" }}>
      <h3>WELCOME ABOUT</h3>
      <h1>NAME: {data.name}</h1>
      <h1>EMAIL: {data.email}</h1>
      <h1>PHONE: {data.phone}</h1>
    </div>
  );
};

export default About;
