import React, { Component } from 'react';
import "./App.css"

export class Different extends Component {
    render() {
        return (
            <div>
                <div class="flexTwo">
                    <div className = "flexLeftTwo">
                        <p className="what"> 
                          What’s different about Manage?
                        </p>
                        <p className ="function">
                        Manage provides all the functionality your team needs, without 
                        the complexity. Our software is tailor-made for modern digital 
                        product teams.
                        </p>
                    </div>

                    <div className="flexRight">
                        <div class ="innerFlex">
                            <div className ="num"><p>01</p></div>
                            <div>
                              <p className="track" >Track company-wide progress</p>
                              <p className="text">
                                 Track company-wide progress
                                 See how your day-to-day tasks fit into the wider vision. Go from 
                                 tracking progress at the milestone level all the way down to the 
                                 smallest of details. Never lose sight of the bigger picture again.
                              </p>
                            </div> 
                        </div>

                        <div class ="innerFlex">
                          <div class="num"><p>02</p></div>
                          <div>
                            <p className="track">
                            Advanced built-in reports.
                            </p>
                            <p className="text">
                            Set internal delivery estimates and track progress toward company 
                            goals. Our customisable dashboard helps you build out the reports 
                            you need to keep key stakeholders informed.
                            </p>
                          </div>   
                        </div>

                        <div class ="innerFlex">
                            <div class="num"><p>03</p></div>
                            <div>
                            <p className="track">
                            Everything you need in one place.
                            </p>
                            <p className="text">
                            Stop jumping from one service to another to communicate, store files, 
                            track tasks and share documents. Manage offers an all-in-one team 
                            productivity solution.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Different
