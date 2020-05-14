import React, { Component } from 'react'

import "./App.css"
import ali from "./images/ali.png"
import anisha from "./images/anisha.png"
import richard from "./images/richard.png"

class Feedback extends Component {
    render() {
        return (
            <div>
                <h1 style={{marginLeft:"130px", fontWeight: 800 , marginTop: "50px"}}>What they've said</h1>
                <div className="flexfeedback">
                    
                    <div className="feedback1">
                        <img src ={anisha} className="feed"/>
                        <h6>Anisha Li</h6>
                        <h6>“Manage has supercharged our team’s workflow. The ability to maintain 
                        visibility on larger milestones at all times keeps everyone motivated.”</h6>
                    </div>
                    <div className="feedback">
                        <img src ={ali} className="feed"/>
                        <h6>Ali Bravo</h6>
                        <h6> “We have been able to cancel so many other subscriptions since using 
                        Manage. There is no more cross-channel confusion and everyone is much 
                        more focused.”</h6>
                    </div>
                    <div className="feedback">
                        <img src ={richard} className="feed"/>
                        <h6>Richard</h6>
                        <h6>“Manage has supercharged our team’s workflow. The ability to maintain 
                        visibility on larger milestones at all times keeps everyone motivated.”</h6>
                    </div>


                </div>
                
                
            </div>


        )


    }
}

export default Feedback
