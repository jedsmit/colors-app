import React, { Component } from 'react'
import CcolorBox, { ColorBox } from './ColorBox';
import './Palette.css';

export class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ));
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-colors">{colorBoxes}</div>
                {/* Footer eventually */}
            </div>
        )
    }
}

export default Palette
