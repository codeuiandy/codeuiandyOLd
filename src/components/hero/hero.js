import React, { Component } from 'react'
import Img1 from '../Assets/img1.png'
import './hero.css'
export default class hero extends Component {
    render() {
        return (
            <div className="hero-wrap">

                <div className="hero-section">
                     <div className="section-one">
                    <span>Hi I'am</span>
                    <span>Code Ui Andy</span>
                    <span>A Professional Frontend Web Developer</span>
                    <span>I Am Ready To Work With You And Not Just For You .</span>
                    <div className="callToActions">
                    <button>Let's Talk</button>

                    <button>Github</button>
                </div>
                </div>
                <div className="section-two">
                    <img src={Img1} alt=""/>
                </div>

               
                </div>
               

            </div>
        )
    }
}
