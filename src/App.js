import { GlobalStyle } from "./globalStyles";
import Products from "./components/users/products/products";
import ProductsDetail from "./components/users/ProductDetails/ProductDetails";
import StyleRules from "./components/styleRules/Index";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Lok APP</h1>
      <StyleRules />
      <Products />
    </div>
  );
}

export default App;
