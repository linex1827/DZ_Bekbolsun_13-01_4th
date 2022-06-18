import './App.css';
import BlogPage from "./components/blogPage/BlogPage";
import ContactPage from "./components/contactPage/ContactPage";



function App() {
  return (
    <div className="App">
      <BlogPage title="I am a programmer" />
        <ContactPage text="junior developer"/>
    </div>
  );
}

export default App;
