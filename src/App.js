import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./components/Main";
import SideBar from "./components/Sidebar";

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const switchToLogin = () => {
    setShowLogin(true);
  };

  const switchToSignup = () => {
    setShowLogin(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          showLogin ? (
            <Login switchToSignup={switchToSignup} />
          ) : (
            <Signup switchToLogin={switchToLogin} />
          )
        }
      />
      <Route
        path="/signup"
        element={<Signup switchToLogin={switchToLogin} />}
      />
      <Route path="/sidebar" element={<SideBar />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default App;
