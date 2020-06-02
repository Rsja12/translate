import React, { Component } from 'react'

import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

export class Button extends Component {

    renderSubmit(value) {
        console.log(this) //=> instance of Button class
        return value === 'english' ? 'Submit' : 'Voorleggen'
    }

    renderButton( color ) {
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {/* we have to pass a function and it gets called with whatever value is inside of the pipe */}
                    { (value) => this.renderSubmit(value) }
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                { (color) => this.renderButton(color) }
            </ColorContext.Consumer>
        )
    }
}

export default Button
