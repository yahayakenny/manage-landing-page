import React, { Component } from 'react'
import "./App.css"
import illustration from "./images/illustration.svg"


 class Products extends Component {
    render() {
        return (
            <div>
                <div className="flexOne" >
                    <div className="flexLeft">
                       <p className="bring">Bring  everyone     together to build better products.
                        </p>
                        <p className="manage">
                         Manage makes it simple for software teams to plan day-to-day 
                         tasks while keeping the larger team goals in view.
                        </p>
                        <p className="started">
                        Get Started
                        </p>
                    </div>

                    <div className ="product">
                        <img src={illustration} />


                    </div>

                </div>
                
            </div>
        )
    }
}

export default Products
