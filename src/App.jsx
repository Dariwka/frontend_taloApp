import React from "react";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import TalotPage from "./pages/TalotPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/talot" element={<TalotPage />} />
        <Route path="/" element={user ? <Navigate to="/talot" /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
