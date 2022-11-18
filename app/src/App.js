import { React } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";
import { ComposeModalContainer, EntryModalContainer } from "./components";
import { Footer, Header } from "./containers";
import { Main, Scoreboard, Profile, Blog } from "./pages";
import { Olympiads, PartOlympiad, OlympProblems } from "./pages";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EntryModalContainer />
        <Header />
        <ComposeModalContainer />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/olympiads" element={<Olympiads />}></Route>
          <Route path="/scoreboard" element={<Scoreboard />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/olympiads/:id" element={<PartOlympiad />}></Route>
          <Route
            path="/olympiads/:olympId/year/:yearId"
            element={<OlympProblems />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
