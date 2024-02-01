import React, { Component } from 'react'

export default class Navbar extends Component {
    
    render() {
        let navbarStyle = { backgroundColor:'#e3f2fd'}
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
                    <a className="navbar-brand" href="/">NewsApp</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        )
    }
}
