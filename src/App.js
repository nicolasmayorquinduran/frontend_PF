import { GlobalStyle } from "./globalStyles";
import Products from "./components/products/products";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Lok APP</h1>
      <Products />
    </div>
  );
}

export default App;
