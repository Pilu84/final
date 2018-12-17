import React from "react";

export default class Nav extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top own-shadow">
                <a className="navbar-brand" href="#">
                    <img src="logo.jpg" width="60" height="60" className="d-inline-block align-center" alt="" />Aquarium Design
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="row collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}
