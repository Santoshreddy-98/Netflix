
import "./App.css";
import './normalize.css' 
import Navigation from './Components/Navigation/Navigation';
import Billboard from "./Components/Billboard/Billboard.jsx";
import Titles from "./Components/Titles";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Billboard/>
      <Titles/>
      <Footer/>
      </div>
  );
}

export default App;
