import React from 'react'

const Context = React.createContext('english')

export class LanguageStore extends React.Component {

    state = { language: 'english' }

    onLanguageChange = language => this.setState({ language })

    render() {
        return(
            // the value is an obj with the state obj plus the onLanguageChange cb func
            <Context.Provider value={ {...this.state, onLanguageChange} }>
                { this.props.children }
            </Context.Provider>
        )
    }

}

export default Context