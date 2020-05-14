import React, { Component } from 'react';
import "./App.css"

class NavBar extends Component {
    render() {
        return (
            <div>
                 <div className="topNav" id 
                 ="myTopNav">
                  <nav>
                   
                   <ul>
                   <i class="fa fa-bars" ></i>
                   
                   <li style ={{fontWeight:"900"}}><a href ="/" >Manage</a></li>
                   <li><a class="active" href="/">Home</a></li>
                   <li><a href ="/">Pricing</a></li>
                   <li><a href ="/">Product</a></li>
                   <li><a href ="/">About Us</a></li>
                   <li><a href ="/">Careers</a></li>
                   <a href="javascript:void(0);" class="icon" onclick="myFunction()"/>
                   
                   
                   <a className="start" href ="/">Get Started</a>
                   </ul>
           
               
                </nav>

                 </div>



               
                
            </div>
        )
    }
}

export default NavBar;
