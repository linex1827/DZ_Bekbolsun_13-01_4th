import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import AboutPage from "./pages/aboutPage/AboutPage";
import {Routes} from "react-router";
import MainPage from "./pages/mainPage/mainPage";
import PortfolioPage from "./pages/portfolioPage/portfolioPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/portfolio" element={<PortfolioPage/>}/>
        <Route/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
