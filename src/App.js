import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/home';
import Compare from './pages/compare';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sorting-algorithms" element ={<Home />}/>
        <Route path="/sorting-algorithms/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
