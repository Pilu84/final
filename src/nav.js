import React from "react";
import { Link } from "react-router-dom";


export default class Nav extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top own-shadow">
                <Link to= "/"><p className="navbar-brand">
                    <img src="logo.jpg" width="60" height="60" className="d-inline-block align-center" alt="" />Aquarium Design
                </p></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="row collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <Link to = "/" ><p className="nav-link">Home</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/2" ><p className="nav-link" href="/2">Second</p></Link>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}