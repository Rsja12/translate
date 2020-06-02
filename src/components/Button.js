import React, { Component } from 'react'

import LanguageContext from '../contexts/LanguageContext'

export class Button extends Component {

    renderSubmit(value) {
        console.log(this) //=> instance of Button class
        return value === 'english' ? 'Submit' : 'Voorleggen'
    }

    render() {
        return (
            <button className='ui button primary'>
                <LanguageContext.Consumer>
                    {/* we have to pass a function and it gets called with whatever value is inside of the pipe */}
                    { (value) => this.renderSubmit(value) }
                </LanguageContext.Consumer>
            </button>
        )
    }
}

export default Button
