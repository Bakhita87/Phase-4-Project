// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Restaurant from "./pages/Restaurant";
import RestaurantList from "./pages/Restaurantlist";
import Recover from "./components/Recover";
import About from "./pages/About";
import PasswordReset from "./utils/passwordreset";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/reset/:userId/:userPassword"
          component={<PasswordReset />}
        />
        <Route path="/restaurants/:restaurantId" element={<Restaurant />} />
        <Route path="/restaurantlist" element={<RestaurantList />} />
      </Routes>
    </Router>
  );
}

export default App;
