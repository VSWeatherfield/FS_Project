import { React } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";
import { Footer, Header } from "./containers";
import {
  Main,
  Scoreboard,
  Profile,
  Olympiads,
  Blog,
  PartOlympiad,
} from "./pages";

import "./App.css";

var latex = require("react-latex");

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/olympiads" element={<Olympiads />}></Route>
          <Route path="/scoreboard" element={<Scoreboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/olympiads/:name" element={<PartOlympiad />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
