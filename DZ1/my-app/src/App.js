import './App.css';
import AboutUs from "./pages/aboutUs/AboutUs";


function App() {
    const ab = ["nudi",234543, "12343"];
  return (
    <div className="App">
     <AboutUs text="lorem" abprops={ab}/>
    </div>
  );
}

export default App;
