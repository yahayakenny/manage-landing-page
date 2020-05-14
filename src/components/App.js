import React, { Component } from 'react';
import NavBar from "./NavBar";
import Products from "./Products";
import Different from "./Different";
// import 'materialize-css/dist/css/materialize.min.css';
import Feedback from "./Feedback";
import Footer from "./Footer";



class App extends Component {
    render() {
        return (
            <div>
               <NavBar/>
               <Products/>
               <Different/>
               <Feedback/>
               <Footer/>
            </div>
        )
    }
}

export default App
