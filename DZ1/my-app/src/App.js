import './App.css';
import AboutUs from "./pages/aboutUs/AboutUs";


function App() {
    const product = ["nudi",234543, "12343"];
  return (
    <div className="App">
     <AboutUs text="lorem" product={product}/>
    </div>
  );
}

export default App;
