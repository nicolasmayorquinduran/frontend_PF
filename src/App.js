import { GlobalStyle } from "./globalStyles";
import Products from "./components/products/products";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className = "App">
      <GlobalStyle />
      <h1>Lok APP</h1>
      <Products />
      <ProductDetails />
    </div>
  );
}

export default App;
