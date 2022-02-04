import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./container/Dashboard/Dashboard";
import Form from "./container/Form/userForm";
import ViewUser from "./container/View/ViewUser";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/viewUser/:id" element={<ViewUser />} />
        <Route exact path="/editUser/:id" element={<Form />} />
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
