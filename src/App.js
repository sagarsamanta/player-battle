import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tournament from "./components/Tournament/Tournament";
import Player from "./components/Player/Player";
import Home from "./components/GameModes/Home";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Signup from "./components/Signup/Signup";
import GameFunctionality from "./components/GameFunctionality/GameFunctionality";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route element={<Main />}>
              <Route path="/gameMode" element={<Home />} />
              <Route path="/tournament" element={<Tournament />} />
              <Route path="/gameFunctionality" element={<GameFunctionality />} />
              <Route path="/Player" element={<Player />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
