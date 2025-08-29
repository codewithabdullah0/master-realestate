import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
  <div>
    <BrowserRouter>
        {/* <ScrollToTop></ScrollToTop> */}
        <NavBar></NavBar>

        <Routes>

          <Route path="/" element={<Home></Home>} />

        </Routes>

        <Footer></Footer>
      </BrowserRouter>
  </div>
  );
}

export default App;
