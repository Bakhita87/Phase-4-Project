// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Reviews from "./components/Reviews";
import Restaurant from "./components/Restaurant";
import RestaurantList from "./components/Restaurantlist";
import Recover from "./components/Recover";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover" element={<Recover />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/restaurants/:restaurantId" element={<Restaurant />} />
        <Route path="/restaurantlist" element={<RestaurantList />} />
      </Routes>
    </Router>
  );
}

export default App;
