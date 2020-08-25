import React, { Component } from 'react'
import Logo from '../Assets/logo.png'
import './index.css'
export default class navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar-list">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
}
