
import './css/styles.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PrivateRepo from './pages/PrivateRepo';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/private-repo" element={<PrivateRepo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
