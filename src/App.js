import { GlobalStyle } from "./globalStyles";
import {Routes, Route} from 'react-router-dom';
import Products from './components/products/products'
import AdminCat from "./components/AdminCategory/AdminCategories";

function App() {
  return (
    <div className="App">
      {/* <GlobalStyle />
      <h1>Lok APP</h1>
      <Products /> */}
      <AdminCat/>
      {/* <Routes>
        <Route exact path="/adminCategories" element={<AdminCat/>} />
      </Routes> */}
    </div>
  );
}

export default App;
