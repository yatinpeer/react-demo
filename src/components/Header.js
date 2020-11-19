import React, { Component } from 'react'
import { BrowserRouter , NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'


class Header extends Component {
    render() {
        return (
            
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Peers</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact activeClassName="navbar__link--active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="navbar__link--active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="navbar__link--active" to="/listing">Listing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="navbar__link--active" to="/fadePage">Fade</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="navbar__link--active" to="/accordion">Accordion</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="navbar__link--active" to="/fetchdata">Fetchdata</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="navbar__link--active" to="/dragDrop">Drag & Drop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="navbar__link--active" to="/tabs">Tabs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="navbar__link--active" to="/axios-page">Axios</NavLink>
                            </li>

                        </ul>
                        {/* <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} /> */}

                    </div>
                </nav>
            
        )
    }
}

export default Header