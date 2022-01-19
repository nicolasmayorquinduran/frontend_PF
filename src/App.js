import { GlobalStyle } from "./globalStyles";
import ProductsDetail from "./components/ProductDetails/ProductDetails";

import SearchBar from './components/SearchBar/SearchBar.jsx';
import Products from './components/products/products.jsx';



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Lok APP</h1>
      <SearchBar />
      <Products />
    </div>
  );
}

export default App;
