import React from "react";
import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "@icon/themify-icons/themify-icons.css";
import "./style/index.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
}

export default App;
