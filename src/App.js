import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Guest from './components/Roles/Guest'



function App() {
  return 
  <div className="App">Lok App
    <Routes>
      <Route exact path="/product" element={<Guest/>}  />
    </Routes>
  </div>;

}

export default App;
