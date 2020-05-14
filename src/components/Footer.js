import React, { Component } from 'react';
import "./App.css"

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="topFooter">
                    <h2>Simplify how your team works today</h2>
                </div>

                <div className="lowFooter">
                    <div className="foot">
                    <h2>manage</h2>
                    <a href="/"><i className="fab fa-youtube"></i></a>
                     <a href="/"><i className="fab fa-facebook"></i></a>
                     <a href="/"><i className="fab fa-twitter"></i></a>
                     <a href="/"><i className="fab fa-pinterest"></i></a>
                     <a href="/"><i className="fab fa-instagram"></i></a>

                    </div>
                    <div className="foot">
                        <p>Home</p>
                        <p>Pricing</p>
                        <p>Products</p>
                        <p>About Us</p>
                    </div>
                    <div className="foot">
                        <p>Careers</p>
                        <p>Community</p>
                        <p>Privacy Policy</p>
                        
                    </div>

                    <div className="details">
                        <input type="text" placeholder="Updates in your inbox"/>
                        <button>Go</button>
                    </div>
                  
                    
                </div>
                
            </div>
        )
    }
}

export default Footer
