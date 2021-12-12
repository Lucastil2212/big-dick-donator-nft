import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Home />
      </Container>
    </div>
  );
}

export default App;
