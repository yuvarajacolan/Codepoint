import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import { useRoutes } from "react-router-dom";
import { getRoutes } from "../layout/routes";

function App() {
  // const userRole =
  //   typeof window !== "undefined"
  //     ? sessionStorage.getItem("accessToken")
  //     : null;
  // const routeType = userRole !== null ? 1 : 0;
  const test = useRoutes(getRoutes(1));
  
  return (
    <>
      {test}
    </>
  );
}

export default App;
