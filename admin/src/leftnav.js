import React from "react";
import { Link } from "react-router-dom";

export default class LeftNav extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <nav className="col-md-2 d-none d-md-block bg-light sidebar shadow">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to = "/">
                                <span data-feather="home"></span>
                                <p className = "nav-link">Dashboard</p>
                            </Link>
                        </li>
                        <Link to = "/pages">
                            <li className="nav-item"><p className="nav-link">Pages</p></li>
                        </Link>
                        <Link to="/media">
                            <li className="nav-item"><p className="nav-link">Media</p></li>
                        </Link>

                        <Link to="/gallery">
                            <li className="nav-item"><p className="nav-link">Gallery</p></li>
                        </Link>

                    </ul>

                </div>
            </nav>
        );
    }
}
