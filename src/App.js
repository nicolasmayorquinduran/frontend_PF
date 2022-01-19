import React from "react";
import { GlobalStyle } from "./globalStyles";
import NavBar from "./components/navBar/navBar.jsx"
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <h1>Lok APP</h1>
      {/* Poner aquí los compenentes que se van a enrutar */}
    </div>
  );
}

export default App;
