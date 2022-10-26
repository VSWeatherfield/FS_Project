import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer, Header, BlogCreate } from "./containers";
import { Main, Scoreboard, Profile, Olympiads, Blog } from "./pages";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/olympiads" element={<Olympiads />}></Route>
        <Route path="/scoreboard" element={<Scoreboard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/blog/:id" element={<Blog />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
