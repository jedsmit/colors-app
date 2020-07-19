import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';

export class Navbar extends Component {
    render() {
        const { level, changeLevel } = this.props;
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href='#'>reactpalette</a>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel} />
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar
