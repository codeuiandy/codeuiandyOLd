import React, { Component } from 'react'
import About from './index.css'
import AndyImg from '../Assets/about_pic.png'
import ABOUT from '../Assets/ABOUT.png'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
export default class about extends Component {
    render() {
        return (
            <div>

                <div className="about-wrap-sec">
        <div className="aboutImg">
        <img src={ABOUT} alt=""/>
        </div>
        <div className="aboutImg2">
            <img src={AndyImg} alt=""/>
        </div>
  
        <div className="aboutMeText">
            <h1> Who Is Code Ui Andy?</h1>
            <h3>Lorem ipsum dolor sit amet con
                sectetur adipisicing elit. Prov
                ident eligendi error nesciunt de
                serunt culpa, nemo neque tempori
                bus vitae adipisci animi et, enim dolores reprehende
                rit voluptatibus, libero ratione aliquam sint nobis
                .</h3>
                <div className="callToActions aboutCTA">
                    <button className="animateBtn"> More Info</button>

                    <button>Download CV</button>
                </div>
        </div>
                </div>
              
                <div className="powers">
                        <h1>Latest Works</h1>
                    <h3>My Strengths 😜 Html Css Sass JavaScript React.Js</h3>
                   
                    
                    </div>
                <div className="projects">

                     <div className="centerGrid">
                       <div className="projects-grid">
                           
                        <div className="box1"></div>
                        <div className="box2"></div>
                        <div className="box3"></div>
                        <div className="box4"></div>
                        <div className="box5"></div>
                        <div className="box6"></div>
                    </div></div>
                    
                </div>
                
            </div>
        )
    }
}
