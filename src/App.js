import React from 'react'
import { Route, BrowserRouter as Router} from "react-router-dom";

import Navbar from './components/navbar/navbar';
import Crear from './components/paginas/Crear';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
    <div className="container">
        <div>
            <br></br>
            <Route exact path="/" component={Crear}></Route>
        </div>
    </div>
    <br></br>
      <Footer/>
    </Router>
  );
}

export default App;

