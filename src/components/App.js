import React, { Component } from 'react'

import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'

export class App extends Component {

    state = {
        language: 'english'
    }

    onLanguageChange = language => {
        this.setState({
            language
        })
    }

    render() {
        return (
            <div className='ui container'>

                <div>
                    Select a Language:
                    <i 
                        className='flag us' 
                        onClick={ () => this.onLanguageChange('english') }
                    />
                    <i 
                        className='flag nl' 
                        onClick={ () => this.onLanguageChange('dutch') }
                    />
                </div>

                <LanguageContext.Provider value={ this.state.language }>
                    <UserCreate />
                </LanguageContext.Provider>
                
            </div>
        )
    }
}

export default App
