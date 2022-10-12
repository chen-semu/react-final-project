// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import Router from "./components/features/Router";
import Header from './components/features/Header/Header'
import Footer from './components/features/Footer/Footer'
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
