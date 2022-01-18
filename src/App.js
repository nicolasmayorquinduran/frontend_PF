import { GlobalStyle } from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import Guest from "./components/Roles/Guest";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Lok APP</h1>
      {/* Poner aquí los compenentes que se van a enrutar */}
    </div>
  );
}

export default App;
