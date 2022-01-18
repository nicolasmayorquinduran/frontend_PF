import React from 'react';
import { GlobalStyle } from "./globalStyles";
import { Provider } from 'react-redux';
import DetailsProduct from "./components/DetailsProduct/DetailsProduct.jsx";

function App() {
  return (
    <Provider>
      
      <div className = "App">
      
        <GlobalStyle />
        
        {/* Poner aquí los compenentes que se van a enrutar */}
        <h1>{ DetailsProduct }</h1>
      
      </div>

    </Provider>
  );
}

export default App;
