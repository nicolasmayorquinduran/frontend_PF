import { GlobalStyle } from "./globalStyles";
import Products from "./components/products/products";
import ProductsDetail from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Lok APP</h1>
      <ProductsDetail />
      {/* <Products /> */}
    </div>
  );
}

export default App;
